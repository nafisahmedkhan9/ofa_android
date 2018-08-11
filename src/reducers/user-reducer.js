import * as USER_CONSTANT from "../actions/user-actions";

export default function userReducer(state = "", { type, payload }) {
  switch (type) {
    case USER_CONSTANT.APISUCCESS:
      return Object.assign({}, state, payload.user);

    
    
    case USER_CONSTANT.LOGIN_ERROR:
      return payload.user;
    default:
      return state;
  }
}
