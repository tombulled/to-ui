import React from 'react';
import ReactDOM from "react-dom/client";
import App from './Components/App/App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Search from "./routes/search";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </BrowserRouter>
);