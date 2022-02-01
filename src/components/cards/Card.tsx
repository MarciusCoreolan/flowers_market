import React from "react";

import styles from "./card.module.scss";
import { NavLink } from "react-router-dom";
interface Ibuket {
  bouquest: {
    buket: any[];
    name: string;
    price: string;
    images: string;
    id: number;
  };
}

function Card({ bouquest }: Ibuket) {
  
  return (
    <>
      <div className={styles.card}>
        <NavLink to={`/${bouquest.id}`}>
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
