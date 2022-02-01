import React from 'react';
import styles from "./about.module.scss";
import Title from "../../components/Title/Title";
import AboutTitle from "./AboutTitle";
import AboutSubtitle from "./AboutSubtitle";
import AboutTable from "./AboutTable";

function AboutUs() {
    return (
        <div className={styles.about}>
            <div className={styles.container}>
                <div className={styles.about_title}>
                    <Title text={'о нас'}/>
                </div>
                <div className={styles.content}>
                    <AboutTitle text={'Lover'} />
                    <div className={styles.content_flex}>
                        <AboutTitle text={'flower'} />
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.content_blackBackground}>
                        <AboutSubtitle text={'молодая команда разных людей с одинаковыми ценностями.'} />
                        <p className={styles.about_text}>
                            Мы считаем, что удовольствие от качества длится дольше, чем удовольствие <br/>
                            от низкой цены. И поэтому в создание нашей букетерии мы вложили все, <br/>
                            чем располагаем: душу, сердце, время и мечты! Мы готовы обещать вам только то, <br/>
                            что можем сделать. А делаем мы только самое качественное, самое интересное <br/>
                            и обязательно уникальное. Мы всегда честны со своими клиентами во всем – <br/>
                            в нашем каталоге только те букеты, которые вы действительно сможете купить.
                        </p>
                    </div>
                    <AboutTitle text={'гарантии'} />
                    <div className={styles.block_garant}>
                        <AboutSubtitle
                            text={'Каждый цветок уникален и чтобы вы были уверены в качестве, мы пришлем ' +
                            'вам фотографию именно вашего букета до его отправки получателю. Вся предоставленная ' +
                            'Вами информация конфиденциальна и будет известна только нам и курьеру ' +
                            'для осуществления доставки.'}
                        />
                    </div>
                    <div className={styles.zakaz_buket}>
                        <AboutTitle text={'Заказ букетов на сайте компании Lower Flower – это:'} />
                    </div>
                    <div className={styles.content_table}>
                        <AboutTable />
                    </div>
                </div>
                <div className={styles.content_box_bottom}>
                    <AboutTitle text={'Природная гармония цвета, '} />
                    <AboutTitle text={'неповторимость бутонов , '} />
                    <AboutTitle text={'и Ваши чувства, '} />
                    <AboutTitle text={'в нежных лепестках, '} />
                    <AboutTitle text={'не оставят никого, '} />
                    <AboutTitle text={'равнодушным. '} />
                    <div className={styles.box_bottom_bottom}>
                        <AboutSubtitle text={'Вы выбираете и заказываете цветочный сюрприз, '} />
                        <AboutSubtitle text={'а мы вкладываем в него душу! '} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;