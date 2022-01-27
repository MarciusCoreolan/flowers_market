import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type reducerState = ReturnType<typeof rootReducer>;
