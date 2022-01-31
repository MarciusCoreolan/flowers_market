import React from 'react';
import styles from "./about.module.scss";
import {IAboutTitle} from "../../types/componentTypes";

function AboutTitle({ text }:IAboutTitle) {
    return (
        <div className={styles.content_title}>
            {text}
        </div>
    );
}

export default AboutTitle;