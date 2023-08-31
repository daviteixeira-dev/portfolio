import { Container } from "@chakra-ui/react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AboutMe from "../components/AboutMe/AboutMe";
import Projetos from "../components/Projetos/Projetos";
import MyServices from "../components/MyServices/MyServices";
import BlogSection from "../components/BlogSection/BlogSection";
import Conhecimentos from "../components/Conhecimentos/Conhecimentos";
import Apresentation from "../components/Apresentation/Apresentation";

const Home = () => {
    return (
        <Container maxW="full" className="App" p="0">
            <Header />
            <Apresentation />
            <AboutMe />
            <MyServices />
            <Conhecimentos />
            <Projetos />
            <BlogSection />
            <Footer />
        </Container>
    );
};

export default Home;