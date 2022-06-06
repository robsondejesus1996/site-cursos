import Image from "next/image";
import styles from "../styles/Coordenador.module.css";

export default function Coordenador() {
  return (
    <>
      <section>
        <div className={styles.div_apresentacao}>
          <h6 className={styles.apresentacao_coordenador} data-wow-delay="0.4s">
            Olá! Sou o Coordenador
          </h6>
          <span className={styles.apresentacao}>
            {" "}
            <p className={styles.pipe}>|</p>Augusto Fey
          </span>
        </div>

        <div className={styles.div_informacoes_coordenador}>
          <img className={styles.bola_cortada} src="/images/bola-cortada.png" />
          <img
            className={styles.figura_coordenador}
            src="/images/coordenador-MED.png"
          />
          <p className={styles.p}>
            Dr. Augusto iniciou na implantação do Residência Médica em 2001 e no
            planejamento do curso de Medicina em 2015. Além de coordenador do
            curso de Medicina é presidente da Comissão de Residência Médica do
            Hospital Regional Alto Vale (COREME). Sua área de atuação médica é
            em Cirurgia Geral, Gastrenterologia e Endoscopia Digestiva.
          </p>

          <p className={styles.separacao}>__________</p>

          <p>
            {" "}
            <a href="" className={styles.email_coordenacao}>
              coord.medicina@unidavi.edu.br
            </a>{" "}
          </p>
          <p>
            {" "}
            <a href="" className={styles.contato}>
              (47)3531-6220
            </a>{" "}
          </p>
        </div>

        <div>
          <button className={styles.button}>Conheça nossos Professores</button>
        </div>
        <img className={styles.figura_imagem} src="/images/hello3-bg.png" />
      </section>

      <p className={styles.fim}></p>
    </>
  );
}
