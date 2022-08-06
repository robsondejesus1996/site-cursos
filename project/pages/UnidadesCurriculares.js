import React, { useState } from "react";
import Link from "next/link";
import Accordion from "../components/Accordion";
import Navbar from "../components/Navbar";

export default function UnidadesCurriculares() {
  const [active, setActive] = useState("Title1");

  return (
    <div>
      <Navbar />

      <div className="espacemento">
        <Accordion title="Title1" active={active} setActive={setActive} />
        <Accordion title="Title2" active={active} setActive={setActive} />
        <Accordion title="Title3" active={active} setActive={setActive} />
        <Accordion title="Title4" active={active} setActive={setActive} />
      </div>
    </div>
  );
}
