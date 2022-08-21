import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

import { FaCode, FaTabletAlt, FaCogs } from "react-icons/fa";

function Servicos(){
    return(
        <Flex
            p="2rem"
            h="100%"
            w="100%"
            as="section"
            id="services"
            bg="blackAlpha.900"
            flexDirection="column"
            justifyContent="center"
        >
            <Heading
                as="h2"
                mb="3rem"
                fontSize="3rem"
                color="#f8f8f7"
                textAlign="center"
                fontFamily="Inter, sans-serif"
            >
                Serviços<Text as="span" color="#63B3ED">.</Text>
            </Heading>
            
            <Flex
                justifyContent="space-evenly"
                flexDirection={["column", "row"]}
            >

                <Flex
                    p="2rem"
                    my=".5rem"
                    bg="gray.900"
                    w={["100%", "30vw"]}
                    flexDirection="column"
                    _hover={{ 
                        border: "3px solid #63B3ED",
                    }}
                >
                    <Flex
                        justifyContent="center"
                    >
                        <FaCode 
                            color="#f8f8f7" 
                            fontSize="3rem"
                        />
                    </Flex>

                    <Heading
                        as="h3"
                        my="1rem"
                        color="#f8f8f7"
                        textAlign="center"
                        fontSize={["1.5rem", "2rem"]}
                        fontFamily="Inter, sans-serif"
                    >
                        Desenvolvimento
                    </Heading>

                    <Text
                        color="#f8f8f7"
                        textAlign="center"
                        fontFamily="Inter, sans-serif"
                        fontSize={["1.2rem", "1.4rem"]}
                    >
                        Desenvolvimento de sites profissionais, sistemas web, 
                        blogs e lojas virtuais.
                    </Text>
                </Flex>

                <Flex 
                    p="2rem"
                    my=".5rem"
                    bg="gray.900"
                    w={["100%", "30vw"]}
                    flexDirection="column"
                    _hover={{ 
                        border: "3px solid #63B3ED",
                    }}
                >
                    <Flex
                        justifyContent="center"
                    >
                        <FaTabletAlt
                            color="#f8f8f7" 
                            fontSize="3rem"
                        />
                    </Flex> 

                    <Heading
                        as="h3"
                        my="1rem"
                        color="#f8f8f7"
                        textAlign="center"
                        fontSize={["1.5rem", "2rem"]}
                        fontFamily="Inter, sans-serif"
                    >
                        Responsividade
                    </Heading>

                    <Text
                        color="#f8f8f7"
                        textAlign="center"
                        fontFamily="Inter, sans-serif"
                        fontSize={["1.2rem", "1.4rem"]} 
                    >
                        Criação de sites responsivos para a melhor visualização 
                        em todas as resoluções.
                    </Text>
                </Flex>

                <Flex
                    p="2rem"
                    my=".5rem"
                    bg="gray.900"
                    w={["100%", "30vw"]}
                    flexDirection="column"
                    _hover={{ 
                        border: "3px solid #63B3ED",
                    }}
                >
                    <Flex
                        justifyContent="center"
                    >
                        <FaCogs
                            color="#f8f8f7"
                            fontSize="3rem"
                        />
                    </Flex> 

                    <Heading
                        as="h3"
                        my="1rem"
                        color="#f8f8f7"
                        textAlign="center"
                        fontSize={["1.5rem", "2rem"]}
                        fontFamily="Inter, sans-serif"
                    >
                        SEO
                    </Heading>

                    <Text
                        color="#f8f8f7"
                        textAlign="center"
                        fontFamily="Inter, sans-serif"
                        fontSize={["1.2rem", "1.4rem"]}
                    >
                        Estratégias para fazer com que seu site apareça 
                        cada vez mais nas buscas.
                    </Text>
                </Flex>    
            </Flex> 
        </Flex>
    );
};

export default Servicos;