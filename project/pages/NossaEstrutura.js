import Navbar from "../components/Navbar";
import GaleriaVideos from "../components/GaleriaVideos";
import Footer from "../components/Footer";
import Noticias from "../components/Noticias"
import AccordionEstrutura from "../components/AccordionEstrutura";
import WhatsappFixo from "../components/WhatsappFixo";
import styles from "../styles/AccordionEstrutura.module.css";

import React, { useState } from "react";
export default function NossaEstrutura() {
  const [active, setActive] = useState("Nome estrutura");

  return (
    <>
      <Navbar />
      <div className={styles.espacamento}>
        <section className={styles.body}>
          <p className="" data-aos="fade-left">
            Estrutura
          </p>
          <h1 data-aos="fade-up">Conheça a estrutura do curso de Medicina</h1>

          <hr />
        </section>
      </div>

      <div className="alinhamento_estrutura">
        <AccordionEstrutura
          title="LABORATÓRIO MORFOFUNCIONAL I E II"
          active={active}
          setActive={setActive}
        />
        <AccordionEstrutura
          title="LABORATÓRIO MORFOFUNCIONAL "
          active={active}
          setActive={setActive}
        />
      </div>

      <Noticias />
      <WhatsappFixo />
      <GaleriaVideos />
      <Footer />
    </>
  );
}
