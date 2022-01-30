import React from "react";
import styles from "./contacts.module.scss";

function BoxGroup() {
  return (
    <div className={styles.group_box}>
      <div className={styles.box}>
        <p className={styles.group_box_title}>время работы</p>
        <p className={styles.group_box_subtitle}>
          с 10:00 до 21:00 <br /> без выходных
        </p>
      </div>
      <div className={styles.box}>
        <p className={styles.group_box_title}>Адрес</p>
        <p className={styles.group_box_subtitle}>
          г. Минск, ул. Тимирязева <br /> 67, комн. 112
        </p>
      </div>
      <div className={styles.box}>
        <p className={styles.group_box_title}>Телефон</p>
        <p className={styles.group_box_subtitle}>+375 (29) 113-69-69</p>
      </div>
      <div className={styles.box}>
        <p className={styles.group_box_title}>E-mail</p>
        <p className={styles.group_box_subtitle}>zakaz@loverflower.by</p>
      </div>
    </div>
  );
}

export default BoxGroup;
