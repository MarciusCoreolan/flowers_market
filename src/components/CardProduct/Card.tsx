import React from "react";
import buket from "../../images/home_page_buket.png";
import style from "./card.module.scss";
import Button from "../Button/Button";

function Card() {
  return (
    <div className={style.card}>
      <div className={style.info}></div>
      <img src={buket} alt="" />
      <p>лучший день</p>
      <p>167 000 р</p>
      <Button />
    </div>
  );
}

export default Card;
