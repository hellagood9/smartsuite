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
