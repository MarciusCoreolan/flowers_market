import React, {useState} from "react";
import styles from "./contacts.module.scss";
import BoxGroup from "./BoxGroup";
import Maps from "./Maps";
import Title from "../../components/Title/Title";
import Feedback from "../../components/Feedback/Feedback";

function Contacts() {
  return (
      <div className={styles.contacts}>
        <div className={styles.container}>
          <div className={styles.contacts_title}>
            <Title text={'контакты'}/>
          </div>
          <BoxGroup />
          <div className={styles.contacts_feedback}>
            <div className={styles.contacts_feedback_left}>
              <Title text={'напишите нам'}/>
            </div>
            <div className={styles.contacts_feedback_right}>
              <Feedback />
            </div>
          </div>
          <Maps />
        </div>
      </div>
  );
}

export default Contacts;
