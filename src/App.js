import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage, Login } from "./components/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/get-projects" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
