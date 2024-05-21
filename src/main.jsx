import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bahan from "./sections/About/TrashTypes/Bahan.jsx";
import Galeri from "./sections/Galeri/Galeri.jsx";
import OrganikPage from "./sections/About/TrashTypes/Organik.jsx";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/organik" element={<OrganikPage />} />
        <Route path="/anorganik" element={<Anorganik />} />
        <Route path="/bahan" element={<Bahan />} />
        <Route path="/galeri" element={<Galeri />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
