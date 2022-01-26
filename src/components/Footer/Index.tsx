import React from "react";
import style from "./footer.module.scss";
import logo from "../../images/logo.png";
import insta from "../../images/insta.png";
import wpp from "../../images/wpp.png";
import phone from "../../images/phone.png";

function Footer() {
  return (
    <div className={style.footer}>
      <div className="container">
        <div className={style.container}>
          <div>
            <div>
              <img src={logo} alt="" />
            </div>
            <div className={style.title}>реквизиты</div>
            <div className={style.text}>
              ООО «Ловефлове» 220035, Республика
              <br />
              Беларусь, г. Минск, ул. Тимирязева д. 67,
              <br />
              комн. 112 (пом.11) УНП 193263781, р/с
              <br />
              BY55MTBK30120001093300096372 ЗАО
              <br />
              «МТБанк», БИК MTBKBY22 220007, г. Минск,
              <br />
              улица Толстого
            </div>
          </div>

          <div>
            <div className={style.title}>каталог</div>
            <div className={style.text}>
              <a href="#">Популярное</a>
              <a href="#">Сухоцветы</a>
              <a href="#">букеты роз</a>
              <a href="#">Композиция из цветов</a>
              <a href="#">индивидуальный букет</a>
              <a href="#">букет на праздник</a>
              <a href="#">упаковка подарков</a>
              <a href="#">шары</a>
              <a href="#">открытки</a>
              <a href="#">конверты</a>
            </div>
          </div>

          <div>
            <div className={style.title}>букеты</div>
            <div className={style.text}>
              <a href="#">для девушки</a>
              <a href="#">для мужчины</a>
              <a href="#">для жены</a>
              <a href="#">для мамы</a>
              <a href="#">для коллеги</a>
              <a href="#">для начальника</a>
              <a href="#">для дочки</a>
              <a href="#">для детей</a>
              <a href="#">для женщины</a>
            </div>
          </div>

          <div>
            <div className={style.title}>доставка и оплата</div>
            <div className={style.title}>о нас</div>
            <div className={style.title}>faq</div>
            <div className={style.title}>контакты</div>
            <div className={style.title}>
              для корпоративных <br />
              клиентов
            </div>
          </div>

          <div className={style.social}>
            <div className={style.title}>zakaz@loverflower.by</div>
            <div className={style.text}>
              Доставка 24/7 по договоренности с оператором
            </div>
            <div className={style.title}>ул. Тимирязева 67</div>
            <div className={style.text}>
              10:00 до 21:00 <br />
              без выходных
            </div>
            <div className={style.title}>+375 (29) 113-69-69</div>
            <div className={style.text}>прием звонков круглосуточно</div>
            <img src={insta} alt="" />
            <img src={wpp} alt="" />
            <img src={phone} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
