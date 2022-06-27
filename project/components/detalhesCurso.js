import Image from "next/image";
import styles from "../styles/DetalhesCurso.module.css";

export default function DetalhesCurso() {
  return (
    <>
      <div className={styles.detalhes}>
        <p className={styles.mais_detalhes}>+ detalher sobre este</p>
        <h1 className={styles.curso}>Curso</h1>
        <p>
          <a className={styles.cidadeRioDoSul} href="">
            Rio do Sul
          </a>
        </p>
        <p>
          <a className={styles.cidades} href="">
            Ituporanga
          </a>
        </p>
        <p>
          <a className={styles.cidades} href="">
            Taio
          </a>
        </p>
        <p>
          <a className={styles.cidades} href="">
            Presidente Getúlio
          </a>
        </p>

        <img className={styles.figura_imagem} src="/images/hello2-bg.png" />
      </div>

      <div className={styles.informacoes}>
        <h1 className={styles.h1}>Autorização</h1>
        <p className={styles.p}>Parecer CEE/SC n° 181/66 de 21/12/1966</p>
        <p className={styles.p}>Parecer CEE/SC n° 119/71 de 27/07/1971</p>

        <h1 className={styles.h1}>Reconhecimento</h1>
        <p className={styles.p}>Decreto n° 71.604 - 22/12/1972</p>

        <h1 className={styles.h1}>Renovação de Reconhecimento</h1>
        <p className={styles.p}>Decreto n° 71.604 - 22/12/1972</p>

        <h1 className={styles.h1}>N° de Vagas</h1>
        <h2 className={styles.h2}>150</h2> 
      </div>

      <div className={styles.div_imagem_grade}>
      <img src="/images/grade.png"/>
      </div>

      
    </>
  );
}
