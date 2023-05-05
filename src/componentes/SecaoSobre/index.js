import './style.css'
import './responsivo.css'

export default function SecaoSobre () {
    return (
        <section id = "sobre" className="container-sobre">
            <div className="limita-secao descricao-sobre">
                <h3 className="subtitulo">QUEM SOMOS NÓS?</h3>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
            </div>

            <div className="container-cards-sobre">
                <img src={process.env.PUBLIC_URL + '/assets/loja.png'} alt=""/>

                <div className="card">
                    <h4>Nossas Filiais</h4>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>

                <div className="card">
                    <h4>Atendimento flexível</h4>
                    <p>Nossa equipe possui é treinada para te atender</p>
                </div>

                <img src={process.env.PUBLIC_URL + '/assets/atendimento.png'} alt=""/>
            </div>
        </section>
    );
}