import React from 'react';
import Header from "../../components/Header/Header";
import styles from "./error.module.scss";
import Footer from "../../components/Footer/Index";
import {NavLink} from "react-router-dom";

function Error() {
    return (
        <div>
            <Header />
            <div className={styles.error}>
                <div className={styles.text}>
                    <p>ошибка 404</p>
                    <p>Упс...Такой страницы нет</p>
                    <p>
                        <NavLink to={'/'}>
                            на главную
                        </NavLink>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Error;