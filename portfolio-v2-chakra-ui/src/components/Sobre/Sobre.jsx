import React from "react";
import { Flex, Heading, Text, Image } from "@chakra-ui/react"

import Education from "./Education";
import Experience from "./Experience";

function Sobre(){
    return (
        <Flex 
            h="auto"
            w="100%"
            flexDirection="column"
        >
            <Flex
                p="2rem"
                w="100%"
                id="sobre"
                bg="#ededec"
                as="section"
                alignItems="center"
                direction={["column", "column", "row", "row"]}
                justifyContent={["space-evenly", "space-evenly", "space-between", "space-evenly"]}
            >
                <Flex
                    justifyContent="center"
                    w={["100%", "100%", "30%", "30rem"]}
                >
                    <Image
                        borderRadius=".5rem"
                        src="images/davi.jpg"
                        w={["200", "200", "200", "400"]}
                        h={["200", "200", "200", "400"]}
                    />
                </Flex>

                <Flex
                    flexDirection="column"
                    p={["1rem", "1rem", "1rem", "0"]}
                    w={["100%", "100%", "70%", "30rem"]}
                    textAlign={["center", "center", "start", "start"]}
                    alignItems={["center", "center", "start", "start"]}
                >
                    <Heading
                        as="h2"
                        w="100%"
                        mb="1rem"
                        fontWeight="extrabold"
                        fontFamily="Inter, sans-serif"
                    >
                        Davi Teixeira
                    </Heading>

                    <Heading
                        as="h3"
                        w="100%"
                        mb="1rem"
                        fontSize="1rem"
                        fontFamily="Inter, sans-serif"
                    >
                        Desenvolvedor Front-end
                    </Heading>

                    <Text
                        mb="1rem"
                        fontSize="1rem"
                        fontFamily="Inter, sans-serif"
                    >
                        Graduando em Sistemas de Informação pela Universidade Federal do Ceará. 
                        Sou Desenvolvedor Front-end apaixonado em tirar ideias do papel e 
                        transformá-las em código.
                    </Text>

                    <Text
                        fontSize="1rem"
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
                justifyContent="space-evenly"
                p={[".5rem", ".5rem", ".5rem", "2rem"]}
                flexDirection={["column", "row", "row", "row"]}
            >
                <Flex
                    textAlign="center"
                    flexDirection="column"
                    w={["100%", "100%", "50%", "50%"]}
                >
                    <Heading as="h3">
                        Experiência
                    </Heading>

                    <Experience />
                </Flex>

                <Flex
                    textAlign="center"
                    flexDirection="column"
                    w={["100%", "100%", "50%", "50%"]}
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