import React from 'react';
import styles from "./feedback.module.scss"
import Button from "../Button/Button";
import Forms from "./Forms";

function Feedback() {
    return (
        <div>
            <div className={styles.feedback_line}> </div>
            <div className={styles.feedback_text}>
                <p>
                    Отправьте ваш вопрос, заказ, <br />
                    предложение или жалобу через форму <br />
                    обратной связи, и наш специалист <br />
                    свяжется с вами в течение 15 минут.
                </p>
            </div>
            <Forms />
            <div className={styles.feedback_button}>
                <Button text={'отправить'}/>
            </div>
            <div className={styles.approval}>
                Нажимая на кнопку «Отправить», я даю свое согласие на обработку{" "}
                <br />
                персональных данных, в соответствии с{" "}
                <span>Политикой конфиденциальности</span>
            </div>
        </div>
    );
}

export default Feedback;