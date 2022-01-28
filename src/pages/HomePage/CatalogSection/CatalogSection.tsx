import React from "react";
import style from "./catalogSection.module.scss";

function CatalogSection() {
  return (
    <div className={style.catalog}>
      <div className={"container"}>
        <div className={style.title}>
          <h1>Каталог</h1>
        </div>

        <div className={style.catalog_card_container}>
          <div>
            <div className={style.catalog_card}>
              У нас самый большой выбор цветов, букетов, открыток и подарков. Мы
              всегда поможем вам подобрать букет для вашего события, наш
              менеджер вас проконсультирует и поможет определиться с выбором
              <br />
              <br />
              Ознакомьтесь с нашими разделами каталога
            </div>

            <div className={style.catalog_card}>
              <div className={style.catalog_card_title}>
                готовые букеты из сухоцветов
              </div>
              <div>
                <ul>
                  <li>букеты</li>
                  <li>для интерьера</li>
                  <li>Композиции</li>
                </ul>
              </div>
              <div className={style.catalog_card_link}>
                <a href="#">смотреть каталог</a>
              </div>{" "}
            </div>
          </div>

          <div className={style.box2}>
            <div className={style.catalog_card}>
              <div className={style.catalog_card_title}>Цветы</div>
              <div>
                <ul>
                  <li>Сборные букеты</li>
                  <li>Монобукеты</li>
                  <li>Композиции из цветов</li>
                  <li>розы</li>
                  <li>свадебные</li>
                </ul>
              </div>
              <div className={style.catalog_card_link}>
                <a href="#">смотреть каталог</a>
              </div>{" "}
            </div>

            <div className={style.catalog_card}>
              <div className={style.catalog_card_title}>дополнительно</div>
              <div>
                <ul>
                  <li>шары</li>
                  <li>игрушки</li>
                  <li>открытки</li>
                  <li>упаковка</li>
                </ul>
              </div>
              <div className={style.catalog_card_link}>
                <a href="#">смотреть каталог</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogSection;
