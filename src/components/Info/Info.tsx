import React from 'react';
import style from "./info.module.scss";
import insta from "../../images/insta.svg";
import wpp from "../../images/wpp.svg";
import phone from "../../images/phone.svg";

function Info() {
    return (
        <div className={style.info}>
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
