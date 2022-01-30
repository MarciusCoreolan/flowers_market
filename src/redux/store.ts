import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { bouquestReducer } from "./reducers/bouquetsReducer";

const rootReducer = combineReducers({
  bouquest: bouquestReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type reducerState = ReturnType<typeof rootReducer>;
