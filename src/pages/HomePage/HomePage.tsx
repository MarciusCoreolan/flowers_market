import React from "react";
import style from "./home_page.module.scss";
import Intro from "./Intro/Intro";

function HomePage() {
  return (
    <div className={style.home_page}>
      <Intro />
    </div>
  );
}

export default HomePage;
