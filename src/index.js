import React from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1 className="title">Weather App</h1>
    <Weather />
  </React.StrictMode>
);
