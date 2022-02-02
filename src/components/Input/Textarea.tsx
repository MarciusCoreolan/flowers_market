import React from 'react';
import styles from "./input.module.scss";

function Textarea() {
    return (
        <div>
            <textarea className={styles.form_input} placeholder="Ваш комментарий" />
        </div>
    );
}

export default Textarea;