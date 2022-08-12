import React, { useState } from "react";
import styles from "../styles/EstruturaComponenete.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const EstruturaComponente = ({ galleryImages }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

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
    <>
      <section>
        <div className="container">
          <div className="heading-block">
            <h6
              className={styles.pergunta}
              data-wow-delay="0.4s"
              data-aos="fade-left"
            >
              NOSSA
            </h6>
            <span className={styles.estrutura} data-aos="fade-up">
              {" "}
              <p className={styles.pipe}>|</p>ESTRUTURA
            </span>
          </div>
        </div>
        <img className={styles.figura_imagem} src="/images/formas8.png" />

        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li className={styles.li}>
              <a className={styles.a} href="#">
                SALAS
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.a} href="#">
                LABORÁTORIOS
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.a} href="#">
                SIMULADOR AVANÇADO
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.a} href="#">
                CONSULTÓRIOS
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.a} href="#">
                SALA DE COMANDO
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.a} href="#">
                CENTRO CIRÚRGICO
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.galeria}>
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
                      <img
                        src={slides.img}
                        alt=""
                        className={styles.imagens_galeria}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <button className={styles.button} href="../NossaEstrutura">
            CONHEÇA TODA A ESTRUTURA
          </button>
        </div>
      </section>

      <p className={styles.fim}></p>
    </>
  );
};

export default EstruturaComponente;

/*https://www.youtube.com/watch?v=J1dg4WXr3cg&t=46s&ab_channel=WebStylePress*/
