import React from 'react';
import styles from "./input.module.scss";
import {IInput} from "../../types/componentTypes";

function Input({ placeholder }:IInput) {
    return (
        <div>
            <input
                className={styles.form_input}
                type="text"
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input;