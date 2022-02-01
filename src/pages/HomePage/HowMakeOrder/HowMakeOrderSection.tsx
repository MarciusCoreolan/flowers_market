import React from 'react';
import style from './howMakeOrder.module.scss'

function HowMakeOrderSection() {

    return (
        <div className={style.how_make_order}>
            <div className={'container'}>
                <div className={style.how_make_order_title}>
                    <h2>Как сделать <br/>заказ</h2>
                </div>
                <div className={style.how_make_order_main}>

                    <div className={style.main_column}>
                        <div className={style.main_steps}>
                            <div className={style.main_steps_title}>1 шаг</div>
                            <p>Выберите какие цветы или подарки вы хотите купить</p>
                        </div>
                        <div className={style.main_steps}>
                            <div className={style.main_steps_title}>2 шаг</div>
                            <p>Оформите заказ, и мы отправим вам подтверждение на электронную почту, а так же менеджер свяжется с вами по телефону или в WhatsApp</p>
                        </div>
                        <div className={style.main_steps}>
                            <div className={style.main_steps_title}>3 шаг</div>
                            <p>Наши флористы бережно подойдут к созданию букета цветов в самом начале дня или накануне</p>
                        </div>
                    </div>

                    <div className={style.main_column}>
                        <div className={style.main_steps}>
                            <div className={style.main_steps_title}>4 шаг</div>
                            <p>Один из наших курьеров или партнёров доставит ваш заказ по указанному адресу. Мы отправим вам сообщение в Whats App как только заказ будет доставлен</p>
                        </div>

                        <div className={style.main_steps}>
                            <div className={style.main_steps_title}>5 шаг</div>
                            <p>Наслаждайтесь цветами , если вы заказали их для дома или любовью, которой поделились, если вы заказали для друга</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HowMakeOrderSection;
