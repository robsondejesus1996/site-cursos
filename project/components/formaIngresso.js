import Image from "next/image";
import styles from "../styles/Ingresso.module.css";

export default function FormasIngresso() {
  return (
    <>
      <section className={styles.secao}>
        <span className={styles.pergunta}>FORMAS DE</span>
        <span className={styles.ingresso}>
          {" "}
          <p className={styles.pipe}>|</p>INGRESSO
        </span>

        <div className={styles.descricao}>
          <h4>
            Para ingressar na melhor instituição da região, você tem as
            seguintes possibilidades
          </h4>
        </div>

        <div className={styles.div_formas}>
          <p>
            <a href="" className={styles.tipo_forma}>
              Vestibular Acafe
            </a>
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </p>
          <p>
            <a href="" className={styles.tipo_forma}>
              Enem
            </a>
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </p>
          <p>
            <a href="" className={styles.tipo_forma}>
              Seletivo Unidavi
            </a>
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </p>
          <p>
            <a href="" className={styles.tipo_forma}>
              Reingresso
            </a>
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </p>
          <p>
            <a href="" className={styles.tipo_forma}>
              Transferência
            </a>
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </p>
        </div>
        <div className={styles.div_imagem_ingresso}>
          <a href="https://www.unidavi.edu.br/formasIngresso">
            <img
              className="hello-img animate fadeInLeft"
              data-wow-delay="0.4s"
              src="/images/icone-ingresso-pg-cursos.png"
              alt="Imagem Sobre o Curso"
            />
          </a>
          <img className={styles.figura_imagem} src="/images/hello-bg.png" />
        </div>
      </section>

      <p className={styles.fim}></p>
     
    </>
  );
}
