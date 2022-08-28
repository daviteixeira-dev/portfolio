import React from "react";
import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";
import Contato from "../Contato/Contato";

import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

function Footer(){
    return(
        <Flex
            p="2rem"
            bg="black"
            as="footer"
            justifyContent="space-between"
            flexDirection={["column", "column", "row", "row"]}
        >
            <Flex 
                flexDirection="column" 
                w={["100%", "100%", "32%", "32%"]}
            >
                <Heading
                    as="h4"
                    mb="1rem"
                    color="#f8f8f7"
                    fontSize="1.3rem"
                    fontFamily="Inter, sans-serif"
                >
                    Davi Teixeira
                </Heading>

                <Link
                    mb="1rem"
                    isExternal
                    color="#f8f8f7"
                    fontSize="1.2rem"
                    fontFamily="Inter, sans-serif"
                    href="mailto:daviteixeira.dev@gmail.com"
                >
                    daviteixeira.dev@gmail.com
                </Link>

                <Text
                    mb="5rem"
                    color="#f8f8f7"
                    fontSize="1.2rem"
                    fontFamily="Inter, sans-serif"
                >
                    Endereço: Acopiara, Ceará, Brasil
                </Text>

                <Flex
                    mb="5rem"
                    justifyContent="space-evenly"
                >
                    <Box
                        p="1rem"
                        bg="gray.900"
                        borderRadius="50%"
                        _hover={{
                            background: "gray.600"
                        }}
                    >
                        <Link
                            isExternal
                            href="https://www.instagram.com/daviteixeira.dev/"
                        >
                            <FaInstagram
                                fontSize="2rem"
                                color="#f8f8f7"
                            />
                        </Link>
                    </Box>
                    <Box
                        p="1rem"
                        bg="gray.900"
                        borderRadius="50%"
                        _hover={{
                            background: "gray.600"
                        }}
                    >
                        <Link
                            isExternal
                            href="https://www.linkedin.com/in/daviteixeira-me/"
                        >
                            <FaLinkedinIn
                                fontSize="2rem"
                                color="#f8f8f7"
                            />
                        </Link>
                    </Box>
                    <Box
                        p="1rem"
                        bg="gray.900"
                        borderRadius="50%"
                        _hover={{
                            background: "gray.600"
                        }}
                    >
                        <Link
                            isExternal 
                            href="https://www.youtube.com/channel/UCvnJQ79CpJCqDVfveLQE8eA"
                        >
                            <FaYoutube
                                fontSize="2rem"
                                color="#f8f8f7"
                            />
                        </Link>
                    </Box>
                </Flex>

                <Text
                    color="#f8f8f7"
                    fontSize="1rem"
                    fontFamily="Inter, sans-serif"
                >
                    @daviteixeira.dev 2022
                </Text>
            </Flex>

            <Flex
                flexDirection="column"
                p={[0, 0, "0 1rem", 0]}
                my={["1rem", "1rem", 0, 0]}
                w={["100%", "100%", "32%", "32%"]}
            >
                <Link
                    href="#"
                    mb=".5rem"
                    color="#f8f8f7"
                    fontSize="1rem"
                    fontFamily="Inter, sans-serif"
                    _hover={{ textDecoration: "none"}}
                >
                    Início
                </Link>
                <Link
                    mb=".5rem"
                    href="#sobre"
                    color="#f8f8f7"
                    fontSize="1rem"
                    fontFamily="Inter, sans-serif"
                    _hover={{ textDecoration: "none"}}
                >
                    Sobre mim
                </Link>
                <Link
                    mb=".5rem"
                    color="#f8f8f7"
                    fontSize="1rem"
                    href="#services"
                    fontFamily="Inter, sans-serif"
                    _hover={{ textDecoration: "none"}}
                >
                    Serviços
                </Link>
                <Link
                    mb=".5rem"
                    color="#f8f8f7"
                    fontSize="1rem"
                    href="#conhecimentos"
                    fontFamily="Inter, sans-serif"
                    _hover={{ textDecoration: "none"}}
                >
                    Conhecimentos
                </Link>
                <Link
                    mb=".5rem"
                    color="#f8f8f7"
                    fontSize="1rem"
                    href="#projetos"
                    fontFamily="Inter, sans-serif"
                    _hover={{ textDecoration: "none"}}
                >
                    Projetos
                </Link>
                <Link
                    mb=".5rem"
                    href="#blog"
                    color="#f8f8f7"
                    fontSize="1rem"
                    fontFamily="Inter, sans-serif"
                    _hover={{ textDecoration: "none"}}
                >
                    Blog
                </Link>
            </Flex>

            <Flex
                flexDirection="column" 
                w={["100%", "100%", "32%", "32%"]}
            >
                <Contato />
            </Flex>
        </Flex>
    );
};

export default Footer;