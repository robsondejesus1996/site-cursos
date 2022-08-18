import React from "react";
import styles from "../styles/AccordionAtividades.module.css";

const AccordionProjetos = ({ title, active, setActive }) => {
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
            A Atlética de Medicina é uma organização mantida pelos
            estudantes do curso que tem como objetivo promover a integração e a
            interação dos estudantes por meio da realização de atividades como
            torneios, campeonatos esportivos, ações sociais, festas e encontros
            extracurriculares, além de promover o curso dentro e fora da
            universidade. A A.A.A.C.M.U surgiu na UNIDAVI com a necessidade de
            acolher os novos alunos e integrar as turmas já existentes, criando
            um ambiente amigável para todos e um canal de fácil acesso aos
            estudantes.<br/>
            <a href="">Veja Mais</a>
            <img
              className={styles.imagem_geral}
              src="/images/atletica_medicina.jpg"
            />
          </p>

          <p>
            <b className={styles.b}>
              Galeria de fotos
            </b>
          </p>
          <hr className={styles.hr} />
          <img className={styles.imagem1} src="/images/sem_foto2.png" />
          <img className={styles.imagem1} src="/images/sem_foto2.png" />
          <img className={styles.imagem1} src="/images/sem_foto2.png" />
          <img className={styles.imagem1} src="/images/sem_foto2.png" />
        </div>
      </div>
    </div>
  );
};

/**https://www.youtube.com/watch?v=gs14LEv7Hfk&t=603s&ab_channel=h3webdevtuts**/

export default AccordionProjetos;
