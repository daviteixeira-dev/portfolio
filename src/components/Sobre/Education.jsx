import React from "react";

import { Flex, Heading, Text } from "@chakra-ui/react";

import { FaLaptopCode } from "react-icons/fa";

function Education(){
    return(
        <Flex
            textAlign="center"
            m={[".5rem", "1rem"]}
            flexDirection="column"
        >
            <Flex 
                m=".5rem" 
                alignItems="baseline"
                flexDirection="column"
            >
                <Flex 
                    m=".5rem" 
                    alignItems="center"
                    fontFamily="Inter, sans-serif"
                >
                    <FaLaptopCode fontSize="1.5rem" />

                    <Heading
                        as="h4"
                        mx="1rem"
                        textAlign="start"
                        fontSize={["1rem", "1.5rem"]}
                        fontFamily="Inter, sans-serif"
                    >
                        Universidade Federal do Ceará
                    </Heading>

                    <Text
                        fontSize="1rem"
                        fontWeight="bold"
                        fontFamily="Inter, sans-serif"
                    >
                        2019 - Atual
                    </Text>
                </Flex>
            </Flex>

            <Flex
                m=".5rem"
                alignItems="baseline"
                flexDirection="column"
            >
                <Flex
                    m=".5rem" 
                    alignItems="center"
                    fontFamily="Inter, sans-serif"
                >
                    <FaLaptopCode fontSize="1.5rem"/>

                    <Heading 
                        as="h4"
                        mx="1rem"
                        textAlign="start"
                        fontSize={["1rem", "1.5rem"]}
                        fontFamily="Inter, sans-serif"
                    >
                        Técnico em Informática
                    </Heading>

                    <Text 
                        fontSize="1rem"
                        fontWeight="bold"
                        fontFamily="Inter, sans-serif"
                    >
                        2013 - 2015
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Education;