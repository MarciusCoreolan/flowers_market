import React from "react";
import style from "./home_page.module.scss";
import Intro from "./Intro/Intro";
import CatalogSection from "./CatalogSection/CatalogSection";

function HomePage() {
  return (
    <div className={style.home_page}>
      <Intro/>
      <CatalogSection/>
    </div>
  );
}

export default HomePage;
