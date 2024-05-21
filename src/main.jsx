import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Organik from "./Organik.jsx";
import Anorganik from "./Anorganik.jsx";
import Bahan from "./Bahan.jsx"
import Galeri from "./Galeri.jsx";



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<App />} />
        <Route path="/organik" element={<Organik />} />
        <Route path="/anorganik" element={<Anorganik />} />
        <Route path="/bahan" element={<Bahan />} />
        <Route path="/galeri" element={<Galeri />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
