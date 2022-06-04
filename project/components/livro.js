import Image from "next/image";
import styles from "../styles/livro.module.css";

export default function Livro() {
  return (
    <>
      <section className={styles.secao}>
        <div>
          <h2 className={styles.h2}>E-BOOK</h2>
          <h1 className={styles.h1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;E-BOOK <br/>Medicina Unidavi</h1>
          <a
            className={styles.botao}
            href="https://www.unidavi.edu.br/ebook/medicina-unidavi"
            role="button"
          >
            Baixe o E-BOOK
          </a>
        </div>

        <div>
          <img
            className={styles.imagem_livro}
            src="https://siteunidavi.s3.sa-east-1.amazonaws.com/2022/3/mkp-e-book-med-2022-web.png"
          />
        </div>
      </section>
      <p>Fim componente livro</p>
    </>
  );
}
