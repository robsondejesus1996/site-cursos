import Link from "next/link";

import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    
    <ul className={styles.navbar}>
      <li>
        <Link href="/">
          <a><img src="/images/logo.png"/></a>
        </Link>
      </li>
      <li>
        <Link href="/sobreCursos">
          <a>SOBRE <br/> CURSO</a>
        </Link>
      </li>
      <li>
        <Link href="/estruturaCursos">
          <a>UNIDADES <br/> CURRICULARES</a>
        </Link>
      </li>
      <li>
        <Link href="/estruturaCursos">
          <a>CORPO <br/> DOCENTE</a>
        </Link>
      </li>
      <li>
        <Link href="/estruturaCursos">
          <a>PROJETO <br/> PEDAGÓGICO</a>
        </Link>
      </li>
      <li>
        <Link href="/estruturaCursos">
          <a>NOSSA <br/> ESTRUTURA</a>
        </Link>
      </li>
      <li>
        <Link href="/estruturaCursos">
          <a>OUTRAS <br/> ATIVIDADES</a>
        </Link>
      </li>
      <li>
        <Link href="/estruturaCursos">
          <a>OUTROS <br/> CURSOS</a>
        </Link>
      </li>
    </ul>
  );
}
