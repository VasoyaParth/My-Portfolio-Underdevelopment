import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout.js";
import Home from "./Components/Pages/Home.js";
import NotFound from "./Components/Pages/NotFound.js";
import Projects from "./Components/Pages/Projects.js";
import ProjectDetails from "./Components/Pages/ProjectDetails.js";
import CertificatesPage from "./Components/Pages/CertificatesPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          

        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
