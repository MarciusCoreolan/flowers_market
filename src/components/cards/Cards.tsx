import React from "react";
import styles from "./cards.module.scss"
import buket from "../../images/image 114.png";
function Cards() {

  return (
    <div className={styles["cards-main"]}>
      <div className={styles.filters}>
        <div className={styles.filt}>
          <div className={styles["card-filt"]}></div>
          <div>
            <div className={styles.heading}>по формату</div>
            <div className={styles["card-filt"]}>
              <input type="checkbox" /> <span>букет</span>
            </div>
            <div className={styles["card-filt"]}>
              <input type="checkbox" /> <span>в вазе</span>
            </div>
            <div className={styles["card-filt"]}>
              <input type="checkbox" /> <span>в конверте</span>
            </div>
            <div className={styles["card-filt"]}>
              <input type="checkbox" /> <span>в корзине</span>
            </div>
            <div className={styles["card-filt"]}>
              <input type="checkbox" /> <span>в шляпной коробке</span>
            </div>
            <div className={styles["card-filt"]}>
              <input type="checkbox" /> <span>в ящике</span>
            </div>
          </div>
          <div>
            <div className={styles.heading}>стоимость</div>
            <div className={styles["card-filt"]}>Цена: 50.00 ₽ – 400.00 ₽</div>
          </div>
          <div className={styles["card-filt"]}>
            <div className={styles["cards-button"]}>сбросить фильтр</div>
          </div>
        </div>
        <div></div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={buket} alt="" />
          <div className={styles["cards-title"]}>описание</div>
          <div className={styles["cards-text"]}>Цена</div>
          <div className={styles["cards-button"]}>В корзину</div>
        </div>
        <div className={styles.card}>
          <img src={buket} alt="" />
          <div className={styles["cards-title"]}>описание</div>
          <div className={styles["cards-text"]}>Цена</div>
          <div className={styles["cards-button"]}>В корзину</div>
        </div>
        <div className={styles.card}>
          <img src={buket} alt="" />
          <div className={styles["cards-title"]}>описание</div>
          <div className={styles["cards-text"]}>Цена</div>
          <div className={styles["cards-button"]}>В корзину</div>
        </div>
        <div className={styles.card}>
          <img src={buket} alt="" />
          <div className={styles["cards-title"]}>описание</div>
          <div className={styles["cards-text"]}>Цена</div>
          <div className={styles["cards-button"]}>В корзину</div>
        </div>
        <div className={styles.card}>
          <img src={buket} alt="" />
          <div className={styles["cards-title"]}>описание</div>
          <div className={styles["cards-text"]}>Цена</div>
          <div className={styles["cards-button"]}>В корзину</div>
        </div>
        <div className={styles.card}>
          <img src={buket} alt="" />
          <div className={styles["cards-title"]}>описание</div>
          <div className={styles["cards-text"]}>Цена</div>
          <div className={styles["cards-button"]}>В корзину</div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
