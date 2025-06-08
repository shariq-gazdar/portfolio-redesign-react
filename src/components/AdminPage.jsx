import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import imageCompression from "browser-image-compression";
const CLIENT_ID =
  "228191253372-tkqi2paem8idmpdk10u2pfv4gjch3481.apps.googleusercontent.com";
const API_KEY = "AIzaSyAIxEqW5gFeiCTKEYO9ITdAXaFdLlQbJG8";
const SPREADSHEET_ID = "1DQRvnmazqWpxkm0ZrbNqlNJSxhFhgvhrw45wam3JEwM";
const RANGE = "Sheet1!A:D";
const SCOPES = "https://www.googleapis.com/auth/spreadsheets";
function AdminPage() {
  const IMGBB_API_KEY = import.meta.env.VITE_API_IMGBB;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [picUrl, setPicUrl] = useState(null);
  useEffect(() => {
    function start() {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          scope: SCOPES,
          discoveryDocs: [
            "https://sheets.googleapis.com/$discovery/rest?version=v4",
          ],
        })
        .then(() => {
          // Sign in the user
          gapi.auth2.getAuthInstance().signIn({
            scope: "https://www.googleapis.com/auth/spreadsheets",
          });
        });
    }

    gapi.load("client:auth2", start);
  }, []);
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
      initialQuality: 0.7,
    };

    try {
      const compressedFile = await imageCompression(file, options);

      const base64 = await convertToBase64(compressedFile);

      const formData = new FormData();
      formData.append("key", IMGBB_API_KEY);
      formData.append("image", base64.replace(/^data:image\/\w+;base64,/, ""));

      const response = await fetch("https://api.imgbb.com/1/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setPicUrl(data.data.url);
        alert("Image uploaded successfully!");
      } else {
        alert("Image upload failed: " + data.error.message);
      }
    } catch (error) {
      console.error("Error during image upload:", error);
    }
  };
  const convertToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const AddProject = () => {
    const params = {
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
      valueInputOption: "USER_ENTERED",
    };

    const valueRangeBody = {
      values: [[name, description, picUrl, url]],
    };
    if (!name || !description || !url || !picUrl) {
      alert("Fill all fields please");
      return;
    }

    gapi.client.sheets.spreadsheets.values
      .append(params, valueRangeBody)
      .then((response) => {
        console.log("Success", response);
        alert("Project added to sheet!");
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <h1 className="text-white">Add a New Project</h1>
      <input
        type="text"
        id="Name"
        placeholder="Name"
        className="py-2 px-5 my-2"
        onChange={(e) => {
          setName(e.target.value);
        }}
        required
      />
      <input
        type="text"
        id="Description"
        placeholder="Description"
        className="py-2 px-5 my-2"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        required
      />
      <input
        type="text"
        id="Url"
        placeholder="URL"
        className="py-2 px-5 my-2"
        onChange={(e) => {
          setUrl(e.target.value);
        }}
        required
      />
      <input
        type="file"
        id="Pic"
        className="my-2 border w-[10%]"
        onChange={(e) => {
          handleFileChange(e);
        }}
      />
      <button className="bg-orange-500 text-white p-2" onClick={AddProject}>
        Submit
      </button>
    </div>
  );
}

export default AdminPage;
