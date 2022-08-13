import React from "react";
import {
    Box,
    Flex,
    Link,
    Text,
    Button,
    Heading,
} from "@chakra-ui/react";

import "../../../public/images/apresentation-banner.jpg";

function Presentation(){
    return(
        <Box>
            <Flex
                w="30rem"
                h="100vh"
                mt="5rem"
                textAlign="left"
                flexDirection="column"
                ml={["1rem", "0", "5rem"]}
            >
                <Text
                    py=".3rem"
                    color="whiteAlpha.900"
                    fontWeight="bold"
                    fontSize="1.5rem"
                    fontFamily="Inter, sans-serif"
                >
                    Olá, eu sou
                </Text>
                
                <Heading
                    as="h1"
                    py=".3rem"
                    bgClip='text'
                    fontSize={["2.5rem", "4rem", "4rem"]}
                    letterSpacing="2px"
                    fontWeight='extrabold'
                    fontFamily="Inter, sans-serif"
                    bgGradient='linear(to-l, blue.600, blue.300)'
                >
                    Davi Teixeira
                </Heading>

                <Text
                    py=".3rem"
                    fontSize="1rem"
                    color="whiteAlpha.900"
                    fontWeight="bold"
                    fontFamily="Inter, sans-serif"
                >
                    Sou Desenvolvedor Front-end.
                </Text>

                <Flex
                    w="13rem"
                    mt="2rem"
                    justifyContent="space-between"
                >
                    <Button
                        color="whiteAlpha.900"
                        bgGradient='linear(to-l, blue.600, blue.300)'
                        _hover={{
                            bgGradient: 'linear(to-l, blue.500, blue.200)'
                        }}
                    >
                        <Link
                            isExternal
                            style={{ textDecoration: "none" }}
                            href="https://github.com/daviteixeira-btm"
                        >
                            <Text fontFamily="Inter, sans-serif">
                                GitHub
                            </Text>
                        </Link>
                    </Button>
                    
                    <Button
                        color="whiteAlpha.900"
                        bgGradient='linear(to-l, blue.600, blue.300)'
                        _hover={{
                            bgGradient: 'linear(to-l, blue.500, blue.200)'
                        }}
                    >
                        <Link
                            isExternal
                            style={{ textDecoration: "none" }}
                            href="https://www.linkedin.com/in/daviteixeira-me/"
                        >
                            <Text fontFamily="Inter, sans-serif">
                                LinkedIn
                            </Text>
                        </Link>
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Presentation;