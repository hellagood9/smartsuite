import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";

import { userSignInReducer, userSignUpReducer } from "./user/user.reducer";
import { productsReducer, productReducer } from "./products/product.reducer";
import { cartReducer } from "./cart/cart.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  productList: productsReducer,
  product: productReducer,
  cart: cartReducer,
  userSignedIn: userSignInReducer,
  userSignedUp: userSignUpReducer,
});

const cartItems = Cookie.getJSON("cartItems") || undefined;
const userInfo = Cookie.getJSON("userInfo") || undefined;

const initialState = {
  cart: cartItems,
  userSignedIn: userInfo,
};

export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
