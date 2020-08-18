import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";

import { fetchProduct } from "../../store/products/product.actions";

import Layout from "../../components/Common/Layout/Layout";
import Counter from "../../components/Counter/Counter";
import Rating from "../../components/Rating/Rating";

import styles from "./ProductDetails.module.scss";
import Spinner from "../../components/Spinner/Spinner";

const ProductDetails = (props) => {
  const { id: productId } = props.match.params;

  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.product);

  const { product, loading, error } = selectedProduct;

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  const {
    category,
    excerpt,
    imgUrl,
    price,
    priceDiscount,
    rating,
    title,
    stock,
  } = product;

  const handleAddToCart = (quantity) => {
    props.history.push({
      pathname: "/cart",
      data: {
        productId,
        qty: quantity,
      },
    });
  };

  return (
    <Layout
      title={`Starbucks Store: ${title}`}
      description="Find your best brew!"
    >
      {loading && <Spinner />}
      {!loading && error && <div>{error}</div>}

      <div
        className={classNames(
          styles["product"],
          styles["animated"],
          styles["fadeIn"],
          styles["fast"]
        )}
      >
        <h1 className={styles["product__title"]}>{title}</h1>
        <p className={styles["product__excerpt"]}>{excerpt}</p>

        {!loading && (
          <>
            <div className={styles["product__more"]}>
              <span className={styles["product__category"]}>
                <Link to="/category">{category}</Link>
              </span>
              <Rating rating={rating} />
            </div>

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
          </>
        )}

        <div className={styles["qty-price"]}>
          {stock > 0 && (
            <Counter
              initial={1}
              min={1}
              max={stock}
              handleClick={handleAddToCart}
            />
          )}

          {stock === 0 && <span>This product is out of stock</span>}
        </div>

        {imgUrl && <img src={`/img/${imgUrl}`} alt={title} />}
      </div>
    </Layout>
  );
};

export default ProductDetails;
