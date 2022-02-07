import React from 'react';
import styles from "./cart.module.scss";
import Line from "./Line";
import CartCard from "./CartCard";
import {ICart} from "../../types/componentTypes";
import {useDispatch} from "react-redux";
import {CSSTransition} from "react-transition-group";

function Cart({active, setActive}: ICart) {

    const dispatch = useDispatch();
    const handleChangeCart = () => {
        dispatch(setActive(false))
    }

    return (
        <div className={active ? styles.cart_modal : styles.cart_modal_close}>
            <CSSTransition
                in={active}
                timeout={1000}
                unmountOnExit
            >
                <div className={styles.cart_content}>
                    <div className={styles.cart_header}>
                        <span className={styles.cart_title}>Ваша корзина</span>
                        <span className={styles.cart_close} onClick={handleChangeCart}>
                        &#10005;
                    </span>
                    </div>
                    <Line />
                    <CartCard />
                    <Line />
                    <div className={styles.cart_footer}>
                        <Line />
                        <div className={styles.cart_product_name1}>
                            Предварительный итог: 315.00 руб.
                        </div>
                        <div className={styles.cart_product_name}>
                            Чтобы узнать стоимость доставки, перейдите <br/> к оформлению заказа.
                        </div>
                        <button>
                            Оформить заказ
                        </button>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
}

export default Cart;