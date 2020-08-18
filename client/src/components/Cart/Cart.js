import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { MdShoppingBasket } from "react-icons/md";
import styles from "./Cart.module.scss";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartQty = cartItems && cartItems.reduce((ac, cv) => ac + cv.qty, 0);

  console.log("cartItems", cartItems);

  return (
    <div className={styles["cart"]}>
      <Link to="/cart">
        <MdShoppingBasket className={styles["cart__icon"]} />

        {cartQty > 0 && (
          <div className={styles["cart__badge"]}>
            <span>{cartQty}</span>
          </div>
        )}
      </Link>
    </div>
  );
};

export default Cart;
