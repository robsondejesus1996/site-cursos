import Image from "next/image";
import styles from "../styles/Trabalhar.module.css";

export default function Trabalhar() {
  return (
    <>
      <section>
        <div className="container">
          <div className="heading-block">
            <h6 className={styles.pergunta} data-wow-delay="0.4s">
              ONDE
            </h6>
            <span className={styles.trabalhar}>
              {" "}
              <p className={styles.pipe}>|</p>TRABALHAR
            </span>

            <div className={styles.div_imagem_trabalhar}>
              <img
                className="hello-img animate fadeInLeft"
                data-wow-delay="0.4s"
                src="https://siteunidavi.s3.sa-east-1.amazonaws.com/2021/8/4-parceria-rede-publica-saude.png"
                alt="Imagem Sobre o Curso"
              />
              <img
                className={styles.figura_imagem}
                src="/images/hello2-bg.png"
              />
            </div>

            <div className={styles.descricao}>
              <h4>
                A Medicina hoje, no mundo, no Brasil, em Santa Catarina e também
                no Alto Vale, ainda possui um mercado vasto, com alta
                remuneração inicial ao médico recém-formado.
              </h4>
            </div>

            <div className={styles.descricao_detalhada}>
              <p>
                Também existe a possibilidade de ampliação do conhecimento
                médico com os inúmeros programas de residência médica no País e
                no exterior, possibilitando a formação de especialistas nas mais
                diversas áreas da profissão.
              </p>
            </div>
          </div>
        </div>
      </section>

      <p className={styles.fim}></p>
    </>
  );
}
