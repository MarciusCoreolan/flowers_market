import React from "react";
import styles from "./header.module.scss";
import logo from "../../images/logo.svg";
import search from "../../images/search.svg";
import lightPhone from "../../images/mdi-light_phone.svg";
import basket from "../../images/basket.svg";
import { NavLink } from "react-router-dom";
import Info from "../Info/Info";
function Header() {
  return (
    <div className={styles.header}>
    <div className='container'>
      <div className={styles.nav}>
        <div className="logo">
        <img src={logo} alt="" />
        </div>
        <NavLink to="/">
            <div>каталог</div>
          </NavLink>
          <div>доставка и оплата</div>
          <div>о нас</div>
          <div>контакты</div>
          <div>faq</div>
          <div className={styles.search}>
            <img src={search} alt="" /> <div>поиск</div>
          </div>
          <div className={styles.headerInfo}>
            <div className={styles.headerPhone}>
              <div>
                <img src={lightPhone} alt="" />
              </div>{" "}
              <div>+375 (29) 113-69-69</div>
            </div>
          </div>
      </div>
      </div>
      </div>
  );
}

export default Header;
