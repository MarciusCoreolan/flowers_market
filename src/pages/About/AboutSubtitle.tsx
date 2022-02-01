import React from 'react';
import {IAboutSubTitle} from "../../types/componentTypes";
import styles from "./about.module.scss";

function AboutSubtitle({ text }:IAboutSubTitle) {
    return (
        <div className={styles.content_subtitle}>
            {text}
        </div>
    );
}

export default AboutSubtitle;