import Link from "next/link";
import Navbar from "../components/Navbar";
import AccordionEstrutura from "../components/AccordionEstrutura.js"
import styles from "../styles/AccordionEstrutura.module.css";
import { useState } from "react";

export default function NossaEstrutura() {
  const [active, setActive] = useState("LABORATÓRIO MORFOFUNCIONAL I E II");
  return (
    <div>
      <Navbar />

      <div className="espacemento">
        <div className={styles.div_estrutura}>
        <AccordionEstrutura title="LABORATÓRIO MORFOFUNCIONAL I E II" active={active} setActive={setActive} />
        <AccordionEstrutura title="LABORATÓRIO MORFOFUNCIONAL " active={active} setActive={setActive} />
        </div>
      </div>
    </div>
  );
}
