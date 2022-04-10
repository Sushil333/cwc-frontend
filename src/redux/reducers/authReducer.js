import * as actionType from "../actionTypes";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.LOGIN_REQUEST:
      return { ...state, loading: true };

    case actionType.LOGIN_SUCCESS:
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      return { ...state, loading: false, payload: action.payload };

    case actionType.LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};


/*
* maintaiing authentication state
*/
const initialState = {
  userInfo: null,
  isAuthenticated: false,
}

export const authStateReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionType.IS_AUTHENTICATED:
      return { ...state, isAuthenticated: true, userInfo: action.payload }

    default:
      return state
  }
}