import React from "react";
import style from "./home_page.module.scss";
import Intro from "./Intro/Intro";
import CatalogSection from "./CatalogSection/CatalogSection";
import Popular from "./Popular/Popular";
import Footer from "../../components/Footer/Index";

function HomePage() {
  return (
    <div className={style.home_page}>
      <Intro />
      <CatalogSection />
      <Popular />
      <Footer />
    </div>
  );
}

export default HomePage;
