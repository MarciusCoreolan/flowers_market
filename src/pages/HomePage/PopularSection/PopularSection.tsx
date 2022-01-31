import React from 'react';
import style from './popular.module.scss'
import Slider from "../../../components/Slider/Slider";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {Ibuket} from "../../../types/bouquestTypes"

function PopularSection() {
    const bouquets: any = useTypeSelector((state) => state.bouquest?.bouquest);
    const popularBouquets = bouquets.filter((item:Ibuket) => item.totalSales >= '10')

    return (
        <div className={style.popular_section}>
            <div className={'container'}>
                <div className={style.popular_section_title}>
                    <h2>Популярные</h2>
                    <h3>букеты</h3>
                </div>
                <Slider items={popularBouquets}/>
            </div>
        </div>
    );
}

export default PopularSection;
