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
import Noticias from "./depoimento";
import GaleriaVideos from "./GaleriaVideos";
import CadastroInteresse from "./cadastroInteresse";
import Footer from "./Footer";

import styles from "../styles/MainContainer.module.css";

export default function MainContainer({ children }) {
  const galleryImages = [
    {
      img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <>
      <Navbar />
      {/*<div className={styles.container}>{children}</div>*/}
      <InfoCurso />
      <SobreCurso />
      <Banner />
      <Trabalhar />
      <Estrutura />
      <EstruturaComponente galleryImages={galleryImages} />
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
