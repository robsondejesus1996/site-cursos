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
import WhatsappFixo from "../components/WhatsappFixo";

export default function CorpoDocente() {
  return (
    <>
      <Navbar />
      <div className={styles.espacamento}>
        
        <h1 className="h1">Conheça os docentes do curso de Medicina</h1>

        <div className={styles.cards_professores}>
          <Card className={styles.card} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="540"
              image="/images/coordenador-MED.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h1 className={styles.h1}>Augusto Fey</h1>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <i class="fa fa-graduation-cap" aria-hidden="true"></i>Doutor
                <br />
                <i class="fa fa-user" aria-hidden="true"></i> Especialista{" "}
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Currículo Lattes</Button>
            </CardActions>
          </Card>

          <Card className={styles.card} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="540"
              image="/images/sem_foto.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h1 className={styles.h1}>Nome Nome Nome Nome Nome</h1>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <i class="fa fa-graduation-cap" aria-hidden="true"></i>Doutor
                <br />
                <i class="fa fa-user" aria-hidden="true"></i> Especialista{" "}
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Currículo Lattes</Button>
            </CardActions>
          </Card>

          <Card className={styles.card} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="540"
              image="/images/pessoafisicaman.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h1 className={styles.h1}>Tatiane Muniz Barbosa</h1>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <i class="fa fa-graduation-cap" aria-hidden="true"></i>Doutora
                <br />
                <i class="fa fa-user" aria-hidden="true"></i> Especialista{" "}
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Currículo Lattes</Button>
            </CardActions>
          </Card>
        </div>
        <WhatsappFixo />
        <Footer />
      </div>
    </>
  );
}
