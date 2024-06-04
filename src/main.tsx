import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Global } from "./GlobalStyles.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);
