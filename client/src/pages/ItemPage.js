import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../api/ItemApi";
import { ImgSlider } from "../components/ImgSlider";
import styles from "../styles/ItemPage.module.css";

const ItemPage = () => {
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetchOneProduct(id).then((data) => {
      setItem(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <>
      <div className={styles.ItemWrapper}>
        <ImgSlider images={item.img} />
        <div className={styles.itemInfoWrapper}>
          <h2>{item.name}</h2>
          <div style={{ display: "inline" }}>
            {item.availability ? (
              <h5>
                В наявності | фівафі
              </h5>
            ) : (
              <h5>
                Не в наявності <p>| фівафі</p>
              </h5>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemPage;
