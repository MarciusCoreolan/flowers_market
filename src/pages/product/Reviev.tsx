import React from "react";
import styles from "./product.module.scss";
import quotation from "../../images/quotation .svg";
import Rating from "react-rating";
import {Ifeedback} from "../../types/componentTypes"
  
function Reviev({feedback}:any) {
  return (
      <div className={styles.reviev}>
        <img src={quotation} alt="" />
        <div className={styles.comment}>
        {feedback.text}
        </div>
        <div className={styles.rating}>
        </div>
        <div className={styles.inf}>{feedback.author}, {feedback.date} </div>
    </div>
  );
}

export default Reviev;
