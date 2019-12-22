import { combineReducers } from "redux-immutable";
import loginFormReducer from "./components/LoginForm/reducer";
import { LOGIN_REDUCER } from "./components/LoginForm/constants";

export default function createReducer() {
  return combineReducers({
    [LOGIN_REDUCER]: loginFormReducer
  });
}
