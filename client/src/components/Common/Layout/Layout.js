import React from "react";
import PropTypes from "prop-types";

import NavBar from "../../NavBar/NavBar";
import Footer from "../Footer/Footer";

import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles["container"]}>
      <NavBar />
      <main className={styles["content"]}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
