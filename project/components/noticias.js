import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../styles/Noticias.module.css";

export default function Noticias() {
  return (
    <div className={styles.alinhamento_div}>
      <section>
        <h2 className={styles.h2} data-aos="fade-up">
          Noticias do Curso de Medicina
        </h2>
        <a href="" className={styles.galeriaNoticias}>
          <i class="fas fa-angle-double-right"></i> Veja Mais
        </a>
        <hr className={styles.hr} />

        <Card className={styles.card} sx={{ maxWidth: 445, maxHeight: 800 }}>
          <CardMedia
            component="img"
            height="450"
            image="/images/noticia_medicina.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Notícia
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Confira a notícia: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Saiba Mais</Button>
          </CardActions>
        </Card>

        <Card className={styles.card} sx={{ maxWidth: 445, maxHeight: 800 }}>
          <CardMedia
            component="img"
            height="450"
            image="/images/noticia_medicina.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Notícia
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Confira a notícia: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Saiba Mais</Button>
          </CardActions>
        </Card>

        <Card className={styles.card} sx={{ maxWidth: 445, maxHeight: 800 }}>
          <CardMedia
            component="img"
            height="450"
            image="/images/noticia_medicina.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Notícia
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Confira a notícia: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Saiba Mais</Button>
          </CardActions>
        </Card>
      </section>
    </div>
  );
}
