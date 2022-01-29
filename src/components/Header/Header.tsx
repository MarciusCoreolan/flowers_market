import React from "react";
import styles from "./header.module.scss";
import search from "../../images/search.svg";
import lightPhone from "../../images/mdi-light_phone.svg";
import basket from "../../images/basket.svg";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <div className={styles.header}>
    <div className='container'>
      <div className={styles.nav}>
        <Logo/>
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
          <div className={styles.headerInfo}>
            <div className={styles.headerPhone}>
              <div>
                <img src={lightPhone} alt="" />
              </div>
              <div>+375 (29) 113-69-69</div>
            </div>
            <div className={styles.basket}>
              <img src={basket} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
