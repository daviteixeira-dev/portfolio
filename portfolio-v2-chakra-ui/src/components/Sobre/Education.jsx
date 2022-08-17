import React from "react";

import { Flex, Heading, Text } from "@chakra-ui/react";

import { FaLaptopCode } from "react-icons/fa";

function Education(){
    return(
        <Flex
            m="1rem"
            //border="1px solid green"
            textAlign="center"
            flexDirection="column"
        >
            <Flex 
                m=".5rem" 
                alignItems="baseline"
                fontFamily="Inter, sans-serif"
                //border="1px solid red"
            >
                <FaLaptopCode />

                <Heading
                    as="h4"
                    mx="1rem"
                    fontSize="1.5rem"
                >
                    Universidade Federal do Ceará
                </Heading>

                <Text
                    fontSize="1rem"
                    fontWeight="bold"
                >
                    2022 - Atual
                </Text>
            </Flex>

            <Flex
                m=".5rem"
                textAlign="start"
                flexDirection="column"
                //border="1px solid red"
            >
                <Flex
                    textAlign="center"
                    alignItems="baseline"
                    fontFamily="Inter, sans-serif"
                >
                    <FaLaptopCode />

                    <Heading 
                        as="h5"
                        mx="1rem"
                        fontSize="1.5rem"
                    >
                        Técnico em Informática
                    </Heading>

                    <Text 
                        fontSize="1rem"
                        fontWeight="bold"
                    >
                        2022 - Atual
                    </Text>
                </Flex>

                <Text>
                    Aqui vou falar alguma coisa do cargo que estou agora.
                </Text>
            </Flex>
        </Flex>
    );
};

export default Education;