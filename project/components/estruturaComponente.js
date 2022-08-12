import React, { useState } from "react";
import styles from "../styles/EstruturaComponenete.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const EstruturaComponente = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>
      {openModal && (
        <div className={styles.sliderWrap}>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className={styles.btnClose}
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className={styles.btnPrev}
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className={styles.btnNext}
            onClick={nextSlide}
          />
          <div className={styles.fullScreenImage}>
            <img src={galleryImages[slideNumber].img} alt="" />
          </div>
        </div>
      )}

      <div className={styles.galleryWrap}>
        {galleryImages &&
          galleryImages.map((slides, index) => {
            return (
              <div
                className={styles.single}
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slides.img} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default EstruturaComponente;
