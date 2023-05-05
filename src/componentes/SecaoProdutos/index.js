import './style.css'
import './responsivo.css'

export default function SecaoProdutos() {
    return (
        <section id="produtos" className="container-produtos">
            <div className="limita-secao">
                <h3 className="subtitulo">Nossos produtos</h3>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>

                <div className="container-cards-produtos">
                    <div className="card">
                        <h4>Óculos de grau</h4>
                        <img src={process.env.PUBLIC_URL + '/assets/oculos01.png'} alt="ó4 óculos de grau de cores diferentes" title="Óculos de grau" />
                        <p>R$ 500,00</p>
                    </div>
                    <div className="card">
                        <h4>Óculos transition</h4>
                        <img src={process.env.PUBLIC_URL + '/assets/oculos02.png'} alt="ócul4 óculos de grau de cores diferentes" title="Óculos de grau" />
                        <p>R$ 750,00</p>
                    </div>
                    <div className="card">
                        <h4>Óculos de sol</h4>
                        <img src={process.env.PUBLIC_URL + '/assets/oculos03.png'} alt="4 óculos de grau de cores diferentes" title="Óculos de grau" />
                        <p>R$ 700,00</p>
                    </div>
                    <div className="card">
                        <h4>Óculos infantil</h4>
                        <img src={process.env.PUBLIC_URL + '/assets/oculos04.png'} alt="óc4 óculos de grau de cores diferentes" title="Óculos de grau" />
                        <p>R$ 500,00</p>
                    </div>
                </div>
                
                <p>Todos os nossos produtos incluem:</p>

                <ul className="lista">
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    );
}