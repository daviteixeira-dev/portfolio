import React from "react";
import { Box, Heading, Text  } from "@chakra-ui/react"

function Conhecimentos(){
    return(
        <Box as="section" id="conhecimentos" border="1px solid">
            <Heading as="h2">
                Conhecimentos
            </Heading>
            <Text>
                Trabalhando e aprendendo com as seguintes tecnologias
            </Text>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Sass</li>
                <li>Bootstrap</li>
                <li>ReactJS</li>
                <li>Material UI</li>
            </ul>
        </Box>
    )
}

export default Conhecimentos;