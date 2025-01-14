import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProductContextProvider } from "./context/ProductContext.jsx";
import React from "react";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </React.StrictMode>
);
