import React from "react";
import PropTypes from "prop-types";

import styles from "./CounterFlat.module.scss";

const CounterFlat = ({
  incrementCount,
  decrementCount,
  qty,
  disabledInc,
  disabledDec,
}) => {
  return (
    <>
      <div className={styles["counter"]}>
        <button
          className={styles["minus"]}
          onClick={decrementCount}
          disabled={disabledDec}
        >
          -
        </button>
        <div className={styles["amount"]}>{qty}</div>
        <button
          className={styles["add"]}
          onClick={incrementCount}
          disabled={disabledInc}
        >
          +
        </button>
      </div>
    </>
  );
};

CounterFlat.propTypes = {
  incrementCount: PropTypes.func,
  decrementCount: PropTypes.func,
  qty: PropTypes.number.isRequired,
  disabledInc: PropTypes.bool,
  disabledDec: PropTypes.bool,
};

export default CounterFlat;
