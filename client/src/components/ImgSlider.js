import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/Carousel.module.css";

export const ImgSlider = ({ images }) => {
  const [mainImg, setMainImg] = useState();

  return (
    <>
      <Carousel className={styles.crsl}>
        {images.map((img) => (
          <img src={process.env.REACT_APP_API_URL + img} />
        ))}
      </Carousel>
    </>
  );
};
