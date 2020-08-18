import React from "react";
import PropTypes from "prop-types";

import styles from "./WithSpinner.module.scss";

const WithSpinner = (WrappedComponent) => {
  const spinner = ({ isLoading, ...props }) =>
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

  spinner.propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };
  return spinner;
};

WithSpinner.propTypes = {
  WrappedComponent: PropTypes.element,
};

export default WithSpinner;
