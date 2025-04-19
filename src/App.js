import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout.js";
import Home from "./Components/Pages/Home.js";
import NotFound from "./Components/Pages/NotFound.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout pages */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
           <Route path="home" element={<Home />} />
  <Route path="Home" element={<Home />} />
          {/* You can add other pages here like About, Skills etc */}
        </Route>

        {/* 404 page OUTSIDE the Layout */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
