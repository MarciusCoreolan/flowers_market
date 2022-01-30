import React, {useEffect, useRef, useState} from "react";
import Card from "./Card";
import style from "./slider.module.scss";
import right_button from "../../images/right_button.png";
import left_button from "../../images/left_button.png";

function Slider({ items }: any) {
  const slider: any = useRef(null);
  const [prev, setPrev] = useState(true);
  const [next, setNext] = useState(false);
  const [position, setPosition] = useState(0);

  const prevHandler = () => {};
    console.log(position, 'position')
  const nextHandler = () => {
      console.log(items.length * 100)
      if (position <= -(items.length * 100)){
          setNext(true)
          setPrev(false)
      } else {
          setPosition(position - 300);
          setPrev(false)
          // console.log('false')
      }
  };

  useEffect(()=>{
      slider.current.childNodes.forEach((item: any) => {
          item.style = `transform: translateX(${position}px)`;
      });
  },[position, next, prev])

  return (
    <div className={style.slider}>
      <div className={style.slider_track} ref={slider}>
        {items.map((item: any) => (
          <Card item={item} key={item} />
        ))}
      </div>
      <button
        className={style.slider_button_left}
        onClick={prevHandler}
        disabled={prev}
      >
        <img src={left_button} alt="" />
      </button>
      <button
        className={style.slider_button_right}
        onClick={nextHandler}
        disabled={next}
      >
        <img src={right_button} alt="" />
      </button>
    </div>
  );
}

export default Slider;
