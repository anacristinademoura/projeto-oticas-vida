import './style.css'
import './responsivo.css'

export default function SecaoContato () {
    return (
        <section id = "contato" className="container-contatos">
            <div className="limita-secao">
                <h3 className="subtitulo">FALE CONOSCO</h3>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

                <div className="box-contatos">
                    <div className="box">
                        <h4>Contato</h4>
                        <figure>
                            <img src={process.env.PUBLIC_URL + '/assets/local.png'} alt="pino de localização" title = "Ícone de localização"/>
                            <figcaption>Nova Iguaçu, RJ</figcaption>
                        </figure>

                        <figure>
                            <img src={process.env.PUBLIC_URL + '/assets/telefone.png'} alt="ícone de um telefone" title = "Ícone telefone"/>
                            <figcaption>(21) 9999-9999</figcaption>
                        </figure>

                        <figure>
                            <img src={process.env.PUBLIC_URL + '/assets/email.png'} alt="ícone de uma carta" title = "Ícone email"/>
                            <figcaption>contato@oticavida.com</figcaption>
                        </figure>
                    </div>

                    <div className="box">
                        <h4>Nossas Redes Sociais</h4>
                        <figure>
                            <img src={process.env.PUBLIC_URL + '/assets/fb.png'} alt="Logo do facebook" title = "Ícone Facebook"/>
                            <figcaption>/OticaVida</figcaption>
                        </figure>

                        <figure>
                            <img src={process.env.PUBLIC_URL + '/assets/ig.png'} alt="Logo do instagram" title = "Ícone Instagram"/>
                            <figcaption>@oticavidarj</figcaption>
                        </figure>

                        <figure>
                            <img src={process.env.PUBLIC_URL + '/assets/tt.png'} alt="Logo do twitter" title = "Ícone Twitter"/>
                            <figcaption>@oticavidarj</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}