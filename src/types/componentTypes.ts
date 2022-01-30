import {Ibuket} from "../redux/reducers/user";

export interface IButton {
    text: string,
    click?:any,
    disabled?: boolean,
}
export interface ISlider {
    items: Ibuket[]
}



