import React from "react";

const Accordion = ({ title, active, setActive }) => {
  return (
    <div className="alinhamento">
      <div className="accordion">
        <div className="accordionHeading">
          <div className="container">
            <p>{title}</p>
            <span onClick={() => setActive(title)}>
              <i class="fa-solid fa-building"></i>Presencial &nbsp; &nbsp;
              <i class="fa-solid fa-clock"></i>126H &nbsp; &nbsp;
              {active == title ? "|||" : <i class="fa-solid fa-arrow-down"></i>}
            </span>
          </div>
        </div>

        <div className={(active === title ? "show" : "") + " accordionContet"}>
          <div className="container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
/>;

export default Accordion;
