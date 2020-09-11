import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products/product.actions";

import SkeletonLoader from "tiny-skeleton-loader-react";

import Layout from "../../components/Common/Layout/Layout";
// import SideBar from "../../components/Common/SideBar/SideBar";
import ProductList from "../../components/ProductList/ProductList";
import WithSpinner from "../../components/WithSpinner/WithSpinner";

import styles from "./Home.module.scss";

const ProductListWithSpinner = WithSpinner(ProductList);

const Home = () => {
  const productList = useSelector((state) => state.productList);
  const { loading } = productList;

  const dispatch = useDispatch();

  useEffect(() => {
    !productList.products.length && dispatch(fetchProducts());
  }, [dispatch, productList.products.length]);

  return (
    <Layout
      title="Welcome to Starbucks Store"
      description="Find your best brew!"
    >
      {loading && (
        <ul className={styles["fake-list"]}>
          {[...Array(8)].map((_, i) => (
            <li className={styles["fake"]} key={i}>
              <SkeletonLoader
                key={i}
                block
                height="272px"
                background="#f7f7f7"
              />
            </li>
          ))}
        </ul>
      )}

      <div style={{ display: "flex" }}>
        {/* <SideBar /> */}
        <ProductListWithSpinner isLoading={loading} />
      </div>
    </Layout>
  );
};

export default Home;
