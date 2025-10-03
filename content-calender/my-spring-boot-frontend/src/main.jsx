import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

fetch("http://localhost:8080/api/content")
  .then((response) => response.json())
  .then((data) => console.log("Data from Spring Boot API:", data));
