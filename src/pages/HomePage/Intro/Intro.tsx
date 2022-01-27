import React from 'react';
import style from './intro.module.scss';
import Button from "../../../components/Button/Button";
import insta from "../../../images/insta.svg";
import wpp from "../../../images/wpp.svg";
import phone from "../../../images/phone.svg";

function Intro() {
    return (
        <div className={style.intro}>
            <div className={style.home_page_bg}>
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

                        <div className={style.info}>
                            <div>
                                <div className={style.info_title}>zakaz@loverflower.by</div>
                                <div className={style.info_text}>
                                    Доставка 24/7 по договоренности с оператором
                                </div>
                            </div>

                            <div>
                                <div className={style.info_title}>ул. Тимирязева 67</div>
                                <div className={style.info_text}>
                                    10:00 до 21:00
                                    <br />
                                    без выходных
                                </div>
                            </div>

                            <div className={style.social}>
                                <div>
                                    <img src={insta} alt="" />
                                </div>
                                <div>
                                    <img src={wpp} alt="" />
                                </div>
                                <div>
                                    <img src={phone} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;
