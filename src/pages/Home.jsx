import { Container } from "@chakra-ui/react";

import Blog from "../components/Blog/Blog";
import Sobre from "../components/Sobre/Sobre";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Servicos from "../components/Servicos/Servicos";
import Projetos from "../components/Projetos/Projetos";
import Conhecimentos from "../components/Conhecimentos/Conhecimentos";
import Apresentation from "../components/Apresentation/Apresentation";
import AboutMe from "../components/AboutMe/AboutMe";

const Home = () => {
    return (
        <Container maxW="full" className="App" p="0">
            <Header />
            <Apresentation />
            <AboutMe />
            <Servicos />
            <Conhecimentos />
            <Projetos />
            <Blog />
            <Footer />
        </Container>
    );
};

export default Home;