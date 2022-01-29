import React from 'react';
import style from './slider.module.scss'

function Card({item}:any) {
    return (
        <div className={style.card}>
            {item}
        </div>
    );
}

export default Card;
