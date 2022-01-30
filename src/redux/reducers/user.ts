export interface bouquestState {
  bouquest: Ibuket[];
  loading: boolean;
  error: null | string;
}
interface Ibuket {
    id: number,
    name: string,
    compound: string,
    price: string,
    description: string,
    category: number[],
    discount: string,
    totalSales: string,
    label: string,
    images: string
}
export enum bouquestActionTypes {
  FETCH_BOUQUEST = "FETCH_BOUQUEST",
  FETCH_BOUQUEST_SUCCESS = "FETCH_BOUQUEST_SUCCESS",
  FETCH_BOUQUEST_ERROR = "FETCH_BOUQUEST_ERROR",
}
export interface fetchBouquestAction {
  type: bouquestActionTypes.FETCH_BOUQUEST;
}
export interface fetchBouquestSuccessAction {
  type: bouquestActionTypes.FETCH_BOUQUEST_SUCCESS;
  payload: any[];
}
export interface fetchBouquesErrortAction {
  type: bouquestActionTypes.FETCH_BOUQUEST_ERROR;
  payload: string;
}

export type bouquestAction =
  | fetchBouquestAction
  | fetchBouquestSuccessAction
  | fetchBouquesErrortAction;

