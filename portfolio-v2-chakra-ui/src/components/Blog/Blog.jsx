import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react"
import Card from "../Card/Card";

import banner from "../../../public/images/img-cinza.png";

function Blog(){
    return(
        <Flex
            id="blog"
            as="section"
            bg="blackAlpha.900"
            justifyContent="space-between"
            p={["1rem", "1rem", "2rem", "2rem"]}
            flexDirection={["column", "column", "row", "row"]}
        >
            <Flex
                mb="1rem"
                pt="4rem"
                flexDirection="column"
                w={["100%", "100%", "49%", "49%"]}
            >
                <Heading
                    as="h2"
                    mb="2rem"
                    color="#f8f8f7"
                    textAlign="start"
                    fontFamily="Inter, sans-serif"
                    fontSize={["2rem", "2rem", "3rem", "3rem"]}
                >
                    Blog
                    <Text as="span" color="#63B3ED">.</Text>
                </Heading>

                <Text
                    color="#f8f8f7"
                    fontFamily="Inter, sans-serif"
                    fontSize={["1.4rem", "1.4rem", "1.3rem", "1.4rem"]}
                >
                    Neste blog, quero trazer conteúdos que possam agregar à sua carreira como
                    desenvolvedor web, quero lhe fornecer informações das quais tive muita
                    dificuldade em achar no começo dos meus estudos, desta forma, quero
                    contribuir com o que eu sei para a comunidade de Dev's.
                </Text>
            </Flex>

            <Flex
                textAlign="center"
                alignItems="center"
                flexDirection="column"
                w={["100%", "100%", "49%", "49%"]}
            >
                <Card
                    img={banner}
                    title="Ver Post"
                    w={["100%", "100%", "80%", "60%"]}
                    text='Confira já o último post sobre "Como fazer um bom 
                    portfólio Dev para suas habilidades e conhecimentos em 
                    uma entrevista de emprego.'
                />
            </Flex>
        </Flex>
    );
};

export default Blog;