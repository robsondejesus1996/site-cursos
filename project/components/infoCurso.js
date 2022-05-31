import Image from "next/image";
import styles from "../styles/InfoCurso.module.css";

export default function InfoCurso() {
  return (
    <>
      <div className={styles.homeAgency}>
        <h3 className={styles.h3}>CURSO</h3>
        <h3 className={styles.h3}>MEDICINA</h3>
        <p className={styles.p}>Presencial</p>
        <p className={styles.p}>XXXX</p>
        <p className={styles.p}>Integral</p>
        <p className={styles.p}>12 fases</p>
        <p className={styles.p}>Bacharel</p>
      </div>
    </>
  );
}
