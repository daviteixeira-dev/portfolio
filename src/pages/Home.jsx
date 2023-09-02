import { Container } from "@chakra-ui/react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AboutMe from "../components/AboutMe/AboutMe";
import Knowledge from "../components/Knowledge/Knowledge";
import MyServices from "../components/MyServices/MyServices";
import BlogSection from "../components/BlogSection/BlogSection";
import Presentation from "../components/Presentation/Presentation";
import MyMainProjects from "../components/MyMainProjects/MyMainProjects";

const Home = () => {
    return (
        <Container fontFamily="Arial, Helvetica, sans-serif" maxW="full" className="App" p="0">
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