import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPage from "./components/UserPage/UserPage";
import Home from "./components/Home/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userPage" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
