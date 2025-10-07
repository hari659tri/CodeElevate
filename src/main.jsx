import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ".././src/index.css";
import App from "./App.jsx";
import "./App.css";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// document.documentElement.style.backgroundColor = "#000";
// document.body.style.backgroundColor = "#000";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </StrictMode>
);
