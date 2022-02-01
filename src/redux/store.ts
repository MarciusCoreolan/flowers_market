import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { bouquestReducer } from "./reducers/bouquetsReducer";
import { feedbackReducer } from "./reducers/feedbackReducer";

const rootReducer = combineReducers({
  bouquest: bouquestReducer,
  feedback: feedbackReducer,
});


export const store = createStore(rootReducer, applyMiddleware(thunk));

export type reducerState = ReturnType<typeof rootReducer>;
