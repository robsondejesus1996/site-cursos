import Navbar from '../../components/Navbar'
import Link from 'next/link'

export default function Estrutura(){
    return(
       <>
        <Navbar />
        <h1>Conheça a estrutura do curso de....</h1>
        <Link href="/">
            <a>Voltar</a>
        </Link>
       </>
    )
}