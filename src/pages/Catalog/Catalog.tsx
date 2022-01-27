import React from "react";
import Header from "../../components/Header/Header";
import styles from "./catalog.module.scss";
import insta from "../../images/insta.svg";
import wpp from "../../images/wpp.svg";
import phone from "../../images/phone.svg";
import lightPhone from "../../images/mdi-light_phone.svg";
function Catalog() {
  return (
    <div className={styles.catalog}>
      <Header />
      <div className={styles["catalog-main"]}>
        <div className={styles.catalogBg}>
          <div className={styles["catalog-title-one"]}>каталог</div>
          <div>
            <div className={styles["catalog-title-two"]}>букетов</div>
            <div className={styles["catalog-description"]}>
              В нашем магазине самый большой выбор букетов для любых событий:
            </div>
          </div>
        </div>
        <div>
          <div className={styles.social}>
            <div>
              <img src={insta} alt="" />
            </div>
            <div>
              <img src={wpp} alt="" />
            </div>
            <div>
              <img src={phone} alt="" />
            </div>
          </div>
          <div>
            <div>+375 (29) 113-69-69</div>
            <div className={styles.lightPhone}>
                <img src={lightPhone} alt="" />
                <div>заказать звонок </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
