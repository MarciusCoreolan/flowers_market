import {Ibuket} from "./bouquestTypes"

export interface IButton {
    text: string,
    click?:any,
    disabled?: boolean,
}
export interface ISlider {
    items: Ibuket[]
}

