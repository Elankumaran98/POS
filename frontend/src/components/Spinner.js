import React from "react";

const Spinner = () => {
  return (
    <div
      className="spinner-border"
      role="status"
      style={{
        position: "fixed",
        left: "50%",
        top: "50%",
        width: "50px", 
        height: "50px", 
      }}>
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spinner;
