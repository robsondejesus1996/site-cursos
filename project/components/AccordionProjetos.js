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
            <p>
              <a className="a" href="https://ajph.aphapublications.org/" target="_blank"><i class="fa-solid fa-arrow-right"></i>&nbsp; American Journal of Health Studies | On-line Assinatura | Mentor / EBSCO</a><br/>
              <a className="a" href="https://ajph.aphapublications.org/" target="_blank"><i class="fa-solid fa-arrow-right"></i>&nbsp; American Journal of Public Health | On-line | Acesso livre</a><br/>
              <a className="a" href="https://ajph.aphapublications.org/" target="_blank"><i class="fa-solid fa-arrow-right"></i>&nbsp; Chest Journal | On-line Assinatura | Mentor / EBSCO</a><br/>
              <a className="a" href="https://ajph.aphapublications.org/" target="_blank"><i class="fa-solid fa-arrow-right"></i>&nbsp; New England Journal of Medicine | On-line | Acesso livre</a><br/>
              <a className="a" href="https://ajph.aphapublications.org/" target="_blank"><i class="fa-solid fa-arrow-right"></i>&nbsp; Anaesthesia and Intensive care Medicine | On-line Assinatura | Mentor / EBSCO</a><br/>
            </p>
          </div>
        </div>
      </div>
  );
};

/*https://www.youtube.com/watch?v=gs14LEv7Hfk&t=603s&ab_channel=h3webdevtuts*/

export default AccordionProjetos;
