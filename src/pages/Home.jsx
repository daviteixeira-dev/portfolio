import { Container } from "@chakra-ui/react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AboutMe from "../components/AboutMe/AboutMe";
import Knowledge from "../components/Knowledge/Knowledge";
import MyServices from "../components/MyServices/MyServices";
import BlogSection from "../components/BlogSection/BlogSection";
import Presentation from "../components/Presentation/Presentation";
import MyMainProjects from "../components/MyMainProjects/MyMainProjects";

import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <Container fontFamily="Arial, Helvetica, sans-serif" maxW="full" className="App" p="0">

            <Helmet>
                <title>Davi Teixeira | Portifólio</title>
                <meta http-equiv="content-language" content="pt-BR" />
                <link rel="canonical" href="https://www.daviteixeira.dev.br/" />
                <meta 
                    name="description" 
                    content="Desenvolvedor web graduado em Sistemas de Informação, especializado na criação de websites de alta qualidade para empresas. Colabore comigo para uma presença digital impactante e inovadora." 
                />
                <meta 
                    name="keywords" 
                    content="sites, web, desenvolvedor web, desenvolvimento, programador, daviteixeira, davi teixeira, front-end, frontend, ui, davi, freelancer, freela, website, portfólio, daviteixeira_dev" 
                />
                <meta name="copyright" content="Davi Teixeira 2023" />

                <link rel="apple-touch-icon" href="/images/logo.png" />
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="black"/>

                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Davi Teixeira | Portifólio"/>
                <meta property="og:url" content="https://www.daviteixeira.dev.br"/>
                <meta property="og:image" content="https://www.daviteixeira.dev.br/images/screenshot-home-page.png"/>
                <meta property="og:description" content="Desenvolvedor web graduado em Sistemas de Informação, especializado na criação de websites de alta qualidade para empresas. Colabore comigo para uma presença digital impactante e inovadora." />

                <meta name="twitter:site" content="@DaviTei51909613"/>
                <meta name="twitter:creator" content="Davi Teixeira"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="Davi Teixeira | Portifólio"/>
                <meta name="twitter:image:src" content="https://www.daviteixeira.dev.br/images/screenshot-home-page.png"/>
                <meta 
                    name="twitter:description" 
                    content="Desenvolvedor web graduado em Sistemas de Informação, especializado na criação de websites de alta qualidade para empresas. Colabore comigo para uma presença digital impactante e inovadora."
                />

                <link rel="manifest" href="/manifest.json"></link>
            </Helmet>

            <Header />
            <Presentation />
            <AboutMe />
            <MyServices />
            <Knowledge />
            <MyMainProjects />
            <BlogSection />
            <Footer />
        </Container>
    );
};

export default Home;