import React from 'react'
import styles from '../styles/CategoryList.module.css'

export const CategoryList = () => {
  return (
    <div className={styles.CategoryContainer}>
      <ul style={{listStyle: 'none'}}>
        <li className={styles.CategoryListMainItem}>All Category</li>
        <li className={styles.CategoryListItem}>Category</li>
        <li className={styles.CategoryListItem}>Category</li>
        <li className={styles.CategoryListItem}>Category</li>
        <li className={styles.CategoryListItem}>Category</li>
        <li className={styles.CategoryListItem}>Category</li>
        <li className={styles.CategoryListItem}>Category</li>
        <li className={styles.CategoryListItem}>Category</li>
        <li className={styles.CategoryListItem}>Category</li>
        <li className={styles.CategoryListItem}>Category</li>
        <li className={styles.CategoryListItem}>Category</li>
      </ul>
    </div>
  );
}
