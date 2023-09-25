import { useEffect } from "react";

import { Flex, Text, Container, Heading, SimpleGrid } from "@chakra-ui/react";

import DesktopMenuBlog from "../components/DesktopMenuBlog";

import BlogCard from "../components/BlogCard";
import Footer from "../../../components/Footer/Footer";

import { Helmet, HelmetProvider } from "react-helmet-async";

const myBlogCards = [
    {
        cardLink: "#",
        widthCard: "auto",
        cardTag: "#Front-End",
        cardDate: "27/08/2023",
        cardNameAutor: "Davi Teixeira",
        cardAlt: "Imagem de um programador.",
        cardImageAutor: "/images/about-me/davi.jpg",
        cardImage: "/images/blog-images/front-end.jpg",
        cardTitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque non corporis illum provident nihil nam nobis, architecto libero tempora excepturi deserunt aliquid quisquam!"
    },
    {
        cardLink: "#",
        widthCard: "auto",
        cardTag: "#Front-End",
        cardDate: "27/08/2023",
        cardNameAutor: "Davi Teixeira",
        cardAlt: "Imagem de um programador.",
        cardImageAutor: "/images/about-me/davi.jpg",
        cardImage: "/images/blog-images/front-end.jpg",
        cardTitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque non corporis illum provident nihil nam nobis, architecto libero tempora excepturi deserunt aliquid quisquam!"
    },
    {
        cardLink: "#",
        widthCard: "auto",
        cardTag: "#Front-End",
        cardDate: "27/08/2023",
        cardNameAutor: "Davi Teixeira",
        cardAlt: "Imagem de um programador.",
        cardImageAutor: "/images/about-me/davi.jpg",
        cardImage: "/images/blog-images/front-end.jpg",
        cardTitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque non corporis illum provident nihil nam nobis, architecto libero tempora excepturi deserunt aliquid quisquam!"
    },
]

const Blog = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <HelmetProvider>
            <Container fontFamily="Arial, Helvetica, sans-serif" maxW="full" padding="0">

                <Helmet>
                    <link rel="icon" type="image/svg+xml" href="/images/logo.png" />
                    <title>Blog | Davi Teixeira</title>
                    <meta http-equiv="content-language" content="pt-BR" />
                    <link rel="canonical" href="https://www.daviteixeira.dev.br/blog" />
                    <meta
                        name="description"
                        content="Davi Teixeira Blog: Seu guia definitivo para o desenvolvimento web. Encontre insights, aprendizado, dicas, tutoriais e recursos valiosos para desenvolvedores web."
                    />
                    <meta
                        name="keywords"
                        content="blog, insights, dicas, tutoriais, aprendizado, recursos, desenvolvedores web, sites, web, desenvolvedor web, desenvolvimento, programador, daviteixeira, davi teixeira dev, davi teixeira, front-end, frontend, ui, davi, freelancer, freela, website, daviteixeira_dev"
                    />
                    <meta name="copyright" content="Davi Teixeira 2023" />

                    <link rel="apple-touch-icon" href="/images/logo.png" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black" />

                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Blog | Davi Teixeira" />
                    <meta property="og:url" content="https://www.daviteixeira.dev.br/blog" />
                    <meta property="og:image" content="https://www.daviteixeira.dev.br/images/screenshot-blog.png" />
                    <meta property="og:description" content="Davi Teixeira Blog: Seu guia definitivo para o desenvolvimento web. Encontre insights, aprendizado, dicas, tutoriais e recursos valiosos para desenvolvedores web." />

                    <meta name="twitter:site" content="@DaviTei51909613" />
                    <meta name="twitter:creator" content="Davi Teixeira" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Blog | Davi Teixeira" />
                    <meta name="twitter:image:src" content="https://www.daviteixeira.dev.br/images/screenshot-blog.png" />
                    <meta
                        name="twitter:description"
                        content="Davi Teixeira Blog: Seu guia definitivo para o desenvolvimento web. Encontre insights, aprendizado, dicas, tutoriais e recursos valiosos para desenvolvedores web."
                    />

                    <link rel="manifest" href="/manifest.json"></link>
                </Helmet>

                <DesktopMenuBlog />

                <Flex
                    padding="1rem"
                    alignItems="center"
                    flexDirection="column"
                    justifyContent="center"
                    backgroundColor="gray.900"
                    height={["100vh", "25rem"]}
                >
                    <Heading
                        as="h1"
                        paddingTop="6rem"
                        textAlign="center"
                        marginBottom="1rem"
                        color="whiteAlpha.900"
                        fontSize={["2.5rem", "3rem"]}
                    >
                        Davi Teixeira Blog
                    </Heading>

                    <Heading
                        as="h2"
                        paddingTop="1rem"
                        textAlign="center"
                        marginBottom="1rem"
                        color="whiteAlpha.900"
                        fontSize={["1.5rem", "2.2rem"]}
                    >
                        Desenvolvendo a Web: Insights e Aprendizado
                    </Heading>

                    <Text
                        textAlign="center"
                        color="whiteAlpha.900"
                        fontSize={["1rem", "1.5rem"]}
                    >
                        Dicas, Tutoriais e Recursos para Desenvolvedores Web.
                    </Text>
                </Flex>

                <SimpleGrid
                    as="section"
                    spacing={6}
                    padding="2rem"
                    columns={[1, 1, 2, 3]}
                    backgroundColor="gray.800"
                    justifyContent="space-evenly"
                >
                    {
                        myBlogCards.map((item, index) => (
                            <BlogCard
                                key={index}
                                cardAlt={item.cardAlt}
                                cardTag={item.cardTag}
                                cardDate={item.cardDate}
                                cardLink={item.cardLink}
                                cardText={item.cardText}
                                widthCard={item.widthCard}
                                cardTitle={item.cardTitle}
                                cardImage={item.cardImage}
                                cardNameAutor={item.cardNameAutor}
                                cardImageAutor={item.cardImageAutor}
                            />
                        ))
                    }
                </SimpleGrid>

                <Footer />
            </Container>
        </HelmetProvider>
    );
};

export default Blog;