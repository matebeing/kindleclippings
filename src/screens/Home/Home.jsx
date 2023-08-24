import KindleMockup from './kindle.svg'
import { useClippings } from "../../hooks/myClippings";

import { Link } from "react-router-dom";

import './Home.css'

function Home() {
    const { handleSetClippings } = useClippings();

    const showFile = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = (e) => {
          const uploadedFile = e.target.result;
          handleSetClippings(uploadedFile);
        };
        reader.readAsText(e.target.files[0]);
    };

    return (
        <div className="container">
            <section className="wrapper">
                <img id="kindleMockup" src={KindleMockup} alt="Uma figura de um Kindle com bordas pretas e sem nenhum texto escrito." />
            </section>
            <section className="wrapper" id="tutorial"> 
                <h2>Importe seus recortes</h2>
                <p>
                    Você deve usar um cabo USB para transferir os dados do seu Kindle para 
                    o seu computador. Selecione o arquivo no diretório.
                </p>
                <label className="custom-file-upload">
                    <input type="file" accept=".txt" required onChange={showFile} />
                    <Link to={"/clippings"}>Importar</Link>
                </label>
            </section>
        </div>
    )
}

export default Home
