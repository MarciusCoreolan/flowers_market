import React, { useEffect } from "react";
import Footer from "./Footer/Index";
import HomePage from "../pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Catalog from "../pages/Catalog/Catalog";
import Error from "../pages/ErrorPage/Error";
import Contacts from "../pages/Contacts/Contacts";
import ProductCard from "../pages/product/ProductCard";
import { useDispatch } from "react-redux";
import { loadBouquest } from "../redux/reducers/bouquetsReducer";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadBouquest())
  },[])
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
