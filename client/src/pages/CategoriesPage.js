import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { CategoryCard } from "../components/CategoryCard";
import { observer } from "mobx-react-lite";
import styles from "../styles/CategoryPage.module.css";
import CategoryPagination from "../components/CategoryPagination";
import { fetchCategories } from "../api/ItemApi";

const CategoryPage = () => {
  const { item } = useContext(Context);

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchCategories(item.page, 18).then((data) => {
      item.setCategory(data.category);
      item.setTotalCount(data.totalCount);
    });
    setTimeout(() =>{
      setLoading(false);
    }, 500)
  }, [item]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.gridWrapper}>
        <div className={styles.grid}>
          {item.category.map((element) => (
            <CategoryCard key={element._id} element={element} />
          ))}
        </div>
        <CategoryPagination />
      </div>
    </>
  );
};

export default observer(CategoryPage);
