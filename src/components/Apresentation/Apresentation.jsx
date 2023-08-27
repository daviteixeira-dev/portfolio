import { Flex, Text, Heading, Link, Show } from "@chakra-ui/react";

import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

import ScrollUp from "../IndicatorScroll/ScrollUp";

const Apresentation = () => {
    return (
        <Flex as="section" alignItems="center" height="100vh" backgroundColor="black">
            <Flex 
                width="100%"
                textAlign="justify"
                borderRadius=".5rem"
                flexDirection="column"
                justifyContent="center"
                height={["70%", "auto", "80%", "80%"]}
                padding={["1rem", "1rem", "1rem", "2rem"]}
                marginTop={["0rem", "0rem", "4rem", "4rem"]}
                marginLeft={["1rem", "0rem", "1rem", "2rem"]}
                marginRight={["1rem", "0rem", "1rem", "2rem"]}
                marginBottom={["0rem", "0rem", "0rem", "2rem"]}
            >
                <Heading
                    as="h1"
                    bgClip="text"
                    fontWeight="bold"
                    textTransform="uppercase"
                    textAlign={["center", "start"]}
                    fontSize={["1.8rem", "3rem", "2rem", "2rem"]}
                    bgGradient="linear(to-l, gray.300, gray.500)"
                >
                    Olá, meu nome é Davi, sou
                </Heading>

                <Flex
                    flexDirection="column"
                >
                    <Text
                        bgClip="text"
                        fontWeight="bold"
                        textTransform="uppercase"
                        textAlign={["center", "start"]}
                        fontSize={["1.8rem", "3rem", "5rem", "6rem"]}
                        bgGradient="linear(to-l, gray.300, gray.500)"
                    >
                        Desenvolvedor
                    </Text>
                    <Text
                        width="100%"
                        bgClip="text"
                        display="flex"
                        fontWeight="bold"
                        textTransform="uppercase"
                        justifyContent={["space-evenly", "start"]}
                        fontSize={["1.8rem", "3rem", "5rem", "6rem"]}
                        bgGradient="linear(to-l, gray.300, gray.500)"
                    >
                        Web
                        <Flex
                            alignItems="center"
                            borderRadius=".5rem"
                            ml={["0rem", "2rem"]}
                            width={["50%", "40%"]}
                            backgroundColor="gray.900"
                            justifyContent="space-evenly"
                        >
                            <Link 
                                isExternal
                                fontSize={["1.8rem", "3rem", "4rem", "5rem"]}
                                href="https://www.linkedin.com/in/daviteixeira-me/"
                            >
                                <FaLinkedin color="#718096" />
                            </Link>
                            <Link
                                isExternal
                                fontSize={["1.8rem", "3rem", "4rem", "5rem"]}
                                href="https://github.com/daviteixeira-btm"
                            >
                                <FaGithub color="#718096" />
                            </Link>
                            <Link
                                isExternal
                                fontSize={["1.8rem", "3rem", "4rem", "5rem"]}
                                href="https://www.linkedin.com/in/daviteixeira-me/"
                            >
                                <FaFileAlt color="#718096" />
                            </Link>
                        </Flex>
                    </Text>
                    
                    <Show below='md'>
                        <Flex justifyContent="center" pt="3rem">
                            <ScrollUp />
                        </Flex>
                    </Show>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Apresentation;