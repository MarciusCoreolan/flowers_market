import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Catalog from "../pages/Catalog/Catalog";
import Error from "../pages/ErrorPage/Error";
import ProductCard from "../pages/product/ProductCard";
import Contacts from "../pages/Contacts/Contacts";

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
