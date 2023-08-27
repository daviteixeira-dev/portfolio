import { Flex, Heading, Text, Image } from "@chakra-ui/react";

import AboutMeMenu from "./AboutMeMenu";

const AboutMe = () => {
    return (
        <Flex as="section" backgroundColor="black" id="sobre" padding="4rem 0">
            <Flex
                width="100%"
                padding="1rem"
                marginTop={["0rem", "2rem", "2rem", "2rem",]}
                marginLeft={["0rem", "2rem", "2rem", "4rem",]}
                marginRight={["0rem", "2rem", "2rem", "4rem",]}
                marginBottom={["1rem", "2rem", "2rem", "2rem",]}
                borderRadius={["0rem", ".3rem"]}
                border={["none", "2px solid #4A5568"]}
                backgroundColor="gray.900"
                justifyContent="space-between"
                flexDirection={["column", "column", "row", "row" ]}
            >
                <Flex width={["100%", "49%", "49%", "49%"]} padding="1rem">
                    <Image
                        borderRadius=".5rem"
                        src="images/davi.jpg"
                        w={["100%", "200", "200", "100%"]}
                        h={["100%", "200", "200", "100%"]}
                        alt="Essa é uma foto minha de perfil."
                    />
                </Flex>

                <Flex 
                    flexDirection="column"
                    padding={["0rem", "1rem"]}
                    width={["100%", "49%", "49%", "49%"]} 
                >
                    <Heading as="h2" fontWeight="normal" fontSize="1.5rem" color="whiteAlpha.900">
                        Quem sou?
                    </Heading>
                    <Text mt="1rem" fontSize="2rem" fontWeight="bold" color="whiteAlpha.900">
                        Davi Teixeira
                    </Text>
                    <Text mt="1rem" fontSize="1.5rem" color="whiteAlpha.900">
                        Analista de Sistemas & Desenvolvedor Web
                    </Text>
                    <Text mt="1rem" fontSize="1.3rem" color="whiteAlpha.900">
                        Olá, muito prazer! Meu nome é Davi Teixeira, sou Desenvolvedor Web e Analista de Sistemas 
                        graduado pela Universidade Federal do Ceará. Sou apaixonado na criação de novasideias, 
                        desta forma, tenho trabalhado em projetos com foco em Desenvolvimento de Interfaces, 
                        Acessibilidade Web, Responsividade e SEO.
                    </Text>

                    <Flex
                        as="nav"
                        width="100%"
                        height="6rem"
                        alignItems="center"
                    >
                        <AboutMeMenu />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default AboutMe;