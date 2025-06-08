import React, { useEffect, useState } from "react";
import AdminPage from "../components/AdminPage";
import Login from "../components/Login";

function Admin() {
  const login = sessionStorage.getItem("login");
  const [loginState, setLoginState] = useState(false);
  useEffect(() => {
    if (!login) {
      sessionStorage.setItem("login", false);
    }
    if (login == "true") {
      setLoginState(true);
    } else {
      setLoginState(false);
    }
  }, [login]);
  return (
    <div>
      {loginState ? (
        <AdminPage />
      ) : (
        <Login setLoginState={setLoginState} login={login} />
      )}
    </div>
  );
}

export default Admin;
