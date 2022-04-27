import React from "react";
import ReactDOM from "react-dom";
import App from "src/App";
import "src/css/index.css";
import "animate.css/animate.min.css";
import ThemeProvider from "src/providers/ThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
