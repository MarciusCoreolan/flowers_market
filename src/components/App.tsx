import React from "react";
import Footer from "./Footer/Index";
import HomePage from "../pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Catalog from "../pages/Catalog/Catalog";
import Error from "../pages/ErrorPage/Error";
<<<<<<< HEAD
import Contacts from "../pages/Contacts/Contacts";
=======
import ProductCard from "../pages/product/ProductCard";
>>>>>>> ca963956263ca5c1e4dd8b0b79b8769f44575e40

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/contacts" element={<Contacts /> }/>
        <Route path="*" element={<Error />} />
        <Route path="/product" element={<ProductCard />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
