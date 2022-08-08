import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import styles from "../styles/CadastroInteresse.module.css";

export default function CadastroInteresse() {
  useEffect(() =>{
    Aos.init({ duration: 1500 });
  }, [])
  return (
    <>
      <section className={styles.body}>
        <div className="">
          <div className="heading-block">
            <h6 className={styles.pergunta} data-wow-delay="0.4s" data-aos="fade-left">
              ENTRE EM
            </h6>
            <span className={styles.contato} data-aos="fade-up">
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
              
            </label>
            <input
              className={styles.inputNome}
              id="name"
              name="name"
              type="text"
              autocomplete="name"
              required
              placeholder="NOME"
            />

            <label htmlFor="cidade" className={styles.cidadeLabel}>
              
            </label>
            <input
              className={styles.inputCidade}
              id="cidade"
              name="cidade"
              type="text"
              autocomplete="cidade"
              required
              placeholder="CIDADE"
            />

            <label htmlFor="cidade" className={styles.foneLabel}>
              
            </label>
            <input
              className={styles.inputFone}
              id="fone"
              name="fone"
              type="text"
              autocomplete="fone"
              required
              placeholder="FONE"
            />

            <label htmlFor="cidade" className={styles.mensagemLabel}>
              
            </label>
            <input
              className={styles.inputMensagem}
              id="mensagem"
              name="mensagem"
              type="text"
              autocomplete="mensagem"
              required
              placeholder="MENSAGEM"
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
