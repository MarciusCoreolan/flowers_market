import React from "react";
import styles from "./header.module.scss";
import search from "../../images/search.svg";
import lightPhone from "../../images/mdi-light_phone.svg";
import basket from "../../images/basket.svg";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import {IHeader} from "../../types/componentTypes";
import {useDispatch} from "react-redux";


function Header({ active, setActive }:IHeader ) {
  const dispatch = useDispatch();
  const handleChangeCart = () => {
    dispatch(setActive(true))
  }

  return (
    <div className={styles.header}>
    <div className={styles.header_container}>
      <div className={styles.nav}>
        <Logo/>
        <NavLink to="/catalog">
            <div>каталог</div>
        </NavLink>
          <div>доставка и оплата</div>
        <NavLink to="/about" >
          <div>о нас</div>
        </NavLink>
          <NavLink to="/contacts">
            <div>контакты</div>
          </NavLink>
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
            <div className={active ? styles.basket_modal : styles.basket} onClick={handleChangeCart}>
              <img src={basket} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
