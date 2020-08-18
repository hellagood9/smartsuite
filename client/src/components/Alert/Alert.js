import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Alert.module.scss";

const Alert = ({ children, title, type, icon: Icon, full }) => {
  return (
    <div
      className={classNames([styles["alert"]], {
        [styles[`alert-${type}`]]: type,
        [styles[`alert-full`]]: full,
      })}
    >
      <div>{Icon && <Icon className={styles["icon"]} />}</div>
      <div className={styles["text"]}>
        <h2 className={styles["label"]}>{title}</h2>
        {children}
      </div>
    </div>
  );
};

Alert.defaultProps = {
  type: "neutral",
  full: false,
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  icon: PropTypes.elementType,
  full: PropTypes.bool,
};

export default Alert;
