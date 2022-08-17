import React from "react";
import styles from "../styles/AccordionEstrutura.module.css";

const AccordionEstrutura = ({ title, active, setActive }) => {
  return (
    <div className="accordion">
      <div className="accordionHeading">
        <div className="container">
          <p className="p_accordion">{title}</p>
          <span className="p_accordion" onClick={() => setActive(title)}>
            {active == title ? "X" : "|||"}
          </span>
        </div>
      </div>

      <div
        className={
          (active === title ? "show" : "") + " accordionContetEstrutura"
        }
      >
        <div className="containner">
          <p className={styles.descricao_estrutura}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            <img
              className={styles.imagem_geral}
              src="/images/Morfofuncional.jpg"
            />
          </p>

          <p>
            <b className={styles.b}>
              Veja mais fotos da estrutura - Laboratório Morfofuncional I e II
            </b>
          </p>
          <hr className={styles.hr} />
          <img className={styles.imagem1} src="/images/Morfofuncional_1.jpg" />
          <img className={styles.imagem2} src="/images/Morfofuncional_2.jpg" />
          <img className={styles.imagem3} src="/images/Morfofuncional_3.jpg" />
          <img className={styles.imagem4} src="/images/Morfofuncional_4.jpg" />
        </div>
      </div>
    </div>
  );
};

/**https://www.youtube.com/watch?v=gs14LEv7Hfk&t=603s&ab_channel=h3webdevtuts**/

export default AccordionEstrutura;
