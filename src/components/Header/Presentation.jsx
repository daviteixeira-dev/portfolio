import React from "react";

import { Flex, Text, Heading } from "@chakra-ui/react";

import LinkButton from "../LinkButton/LinkButton";

function Presentation(){
    return(
        <Flex
            w="100%"
            h="100vh"
            flexDirection="column"
        >
            <Flex
                h="100%"
                w="auto"
                flexDirection="column"
                justifyContent="center"
                ml={["1rem", "1rem", "1rem", "5rem"]}
            >
                <Text
                    py=".3rem"
                    fontWeight="bold"
                    fontSize="1.5rem"
                    color="whiteAlpha.900"
                    fontFamily="Inter, sans-serif"
                >
                    Olá, eu sou
                </Text>

                <Heading
                    as="h1"
                    py=".3rem"
                    bgClip="text"
                    letterSpacing="2px"
                    fontWeight="extrabold"
                    fontFamily="Inter, sans-serif"
                    fontSize={["2.5rem", "4rem", "4rem"]}
                    bgGradient="linear(to-l, blue.600, blue.300)"
                >
                    Davi Teixeira
                </Heading>

                <Text
                    py=".3rem"
                    fontSize="1rem"
                    fontWeight="bold"
                    color="whiteAlpha.900"
                    fontFamily="Inter, sans-serif"
                >
                    Sou Desenvolvedor Front-end.
                </Text>

                <Flex
                    mt="2rem"
                    justifyContent="space-around"
                    w={["65%", "65%", "30%", "20%"]}
                >
                    <LinkButton
                        text="GitHub"
                        isExternal={true}
                        link="https://github.com/daviteixeira-btm"
                    >
                        GitHub
                    </LinkButton>

                    <LinkButton
                        text="LinkedIn"
                        isExternal={true}
                        link="https://www.linkedin.com/in/daviteixeira-me/"
                    >
                        LinkedIn
                    </LinkButton>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Presentation;