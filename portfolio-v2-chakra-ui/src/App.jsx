
import './App.css';
import Sobre from './components/Sobre/Sobre';
import Servicos from './components/Servicos/Servicos';
import Conhecimentos from './components/Conhecimentos/Conhecimentos';
import Projetos from './components/Projetos/Projetos';
import Blog from './components/Blog/Blog';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {

  return (
    <div className="App">
      <Header />
        <Sobre />
        <Servicos />
        <Conhecimentos />
        <Projetos />
        <Blog />
        <Contato />
        <Footer />
    </div>
  )
}

export default App;
