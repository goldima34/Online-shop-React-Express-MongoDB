import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { fetchProduct } from "../api/ItemApi";
import styles from "../styles/ItemList.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SmallArrowLeft, SmallArrowRight } from "./micro/Arrows";

const DeviceList = observer(() => {
  const { item } = useContext(Context);
  const slider = React.useRef(null);
  
  useEffect(() => {
    fetchProduct(1, 10).then((data) => {
      item.setItems(data.items);
      item.setTotalCount(data.totalCount);
    });
  });

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className={styles.ItemListContainer}>
        <div className={styles.sliderBtn}>
          <button onClick={() => slider?.current?.slickPrev()}>
           <SmallArrowLeft/>
          </button>
        </div>
        <div>
          <h2 style={{ paddingLeft: 70, paddingBottom: 20 }}>
            Останні надходження:{" "}
          </h2>
          <div className={styles.ItemSliderContainer}>
            <Slider ref={slider} {...settings}>
              {item.items.map((item) => (
                <div>
                  <ProductCard key={item._id} item={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className={styles.sliderBtn}>
          <button onClick={() => slider?.current?.slickNext()}>
            <SmallArrowRight/>
          </button>
        </div>
      </div>
    </>
  );
});

export default DeviceList;
