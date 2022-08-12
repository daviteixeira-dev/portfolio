import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react"

function Projetos(){
    return(
        <Box as="section" id="projetos" border="1px solid">
            <Heading as="h2">
                Projetos
            </Heading>
            <Text>
                Nessa seção você poderá ver alguns dos principais projetos que desenvolvi. Caso queira ver mais alguns outros projetos, clique em <em>Ver mais:</em> 
            </Text>
            <a href="/projetos">Ver mais</a>
        </Box>
    )
}

export default Projetos;