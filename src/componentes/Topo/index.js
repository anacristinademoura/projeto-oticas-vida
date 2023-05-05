import './style.css'
import './responsivo.css'

export default function Topo() {
    return (
        <header>
            <div className="limita-secao menu">
                <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="logotipo" />

                <nav>
                    <a href="#produtos">PRODUTOS</a>
                    <a href="#sobre">SOBRE</a>
                    <a href="#contato">CONTATO</a>
                </nav>
            </div>
        </header>
    );
}