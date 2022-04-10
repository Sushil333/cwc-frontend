import { combineReducers } from "redux";
import { loginReducer, authStateReducer } from "./authReducer";

export const reducers = combineReducers({
  loginState: loginReducer,
  authState: authStateReducer
});
