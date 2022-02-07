import React, {useEffect, useState} from "react";
import HomePage from "../pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Catalog from "../pages/Catalog/Catalog";
import Error from "../pages/ErrorPage/Error";
import { useDispatch } from "react-redux";
import { loadBouquest } from "../redux/reducers/bouquetsReducer";
import ProductCard from "../pages/product/ProductCard";
import Contacts from "../pages/Contacts/Contacts";
import Header from "./Header/Header";
import Footer from "./Footer/Index";
import Cart from "./Cart/Cart";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBouquest());
  }, [dispatch]);

  const [active, setActive] = useState(false);

    return (
    <div>
      <Header active={active} setActive={setActive}/>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/catalog"} element={<Catalog />} />
        <Route path={"/contacts"} element={<Contacts />} />
        <Route path={"*"} element={<Error />} />
        <Route path={"/:id"} element={<ProductCard />} />
      </Routes>
      <Cart active={active} setActive={setActive}/>
      <Footer />
    </div>
  );
}

export default App;
