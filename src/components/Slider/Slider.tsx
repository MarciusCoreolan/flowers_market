import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card";

function Slider() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
        <Carousel
            itemsToShow={3}
            isRTL={false}
            className={'slider'}
            pagination={false}
        >
          {items.map((item) => {
            return <Card item={item} key={item}/>;
          })}
        </Carousel>
  );
}

export default Slider;
