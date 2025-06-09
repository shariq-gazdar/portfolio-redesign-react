import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Admin from "./routes/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
