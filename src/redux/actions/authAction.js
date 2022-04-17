import * as actionType from "../actionTypes";
import * as api from '../../api/index'

export const login = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: actionType.LOGIN_REQUEST });

    const { data } = await api.signIn(formData);

    dispatch({
      type: actionType.LOGIN_SUCCESS,
      payload: data,
    });

    dispatch({ type: actionType.IS_AUTHENTICATED, payload: data });

    navigate("/explore", { replace: true });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: actionType.LOGIN_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const register = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: actionType.REGISTER_REQUEST });

    const { data } = await api.signUp(formData);

    dispatch({
      type: actionType.REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({ type: actionType.IS_AUTHENTICATED, payload: data });

    navigate("/explore", { replace: true });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: actionType.REGISTER_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const isAuthenticated = () => (dispatch) => {
  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
  dispatch({ type: actionType.IS_AUTHENTICATED, payload: userInfo });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: actionType.LOGOUT });
  document.location.href = "/login";
};
