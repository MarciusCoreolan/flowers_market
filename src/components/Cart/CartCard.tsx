import React from 'react';
import photo from "../../images/image 114.png";
import styles from "./cart.module.scss";

function CartCard() {
    return (
        <div className={styles.cart_product}>
            <div className={styles.cart_image}>
                <img src={photo} alt={photo}/>
            </div>
            <div className={styles.cart_center}>
                <div className={styles.cart_product_name}>
                    рубиновые искры
                </div>
                <div className={styles.cart_quantity}>
                    <div className={styles.cart_quantity_count}>
                        -
                    </div>
                    <div>
                        1
                    </div>
                    <div className={styles.cart_quantity_count}>
                        +
                    </div>
                </div>
            </div>
            <div className={styles.cart_product_right}>
                <div className={styles.cart_product_prices}>
                    167.00 ₽
                </div>
                <div className={styles.cart_product_delete}>
                    Удалить
                </div>
            </div>
        </div>
    );
}

export default CartCard;