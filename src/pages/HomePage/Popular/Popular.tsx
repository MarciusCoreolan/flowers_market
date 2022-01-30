import React from 'react';
import style from './popular.module.scss'
import Slider from "../../../components/Slider/Slider";

function Popular() {
    return (
        <div className={style.popular_section}>
            <div className={'container'}>
                <div className={style.popular_section_title}>
                    <h2>Популярные</h2>
                    <h3>букеты</h3>
                </div>
            </div>
        </div>
    );
}

export default Popular;
