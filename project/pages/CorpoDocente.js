import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";
import Mensalidade from "../components/mensalidade";
import Footer from "../components/Footer";
import TabsProfessores from "../components/TabsProfessores";
import styles from "../styles/CorpoDocente.module.css";
import WhatsappFixo from "../components/WhatsappFixo";

export default function CorpoDocente() {
  return (
    <>
      <Navbar />
      <div className={styles.espacamento}>
        <h1 className="h1">Conheça os docentes do curso de Medicina</h1>
        <TabsProfessores />
        <WhatsappFixo />
        <Footer />
      </div>
    </>
  );
}
