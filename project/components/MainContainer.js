import Navbar from "./Navbar";
import InfoCurso from "./infoCurso";
import SobreCurso from "./sobreCurso";
import Banner from "./banner";
import Trabalhar from "./trabalhar";
import Estrutura from "./estrutura";
import EstruturaComponente from "./estruturaComponente.js";
import TourVirtual from "./tourVirtual";
import Livro from "./livro";
import Coordenador from "./coordenador";
import DetalhesCurso from "./detalhesCurso";
import FormasIngresso from "./formaIngresso";
import Mensalidade from "./mensalidade";
import Depoimentos from "./depoimento";
import Noticias from "./noticias"
import GaleriaVideos from "./GaleriaVideos";
import CadastroInteresse from "./cadastroInteresse";
import Footer from "./Footer";
import WhatsappFixo from "./WhatsappFixo";

import styles from "../styles/MainContainer.module.css";

export default function MainContainer({ children }) {
  const galleryImages = [
    {
      img: "/images/enfermaria.jpg",
    },
    {
      img: "/images/laboratorio_fisiologia.jpg",
    },
    {
      img: "/images/morfofuncional.jpg",
    },

    {
      img: "/images/simulador_sim_man.jpg",
    },
    {
      img: "/images/consultorio.jpg",
    },
    {
      img: "/images/sala_comando.jpg",
    },
    {
      img: "/images/ambulatorial.jpg",
    },
    {
      img: "/images/centro_cirurgico.jpg",
    },
    {
      img: "/images/visita_domiciliar.jpg",
    },
  ];

  return (
    <>
      
      <Navbar />
      <WhatsappFixo />
      {/*<div className={styles.container}>{children}</div>*/}
      <InfoCurso />
      <SobreCurso />
      <Banner />
      <Trabalhar />
      <EstruturaComponente galleryImages={galleryImages} />
      <TourVirtual />
      <Livro />
      <Coordenador />
      <DetalhesCurso />
      <FormasIngresso />
      <Mensalidade />
      <Depoimentos />
      <Noticias />
      <GaleriaVideos />
      <CadastroInteresse />
      <Footer />

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="custom.js"></script>
    </>
  );
}
