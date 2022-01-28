import React from "react";
import Header from "../../components/Header/Header";
import styles from "./catalog.module.scss";
import insta from "../../images/insta.svg";
import wpp from "../../images/wpp.svg";
import phone from "../../images/phone.svg";
import lightPhone from "../../images/mdi-light_phone.svg";
import Ellipse from "../../images/Ellipse 45.png";
import buket from "../../images/image 114.png";
import Info from "../../components/Info/Info";
import Button from "../../components/Button/Button";
function Catalog() {
  return (
    <div className={styles.catalog}>
      <Header />
      <div className={styles.bgImage}>
        <div className="container">
          <div className={styles["catalog-main"]}>
            <div className={styles.catalogBg}>
              <div className={styles["catalog-title-one"]}>каталог</div>
              <div>
                <div className={styles["catalog-title-two"]}>букетов</div>
                <div className={styles["catalog-description"]}>
                  В нашем магазине самый большой выбор букетов для любых
                  событий:
                </div>
              </div>
              <div className={styles.options}>
                <div>Букеты из гипсофил</div>
                <div>Букеты из ромашек</div>
                <div>Букеты из хризантем</div>
                <div>Комнатные цветы в горшках</div>
                <div>Монобукеты</div>
                <div>Сборные букеты</div>
                <div>Букет на праздник</div>
                <div>Композиции из цветов</div>
                <div>Конверты</div>
                <div>Открытки</div>
                <div>Подарки</div>
                <div>Букеты из сухоцветов</div>
                <div>Шары</div>
                <div>Популярное</div>
                <div>Букеты роз</div>
                <div>Цветы на похороны</div>
                <div>Упаковка подарков</div>
              </div>
            </div>
            <Info />
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles["cards-main"]}>
          <div className={styles.filters}>
            <div className={styles.filt}>
              <div className={styles["card-filt"]}>
              </div>
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
      </div>
    </div>
  );
}

export default Catalog;
