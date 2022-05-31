import Link from "next/link";

import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link href="/sobreCursos">
          <a>SOBRE CURSO</a>
        </Link>
      </li>
      <li>
        <Link href="/estruturaCursos">
          <a>UNIDADES CURRICULARES</a>
        </Link>
      </li>
      <li>
        <Link href="/estruturaCursos">
          <a>CORPO DOCENTE</a>
        </Link>
      </li>
      <li>
        <Link href="/estruturaCursos">
          <a>PROJETO PEDAGÓGICO</a>
        </Link>
      </li>
      <li>
        <Link href="/estruturaCursos">
          <a>NOSSA ESTRUTURA</a>
        </Link>
      </li>
      <li>
        <Link href="/estruturaCursos">
          <a>OUTRAS ATIVIDADES</a>
        </Link>
      </li>
      <li>
        <Link href="/estruturaCursos">
          <a>OUTROS CURSOS</a>
        </Link>
      </li>
    </ul>
  );
}
