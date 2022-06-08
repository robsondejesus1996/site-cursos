import Image from "next/image";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img
          src="/images/logo-unidavi-muitoalemdoensino.png"
          className={styles.image}
        />

        <div className={styles.div_visite}>
          <h1 className={styles.visite}>VISITE</h1>
          <p className={styles.des_universidade}>
            Universidade para o Desenvolvimento do Alto Vale do Itajaí - Unidavi
          </p>
          <p className={styles.des_endereco}>
            Rua Dr. Guilherme Gemballa, 13 Jardim América, Rio do Sul -SC
          </p>
        </div>

        <div className={styles.div_contate}>
          <h1 className={styles.contate}>CONTATE</h1>
          <p className={styles.email}>processossletivos@unidavi.edu.br</p>
          <p className={styles.telefone}>  <i class="fa-brands fa-whatsapp"></i> (47)3531-6024</p>
          <p className={styles.redes}>Siga </p>
          <p className={styles.redes}>
            <i class="fab fa-instagram">&nbsp;</i>
            <i class="fab fa-facebook-f">&nbsp;</i>
            <i class="fab fa-twitter">&nbsp;</i>
            <i class="fab fa-youtube">&nbsp;</i>
          </p>
        </div>
      </footer>
    </>
  );
}
