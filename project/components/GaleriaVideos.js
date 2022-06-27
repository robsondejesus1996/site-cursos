import Image from "next/image";
import styles from "../styles/GaleriaVideos.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function GaleriaVideos() {
  useEffect(() =>{
    Aos.init({ duration: 1500 });
  }, [])
  return (
    <>
      <section>
        <div className="container">
          <div className="heading-block">
            <h6 className={styles.pergunta} data-wow-delay="0.4s" data-aos="fade-left">
              GALERIA DE
            </h6>
            <span className={styles.videos} data-aos="fade-up">
              {" "}
              <p className={styles.pipe}>|</p>VIDEOS
            </span>
          </div>
        </div>

        <div>
          <div className={styles.conteudo}>
            <hr className={styles.hr}></hr>
            <div className={styles.card}>
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  className={styles.frame}
                  src="https://www.youtube.com/embed/DXJchCtyJLE"
                  allowfullscreen="false"
                ></iframe>
              </div>
              <div className={styles.card_titulo}>
                <h5 className={styles.p3}>
                  <strong>Conheça o curso de Medicina da Unidavi</strong>
                </h5>

                <button className={styles.button_visualizar}>
                  {" "}
                  <i class="far fa-eye white-text"></i>Visualizar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <p className={styles.fim}></p>
    </>
  );
}
