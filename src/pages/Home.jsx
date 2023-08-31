import { Container } from "@chakra-ui/react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AboutMe from "../components/AboutMe/AboutMe";
import Knowledge from "../components/Knowledge/Knowledge";
import MyServices from "../components/MyServices/MyServices";
import BlogSection from "../components/BlogSection/BlogSection";
import Apresentation from "../components/Apresentation/Apresentation";
import MyMainProjects from "../components/MyMainProjects/MyMainProjects";

const Home = () => {
    return (
        <Container maxW="full" className="App" p="0">
            <Header />
            <Apresentation />
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