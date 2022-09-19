import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import User from "./components/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="user/*" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
