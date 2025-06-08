import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ login, setLoginState }) {
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const ogName = import.meta.env.VITE_NAME;
  const ogPass = import.meta.env.VITE_PASSWORD;
  const toggleType = () => {
    setType((prev) => (prev === "password" ? "text" : "password"));
  };
  const authenticate = () => {
    if (!username || !password) {
      return;
    }

    if (ogName == username && ogPass == password) {
      sessionStorage.setItem("login", true);
      setLoginState(true);
    } else {
      alert("You are not an admin!");
      navigate("/");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center my-[35vh]">
      <h1 className="text-white text-2xl font-black">Admin Login</h1>
      <input
        type="text"
        name="username"
        className="py-2 px-5 my-2 rounded-xl"
        placeholder="Name"
        required
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <div className="relative">
        <input
          type={type}
          name="password"
          placeholder="Password"
          className="py-2 px-5 my-2 rounded-xl "
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div
          className="absolute right-3 top-4 cursor-pointer"
          onClick={toggleType}
        >
          {type !== "password" ? <div>🙈</div> : <div>👀</div>}
        </div>
      </div>
      <button
        onClick={authenticate}
        className="bg-orange-500 text-white p-2 rounded-lg my-2"
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
