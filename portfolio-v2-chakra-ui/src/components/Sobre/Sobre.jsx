import React from "react";
import { Flex, Heading, Text, Image } from "@chakra-ui/react"

import Experience from "./Experience";
import Education from "./Education";

function Sobre() {
    return (
        <Flex h="auto" flexDirection="column">
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
                <Flex w="auto">
                    <Image
                        w="400"
                        h="400"
                        borderRadius=".5rem"
                        src="images/davi.jpg"
                    />
                </Flex>

                <Flex
                    w="30rem"
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
                p="2rem"
                bg="#ededec"
                //border="1px solid blue" 
                justifyContent="space-evenly"
            >
                <Flex maxW="50%" flexDirection="column" textAlign="center">
                    <Heading as="h3">
                        Experiência
                    </Heading>
                    <Experience />
                </Flex>

                <Flex maxW="50%" flexDirection="column" textAlign="center">
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