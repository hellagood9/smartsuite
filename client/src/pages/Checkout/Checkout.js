import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "../../store/cart/cart.actions";

import Layout from "../../components/Common/Layout/Layout";
import Button from "../../components/Button/Button";
import CartItem from "../../components/CartItem/CartItem";

import styles from "./Checkout.module.scss";

const Checkout = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const { data } = props.location;
  const productId = data && data.productId;
  const productQty = data && +data.qty;

  useEffect(() => {
    productId && dispatch(addToCart(productId, productQty));
  }, [productId, productQty, dispatch]);

  const handlerCheckout = () => {
    props.history.push("/order");
  };

  return (
    <Layout
      title={`Starbucks Store | Checkout`}
      description="The same coffee now to enjoy at home!"
    >
      <div
        className={classNames(
          styles["checkout"],
          styles["animated"],
          styles["fadeIn"],
          styles["fast"]
        )}
      >
        <h1 className={styles["title"]}>Checkout page</h1>

        {cartItems && !cartItems.length && <h3>Cart is empty</h3>}

        <CartItem items={cartItems} />

        {cartItems.length > 0 && (
          <div className={styles["checkout__actions"]}>
            <h4 className={styles["subtotal"]}>
              Subtotal: $
              {cartItems &&
                cartItems
                  .reduce((ac, cv) => ac + cv.price * cv.qty, 0)
                  .toFixed(2)}
            </h4>

            <Button
              disabled={!cartItems.length}
              type="terciary"
              handleClick={handlerCheckout}
              label="Proceed to Checkout"
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

Checkout.propTypes = {
  location: PropTypes.shape({
    data: PropTypes.shape({
      productId: PropTypes.any.isRequired,
      qty: PropTypes.number.isRequired,
    }),
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default Checkout;
