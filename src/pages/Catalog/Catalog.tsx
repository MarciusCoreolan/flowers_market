import Header from "../../components/Header/Header";
import styles from "./catalog.module.scss";
import Info from "../../components/Info/Info";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Index";

function Catalog() {
  return (
    <div className={styles.catalog}>
      <div className={styles.bgImage}>
        <div className="container">
        <Header />
          <div className={styles["catalog-main"]}>
            <div className={styles.catalogBg}>
              <div className={styles["catalog-title-one"]}>каталог</div>
              <div>
                <div className={styles["catalog-title-two"]}>букетов</div>
                <div className={styles["catalog-description"]}>
                  В нашем магазине самый большой выбор букетов для любых
                  событий:
                </div>
              </div>
              <div className={styles.options}>
                <div>Букеты из гипсофил</div>
                <div>Букеты из ромашек</div>
                <div>Букеты из хризантем</div>
                <div>Комнатные цветы в горшках</div>
                <div>Монобукеты</div>
                <div>Сборные букеты</div>
                <div>Букет на праздник</div>
                <div>Композиции из цветов</div>
                <div>Конверты</div>
                <div>Открытки</div>
                <div>Подарки</div>
                <div>Букеты из сухоцветов</div>
                <div>Шары</div>
                <div>Популярное</div>
                <div>Букеты роз</div>
                <div>Цветы на похороны</div>
                <div>Упаковка подарков</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      <div className={styles.filtr}>
        <select>
          <option value="">по популярности</option>
          <option value="">по стоимости</option>
          <option value="">по цветку</option>
        </select>
      </div>
        <Cards />
      </div>
    </div>
  );
}

export default Catalog;
