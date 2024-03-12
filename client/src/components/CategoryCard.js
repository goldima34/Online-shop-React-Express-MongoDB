import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import style from "../styles/CategoryCard.module.css";

export const CategoryCard = ({ element }) => {
  const navigate = useNavigate();
  return (
    <div className={style.categoryCardContainer} onClick={() => navigate(`/`)}>
      <div className={style.categoryCard}>
        <img
          width={200}
          height={200}
          src={process.env.REACT_APP_API_URL + element.img}
        />
          <p>{element.name}</p>
      </div>
    </div>
  );
};
