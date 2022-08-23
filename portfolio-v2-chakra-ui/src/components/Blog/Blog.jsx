import React from "react";
import { Flex, Heading, Text, Link } from "@chakra-ui/react"

function Blog(){
    return(
        <Flex
            id="blog"
            as="section"
            bg="blackAlpha.900"
            p={["1rem", "2rem"]}
            flexDirection={["column", "row"]}
        >
            <Flex w={["100%", "50%"]} flexDirection="column" mb="1rem">
                <Heading
                    as="h2"
                    mb="2rem"
                    color="#f8f8f7"
                    textAlign="start"
                    fontSize={["2rem", "3rem"]}
                    fontFamily="Inter, sans-serif"
                >
                    Blog
                    <Text as="span" color="#63B3ED">.</Text>
                </Heading>

                <Text
                    color="#f8f8f7"
                    fontSize="1.4rem"
                    fontFamily="Inter, sans-serif"
                >
                    Neste blog, quero trazer conteúdos que possam agregar à sua carreira como 
                    desenvolvedor web, quero lhe fornecer informações das quais tive muita 
                    dificuldade em achar no começo dos meus estudos, desta forma, quero 
                    contribuir com o que eu sei para a comunidade de Dev's. 
                </Text>
            </Flex>

            <Flex
                w={["100%", "50%"]}
                alignItems="center"
                flexDirection="column"
            >
                    <Flex
                        h="30rem"
                        textAlign="center"
                        w={["100%","60%"]}
                        flexDirection="column"
                    >
                        <Flex
                            h="15rem"
                            style={{                
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundImage: "url(/images/img-cinza.png)",
                            }}
                        />
                        <Flex
                            p="1rem"
                            h="10rem"
                            bg="gray.900"
                            alignItems="center"
                            flexDirection="column"
                        >
                            <Heading
                                as="h3"
                                color="#f8f8f7"
                                fontSize="1.5rem"
                            >
                                Último Post
                            </Heading>

                            <Text
                                mt="1rem"
                                color="#f8f8f7"
                                fontSize="1rem"
                                
                            >
                                Confira já o último post sobre "Como fazer um bom portfólio 
                                Dev para suas habilidades e conhecimentos em uma entrevista 
                                de emprego."
                            </Text>
                        </Flex>
                        <Flex
                            h="5rem"
                            p="1.2rem"
                            bg="gray.900"
                            justifyContent="center"
                        >
                            <Link 
                                isExternal
                                w="6rem"
                                fontSize="1rem"
                                p=".5rem .5rem"
                                borderRadius=".5rem"
                                color="whiteAlpha.900"                   
                                style={{ textDecoration: "none" }}
                                bgGradient='linear(to-l, blue.600, blue.300)'
                                href="https://github.com/daviteixeira-btm"
                                _hover={{
                                    bgGradient: 'linear(to-l, blue.500, blue.200)'
                                }}
                            >
                                Ver
                            </Link>
                        </Flex> 
                    </Flex>
            </Flex>
        </Flex>
    );
};

export default Blog;