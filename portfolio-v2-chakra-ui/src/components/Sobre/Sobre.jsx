import React from "react";
import { Box } from "@chakra-ui/react"

function Sobre(){
    return(
        <Box as="section" id="sobre" border="1px solid">
            <h2>
                Sobre min
            </h2>
            <p>
                Graduando em Sistemas de Informação pela Universidade Federal do Ceará. Sou Desenvolvedor Front-end apaixonado em tirar ideias do papel e transformá-las em código.
            </p>
            <p>
                Assim, tenho trabalhado em projetos como foco tópicos relacionados à Responsividade, Acessibilidade Web e SEO.
            </p>
            <h3>
                Experiência
            </h3>
            <h4>
                Dell Lead
            </h4>
            <h5>
                Bolsista Desenvolvedor Front-end
            </h5>
            <p>
                Aqui vou falar alguma coisa do cargo que estou agora.
            </p>
            <h5>
                Bolsista Diagramador Web
            </h5>
            <p>
                Trabalhei na construção dos cursos ofertados na plataforma EAD Accessible Learning, desenvolvendo assim as ferramentas de aprendizagem;
            </p>
            <p>
                Trabalhei também com a execução de implementações de melhorias, correções e retestes nas ferramentas de aprendizagem na plataforma.
            </p>
            <h3>
                Educação
            </h3>
        </Box>
    )
}

export default Sobre;