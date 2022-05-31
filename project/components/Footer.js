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
        
      </footer>
    </>
  );
}
