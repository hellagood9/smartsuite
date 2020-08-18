import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products/product.actions";

import Layout from "../../components/Common/Layout/Layout";
import ProductList from "../../components/ProductList/ProductList";
import WithSpinner from "../../components/WithSpinner/WithSpinner";

const ProductListWithSpinner = WithSpinner(ProductList);

const Home = () => {
  const productList = useSelector((state) => state.productList);
  const { loading } = productList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Layout
      title="Welcome to Starbucks Store"
      description="Find your best brew!"
    >
      {/* <ProductList /> */}
      <ProductListWithSpinner isLoading={loading} />
    </Layout>
  );
};

export default Home;
