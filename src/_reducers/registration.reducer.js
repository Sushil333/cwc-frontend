import { userConstants } from "../_constants";

export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { loading: true };
    case userConstants.REGISTER_SUCCESS:
      return { loading: false, user: state.user };
    case userConstants.REGISTER_FAILURE:
      return { loading: false };
    default:
      return state;
  }
}
