import React, { useState } from "react";
import Link from "next/link";
import Accordion from "../components/Accordion";
import Navbar from "../components/Navbar";

export default function UnidadesCurriculares() {
  const [active, setActive] = useState("Conhecimentos Gerais I");

  return (
    <div>
      <Navbar />

      <div className="espacemento">
        <h1 className="h1">1° Fase</h1>
        <Accordion title="Conhecimentos Gerais I" active={active} setActive={setActive} />
        <Accordion title="Conhecimentos Gerais II" active={active} setActive={setActive} />
        <Accordion title="Conhecimentos Gerais III" active={active} setActive={setActive} />
        <Accordion title="Conhecimentos Gerais V" active={active} setActive={setActive} />
      </div>
    </div>
  );
}
