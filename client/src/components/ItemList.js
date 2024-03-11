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

const DeviceList = observer(() => {
  const { item } = useContext(Context);
  const slider = React.useRef(null);
  useEffect(() => {
    // fetchTypes().then((data) => item.setTypes(data));
    // fetchBrands().then((data) => item.setBrands(data));
    fetchProduct(1, 10).then((data) => {
      item.setItems(data.items);
      item.setTotalCount(data.totalCount);
    });
  }, []);

  useEffect(() => {
    fetchProduct(1, 10).then((data) => {
      item.setItems(data.items);
      item.setTotalCount(data.totalCount);
    });
  }, [item.page]);

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
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1L1 8L8 15M1 8H17"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div>
          <h2 style={{ paddingLeft: 70, paddingBottom: 20}}>Останні надходження: </h2>
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
            <svg
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8H18M18 8L11 1M18 8L11 15"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
});

export default DeviceList;
