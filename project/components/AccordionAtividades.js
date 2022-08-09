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
          <p className="p_liga">
            Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
            Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
            Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
            Texto Texto Texto Texto Texto Texto Texto Texto Texto
            <img className="liga_medicina" src="/images/liga_medicina.png" />
          </p>
        </div>
      </div>
    </div>
  );
};

/*https://www.youtube.com/watch?v=gs14LEv7Hfk&t=603s&ab_channel=h3webdevtuts*/

export default AccordionProjetos;
