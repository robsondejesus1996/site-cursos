import Navbar from "../components/Navbar";
import Link from "next/link";

export default function OndeTrabalhar() {
  return (
    <>
      <Navbar />
      <h1>Onde trabalhar</h1>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </>
  );
}
