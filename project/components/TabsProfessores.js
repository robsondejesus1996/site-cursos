import { useState } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../styles/CorpoDocente.module.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container_tabs">
      <div className="bloc_tabs_professores">
        <button
          className={
            toggleState === 1
              ? "tabs_professores active_tabs_professores"
              : "tabs_professores"
          }
          onClick={() => toggleTab(1)}
        >
          DOCENTES
        </button>
        <button
          className={
            toggleState === 2
              ? "tabs_professores active_tabs_professores"
              : "tabs_professores"
          }
          onClick={() => toggleTab(2)}
        >
          NÚCLEO DOCENTE ESTRUTURANTE-NDE
        </button>
        <button
          className={
            toggleState === 3
              ? "tabs_professores active_tabs_professores"
              : "tabs_professores"
          }
          onClick={() => toggleTab(3)}
        >
          COLEGIADO DE CURSO
        </button>
      </div>

      <div className="content_tabs_professores">
        <div
          className={
            toggleState === 1
              ? "content_professores  active-content-proff"
              : "content_professores"
          }
        >
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
                  <i
                    class="fa fa-user"
                    aria-hidden="true"
                  ></i> Especialista <br />
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
                  <i
                    class="fa fa-user"
                    aria-hidden="true"
                  ></i> Especialista <br />
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
                  <i
                    class="fa fa-user"
                    aria-hidden="true"
                  ></i> Especialista <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Currículo Lattes</Button>
              </CardActions>
            </Card>
          </div>
        </div>

        <div
          className={
            toggleState === 2
              ? "content_professores  active-content-proff"
              : "content_professores"
          }
        >
          <div className={styles.cards_professores}>
            <Card className={styles.card} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="540"
                image="/images/sem_foto.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <h1 className={styles.h1}>Augusto Fey</h1>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>Doutor
                  <br />
                  <i
                    class="fa fa-user"
                    aria-hidden="true"
                  ></i> Especialista <br />
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
                  <i
                    class="fa fa-user"
                    aria-hidden="true"
                  ></i> Especialista <br />
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
                  <h1 className={styles.h1}>Tatiane Muniz Barbosa</h1>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>Doutora
                  <br />
                  <i
                    class="fa fa-user"
                    aria-hidden="true"
                  ></i> Especialista <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Currículo Lattes</Button>
              </CardActions>
            </Card>
          </div>
        </div>

        <div
          className={
            toggleState === 3
              ? "content_professores  active-content-proff"
              : "content_professores"
          }
        >
          <div className={styles.cards_professores}>
            <Card className={styles.card} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="540"
                image="/images/pessoafisicaman.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <h1 className={styles.h1}>Augusto Fey</h1>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>Doutor
                  <br />
                  <i
                    class="fa fa-user"
                    aria-hidden="true"
                  ></i> Especialista <br />
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
                  <h1 className={styles.h1}>Nome Nome Nome Nome Nome</h1>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>Doutor
                  <br />
                  <i
                    class="fa fa-user"
                    aria-hidden="true"
                  ></i> Especialista <br />
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
                  <i
                    class="fa fa-user"
                    aria-hidden="true"
                  ></i> Especialista <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Currículo Lattes</Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
