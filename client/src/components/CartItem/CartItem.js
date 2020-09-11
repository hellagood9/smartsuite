import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cart/cart.actions";

import CounterFlat from "../../components/CounterFlat/CounterFlat";
import Alert from "../../components/Alert/Alert";

import { MdErrorOutline, MdDelete } from "react-icons/md";

import styles from "./CartItem.module.scss";

const CartItem = ({ items }) => {
  const dispatch = useDispatch();

  const incrementCount = (productId) => {
    dispatch(addToCart(productId, 1));
  };
  const decrementCount = (productId) => {
    dispatch(addToCart(productId, -1));
  };

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <ul>
      {items &&
        items.map((item) => {
          const {
            _id,
            title,
            excerpt,
            price,
            priceDiscount,
            imgUrl,
            stock,
            qty: prodQty,
          } = item;

          const isOutOfStock = stock === 0;

          if (prodQty === 0) return null;

          return (
            <li
              key={item._id}
              className={classNames(
                {
                  [styles["outOfStock"]]: isOutOfStock,
                },
                [styles["product"]]
              )}
            >
              <Link to={`/products/${_id}`}>
                <div className={styles["product__body"]}>
                  <div className={styles["product__image"]}>
                    <img loading="lazy" src={`/img/${imgUrl}`} alt={title} />
                  </div>

                  <div className={styles["wrapper"]}>
                    <div className={styles["product__title"]}>{title}</div>

                    <div className={styles["product__excerpt"]}>{excerpt}</div>

                    <div className={styles["product__price"]}>
                      {priceDiscount !== 0 ? (
                        <>
                          <span className={styles["price--discount"]}>
                            ${price}
                          </span>
                          <span className={styles["price"]}>
                            ${priceDiscount}
                          </span>
                        </>
                      ) : (
                        <span className={styles["price"]}>${price}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>

              <div className={styles["actions"]}>
                <CounterFlat
                  incrementCount={() => prodQty < stock && incrementCount(_id)}
                  decrementCount={() => decrementCount(_id)}
                  disabledInc={prodQty >= stock}
                  disabledDec={prodQty === 1}
                  qty={prodQty}
                />

                {prodQty >= stock && (
                  <Alert title="Oops ..." type="warning" icon={MdErrorOutline}>
                    <p>
                      The maximum stock available for this product is {stock}
                    </p>
                  </Alert>
                )}

                <button
                  type="button"
                  onClick={() => removeFromCartHandler(_id)}
                >
                  <span className={styles["delete"]}>
                    <MdDelete />
                    Remove
                  </span>
                </button>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

CartItem.defaultProps = {
  items: [],
};

CartItem.propTypes = {
  items: PropTypes.array.isRequired,
};

export default React.memo(CartItem);
