import Image from "next/image";
import styles from "../styles/CadastroInteresse.module.css";

export default function CadastroInteresse() {
  return (
    <>
      <section className={styles.body}>
        <div className="container">
          <div className="heading-block">
            <h6 className={styles.pergunta} data-wow-delay="0.4s">
              ENTRE EM
            </h6>
            <span className={styles.contato}>
              {" "}
              <p className={styles.pipe}>|</p>CONTATO
            </span>
          </div>
        </div>

        <img className={styles.figura_imagem} src="/images/hello-bg.png" />
        <img className={styles.figura_grade} src="/images/grade.png" />

        <div className={styles.div_inputs}>
         
        </div>
      </section>
    </>
  );
}
