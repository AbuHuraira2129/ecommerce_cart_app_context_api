import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
