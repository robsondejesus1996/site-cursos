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
import styles from "../styles/CorpoDocente.module.css";

export default function CorpoDocente() {
  return (
    <>
      <Navbar />
      <div className={styles.espacamento}>
        <h1 className="h1" data-aos="fade-up">Professores do Curso</h1>
        <p className={styles.p} data-aos="fade-left">
          Conheça os professores do curso de Medicina
        </p>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="540"
            image="/images/coordenador-MED.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <h1  className={styles.h1}>Doutor</h1>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Veja Mais</Button>
          </CardActions>
        </Card>
        
        <Mensalidade />
        <Footer />
      </div>
    </>
  );
}
