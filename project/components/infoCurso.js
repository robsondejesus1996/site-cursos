import Image from "next/image";
import { Parallax } from 'react-parallax'
import styles from "../styles/InfoCurso.module.css";


export default function InfoCurso() {
  return (
    <>
      <Parallax className={styles.image} bgImage="/images/topo-pagina-efeito.jpg" strength={800}>
        <div>
          <h3 className={styles.curso_titulo}>CURSO</h3>
          <h3 className={styles.curso_nome}>MEDICINA</h3>

          <p className={styles.p1}>
          <i class="fas fa-chalkboard-teacher justify-content-center white-text fa-lg"></i>{" "}
          PRESENCIAL
        </p>

        <p className={styles.p2}>
          {" "}
          <i class="far fa-money-bill-alt justify-content-center white-text fa-lg"></i>{" "}
          R$9999,99
        </p>

        <p className={styles.p3}>
          <i class="far fa-clock justify-content-center white-text fa-lg"></i>{" "}
          INTEGRAL
        </p>

        <p className={styles.p4}>
          <i class="fas fa-calendar-check justify-content-center white-text fa-lg"></i>{" "}
          12 FASES
        </p>
        
        <p className={styles.p5}>
          <i class="fas fa-user-graduate justify-content-center white-text fa-lg"></i>{" "}
          BACHAREL
        </p>
        </div>
       </Parallax>
    </>
  );
}
