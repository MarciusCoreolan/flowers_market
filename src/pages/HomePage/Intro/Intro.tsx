import React from 'react';
import style from './intro.module.scss';
import Button from "../../../components/Button/Button";
import Header from '../../../components/Header/Header';

function Intro() {
    return (
        <div className={style.intro}>
            <div className={style.home_page_bg}>
            <Header />
                <div className="container">
                    <div className={style.home_page_container}>
                        <div>
                            <h1 className={style.home_page_title}>
                                lover <br />
                                Flower
                            </h1>
                            <p className={style.home_page_subtitle}>
                                Создаём для тех, кто ценит свежесть и изящество цветка
                            </p>
                            <div className={style.home_page_intro_button}>
                                <Button text={"смотреть каталог"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;
