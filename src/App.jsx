import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Sliders" element={<Slider />} />
      </Routes>
    </Router>
  );
}

export default App;
