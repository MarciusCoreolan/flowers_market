import React from 'react';
import style from "./info.module.scss";
import insta from "../../images/insta.svg";
import wpp from "../../images/wpp.svg";
import phone from "../../images/phone.svg";

function Info() {
    return (
        <div className={style.info}>
            {/* <div>
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
            </div> */}

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
    );
}

export default Info;
