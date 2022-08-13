import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react"

import MainMenu from "./MainMenu";

function Header(){
    return(
        <Box as="header" id="home" border="1px solid">
            <MainMenu />

            <Heading as="h1">
                Olá, seja bem-vindo(a), meu nome é Davi Teixeira.
            </Heading>
            
            <Text>
                Sou Desenvolvedor Front-end.
            </Text>
            
            <ul>
                <li>
                    <a 
                        href="#" 
                        alt="Esse é um link que vai te levar até o meu perfil no Github"
                    >
                        GitHub
                    </a>
                </li>
                <li>
                    <a 
                        href="#"
                    >
                        LinkedIn
                    </a>
                </li>
            </ul>
            
        </Box>
    );
};

export default Header;