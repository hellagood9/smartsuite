import axios from "axios";
import Cookie from "js-cookie";

import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  REMOVE_FROM_CART_REQUEST,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE,
} from "./cart.types";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    dispatch(addToCartRequest());

    const { data } = await axios(`/api/products/${productId}`);

    dispatch(addToCartSuccess(data, qty));

    const { cart: cartItems } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
  } catch (error) {
    dispatch(addToCartFailure(error.message));
  }
};

const addToCartRequest = () => ({
  type: ADD_TO_CART_REQUEST,
});

const addToCartSuccess = (product, qty) => ({
  type: ADD_TO_CART_SUCCESS,
  payload: { ...product, qty },
});

const addToCartFailure = (error) => ({
  type: ADD_TO_CART_FAILURE,
  payload: error,
});

export const removeFromCart = (productId) => async (dispatch, getState) => {
  try {
    dispatch(removeFromCartRequest());

    dispatch(removeFromCartSuccess(productId));

    const { cart: cartItems } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
  } catch (error) {
    dispatch(removeFromCartFailure(error.message));
  }
};

const removeFromCartRequest = () => ({
  type: REMOVE_FROM_CART_REQUEST,
});

const removeFromCartSuccess = (productId) => ({
  type: REMOVE_FROM_CART_SUCCESS,
  payload: productId,
});

const removeFromCartFailure = (error) => ({
  type: REMOVE_FROM_CART_FAILURE,
  payload: error,
});
