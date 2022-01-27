import React from "react";
import style from "./button.module.scss";
import {IButton} from "../../types/componentTypes";

function Button({ text, click, disabled }:IButton) {
  return (
    <button
      className={style.button}
      onClick={(e) => {
        click(e);
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
