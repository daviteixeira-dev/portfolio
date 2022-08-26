import React from "react";
import {
    Flex,
    Link,
    Text,
    Heading,
} from "@chakra-ui/react";

function Presentation(){
    return(
        <Flex h="100vh" w="100%">
            <Flex
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
                    w="14rem"
                    mt="2rem"
                    justifyContent="space-between"
                >
                    <Link
                        isExternal
                        p=".5rem 1.5rem"
                        borderRadius=".5rem"
                        color="whiteAlpha.900"
                        style={{ textDecoration: "none" }}
                        bgGradient='linear(to-l, blue.600, blue.300)'
                        href="https://github.com/daviteixeira-btm"
                        _hover={{
                            bgGradient: 'linear(to-l, blue.500, blue.200)'
                        }}
                    >
                        <Text fontFamily="Inter, sans-serif">
                            GitHub
                        </Text>
                    </Link>

                    <Link
                        isExternal
                        p=".5rem 1.5rem"
                        borderRadius=".5rem"
                        color="whiteAlpha.900"
                        style={{ textDecoration: "none" }}
                        bgGradient='linear(to-l, blue.600, blue.300)'
                        href="https://www.linkedin.com/in/daviteixeira-me/"
                        _hover={{
                            bgGradient: 'linear(to-l, blue.500, blue.200)'
                        }}
                    >
                        <Text fontFamily="Inter, sans-serif">
                            LinkedIn
                        </Text>
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Presentation;