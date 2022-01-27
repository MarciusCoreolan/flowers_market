import React from "react";
import Footer from "./Footer/Index";
import HomePage from "../pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Catalog from "../pages/Catalog/Catalog";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
