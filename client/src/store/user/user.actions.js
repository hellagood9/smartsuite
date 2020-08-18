import axios from "axios";
import Cookie from "js-cookie";

import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from "./user.types";

const signIn = (email, password) => async (dispatch, getState) => {
  try {
    dispatch(signInRequest(email, password));

    const { data } = await axios.post("/api/users/signin", { email, password });

    dispatch(signInSuccess(data));

    const { userSignedIn: userInfo } = getState();
    Cookie.set("userInfo", JSON.stringify(userInfo));
  } catch (error) {
    dispatch(signInFailure(error.message));
  }
};

const signInRequest = (email, password) => ({
  type: SIGN_IN_REQUEST,
  payload: { email, password },
});

const signInSuccess = (user) => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});

const signInFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  payload: error,
});

const signUp = (name, email, password) => async (dispatch, getState) => {
  try {
    dispatch(signUpRequest(name, email, password));

    const { data } = await axios.post("/api/users/signup", {
      name,
      email,
      password,
    });

    dispatch(signUpSuccess(data));

    const { userSignedUp: userInfo } = getState();
    Cookie.set("userInfo", JSON.stringify(userInfo));
  } catch (error) {
    dispatch(signUpFailure(error.message));
  }
};

const signUpRequest = (name, email, password) => ({
  type: SIGN_UP_REQUEST,
  payload: { name, email, password },
});

const signUpSuccess = (user) => ({
  type: SIGN_UP_SUCCESS,
  payload: user,
});

const signUpFailure = (error) => ({
  type: SIGN_UP_FAILURE,
  payload: error,
});

export { signIn, signUp };
