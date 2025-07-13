import React from "react";
import { useNavigate } from "react-router-dom";

export default function GoToProjectsButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/projects")}
      aria-label="Go to Articles"
      style={{
        position: "fixed",
        top: 20,
        left: 20,
        backgroundColor: "white",
        color: "#2B0D37",
        border: "none",
        padding: "10px 18px",
        borderRadius: "8px",
        fontWeight: "600",
        fontSize: "1rem",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(5, 150, 105, 0.6)",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        zIndex: 1000,
      }}
     
      
    >
      ← Go to Articles
    </button>
  );
}
