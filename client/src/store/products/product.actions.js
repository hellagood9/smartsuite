import axios from "axios";

import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_DETAILS_REQUEST,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_DETAILS_FAILURE,
} from "./product.types";

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(fetchProductsRequest());

    const { data } = await axios("/api/products");

    dispatch(fetchProductsSuccess(data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};

const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const fetchProduct = (id) => async (dispatch) => {
  try {
    dispatch(fetchProductDetailsRequest());

    const { data } = await axios(`/api/products/${id}`);

    dispatch(fetchProductDetailsSuccess(data));
  } catch (error) {
    dispatch(fetchProductDetailsFailure(error.message));
  }
};

const fetchProductDetailsRequest = () => ({
  type: FETCH_PRODUCT_DETAILS_REQUEST,
});

const fetchProductDetailsSuccess = (product) => ({
  type: FETCH_PRODUCT_DETAILS_SUCCESS,
  payload: product,
});

const fetchProductDetailsFailure = (error) => ({
  type: FETCH_PRODUCT_DETAILS_FAILURE,
  payload: error,
});
