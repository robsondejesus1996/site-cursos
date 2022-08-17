import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";
import AccordionProjetos from "../components/AccordionProjetos";
import GaleriaVideos from "../components/GaleriaVideos";
import Mensalidade from "../components/mensalidade";
import Footer from "../components/Footer";
import Noticias from "../components/Noticias";
import WhatsappFixo from "../components/WhatsappFixo";
import styles from "../styles/CorpoDocente.module.css";
import { Accordion } from "@mui/material";
import React, { useState } from "react";

export default function ProjetoPedagogico() {
  const [active, setActive] = useState("Periódicos Online1");
  return (
    <>
      <Navbar />
      <div className={styles.espacamento}>
        <section className={styles.body}>
          <p className="pagina_id" data-aos="fade-left">
            Projeto Pedagógico
          </p>
          <h1 className="pagina_id" data-aos="fade-up">
            Conheça o Projeto Pedagógico do curso de Medicina
          </h1>

          <hr className="hr"/>
        </section>
      </div>
      <AccordionProjetos
        title="Periódicos Online"
        active={active}
        setActive={setActive}
      />
       <Noticias />
      <GaleriaVideos />
      <WhatsappFixo />
      <Footer />
    </>
  );
}
