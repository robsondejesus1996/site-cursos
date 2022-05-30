import Navbar from "../components/Navbar";
import Link from "next/link";

export default function SobreCursos() {
  return (
    <>
      <Navbar />
      <h1>Por que este curso....</h1>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </>
  );
}
