import React from "react";

import { Flex, Text, Heading } from "@chakra-ui/react";

import { FaCalendar, FaAngleRight } from "react-icons/fa";

function Experience() {
    return (
        <Flex
            m="1rem"
            //border="1px solid green" 
            textAlign="center"
            flexDirection="column"
        >
            <Flex
                m=".5rem"
                alignItems="baseline"
                fontFamily="Inter, sans-serif"
                //border="1px solid red"
            >
                <FaCalendar />

                <Heading
                    as="h4"
                    mx="1rem"
                    fontSize="1.5rem"
                >
                    Dell Lead
                </Heading>

                <Text
                    fontSize="1rem"
                    fontWeight="bold"
                >
                    2022 - Atual
                </Text>
            </Flex>

            <Flex
                m=".5rem"
                textAlign="start"
                flexDirection="column"
                //border="1px solid red"
            >
                <Flex
                    textAlign="center"
                    alignItems="baseline"
                    fontFamily="Inter, sans-serif"
                >
                    <FaAngleRight />

                    <Heading
                        as="h5"
                        mx="1rem"
                        fontSize="1.2rem"
                    >
                        Bolsista Desenvolvedor Front-end
                    </Heading>

                    <Text
                        fontSize="1rem"
                        fontWeight="bold"
                    >
                        2022 - Atual
                    </Text>
                </Flex>

                <Text>
                    Aqui vou falar alguma coisa do cargo que estou agora.
                </Text>
            </Flex>

            <Flex
                m=".5rem"
                textAlign="start"
                flexDirection="column"
                //border="1px solid red"
            >
                <Flex
                    textAlign="center"
                    alignItems="baseline"
                    fontFamily="Inter, sans-serif"
                >
                    <FaAngleRight />

                    <Heading
                        as="h5"
                        mx="1rem"
                        fontSize="1.2rem"
                    >
                        Bolsista Diagramador Web
                    </Heading>

                    <Text
                        fontSize="1rem"
                        fontWeight="bold"
                    >
                        12/2021 - 03/2022
                    </Text>
                </Flex>

                <Text>
                    Trabalhei na construção dos cursos ofertados na plataforma EAD Accessible
                    Learning, desenvolvendo assim as ferramentas de aprendizagem, como também
                    com a execução de implementações de melhorias, correções e retestes nas
                    ferramentas de aprendizagem na plataforma.
                </Text>

            </Flex>
        </Flex>
    );
};

export default Experience;