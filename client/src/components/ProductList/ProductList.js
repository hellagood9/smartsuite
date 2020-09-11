import React from "react";
import { useSelector } from "react-redux";

import { selectProductList } from "../../store/products/product.selectors";

import Product from "../Product/Product";
import Spinner from "../Spinner/Spinner";

import styles from "./ProductList.module.scss";

const ProductList = () => {
  const allState = useSelector((state) => state);
  const { loading, error } = allState.productList;

  const products = selectProductList(allState);

  return (
    <>
      {loading && <Spinner />}
      {error && <div>{error}</div>}

      <ul className={styles["product-list"]}>
        {products.map((product) => (
          <Product key={product._id} product={product} loading={loading} />
        ))}
      </ul>
    </>
  );
};

export default ProductList;
