import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../api/ItemApi";
import { ImgSlider } from "../components/ImgSlider";
import styles from "../styles/ItemPage.module.css";
import { Counter } from "../components/micro/Counter";
import { HeartIcon } from "../components/micro/Arrows";
import { DeliveryCard } from "../components/micro/DeliveryCard";
import { Context } from "../index";
import { additemToBasket } from "../api/BasketApi";
import { addItemToNotAuthBasket } from "../api/NotAuthBasketApi";
import { Notification, ShowNotification } from "../components/micro/Notification";

const ItemPage = () => {
  const { userStore } = useContext(Context);
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
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

  const onClick = () => {
    if (userStore.isAuth) {
      additemToBasket(userStore.user.id, item._id, count);
    } else {
      addItemToNotAuthBasket(item, count);
    }
    ShowNotification()
  };

  return (
    <>
      <div className={styles.ItemWrapper}>
        <ImgSlider images={item.img} />
        <div className={styles.itemInfoWrapper}>
          <h2>{item.name}</h2>
          {item.availability ? (
            <p>
              <span style={{ color: "green" }}>В наявності</span> |
              <span> оптом і в роздріб</span>
            </p>
          ) : (
            <p>
              <span style={{ color: "red" }}>Не в наявності </span> |
              <span> під замовлення</span>
            </p>
          )}
          <p>{item.price} грн.</p>
          <hr />
          <div className={styles.btnBuyWrapper}>
            <Counter
              count={count}
              addCount={() => setCount(count + 1)}
              minusCount={() => {
                count > 1 ? setCount(count - 1) : setCount(1);
              }}
            />
            <button onClick={onClick} className={styles.addToBasketBtn}>
              Додати в корзину
            </button>
            <button className={styles.addtowishlistBtn}>
              <HeartIcon />
            </button>
          </div>
          <DeliveryCard />
        </div>
        <Notification name={item.name}/>
      </div>
      
    </>
  );
};

export default ItemPage;
