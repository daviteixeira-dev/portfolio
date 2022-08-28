import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react"
import LinkButton from "../LinkButton/LinkButton";
import Card from "../Card/Card";

import galleria from "../../../public/images/my-projects/site-galleria.png";
import jobfinder from "../../../public/images/my-projects/site-jobfinder.png";
import hdcAgency from "../../../public/images/my-projects/site-hdc-Agency.png";
import saudeamais from "../../../public/images/my-projects/site-saudeamais.png";

const Bloco = ({children}) => {
    return(
        <Flex 
            justifyContent="space-between"
            w={["100%", "100%", "100%", "49%"]}
            flexDirection={["column", "column", "row", "row"]}
        >
            {children}
        </Flex>
    );
};

function Projetos(){
    return(
        <Flex
            bg="#ededec"
            as="section"
            id="projetos"
            textAlign="center"
            flexDirection="column"
            p={["1rem", "1rem", "1.5rem", "2rem"]}
        >
            <Heading
                as="h2"
                mb="2rem"
                pt="4rem"
                textAlign="center"
                color="blackAlpha.900"
                fontFamily="Inter, sans-serif"
                fontSize={["2rem", "2rem", "3rem", "3rem"]}
            >
                Projetos
                <Text as="span" color="#63B3ED">.</Text>
            </Heading>

            <Text
                color="blackAlpha.900"
                fontFamily="Inter, sans-serif"
                fontSize={["1.5rem", "1.5rem", "1.3rem", "1.5rem"]}
            >
                Nessa seção você poderá ver alguns dos principais projetos que desenvolvi. 
            </Text>
            <Text
                color="blackAlpha.900"
                fontFamily="Inter, sans-serif"
                fontSize={["1.5rem", "1.5rem", "1.3rem", "1.5rem"]}
            >
                Caso queira ver mais alguns outros projetos, clique em:
            </Text>
            
            <Flex
                mt="1rem"
                justifyContent="center"
            >
                <LinkButton
                    text="Ver Projetos"
                    isExternal={true}
                    link="https://github.com/daviteixeira-btm"
                />
            </Flex>

            <Flex
                mt="2rem"
                justifyContent="space-between"
                flexDirection={["column", "column", "column", "row"]}
            >
                <Bloco>
                    <Card
                        img={jobfinder}
                        title="JobFinder"
                        w={["100%", "100%", "49%", "49%"]}
                        text="Nesse projeto de site fiz uma 
                        página para encontrar empregos ou repostar vagas."
                    />

                    <Card
                        title="SaúdeA+"
                        img={saudeamais}
                        w={["100%", "100%", "49%", "49%"]}
                        text="O studio de Pilates (saúde a+) necessita sistema de 
                        gerenciamento das atividades/modalidades do estúdio 
                        e o agendamento de aulas teste e reposições."
                    />
                </Bloco>

                <Bloco>
                    <Card
                        img={hdcAgency}
                        title="hDC Agency"
                        w={["100%", "100%", "49%", "49%"]}
                        text="Design de site para criar uma página para encontrar 
                        empregos ou postar vagas."
                    />

                    <Card
                        img={galleria}
                        title="Galleria"
                        w={["100%", "100%", "49%", "49%"]}
                        text="Aprendendo os conceitos básicos de SASS e SCSS criando uma 
                        página de galeria de fotos."
                    />
                </Bloco>
            </Flex>
        </Flex>
    );
};

export default Projetos;