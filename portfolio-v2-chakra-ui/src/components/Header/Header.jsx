import React from "react";
import { Box } from "@chakra-ui/react"

function Header(){
    return(
        <Box as="header" id="home" border="1px solid">
            <nav>
                <ul>
                    <li>
                        <a href="#home">
                            Início
                        </a>
                    </li>
                    <li>
                        <a href="#sobre">
                            Sobre mim
                        </a>
                    </li>
                    <li>
                        <a href="#services">
                            Serviços
                        </a>
                    </li>
                    <li>
                        <a href="#conhecimentos">
                            Conhecimentos
                        </a>
                    </li>
                    <li>
                        <a href="#projetos">
                            Projetos
                        </a>
                    </li>
                    <li>
                        <a href="#blog">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="#contato">
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>
            <h1>
                Olá, seja bem-vindo(a), meu nome é Davi Teixeira.
            </h1>
            <p>
                Sou Desenvolvedor Front-end.
            </p>
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
    )
}

export default Header;