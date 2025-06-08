import React, { useState } from "react";
import AdminPage from "../components/AdminPage";
import Login from "../components/Login";

function Admin() {
  const [login, setLogin] = useState(false);
  return <div>{login ? <AdminPage /> : <Login setLogin={setLogin} />}</div>;
}

export default Admin;
