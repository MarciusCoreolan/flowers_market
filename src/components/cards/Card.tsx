import React from "react";
import styles from "./card.module.scss";
import buket from "../../images/image 114.png";
import { NavLink } from "react-router-dom";
function Card({ bouquest }: any) {

  return (
    <>
      <div className={styles.card}>
        <NavLink to="/product">
          <img src={bouquest.images} alt="" />
          <div className={styles["cards-title"]}>{bouquest.name}</div>
          <div className={styles["cards-text"]}>{bouquest.price} Р</div>
        </NavLink>
        <div className={styles["cards-button"]}>В корзину</div>
      </div>
    </>
  );
}

export default Card;
