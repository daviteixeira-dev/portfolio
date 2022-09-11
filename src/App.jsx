import "./App.css";
import { Container } from "@chakra-ui/react";

import Blog from "./components/Blog/Blog";
import Sobre from "./components/Sobre/Sobre";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projetos from "./components/Projetos/Projetos";
import Servicos from "./components/Servicos/Servicos";
import Conhecimentos from "./components/Conhecimentos/Conhecimentos";

function App() {
  return (
    <Container maxW="full" className="App" p="0">
      <Header />
      <Sobre />
      <Servicos />
      <Conhecimentos />
      <Projetos />
      <Blog />
      <Footer />
    </Container>
  );
}

export default App;
