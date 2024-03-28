import React, { useState } from "react";
import styles from "./CreateProduct.module.css";

export const CreateProduct = ({ show, onHide }) => {
  const [name, setName] = useState();
  const [file, setFile] = useState();

  const addProduct = () => {};

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div
      className={styles.ModalBackground}
      style={show ? { display: "flex" } : { display: "none" }}
    >
      <div className={styles.modalContainer}>
        <div className={styles.modalHedaer}>
          <span>Додати товар</span>
        </div>
        <div className={styles.ModalInput}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={"Введите название типа"}
          />
        </div>
        <div className={styles.ModalFileInput}>
          <input onChange={selectFile} type="file" />
        </div>
        <div className={styles.ModalButtonsWrapper}>
          <button className={styles.ModalButtonReject} onClick={onHide}>
            Закрыть
          </button>
          <button className={styles.ModalButtonAccept} onClick={addProduct}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};
