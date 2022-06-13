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
          <form className="flex flex-col">
            <label htmlFor="name" className={styles.nomeLabel}>
              NOME
            </label>
            <input
              className={styles.inputNome}
              id="name"
              name="name"
              type="text"
              autocomplete="name"
              required
            />

            <label htmlFor="cidade" className={styles.cidadeLabel}>
              CIDADE
            </label>
            <input
              className={styles.inputCidade}
              id="cidade"
              name="cidade"
              type="text"
              autocomplete="cidade"
              required
            />

            <label htmlFor="cidade" className={styles.foneLabel}>
              FONE
            </label>
            <input
              className={styles.inputFone}
              id="fone"
              name="fone"
              type="text"
              autocomplete="fone"
              required
            />

            <label htmlFor="cidade" className={styles.mensagemLabel}>
              MENSAGEM
            </label>
            <input
              className={styles.inputMensagem}
              id="mensagem"
              name="mensagem"
              type="text"
              autocomplete="mensagem"
              required
            />

            <button type="submit" className={styles.buttonEnviar}>
              ENVIAR
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
