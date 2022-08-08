import Link from "next/link";
import Mensalidade from "../components/mensalidade";
import Navbar from "../components/Navbar";
import styles from "../styles/CorpoDocente.module.css";

export default function CorpoDocente() {
  return (
    <div>
      <Navbar />
      <div className="espacemento">
        <section className={styles.body}>
          <h1 className="h1">Professores do Curso</h1>
          <p className="p">Conheça os professores do curso de Medicina</p>

          <div className={styles.professores}>
            <img
              className={styles.figura_coordenador}
              src="/images/coordenador-MED.png"
            />
            <p className={styles.p}>
              <h1 className="h1">Doutor</h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
