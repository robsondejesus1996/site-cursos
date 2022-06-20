import Navbar from "./Navbar";
import InfoCurso from "./infoCurso";
import SobreCurso from "./sobreCurso";
import Banner from "./banner";
import Trabalhar from "./trabalhar";
import Estrutura from "./estrutura";
import TourVirtual from "./tourVirtual";
import Livro from "./livro";
import Coordenador from "./coordenador";
import DetalhesCurso from "./detalhesCurso";
import FormasIngresso from "./formaIngresso";
import Mensalidade from "./mensalidade";
import Depoimentos from "./depoimento";
import Noticias from "./depoimento";
import GaleriaVideos from "./GaleriaVideos";
import CadastroInteresse from "./cadastroInteresse";
import Footer from "./Footer";

import styles from "../styles/MainContainer.module.css";

export default function MainContainer({ children }) {
  return (
    <>
      <Navbar />
      {/*<div className={styles.container}>{children}</div>*/}
      <InfoCurso />
      <SobreCurso />
      <Banner />
      <Trabalhar />
      <Estrutura />
      <TourVirtual />
      <Livro />
      <Coordenador />
      <DetalhesCurso />
      <FormasIngresso />
      <Mensalidade />
      <Noticias />
      <GaleriaVideos />
      <CadastroInteresse />
      <Footer />

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="custom.js"></script>
    </>
  );
}
