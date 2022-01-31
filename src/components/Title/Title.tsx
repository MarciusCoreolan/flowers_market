import React from 'react';
import styles from "./title.module.scss";
import {ITitle} from "../../types/componentTypes";

function Title({ text }:ITitle) {
    return (
        <div className={styles.title}>
            {text}
        </div>

    );
}

export default Title;