import React from "react";
import styles from "./contacts.module.scss";

function Forms() {
  return (
    <div className={styles.forms}>
      <input
        className={styles.forms_input}
        type="text"
        placeholder="ваше имя"
      />
      <input
        className={styles.forms_input}
        type="text"
        placeholder="+7 (977) 777-77-77"
      />
      <textarea className={styles.forms_input} placeholder="Ваш комментарий" />
    </div>
  );
}

export default Forms;
