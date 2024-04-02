import React, { useState } from "react";
import { CreateCategory } from "../../components/AdminPanel/CreateCategory/CreateCategory";

import style from "./AdminPage.module.css";
import { CreateProduct } from "../../components/AdminPanel/CreateProduct/CreateProduct";
export const AdminPage = () => {
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [productVisible, setProductVisible] = useState(false);

  return (
    <div>
      <div>
        <button
          className={style.ModalButton}
          onClick={() => setCategoryVisible(true)}
        >
          Добавить тип
        </button>
      </div>
      <div>
        <button
          className={style.ModalButton}
          onClick={() => setProductVisible(true)}
        >
          Добавить товар
        </button>
      </div>
      <CreateCategory
        show={categoryVisible}
        onHide={() => setCategoryVisible(false)}
      />
      <CreateProduct
        show={productVisible}
        onHide={() => setProductVisible(false)}
      />
    </div>
  );
};
