import React from "react";
import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import LinkButton from "../LinkButton/LinkButton";

function Card(props){
    return(
        <Flex
            mb="1rem"
            h="30rem"
            flexDirection="column"
            w={props.w}
            //w={["100%", "100%", "49%", "49%"]}
        >
            <Image
                h="15rem"
                backgroundSize="cover"
                backgroundImage={props.img}
                backgroundPosition="center" 
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
                    {props.title}
                </Heading>

                <Text
                    mt="1rem"
                    color="#f8f8f7"
                    fontSize="1rem"
                >
                    {props.text}
                </Text>
            </Flex>

            <Flex
                h="5rem"
                p="1.2rem"
                bg="gray.900"
                justifyContent="center"
            >
                <LinkButton
                    text="Ver Projeto"
                    isExternal={true}
                    link="https://github.com/daviteixeira-btm"
                >
                    {props.button}
                </LinkButton>
            </Flex>
        </Flex>
    );
};

export default Card;