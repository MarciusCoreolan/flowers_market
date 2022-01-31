import React from 'react';
import styles from "./error.module.scss";
import {NavLink} from "react-router-dom";

function Error() {
    return (
        <div className={styles.error}>
            <div className={styles.text}>
                <p>ошибка 404</p>
                <p>Упс...Такой страницы нет</p>
                <NavLink className={styles.home} to={'/'}>
                    на главную
                </NavLink>
            </div>
        </div>
    );
}

export default Error;
