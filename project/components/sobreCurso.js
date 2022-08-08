import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/SobreCurso.module.css";
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function SobreCurso() {
  useEffect(() =>{
    Aos.init({ duration: 1500 });
  }, [])


  return (
    <>
      <section>
        <div className="">
          <div className="heading-block">
            <h6 className={styles.pergunta} data-wow-delay="0.4s" data-aos="fade-left">
              POR QUE ESTE
            </h6>
            <span className={styles.curso} data-aos="fade-up">
              {" "}
              <p className={styles.pipe} >|</p>CURSO
            </span>

            <div className={styles.div_imagem_curso}  data-aos="fade-right">
              <img
                className="hello-img animate fadeInLeft"
                data-wow-delay="0.4s"
                src="https://siteunidavi.s3.sa-east-1.amazonaws.com/2021/8/1-metodologias-ativas.png"
                alt="Imagem Sobre o Curso"
               
              />
              <img
                className={styles.figura_imagem}
                src="/images/hello-bg.png"
              />
            </div>

            <div className={styles.descricao}>
              <p>
                O curso de Medicina é focado no acadêmico que tem participação
                ativa na busca do conhecimento, com uma estrutura completa a seu
                favor.
              </p>
            </div>

            <div className={styles.descricao_detalhada}>
              <p>
                Aqui o acadêmico estará amparado e será orientado e conduzido à
                caminhada durante esta jornada. O foco é a formação de médicos
                generalistas, capazes de atuar em qualquer região do Brasil e do
                mundo, desenvolvendo grande capacidade de adaptação a diferentes
                realidades e com habilidades na confecção de diagnósticos e
                tratamentos atuais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <p className={styles.fim}></p>
    </>
  );
}
