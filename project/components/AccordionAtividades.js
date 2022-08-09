import React from "react";

const AccordionProjetos = ({ title, active, setActive }) => {
  return (
    <div className="accordion">
      <div className="accordionHeading">
        <div className="container">
          <p>{title}</p>
          <span onClick={() => setActive(title)}>
            {active == title ? "X" : "|||"}
          </span>
        </div>
      </div>

      <div className={(active === title ? "show" : "") + " accordionContet"}>
        <div className="container">
          <h1 className="h1">
            Centro Acadêmico de Medicina do Alto Vale do Itajaí
          </h1>
          <p className="p">
            O Centro Acadêmico de Medicina do Alto Vale do Itajaí, doravante
            denominado CAMAVI, fundado em 19 de Agosto de 2019, representa e
            defende os interesses e direitos dos acadêmicos de Medicina do
            Centro Universitário para o Desenvolvimento do Alto Vale do Itajaí
            (UNIDAVI) perante os poderes públicos constituídos, sejam eles
            federais, estaduais, municipais, autárquicos, bem como em instâncias
            deliberativas e consultivas da UNIDAVI. O CAMAVI têm como objetivo
            aperfeiçoar constantemente as condições do ensino médico e o
            desenvolvimento cultural e político dos estudantes de Medicina. Link
            Instagram: https://www.instagram.com/camavi/
          </p>
        </div>
      </div>
    </div>
  );
};

/*https://www.youtube.com/watch?v=gs14LEv7Hfk&t=603s&ab_channel=h3webdevtuts*/

export default AccordionProjetos;
