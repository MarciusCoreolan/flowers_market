import React from "react";
import styles from "./header.module.scss";
import logo from "../../images/logo.svg";
import search from "../../images/search.svg";
import { NavLink, Routes } from "react-router-dom";
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <NavLink to="/catalog">
          <div>каталог</div>
        </NavLink>
        <div>доставка и оплата</div>
        <div>о нас</div>
        <div>контакты</div>
        <div>faq</div>
        <div className={styles.search}>
          <img src={search} alt="" /> <div>поиск</div>
        </div>
      </div>
      <div>
        <div className={styles["header-info"]}>
          <div>
            <div className={styles.info_title}>zakaz@loverflower.by</div>
            <div className={styles.info_text}>
              Доставка 24/7 по договоренности с оператором
            </div>
          </div>

          <div>
            <div className={styles.info_title}>ул. Тимирязева 67</div>
            <div className={styles.info_text}>
              10:00 до 21:00
              <br />
              без выходных
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
