import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/Prewiew.module.css";
import { Image } from "react-bootstrap";

export const Prewiew = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <div className={styles.ImageContainer}>
        <Slider {...settings}>
          <img
            className={styles.imgPrewiew}
            src={process.env.REACT_APP_API_URL + "img1.jpg"}
          />
          <img
            className={styles.imgPrewiew}
            src={process.env.REACT_APP_API_URL + "img1.jpg"}
          />
          <img
            className={styles.imgPrewiew}
            src={process.env.REACT_APP_API_URL + "img1.jpg"}
          />
        </Slider>
      </div>
    </>
  );
};
