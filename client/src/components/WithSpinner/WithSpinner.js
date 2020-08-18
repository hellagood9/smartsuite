import React from "react";

import styles from "./WithSpinner.module.scss";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...props }) =>
  isLoading ? (
    <div className={styles["wrapper"]}>
      <div className={styles["snippet"]} data-title=".dot-pulse">
        <div className={styles["stage"]}>
          <div className={styles["dot-pulse"]}></div>
        </div>
      </div>
    </div>
  ) : (
    <WrappedComponent {...props} />
  );

export default WithSpinner;
