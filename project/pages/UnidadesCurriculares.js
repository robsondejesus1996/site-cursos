import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";
import Accordion from "../components/Accordion";
import GaleriaVideos from "../components/GaleriaVideos";
import Mensalidade from "../components/mensalidade";
import Footer from "../components/Footer";
import WhatsappFixo from "../components/WhatsappFixo";
import styles from "../styles/CorpoDocente.module.css";
import AccordionAtividades from "../components/AccordionAtividades";
import React, { useState } from "react";
import Noticias from "../components/Noticias";
import Modal from "../components/Modal";



export default function UnidadesCurriculares() {
  const [active, setActive] = useState("Ligas Acadêmicas de Meidina1");

  return (
    <>
      <Navbar />
      <div className={styles.espacamento}>
        <section className={styles.body}>
          <p className="" data-aos="fade-left">
            Unidades Curriculares
          </p>
          <h1 data-aos="fade-up">
            Conheça as Unidades Curriculares do curso de Medicina
          </h1>

          <hr />
        </section>
      </div>

      <div className="alinhamento_unidades_curriculares">
        <h2 className="h2">1° Fase</h2>
        <Accordion 
          title="Conhecimentos Gerais I"
          active={active}
          setActive={setActive}
        />
        <Accordion
          title="Conhecimentos Gerais II"
          active={active}
          setActive={setActive}
        />
        <Accordion
          title="Conhecimentos Gerais III"
          active={active}
          setActive={setActive}
        />
        <Accordion
          title="Conhecimentos Gerais V"
          active={active}
          setActive={setActive}
        />
      </div>

      <Noticias />
      <GaleriaVideos />
      <WhatsappFixo />
      <Footer />
    </>
  );
}
