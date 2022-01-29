import React from "react";
import Header from "../../components/Header/Header";
import styles from "./product.module.scss";
import productImage from "../../images/image 141.png";
import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";
function ProductCard() {
  return (
    <div className={styles.product}>
      <div className="container">
        <Header />
        <div className={styles.main}>
          <div>
            <img src={productImage} alt="" />
          </div>
          <div className={styles["right-block"]}>
            <NavLink to="/catalog">
              <div className={styles.back}>назад</div>
            </NavLink>
            <div className={styles.title}>рубиновые искры</div>
            <div className={styles.price}>
              <div className={styles.one}>167.00 ₽</div>
              <div>187.00 ₽</div>
            </div>
            <div className={styles.structure}>
              <span>Состав</span>: Гвоздика (Диантус), Леукодендрон,
              Леукоспермум (Нутан), Лотос, Роза
            </div>
            <div className={styles.description}>
              Завораживающая глубина ваших чувств передана огненными красками
              этого букета
            </div>
            <div className={styles.categories}>
              <div>
                <span>Категории</span>: 8 марта, Букет на 14 февраля, Букет на
                праздник, Букеты цветов на День рождения, Композиции из цветов,
                Композиции из
              </div>
              цветов в коробке{" "}
              <div>
                <span>МЕТКИ</span>: Для начальника, Мужские букеты
              </div>
            </div>
            <div className={styles.options}>
              <div className={styles["product-btn"]}>в корзину</div>
              <div className={styles["product-btn-two"]}>1</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={styles.heading}>дополнительно к заказу</div>
          <div className={styles.additionally}>
            <div className={styles.card}>
              <div className={styles.title}>Удобрения для срезанных цветов</div>
              <div className={styles.text}>
                При указании об этом в пожеланиях к букету, мы приложим пакетик
                удобрения для вас
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.title}>подпишем открытку</div>
              <div className={styles.text}>
                В пожеланиях к букету укажите текст, какой хотите разместить и
                выберите на сайте саму открытку
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.title}>Фото букета перед отправкой</div>
              <div className={styles.text}>
                примечании к заказу укажите об этом и мы отправим фото готового
                букета перед доставкой. В праздничные дни в связи с большой
                загруженностью такой возможности нет
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.title}>Букет-сюрприз</div>
              <div className={styles.text}>
                Если хотите, чтобы получатель не знал, что ему вручат а также от
                кого, то укажите об этом в примечании к заказу
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
