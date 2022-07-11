import Image from "next/image";
import styles from "../styles/Estrutura.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Estrutura() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
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
          <div className={styles.gallery}>
            <a href="/images/morfofuncional.jpg">
              <img src="/images/morfofuncional.jpg" />
            </a>
            <a href="/images/morfofuncional.jpg">
              <img src="/images/morfofuncional.jpg" />
            </a>
            <a href="/images/morfofuncional.jpg" >
              <img src="/images/morfofuncional.jpg" />
            </a>
            <a href="/images/morfofuncional.jpg">
              <img src="/images/morfofuncional.jpg" />
            </a>
            <a href="/images/morfofuncional.jpg" >
              <img src="/images/morfofuncional.jpg" />
            </a>
            <a href="/images/morfofuncional.jpg" >
              <img src="/images/morfofuncional.jpg" />
            </a>
          </div>
          <button className={styles.button} src="#">CONHEÇA TODA A ESTRUTURA</button>
        </div>
      </section>

      <p className={styles.fim}></p>
    </>
  );
}
