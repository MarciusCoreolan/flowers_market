import React from "react";
import styles from "./contacts.module.scss";
import Header from "../../components/Header/Header";
import BoxGroup from "./BoxGroup";
import Forms from "./Forms";
import Button from "../../components/Button/Button";
import Maps from "./Maps";

function Contacts() {
  return (
    <div>
      <Header />
      <div className={styles.contacts}>
        <div className={styles.container}>
          <p className={styles.contacts_title}>контакты</p>
          <BoxGroup />
          <div className={styles.contacts_feedback}>
            <div className={styles.contacts_feedback_left}>
              <p className={styles.contacts_feedback_title}>напишите нам</p>
            </div>
            <div className={styles.contacts_feedback_right}>
              <div className={styles.contacts_feedback_line}> </div>
              <div className={styles.contacts_feedback_text}>
                <p>
                  Отправьте ваш вопрос, заказ, <br />
                  предложение или жалобу через форму <br />
                  обратной связи, и наш специалист <br />
                  свяжется с вами в течение 15 минут.
                </p>
              </div>
              <Forms />
              <div className={styles.contacts_button}>
                <Button text={'ОТПРАВИТЬ'}/>
              </div>
              <div className={styles.approval}>
                Нажимая на кнопку «Отправить», я даю свое согласие на обработку{" "}
                <br />
                персональных данных, в соответствии с{" "}
                <span>Политикой конфиденциальности</span>
              </div>
            </div>
          </div>
          <Maps />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
