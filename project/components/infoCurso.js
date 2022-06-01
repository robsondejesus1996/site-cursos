import Image from "next/image";
import styles from "../styles/InfoCurso.module.css";

export default function InfoCurso() {
  return (
    <>
      <div className={styles.homeAgency}>
        <h3 className={styles.h3}>CURSO</h3>
        <h3 className={styles.h3}>MEDICINA</h3>
        <p className={styles.p1}>PRESENCIAL</p>
        <p className={styles.p2}>XXXX</p>
        <p className={styles.p3}>INTEGRAL</p>
        <p className={styles.p4}>12 FASES</p>
        <p className={styles.p5}>BACHAREL</p>
      </div>
    </>
  );
}
