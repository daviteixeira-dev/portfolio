import { Flex, Text, Container, Heading, SimpleGrid } from "@chakra-ui/react";

import DesktopMenuBlog from "../components/DesktopMenuBlog";

import BlogCard from "../components/BlogCard";
import Footer from "../../../components/Footer/Footer";

const myBlogCards = [
    {
        cardLink: "#",
        widthCard: "auto",
        cardTag: "#Front-End",
        cardDate: "27/08/2023",
        cardNameAutor: "Davi Teixeira",
        cardImage: "images/froned.jpg",
        cardImageAutor: "/images/davi.jpg",
        cardAlt: "Imagem de um programador.",
        cardTitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque non corporis illum provident nihil nam nobis, architecto libero tempora excepturi deserunt aliquid quisquam!"
    },
    {
        cardLink: "#",
        widthCard: "auto",
        cardTag: "#Front-End",
        cardDate: "27/08/2023",
        cardNameAutor: "Davi Teixeira",
        cardImage: "images/froned.jpg",
        cardImageAutor: "/images/davi.jpg",
        cardAlt: "Imagem de um programador.",
        cardTitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque non corporis illum provident nihil nam nobis, architecto libero tempora excepturi deserunt aliquid quisquam!"
    },
    {
        cardLink: "#",
        widthCard: "auto",
        cardTag: "#Front-End",
        cardDate: "27/08/2023",
        cardNameAutor: "Davi Teixeira",
        cardImage: "images/froned.jpg",
        cardImageAutor: "/images/davi.jpg",
        cardAlt: "Imagem de um programador.",
        cardTitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque non corporis illum provident nihil nam nobis, architecto libero tempora excepturi deserunt aliquid quisquam!"
    },
]

const Blog = () => {
    return (
        <Container fontFamily="Arial, Helvetica, sans-serif" maxW="full" padding="0">
            
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
                columns={[ 1 , 1, 2,  3 ]} 
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
    );
};

export default Blog;