import React from "react";
import classNames from "classnames";

import Layout from "../../components/Common/Layout/Layout";
import Alert from "../../components/Alert/Alert";

import { MdCheck } from "react-icons/md";

import styles from "./Order.module.scss";

const Order = () => {
  return (
    <Layout title="Starbucks Store: Signin" description="Find your best brew!">
      <div
        className={classNames(
          styles["order"],
          styles["animated"],
          styles["fadeIn"],
          styles["fast"]
        )}
      >
        <h1 className={styles["title"]}>Successful Order</h1>

        <Alert title="Yeaaah :)" type="success" icon={MdCheck}>
          <p>Thank you for your order!</p>
        </Alert>
      </div>
    </Layout>
  );
};

export default Order;
