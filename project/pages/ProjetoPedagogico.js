import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/ProjetoPedagogico.module.css";

export default function ProjetoPedagogico() {
  return (
    <>
      <div>
        <Navbar />

        <div className="espacemento">
          <section className={styles.body}>
            <p className="">Projeto Pedagógico</p>
            <h1>Conheça o Projeto Pedagógico do curso de Medicina</h1>
            <hr />
          </section>

          <section className={styles.descricao_projeto}>
            <p className={styles.p}>
              É o instrumento que norteia as ações do curso e visa a qualidade
              do ensino e da formação profissional do acadêmico. Este documento
              detalha ainda as disciplinas e ementas, estratégias de ensino,
              práticas pedagógicas diferenciadas, atividades de pesquisa e
              extensão, perfil do corpo docente e discente e todas as demais
              atividades desenvolvidas para atender ao objetivo do curso e
              perfil profissiográfico.
            </p>
          </section>

          <section className={styles.periodico}>
            <h1>PERIÓDICOS DO CURSO</h1>
            <hr />
          </section>
        </div>
      </div>
    </>
  );
}
