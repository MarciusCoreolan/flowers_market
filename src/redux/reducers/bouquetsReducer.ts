import { Dispatch } from "redux";
import { bouquestActionTypes, bouquestAction, bouquestState } from "./user";

const initialState: bouquestState = {
  bouquest: [],
  loading: false,
  error: null,
};

export const bouquestReducer = (
  state = initialState,
  action: bouquestAction
): bouquestState | undefined => {
  switch (action.type) {
    case bouquestActionTypes.FETCH_BOUQUEST:
      return { loading: true, error: null, bouquest: [] };
    case bouquestActionTypes.FETCH_BOUQUEST_ERROR:
      return { loading: false, error: action.payload, bouquest: [] };
    case bouquestActionTypes.FETCH_BOUQUEST_SUCCESS:
      return { loading: false, error: null, bouquest: action.payload };
    default:
      return state;
  }
};

export const loadBouquest = () => {
  return async (dispatch: Dispatch<bouquestAction>) => {
    dispatch({
      type: bouquestActionTypes.FETCH_BOUQUEST,
    });
    fetch("http://localhost:3001/bouquets")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: bouquestActionTypes.FETCH_BOUQUEST_SUCCESS,
          payload: json,
        });
      });
  };
};
