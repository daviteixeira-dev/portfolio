import { Flex, Text, Heading } from "@chakra-ui/react";

import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom';

import BlogCard from "../../pages/Blog/components/BlogCard";

import { FaAngleDoubleRight } from "react-icons/fa";

const BlogSection = () => {
    return (
        <Flex
            id="blog"
            as="section"
            justifyContent="space-between"
            backgroundColor="blackAlpha.900"
            padding={["1rem", "1rem", "2rem", "2rem"]}
            flexDirection={["column", "column", "row", "row"]}
        >
            <Flex
                padding="1rem"
                marginBottom="1rem"
                flexDirection="column"
                width={["100%", "100%", "49%", "49%"]}
                paddingTop={["1rem", "1rem", "1rem", "6rem"]}
            >
                <Heading
                    as="h2"
                    textAlign="start"
                    marginBottom="2rem"
                    color="whiteAlpha.900"
                    textTransform="uppercase"
                    fontFamily="Inter, sans-serif"
                    fontSize={["2rem", "2rem", "3rem", "3rem"]}
                >
                    Meu Blog
                </Heading>

                <Text
                    fontWeight="semibold"
                    color="whiteAlpha.900"
                    fontSize={["1.4rem", "1.4rem", "1.2rem", "1.2rem"]}
                >
                    Neste blog, quero trazer conteúdos que possam agregar à sua carreira como
                    desenvolvedor web, quero lhe fornecer informações das quais tive muita
                    dificuldade em achar no começo dos meus estudos, desta forma, quero
                    contribuir com o que eu sei para a comunidade de Dev's.
                </Text>

                <Text
                    display="flex"
                    marginTop="1rem"
                    fontWeight="bold"
                    alignItems="center"
                    color="whiteAlpha.900"
                    fontSize={["1.5rem","2rem"]}
                >
                    Artigo Recente <Text as="span" ml=".5rem" color="blue.500"><FaAngleDoubleRight /></Text>
                </Text>

                <Text
                    fontSize="1rem"
                    fontWeight="bold"
                    color="whiteAlpha.900"
                >
                    Não deixe de ler o artigo mais recente!
                </Text>
                
                <ChakraLink
                    to="/blog"
                    width="13rem"
                    marginTop="2rem"
                    padding="1rem 2rem"
                    as={ReactRouterLink}
                    borderRadius=".5rem"
                    fontWeight="semibold"
                    color="whiteAlpha.900"
                    backgroundColor="blue.500"
                    style={{ textDecoration: "none"}}
                >
                    Veja mais Artigos
                </ChakraLink>
                
            </Flex>

            <Flex
                padding="1rem"
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
                width={["100%", "100%", "49%", "49%"]}
                paddingTop={["1rem", "1rem", "1rem", "6rem"]}
            >
                <BlogCard
                    cardLink="/blog/page-example"
                    widthCard="25rem"
                    cardTag="#Front-End"
                    cardDate="27/08/2023"
                    cardNameAutor="Davi Teixeira"
                    cardImage="images/froned.jpg"
                    cardImageAutor="/images/davi.jpg"
                    cardAlt="Imagem de um programador."
                    cardTitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque non
                    corporis illum provident nihil nam nobis, architecto libero tempora
                    excepturi deserunt aliquid quisquam!"
                />
            </Flex>
        </Flex>
    );
};

export default BlogSection;