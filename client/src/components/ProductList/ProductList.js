import React from "react";
import { useSelector } from "react-redux";

import Product from "../Product/Product";

import styles from "./ProductList.module.scss";

const ProductList = () => {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      <ul className={styles["product-list"]}>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </ul>
    </>
  );
};

export default ProductList;
