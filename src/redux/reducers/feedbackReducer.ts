import { Dispatch } from "react";
import {
  feedbackAction,
  feedbackState,
  feedbackActionTypes,
} from "../../types/feedbackTypes";

const initialState: feedbackState = {
  feedback: [],
  loading: false,
  error: null,
};

export const feedbackReducer = (
  state = initialState,
  action: feedbackAction
): feedbackState => {
  switch (action.type) {
    case feedbackActionTypes.FETCH_FEEDBACK:
      return {
        ...state,
        loading: true,
        feedback: [],
        error: null,
      };
    case feedbackActionTypes.FETCH_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        feedback: action.payload,
      };
    case feedbackActionTypes.FETCH_FEEDBACK_ERROR:
      return {
        ...state,
        loading: false,
        feedback: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export const loadFeedback = (id:string | undefined) => {
  return (dispatch: Dispatch<feedbackAction>) => {
    try {
      dispatch({type: feedbackActionTypes.FETCH_FEEDBACK});
    fetch(`http://localhost:3001/feedback/${id}`)
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: feedbackActionTypes.FETCH_FEEDBACK_SUCCESS,payload: json
      })
      if (json.error) {
        dispatch({
          type: feedbackActionTypes.FETCH_FEEDBACK_ERROR,
          payload: json.error,
        });
      }
    })
    } catch (error) {
      console.log(error);
    }
  }
}
