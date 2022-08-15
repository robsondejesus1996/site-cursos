import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../styles/Noticias.module.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Noticias() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <Button size="small" onClick={handleOpen}>
              Saiba Mais
            </Button>
            <Modal
              className={styles.modal}
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style} className={styles.modal}>
                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    <h1>Acadêmicos de Medicina da Unidavi têm aula magna</h1>
                    <p>
                      <i class="fas fa-calendar-check justify-content-center white-text fa-lg"></i>{" "}
                      26/07/2022
                    </p>
                    <img
                      className={styles.imagem_principal_noticia}
                      src="/images/noticia_medicina.jpg"
                    />
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    <p className={styles.p}>
                      Para recepcionar os calouros de Medicina e os demais
                      acadêmicos do curso para o segundo semestre letivo de
                      2022, a Unidavi promoveu uma aula magna no Centro de
                      Inovação Norberto Frahm (CINF), na manhã desta
                      segunda-feira, 25 de julho.
                    </p>

                    <p className={styles.p}>
                      O evento contou com a apresentação "Epidauro, onde a
                      medicina e a arte se encontram", feita pela contadora de
                      histórias Andi Rubinstein. O curso de Medicina da Unidavi
                      chega a sua 11ª turma com o diferencial de oferecer
                      metodologias ativas - em que o aluno é o centro das
                      atenções e partícipe ativo na construção do conhecimento ,
                      além de permitir que o acadêmico interaja, desde o
                      primeiro ano do curso, na prática médica junto a serviços
                      de saúde e diretamente na comunidade.
                    </p>
                    <hr />
                    <img
                      className={styles.imagem_principal_noticia1}
                      src="/images/imagem_noticias_medicina1.jpg"
                    />
                    <img
                      className={styles.imagem_principal_noticia1}
                      src="/images/imagem_noticias_medicina2.jpg"
                    />
                    <img
                      className={styles.imagem_principal_noticia1}
                      src="/images/imagem_noticias_medicina3.jpg"
                    />
                  </Typography>
                </Box>
              </Fade>
            </Modal>
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
            <Button size="small" onClick={handleOpen}>
              Saiba Mais
            </Button>
            <Modal
              className={styles.modal}
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style} className={styles.modal}>
                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    <h1>Acadêmicos de Medicina da Unidavi têm aula magna</h1>
                    <p>
                      <i class="fas fa-calendar-check justify-content-center white-text fa-lg"></i>{" "}
                      26/07/2022
                    </p>
                    <img
                      className={styles.imagem_principal_noticia}
                      src="/images/noticia_medicina.jpg"
                    />
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    <p className={styles.p}>
                      Para recepcionar os calouros de Medicina e os demais
                      acadêmicos do curso para o segundo semestre letivo de
                      2022, a Unidavi promoveu uma aula magna no Centro de
                      Inovação Norberto Frahm (CINF), na manhã desta
                      segunda-feira, 25 de julho.
                    </p>

                    <p className={styles.p}>
                      O evento contou com a apresentação "Epidauro, onde a
                      medicina e a arte se encontram", feita pela contadora de
                      histórias Andi Rubinstein. O curso de Medicina da Unidavi
                      chega a sua 11ª turma com o diferencial de oferecer
                      metodologias ativas - em que o aluno é o centro das
                      atenções e partícipe ativo na construção do conhecimento ,
                      além de permitir que o acadêmico interaja, desde o
                      primeiro ano do curso, na prática médica junto a serviços
                      de saúde e diretamente na comunidade.
                    </p>
                    <hr />
                    <img
                      className={styles.imagem_principal_noticia1}
                      src="/images/imagem_noticias_medicina1.jpg"
                    />
                    <img
                      className={styles.imagem_principal_noticia1}
                      src="/images/imagem_noticias_medicina2.jpg"
                    />
                    <img
                      className={styles.imagem_principal_noticia1}
                      src="/images/imagem_noticias_medicina3.jpg"
                    />
                  </Typography>
                </Box>
              </Fade>
            </Modal>
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
            <Button size="small" onClick={handleOpen}>
              Saiba Mais
            </Button>
            <Modal
              className={styles.modal}
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style} className={styles.modal}>
                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    <h1>Acadêmicos de Medicina da Unidavi têm aula magna</h1>
                    <p>
                      <i class="fas fa-calendar-check justify-content-center white-text fa-lg"></i>{" "}
                      26/07/2022
                    </p>
                    <img
                      className={styles.imagem_principal_noticia}
                      src="/images/noticia_medicina.jpg"
                    />
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    <p className={styles.p}>
                      Para recepcionar os calouros de Medicina e os demais
                      acadêmicos do curso para o segundo semestre letivo de
                      2022, a Unidavi promoveu uma aula magna no Centro de
                      Inovação Norberto Frahm (CINF), na manhã desta
                      segunda-feira, 25 de julho.
                    </p>

                    <p className={styles.p}>
                      O evento contou com a apresentação "Epidauro, onde a
                      medicina e a arte se encontram", feita pela contadora de
                      histórias Andi Rubinstein. O curso de Medicina da Unidavi
                      chega a sua 11ª turma com o diferencial de oferecer
                      metodologias ativas - em que o aluno é o centro das
                      atenções e partícipe ativo na construção do conhecimento ,
                      além de permitir que o acadêmico interaja, desde o
                      primeiro ano do curso, na prática médica junto a serviços
                      de saúde e diretamente na comunidade.
                    </p>
                    <hr />
                    <img
                      className={styles.imagem_principal_noticia1}
                      src="/images/imagem_noticias_medicina1.jpg"
                    />
                    <img
                      className={styles.imagem_principal_noticia1}
                      src="/images/imagem_noticias_medicina2.jpg"
                    />
                    <img
                      className={styles.imagem_principal_noticia1}
                      src="/images/imagem_noticias_medicina3.jpg"
                    />
                  </Typography>
                </Box>
              </Fade>
            </Modal>
          </CardActions>
        </Card>
      </section>
    </div>
  );
}
