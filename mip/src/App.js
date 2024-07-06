// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Navi from "./navigation";

export default function App() {
  return (
    <div>
      <Navi />
      <Routes>
        <Route index path="home" element={<Home />} />
      </Routes>
    </div>
  );
}