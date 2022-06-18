import Image from "next/image";
import styles from "../styles/Estrutura.module.css";

export default function Estrutura() {
  return (
    <>
      <section>
        <div className="container">
          <div className="heading-block">
            <h6 className={styles.pergunta} data-wow-delay="0.4s">
              NOSSA
            </h6>
            <span className={styles.estrutura}>
              {" "}
              <p className={styles.pipe}>|</p>ESTRUTURA
            </span>
          </div>
        </div>
        <img
                className={styles.figura_imagem}
                src="/images/formas8.png"
              />

        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li className={styles.li}><a className={styles.a} href="#">SALAS</a></li>
            <li className={styles.li}><a className={styles.a} href="#">LABORÁTORIOS</a></li>
            <li className={styles.li}><a className={styles.a}  href="#">SIMULADOR AVANÇADO</a></li>
            <li className={styles.li}><a className={styles.a}  href="#">CONSULTÓRIOS</a></li>
            <li className={styles.li}><a className={styles.a}  href="#">SALA DE COMANDO</a></li>
            <li className={styles.li}><a className={styles.a}  href="#">CENTRO CIRÚRGICO</a></li>
          </ul>
        </nav>

        <div className={styles.galeria}>
        <article>
          <img className={styles.figura_estrutura} src="/images/morfofuncional.jpg">
          </img>
          <img className={styles.figura_estrutura2} src="/images/morfofuncional.jpg">
          </img>
          <img className={styles.figura_estrutura3} src="/images/morfofuncional.jpg">
          </img>
          <img className={styles.figura_estrutura4} src="/images/morfofuncional.jpg">
          </img>
          <img className={styles.figura_estrutura5} src="/images/morfofuncional.jpg">
          </img>
          <img className={styles.figura_estrutura6} src="/images/morfofuncional.jpg">
          </img>
        </article>
        <button className={styles.button}>CONHEÇA TODA A ESTRUTURA
        </button>
        </div>
      </section>

      <p className={styles.fim}></p>
    </>
  );
}
