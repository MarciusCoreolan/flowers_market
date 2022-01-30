import React from 'react';
import style from './popular.module.scss'
import Slider from "../../../components/Slider/Slider";

function Popular() {
    const items = [1, 2, 3, 4, 5, 6, 7];

    return (
        <div className={style.popular_section}>
            <div className={'container'}>
                <div className={style.popular_section_title}>
                    <h2>Популярные</h2>
                    <h3>букеты</h3>
                </div>
                <Slider items={items}/>
            </div>
        </div>
    );
}

export default Popular;
