import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { StyleSheetManager } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "columns"}>
      <App />
    </StyleSheetManager>
  </React.StrictMode>
);
