import Image from "next/image";
import styles from "../styles/depoimentos.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Depoimentos() {
  useEffect(() =>{
    Aos.init({ duration: 1500 });
  }, [])

  return (
    <>
      <section>
        <div className="container">
          <div className="heading-block">
            <h6 className={styles.pergunta} data-wow-delay="0.4s" data-aos="fade-left">
              O QUE DIZEM NOSSOS
            </h6>
            <span className={styles.depoimento} data-aos="fade-up">
              {" "}
              <p className={styles.pipe}>|</p>ACADÊMICOS
            </span>
          </div>
        </div>
        <img className={styles.figura_imagem} src="/images/formas7-PG.png" />
        <img className={styles.figura_grade} src="/images/grade.png" />

        <div className={styles.conteudo} >
          <p className={styles.p}>
            Escolhi o cruso de administração por influência da formação da minha
            irmã, que também estudou administração na Unidavi.
          </p>
          <p className={styles.p}>
            Hoje trabalho em uma empresa de Jeans, faço tdo o departamento
            financeiro e consigo aplicar todo o conteúdo que aprendi na
            Universidade no meu dia a dia na empresa.
          </p>

          <img
            className={styles.figura_academica}
            src="/images/academica.png" data-aos="flip-right"
          />
        </div>

        <div className={styles.info_academico}>
          <h1>Franciele Reinert da Rosa</h1>
          <h2>Acadêmica 5° fase ADM</h2>
          <a className={styles.a}>
            {" "}
            <i class="fa-solid fa-arrow-left"></i>
          </a>
          <a>
            {" "}
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </section>

      <p className={styles.fim}></p>
    </>
  );
}
