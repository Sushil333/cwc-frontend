import { combineReducers } from "redux";
import { loginReducer, authStateReducer, registerReducer } from "./authReducer";

export const reducers = combineReducers({
  loginState: loginReducer,
  registerState: registerReducer,
  authState: authStateReducer
});
