import Link from "next/link";

import styles from "../styles/Navbar.module.css";

const linkStyle = {
  marginRight: 15,
};

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <a href="/">
              <img src="/images/logo.png" />
            </a>
          </div>
          <ul className="menu">
            <li>
              <a href="/" className="menu-btn">
                SOBRE
                <br />
                CURSO
              </a>
            </li>
            <li>
              <a href="/" className="menu-btn">
                UNIDADES
                <br />
                CURRICULARES
              </a>
            </li>
            <li>
              <a href="/" className="menu-btn">
                CORPO
                <br />
                DOCENTE
              </a>
            </li>
            <li>
              <a href="/" className="menu-btn">
                PROJETO
                <br />
                PEDAGÓGICO
              </a>
            </li>
            <li>
              <a href="/" className="menu-btn">
                NOSSA
                <br />
                ESTRUTURA
              </a>
            </li>
            <li>
              <a href="/" className="menu-btn">
                OUTRAS
                <br />
                ATIVIDADES
              </a>
            </li>
            <li>
              <a href="/" className="menu-btn">
                OUTROS
                <br />
                CURSOS
              </a>
            </li>
            <li>
              <a href="/" className="menu-btn">
                BOTAO
                <br />
                INTERESSE
              </a>
            </li>
          </ul>
          <div className="menu-btn">
          <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
    </div>
  );
}
