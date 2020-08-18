import React, { useState } from "react";

import Button from "../Button/Button";
import Alert from "../Alert/Alert";

import styles from "./Counter.module.scss";

import { MdErrorOutline, MdShoppingBasket } from "react-icons/md";

const ItemCount = ({ initial = 1, min = 1, max, handleClick }) => {
  const [count, setCount] = useState(initial);

  const incrementCount = () => count < max && setCount((count) => count + 1);
  const decrementCount = () => count > min && setCount((count) => count - 1);

  return (
    <>
      <div className={styles["counter"]}>
        <button
          className={styles["minus"]}
          onClick={decrementCount}
          disabled={count === min}
        >
          -
        </button>
        <div className={styles["amount"]}>{count}</div>
        <button
          className={styles["add"]}
          onClick={incrementCount}
          disabled={count === max}
        >
          +
        </button>

        <Button
          disabled={false}
          type="primary"
          handleClick={() => handleClick(count)}
          label="Add to cart"
          icon={MdShoppingBasket}
        />
      </div>

      {count === max && (
        <Alert title="Oops ..." type="warning" icon={MdErrorOutline}>
          <p>The maximum stock available for this product is {max}</p>
        </Alert>
      )}
    </>
  );
};

export default ItemCount;
