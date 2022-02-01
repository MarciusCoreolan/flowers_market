import React from "react";
import styles from "./product.module.scss"
function Wayy() {
  return (
    <div className={styles.info}>
      <div className={styles.payment}>
        <div className={styles.way}>Способы оплаты:</div>
        <ul>
          <li>БАНКОВСКОЙ КАРТОЙ ПРИ ОФОРМЛЕНИИ ЗАКАЗА ЧЕРЕЗ САЙТ</li>
          <li>НАЛИЧНЫМИ ИЛИ БАНКОВСКОЙ КАРТОЙ ПРИ САМОВЫВОЗЕ</li>
          <li>НАЛИЧНЫМИ ПРИ ДОСТАВКЕ КУРЬЕРОМ</li>
          <li>КРИПТОВАЛЮТОЙ ОНЛАЙН</li>
        </ul>
      </div>
      <div className={styles.delivery}>
        <div className={styles.way}>стоимость доставки:</div>
        <ul>
          <li>
            <span className={styles.color}>Бесплатно</span> – при заказе на
            сумму <span>от 90 рублей</span>
          </li>
          <li>
            <span className={styles.color}>10 рублей</span> – при заказе на
            сумму <span>менее 90 рублей</span>
          </li>
          <li>
            Возможность, сроки и стоимость доставки за пределы МКАД, доставки в
            ночное <br /> время, праздники{" "}
            <span>оговариваются с менеджером</span>
          </li>
          <li>
            Так же вы можете забрать ваш заказ самостоятельно по адресу:
            <br />
            <span>
              г. Минск, ул. Тимирязева д. 67, комн. 112 ежедневно с 10.00 до
              21.00
            </span>
          </li>
        </ul>
      </div>
      <div className={styles["delivery-way"]}>
        <div className={styles.way}>Условия доставки:</div>
        <div className={styles.address}>
          Доставка осуществляется по городу Минску в пределах МКАД{" "}
          <span>в любой день с 09.00 до 22.00.</span>
          <br /> Доставка в ночное время осуществляется по договоренности с
          оператором
        </div>
      </div>
    </div>
  );
}

export default Wayy;
