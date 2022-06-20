import Image from "next/image";
import styles from "../styles/Mensalidade.module.css";

export default function Mensalidade() {
  return (
    <>
      <section className={styles.secao}>
        <div className="container">
          <div className="heading-block">
            

          <span className={styles.pergunta}>
              {" "}
              |VALOR
              
            </span>
            <span className={styles.mensalidade}>
              {" "}
              MENSALIDADE
              
            </span>
            <p className={styles.valor}>R$ 738,00</p>
            <p className={styles.semestre}>1° Semestre de 2022</p>
            <p className={styles.valor_credito}>Valor do crédito: R$ 36,90</p>
            <p className={styles.creditos}>Número de créditos para a 1° fase: 20</p>
            <p className={styles.valor_mensalidade_fase}>Valor das mensalidades para a 1° fase: R$ 738,00</p>

            <div>
              <img
                className={styles.imagem_dolar}
                data-wow-delay="0.4s"
                src="/images/icone_dolar.png"
              />

              
              <img className={styles.figura_grade} src="/images/grade.png" />
            </div>

            
          </div>
        </div>
        
      </section>

      <p className={styles.fim}></p>
      
    </>
  );
}
