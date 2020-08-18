import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  REMOVE_FROM_CART_REQUEST,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE,
} from "./cart.types";

const initialCartState = {
  cartItems: [],
  loading: false,
  error: null,
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
      return { ...state, loading: true };

    case ADD_TO_CART_SUCCESS:
      const item = action.payload;
      const product =
        state.cartItems &&
        state.cartItems.find((product) => product._id === item._id);

      const existInCart = product && [
        ...state.cartItems.filter((i) => i._id !== product._id),
        { ...product, qty: product.qty + item.qty },
      ];

      return {
        ...state,
        loading: false,
        cartItems: product ? existInCart : [...state.cartItems, action.payload],
      };

    case ADD_TO_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case REMOVE_FROM_CART_REQUEST:
      return { ...state, loading: true };

    case REMOVE_FROM_CART_SUCCESS:
      const productId = action.payload;
      const itemsInCart = [
        ...state.cartItems.filter((i) => i._id !== productId),
      ];

      return { ...state, loading: false, cartItems: itemsInCart };

    case REMOVE_FROM_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export { cartReducer };
