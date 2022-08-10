import React from "react";
import { Box } from "@chakra-ui/react"

function Servicos(){
    return(
        <Box as="section" id="services" border="1px solid">
            <h2>
                Serviços
            </h2>
            <h3>
                Desenvolvimento
            </h3>
            <p>
                Desenvolvimento de sites profissionais, sistemas web, blogs e lojas virtuais.
            </p>
            <h3>
                Responsividade
            </h3>
            <p>
                Criação de sites responsivos para a melhor visualização em todas as resoluções.
            </p>
            <h3>
                SEO
            </h3>
            <p>
                Estratégia e monitoração para seu negócio, fazendo com que seu site apareça cada vez mais nas buscas.
            </p>
        </Box>
    )
}

export default Servicos;