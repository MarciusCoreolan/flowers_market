import React from "react";
import styles from "./cards.module.scss"
import buket from "../../images/image 114.png";
import { NavLink } from "react-router-dom";
function Card() {
  return (
    <>
      <NavLink to="/product">
        <div className={styles.card}>
          <img src={buket} alt="" />
          <div className={styles["cards-title"]}>название</div>
          <div className={styles["cards-text"]}>Цена</div>
          <div className={styles["cards-button"]}>В корзину</div>
        </div>
      </NavLink>
      <div className={styles.card}>
        <img src={buket} alt="" />
        <div className={styles["cards-title"]}>название</div>
        <div className={styles["cards-text"]}>Цена</div>
        <div className={styles["cards-button"]}>В корзину</div>
      </div>
      <div className={styles.card}>
        <img src={buket} alt="" />
        <div className={styles["cards-title"]}>название</div>
        <div className={styles["cards-text"]}>Цена</div>
        <div className={styles["cards-button"]}>В корзину</div>
      </div>
      <div className={styles.card}>
        <img src={buket} alt="" />
        <div className={styles["cards-title"]}>название</div>
        <div className={styles["cards-text"]}>Цена</div>
        <div className={styles["cards-button"]}>В корзину</div>
      </div>
      <div className={styles.card}>
        <img src={buket} alt="" />
        <div className={styles["cards-title"]}>название</div>
        <div className={styles["cards-text"]}>Цена</div>
        <div className={styles["cards-button"]}>В корзину</div>
      </div>
      <div className={styles.card}>
        <img src={buket} alt="" />
        <div className={styles["cards-title"]}>название</div>
        <div className={styles["cards-text"]}>Цена</div>
        <div className={styles["cards-button"]}>В корзину</div>
      </div>
    </>
  );
}

export default Card;
