import React from "react";

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

export default CounterFlat;
