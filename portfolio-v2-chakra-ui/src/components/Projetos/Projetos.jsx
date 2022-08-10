import React from "react";
import { Box } from "@chakra-ui/react"

function Projetos(){
    return(
        <Box as="section" id="projetos" border="1px solid">
            <h2>
                Projetos
            </h2>
            <p>
                Nessa seção você poderá ver alguns dos principais projetos que desenvolvi. Caso queira ver mais alguns outros projetos, clique em <em>Ver mais:</em> 
            </p>
            <a href="/projetos">Ver mais</a>
        </Box>
    )
}

export default Projetos;