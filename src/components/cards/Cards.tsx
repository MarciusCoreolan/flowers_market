import styles from "./cards.module.scss";
import Card from "./Card"
import { useTypeSelector } from "../../hooks/useTypeSelector";

function Cards() {
  const { bouquest, error, loading }: any = useTypeSelector(
    (state) => state.bouquest
  );


  return (
    <div className={styles["cards-main"]}>
      <div className={styles.filters}>
        <div className={styles.filt}>
          <div className={styles["card-filt"]}></div>
          <div>
            <div className={styles.heading}>по формату</div>
            <div className={styles["card-filt"]}>
              <input type="checkbox" /> <span>букет</span>
            </div>
            <div className={styles["card-filt"]}>
              <input type="checkbox" /> <span>в вазе</span>
            </div>
            <div className={styles["card-filt"]}>
              <input type="checkbox" /> <span>в конверте</span>
            </div>
            <div className={styles["card-filt"]}>
              <input type="checkbox" /> <span>в корзине</span>
            </div>
            <div className={styles["card-filt"]}>
              <input type="checkbox" /> <span>в шляпной коробке</span>
            </div>
            <div className={styles["card-filt"]}>
              <input type="checkbox" /> <span>в ящике</span>
            </div>
          </div>
          <div>
            <div className={styles.heading}>стоимость</div>
            <div className={styles["card-filt"]}>Цена: 50.00 ₽ – 400.00 ₽</div>
          </div>
          <div className={styles["card-filt"]}>
            <div className={styles["filter-button"]}>сбросить фильтр</div>
          </div>
        </div>
      </div>
      <div className={styles.cards}>
        {bouquest.map((bouquest: any,index: number) => {
          return <Card bouquest={bouquest} index={index} />;
        })}
      </div>
    </div>
  );
}

export default Cards;
