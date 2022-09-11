import React from "react";

import { Flex, Text, Heading } from "@chakra-ui/react";

import { FaCalendar, FaAngleRight } from "react-icons/fa";

function Experience() {
    return (
        <Flex
            textAlign="center"
            m={[".5rem", "1rem"]}
            flexDirection="column"
        >
            <Flex
                m=".5rem"
                alignItems="baseline"
            >
                <FaCalendar fontSize="1.5rem" />

                <Heading
                    as="h4"
                    mx="1rem"
                    fontSize={["1rem", "1.5rem"]}
                    fontFamily="Inter, sans-serif"
                >
                    Dell Lead
                </Heading>

                <Text
                    fontSize="1rem"
                    fontWeight="bold"
                    fontFamily="Inter, sans-serif"
                >
                    2022 - Atual
                </Text>
            </Flex>

            <Flex
                m=".5rem"
                textAlign="start"
                flexDirection="column"
            >
                <Flex
                    alignItems="baseline"
                    textAlign={["start", "center"]}
                >
                    <FaAngleRight />

                    <Heading
                        as="h5"
                        mx=".5rem"
                        textAlign="start"
                        fontSize={["1rem", "1.2rem"]}
                        fontFamily="Inter, sans-serif"
                    >
                        Estágio em Desenvolvedor Front-end
                    </Heading>

                    <Text
                        mx=".5rem"
                        fontWeight="bold"
                        fontSize={[".8rem", "1rem"]}
                        fontFamily="Inter, sans-serif"
                    >
                        2022 / Atual
                    </Text>
                </Flex>

                <Text
                    mt="1rem"
                    mx="1rem"
                    fontFamily="Inter, sans-serif"
                >
                    Membro da equipe de desenvolvimento Front-end, responsável 
                    pela implementação de correções, melhorias e novas funcionalidades 
                    para desenvolvimento dos entregáveis do projeto, utilizando as metodologias 
                    ágeis de desenvolvimento, a partir do backlog de requisitos planejados.
                </Text>
            </Flex>

            <Flex
                m=".5rem"
                textAlign="start"
                flexDirection="column"
            >
                <Flex
                    alignItems="baseline"
                    textAlign={["start", "center"]}
                >
                    <FaAngleRight />

                    <Heading
                        as="h5"
                        mx=".5rem"
                        textAlign="start"
                        fontSize={["1rem", "1.2rem"]}
                        fontFamily="Inter, sans-serif"
                    >
                        Estágio em Diagramador Web
                    </Heading>

                    <Text
                        mx=".5rem"
                        fontWeight="bold"
                        fontSize={[".8rem", "1rem"]}
                        fontFamily="Inter, sans-serif"
                    >
                        12/2021 - 03/2022
                    </Text>
                </Flex>

                <Text
                    mt="1rem"
                    mx="1rem"
                    fontFamily="Inter, sans-serif"
                >
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