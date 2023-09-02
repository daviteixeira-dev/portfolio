import { Flex, Heading, Text, Image } from "@chakra-ui/react";

import AboutMeMenu from "./AboutMeMenu";

const AboutMe = () => {
    return (
        <Flex 
            id="sobre" 
            as="section"
            backgroundColor="black" 
            padding={["0rem", "6rem 2rem"]}
        >
            <Flex
                width="100%"
                padding="1rem"
                backgroundColor="gray.900"
                justifyContent="space-between"
                borderRadius={["0rem", ".3rem"]}
                border={["none", "2px solid #4A5568"]}
                marginTop={["0rem", "2rem", "2rem", "2rem",]}
                marginLeft={["0rem", "2rem", "4rem", "4rem",]}
                marginRight={["0rem", "2rem", "4rem", "4rem",]}
                marginBottom={["0rem", "2rem", "2rem", "2rem",]}
                flexDirection={["column", "column", "column", "row" ]}
            >
                <Flex 
                    padding="1rem"
                    alignItems="center"
                    justifyContent="center"
                    width={["100%", "100%", "auto", "49%"]} 
                    height={["auto", "auto", "100%", "auto"]}
                >
                    <Image
                        borderRadius=".5rem"
                        src="images/davi.jpg"
                        alt="Essa é uma foto minha de perfil."
                        width={["100%", "100%", "auto", "100%"]}
                        height={["100%", "100%", "auto", "100%"]}
                    />
                </Flex>

                <Flex 
                    flexDirection="column"
                    width={["100%", "100%", "100%", "49%"]} 
                    padding={["0rem 1rem", "0rem 1rem", "1rem 5rem" ,"1rem"]}
                >
                    <Heading as="h2" fontWeight="normal" fontSize="1.5rem" color="whiteAlpha.900">
                        Quem sou?
                    </Heading>
                    <Text mt="1rem" color="blue.500" fontSize="2rem" fontWeight="bold">
                        Davi Teixeira
                    </Text>
                    <Text mt="1rem" fontSize="1.2rem" color="whiteAlpha.900">
                        Analista de Sistemas & Desenvolvedor Web
                    </Text>
                    <Text mt="1rem" fontSize="1.3rem" color="gray.200">
                        Olá, muito prazer! Meu nome é Davi Teixeira, sou Desenvolvedor Web e Analista de Sistemas 
                        graduado pela Universidade Federal do Ceará. Sou apaixonado na criação de novas ideias, 
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