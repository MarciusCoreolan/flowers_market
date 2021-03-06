import { Ibuket } from "./bouquestTypes";

export interface IButton {
  text: string;
  click?: any;
  disabled?: boolean;
}

export interface ITitle {
    text: string
}

export interface IAboutTitle {
    text: string
}

export interface IAboutSubTitle {
    text: string
}

export interface ISlider {
  items: Ibuket[];
}

export interface IInput {
    placeholder: string
}

export interface IHeader {
    active: any;
    setActive: any
}

export interface ICart {
    active: any;
    setActive: any
}

export interface Ifeedback {
  id: number;
  bouquetsId: number;
  author: string;
  authorEmail: string;
  date: string;
  text: string;
  evaluation: number;
}
