import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useSelector } from "react-redux";

import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import Rating from "../Rating/Rating";

import styles from "./Product.module.scss";

const Product = ({ product }) => {
  const itemsInCart = useSelector((state) => state.cart.cartItems);

  const isInCart =
    itemsInCart && itemsInCart.find((item) => item._id === product._id);

  const {
    _id,
    title,
    excerpt,
    price,
    priceDiscount,
    imgUrl,
    liked,
    rating,
    stock,
  } = product;

  const isOutOfStock = stock === 0;

  return (
    <li
      className={classNames(
        {
          [styles["outOfStock"]]: isOutOfStock,
        },
        styles["product"],
        styles["animated"],
        styles["fadeIn"]
      )}
    >
      <div className={styles["product__header"]}>
        {isInCart && isInCart.qty > 0 && (
          <div className={styles["product-badge"]}>{isInCart.qty}</div>
        )}

        <div className={styles["product-liked"]}>
          {liked ? (
            <MdFavorite />
          ) : (
            <MdFavoriteBorder style={{ color: "#848484" }} />
          )}
        </div>
      </div>

      <Link to={`/products/${_id}`}>
        <div className={styles["product__body"]}>
          <div className={styles["product__image"]}>
            <img src={`/img/${imgUrl}`} alt={title} />
          </div>

          <Rating rating={rating} />

          <div className={styles["product__title"]}>{title}</div>

          <div className={styles["product__excerpt"]}>{excerpt}</div>

          <div className={styles["product__price"]}>
            {priceDiscount !== 0 ? (
              <>
                <span className={styles["price--discount"]}>${price}</span>
                <span className={styles["price"]}>${priceDiscount}</span>
              </>
            ) : (
              <span className={styles["price"]}>${price}</span>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default React.memo(Product);
