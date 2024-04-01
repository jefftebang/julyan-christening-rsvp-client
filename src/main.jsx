import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./global.css";
import { BrowserRouter } from "react-router-dom";
import { Flowbite } from "flowbite-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Flowbite theme={{ mode: "dark" }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Flowbite>
  </React.StrictMode>
);
