import React from "react";
import { Flex, Heading, Text, Image } from "@chakra-ui/react"

import Experience from "./Experience";
import Education from "./Education";

function Sobre() {
    return (
        <Flex h="auto" w="100vw" flexDirection="column">
            <Flex
                p="2rem"
                w="100vw"
                id="sobre"
                bg="#ededec"
                as="section"
                alignItems="center"
                justifyContent="space-evenly"
                direction={["column", "row", "row"]}
            >
                <Flex>
                    <Image
                        w={["200", "400"]}
                        h={["200", "400"]}
                        borderRadius=".5rem"
                        src="images/davi.jpg"
                    />
                </Flex>

                <Flex
                    p={["1rem", "0"]}
                    w={["auto", "30rem"]}
                    flexDirection="column"
                >
                    <Heading
                        as="h2"
                        mb="1rem"
                        fontWeight="extrabold"
                        fontFamily="Inter, sans-serif"
                    >
                        Davi Teixeira
                    </Heading>

                    <Heading
                        as="h3"
                        mb="1rem"
                        fontSize="1rem"
                        fontFamily="Inter, sans-serif"
                    >
                        Desenvolvedor Front-end
                    </Heading>

                    <Text
                        mb="1rem"
                        fontFamily="Inter, sans-serif"
                    >
                        Graduando em Sistemas de Informação pela Universidade Federal do Ceará. 
                        Sou Desenvolvedor Front-end apaixonado em tirar ideias do papel e 
                        transformá-las em código.
                    </Text>

                    <Text
                        fontFamily="Inter, sans-serif"
                    >
                        Assim, tenho trabalhado em projetos como foco tópicos relacionados 
                        à <Text as="em">Responsividade</Text>, <Text as="em">Acessibilidade Web</Text> 
                        e <Text as="em">SEO</Text>.
                    </Text>
                </Flex>
            </Flex>

            <Flex
                bg="#ededec"
                p={[".5rem", "2rem"]}
                justifyContent="space-evenly"
                flexDirection={["column", "row", "row"]}
            >
                <Flex
                    textAlign="center"
                    flexDirection="column"
                    maxW={["100vw", "50vw", "50vw"]}
                >
                    <Heading as="h3">
                        Experiência
                    </Heading>

                    <Experience />
                </Flex>

                <Flex
                    textAlign="center"
                    flexDirection="column"
                    maxW={["100vw", "50vw", "50vw"]}
                >
                    <Heading as="h3">
                        Educação
                    </Heading>

                    <Education />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Sobre;