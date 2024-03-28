import React, { useState } from "react";
import styles from "./CreateCategory.module.css";
import { createCategory } from "../../../api/ItemApi";

export const CreateCategory = ({ show, onHide }) => {
  const [name, setName] = useState();
  const [file, setFile] = useState();

  const addType = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("img", file);
    createCategory(formData).then((data) => onHide());
  };

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
          <span>Додати категорію</span>
        </div>
        <div className={styles.ModalInput}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={"Введите название типа"}
          />
        </div>
        <div className={styles.ModalFileInput}>
          <input
            onChange={selectFile}
            type="file"
          />
        </div>
        <div className={styles.ModalButtonsWrapper}>
          <button className={styles.ModalButtonReject} onClick={onHide}>
            Закрыть
          </button>
          <button className={styles.ModalButtonAccept} onClick={addType}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};
