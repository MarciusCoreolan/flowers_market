import React from "react";
import style from "./home_page.module.scss";
import Intro from "./Intro/Intro";
import CatalogSection from "./CatalogSection/CatalogSection";
import PopularSection from "./PopularSection/PopularSection";
import HowMakeOrderSection from "./HowMakeOrder/HowMakeOrderSection";

function HomePage() {
  return (
    <div className={style.home_page}>
      <Intro />
      <CatalogSection />
      <PopularSection />
      <HowMakeOrderSection />
    </div>
  );
}

export default HomePage;
