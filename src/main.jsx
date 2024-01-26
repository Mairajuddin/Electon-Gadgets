import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { LightTheme } from "./Utils/Theme.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
      <GoogleOAuthProvider clientId="940214954719-e8ug0f10muge9di9601kr0o3kulgbcac.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
