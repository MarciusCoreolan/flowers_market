export interface feedbackState {
  feedback: Ifeedback[];
  loading: boolean;
  error: null | string;
}

export interface Ifeedback {
  id: number;
  bouquetsId: number;
  author: string;
  authorEmail: string;
  date: string;
  text: string;
  evaluation: string;
}

export enum feedbackActionTypes {
  FETCH_FEEDBACK = "FETCH_FEEDBACK",
  FETCH_FEEDBACK_SUCCESS = "FETCH_FEEDBACK_SUCCESS",
  FETCH_FEEDBACK_ERROR = "FETCH_FEEDBACK_ERROR",
}

export interface fetchFeedbackAction {
  type: feedbackActionTypes.FETCH_FEEDBACK;
}
export interface fetchFeedbackSuccessAction {
  type: feedbackActionTypes.FETCH_FEEDBACK_SUCCESS;
  payload: any[];
}
export interface fetchFeedbackErrorAction {
  type: feedbackActionTypes.FETCH_FEEDBACK_ERROR;
  payload: string;
}

export type feedbackAction =
  | fetchFeedbackAction
  | fetchFeedbackSuccessAction
  | fetchFeedbackErrorAction;