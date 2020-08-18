import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from "./user.types";

const userSignInReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        userInfo: action.payload,
      };
    case SIGN_IN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const userSignUpReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return { ...state, loading: true };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        userInfo: action.payload,
      };
    case SIGN_UP_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export { userSignInReducer, userSignUpReducer };
