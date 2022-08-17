import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";
import AccordionAtividades from "../components/AccordionAtividades";
import GaleriaVideos from "../components/GaleriaVideos";
import Mensalidade from "../components/mensalidade";
import Footer from "../components/Footer";
import WhatsappFixo from "../components/WhatsappFixo";
import styles from "../styles/CorpoDocente.module.css";
import { Accordion } from "@mui/material";
import React, { useState } from "react";

export default function OutrasAtividades() {
  const [active, setActive] = useState("Ligas Acadêmicas de Meidina1");

  return (
    <>
      <Navbar />
      <div className={styles.espacamento}>
        <section className={styles.body}>
          <p className="pagina_id" data-aos="fade-left">
            Outras Atividades
          </p>
          <h1 className="pagina_id"data-aos="fade-up">
            Conheça as outras atividades do curso de Medicina
          </h1>

          <hr className="hr"/>
        </section>
      </div>
      <AccordionAtividades
        title="Ligas Acadêmicas de Meidina"
        active={active}
        setActive={setActive}
      />

      <GaleriaVideos />
      <WhatsappFixo/>
      <Footer />
    </>
  );
}
