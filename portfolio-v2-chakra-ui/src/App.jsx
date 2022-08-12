
import './App.css';
import { Container } from '@chakra-ui/react'

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
    <Container maxW='90%' className="App">
        <Header />
        <Sobre />
        <Servicos />
        <Conhecimentos />
        <Projetos />
        <Blog />
        <Contato />
        <Footer />
    </Container>
  )
}

export default App;
