import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="route-loader-wrapper">
      <div className="loader-circle"></div>
      <h2 className="loader-text">We are working on something amazing...</h2>
    </div>
  );
};

export default Loader;
