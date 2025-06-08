import React, { useEffect } from "react";
import { gapi } from "gapi-script";

const CLIENT_ID =
  "228191253372-tkqi2paem8idmpdk10u2pfv4gjch3481.apps.googleusercontent.com";
const API_KEY = "AIzaSyAIxEqW5gFeiCTKEYO9ITdAXaFdLlQbJG8";
const SPREADSHEET_ID = "1DQRvnmazqWpxkm0ZrbNqlNJSxhFhgvhrw45wam3JEwM";
const RANGE = "Sheet1";
const SCOPES = "https://www.googleapis.com/auth/spreadsheets";

function AdminPage() {
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

    gapi.load("client:auth2", start); // ✅ Proper order
  }, []);

  const AddProject = () => {
    const params = {
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
      valueInputOption: "USER_ENTERED",
    };

    const name = document.getElementById("Name").value;
    const description = document.getElementById("Description").value;
    const url = document.getElementById("Url").value;

    const valueRangeBody = {
      values: [[name, description, url]],
    };

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
      />
      <input
        type="text"
        id="Description"
        placeholder="Description"
        className="py-2 px-5 my-2"
      />
      <input
        type="text"
        id="Url"
        placeholder="URL"
        className="py-2 px-5 my-2"
      />
      <input type="file" id="Pic" className="my-2 border w-[10%]" />
      <button className="bg-orange-500 text-white p-2" onClick={AddProject}>
        Submit
      </button>
    </div>
  );
}

export default AdminPage;
