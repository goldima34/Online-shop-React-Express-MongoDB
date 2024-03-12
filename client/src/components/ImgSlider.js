import React, { useState } from "react";
import {
  ButtonBack,
  ButtonFirst,
  ButtonLast,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  ImageWithZoom,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "../styles/ImgSlider.module.css";
import { SmallArrowLeft, SmallArrowRight } from "./micro/Arrows";

export const ImgSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleClick = (index) => {
    setCurrentSlide(index);
  };
  return (
    <>
      <CarouselProvider
        currentSlide={currentSlide}
        onChange={setCurrentSlide}
        visibleSlides={1}
        totalSlides={images.length}
        step={1}
        naturalSlideWidth={400}
        naturalSlideHeight={500}
        hasMasterSpinner
        infinite
      >
        <div className={styles.CarouselWrapper}>
          <div className={styles.miniImgList}>
            {images.map((image, index) => (
              <div key={index} onClick={() => handleClick(index)}>
                <img
                  className={styles.miniImg}
                  src={process.env.REACT_APP_API_URL + image}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <Slider style={{ width: 400 }}>
            {images.map((image, index) => (
              <Slide key={index}>
                <ImageWithZoom src={process.env.REACT_APP_API_URL + image} />
              </Slide>
            ))}
          </Slider>
        </div>
        <div className={styles.ImgSliderBtnContainer}>
          <ButtonBack className={styles.ImgSliderBack}>
            <SmallArrowLeft />
          </ButtonBack>
          <ButtonNext className={styles.ImgSliderNext}>
            <SmallArrowRight />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </>
  );
};
