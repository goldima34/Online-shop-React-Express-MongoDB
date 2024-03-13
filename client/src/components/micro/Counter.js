import React from "react";
import styles from "../../styles/Counter.module.css";
export const Counter = ({ count, addCount, minusCount }) => {
  return (
    <>
      <div>
        <button onClick={minusCount} className={styles.ButtonMinus}>
          <svg
            width="18"
            height="2"
            viewBox="0 0 18 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 1H1"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <button className={styles.ButtonCount}>{count}</button>
        <button onClick={addCount} className={styles.ButtonPlus}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 17V9M9 9V1M9 9H17M9 9H1"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
