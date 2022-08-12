import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react"

function Servicos(){
    return(
        <Box as="section" id="services" border="1px solid">
            <Heading as="h2">
                Serviços
            </Heading>
            <Heading as="h3">
                Desenvolvimento
            </Heading>
            <Text>
                Desenvolvimento de sites profissionais, sistemas web, blogs e lojas virtuais.
            </Text>
            <Heading as="h3">
                Responsividade
            </Heading>
            <Text>
                Criação de sites responsivos para a melhor visualização em todas as resoluções.
            </Text>
            <Heading as="h3">
                SEO
            </Heading>
            <Text>
                Estratégia e monitoração para seu negócio, fazendo com que seu site apareça cada vez mais nas buscas.
            </Text>
        </Box>
    )
}

export default Servicos;