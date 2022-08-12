import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react"

function Sobre(){
    return(
        <Box as="section" id="sobre" border="1px solid">
            <Heading as="h2">
                Sobre min
            </Heading>
            <Text>
                Graduando em Sistemas de Informação pela Universidade Federal do Ceará. Sou Desenvolvedor Front-end apaixonado em tirar ideias do papel e transformá-las em código.
            </Text>
            <Text>
                Assim, tenho trabalhado em projetos como foco tópicos relacionados à Responsividade, Acessibilidade Web e SEO.
            </Text>
            <Heading as="h3">
                Experiência
            </Heading>
            <Heading as="h4">
                Dell Lead
            </Heading>
            <Heading as="h5">
                Bolsista Desenvolvedor Front-end
            </Heading>
            <Text>
                Aqui vou falar alguma coisa do cargo que estou agora.
            </Text>
            <Heading as="h5">
                Bolsista Diagramador Web
            </Heading>
            <Text>
                Trabalhei na construção dos cursos ofertados na plataforma EAD Accessible Learning, desenvolvendo assim as ferramentas de aprendizagem;
            </Text>
            <Text>
                Trabalhei também com a execução de implementações de melhorias, correções e retestes nas ferramentas de aprendizagem na plataforma.
            </Text>
            <Heading as="h3">
                Educação
            </Heading>
        </Box>
    )
}

export default Sobre;