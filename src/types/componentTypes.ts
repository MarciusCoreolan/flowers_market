import {Ibuket} from "./bouquestTypes"

export interface IButton {
    text: string,
    click?:any,
    disabled?: boolean,
}

export interface ITitle {
    text: string
}

export interface ISlider {
    items: Ibuket[]
}

