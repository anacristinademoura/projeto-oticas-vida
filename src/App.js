import './App.css';
import Topo from './componentes/Topo';
import Conteudo from './componentes/Conteúdo/';
import Rodape from './componentes/Rodapé';

function App() {
  return (
    <div className="App">
      <Topo />
      <Conteudo />
      <Rodape />
    </div>
  );
}

export default App;
