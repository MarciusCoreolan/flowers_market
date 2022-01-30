import React from "react";
import Card from "../cards/Card";
import style from "./slider.module.scss";
import Carousel from "react-elastic-carousel";
import prev from "../../images/left_button.png";
import next from "../../images/right_button.png";
import { ISlider } from "../../types/componentTypes";

function Slider({ items }: ISlider) {

  const breakPoints: any = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className={style.slider}>
      <Carousel
        itemsToShow={3}
        breakPoints={breakPoints}
        isRTL={false}
        pagination={false}
        itemPadding={[0, 0, 0, 0]}
        className={style.slider_carousel}
        renderArrow={({ type, onClick }) => (
          <div onClick={onClick}>
            {type === "PREV" ? (
              <img
                className={style.slider_arrow_prev}
                src={prev}
                alt="scroll left"
              />
            ) : (
              <img
                className={style.slider_arrow_next}
                src={next}
                alt="scroll right"
              />
            )}
          </div>
        )}
      >
        {items.map((bouquet: any) => (
          <div className={style.slide} key={bouquet.id}>
            <Card bouquest={bouquet} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
