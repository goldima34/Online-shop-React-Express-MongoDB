import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/CategoryList.module.css";
import { Context } from "../index";
import { fetchCategories } from "../api/ItemApi";
import { Link } from "react-router-dom";

export const CategoryList = () => {
  const { item } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories().then((data) => {
      item.setCategory(data.category);
    });
  }, [item.category]);


  const firstCategories = item.category.slice(0, 8);

  return (
    <div className={styles.CategoryContainer}>
      <ul style={{ listStyle: "none" }}>
        <li className={styles.CategoryListMainItem}>
          <Link to="/category">All Category</Link>
        </li>
        <li className={styles.CategoryListItem}>Category</li>
        {firstCategories.map((element) => (
          <li className={styles.CategoryListItem} key={element._id}>
            {element.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
