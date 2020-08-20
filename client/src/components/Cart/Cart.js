import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCartItemsCount } from "../../store/cart/cart.selectors";

import { MdShoppingBasket } from "react-icons/md";
import styles from "./Cart.module.scss";

const Cart = () => {
  const allState = useSelector((state) => state);
  const cartQty = selectCartItemsCount(allState);

  return (
    <Link to="/cart" title="Go to cart">
      <div className={styles["cart"]}>
        <MdShoppingBasket className={styles["cart__icon"]} />

        {cartQty > 0 && (
          <div className={styles["cart__badge"]}>
            <span>{cartQty}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Cart;
