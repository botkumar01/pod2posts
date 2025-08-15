import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import HomePage from "./Pages/HomePage";
import FAQPage from "./Pages/FAQPage";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/faq" element={<FAQPage />} />
    </Routes>
  </BrowserRouter>
);
import "./index.css"; // Ensure you have an index.css file for global styles