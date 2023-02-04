import { 
    Flex, 
    Text, 
    Heading 
} from "@chakra-ui/react";

import LinkButton from "../LinkButton/LinkButton";

function Presentation(){
    return(
        <Flex
            w="100%"
            h="100vh"
            flexDirection="column"
            justifyContent="center"
        >
            <Flex
                w="auto"
                m={["1rem", "2rem"]}
                flexDirection="column"
                justifyContent="center"
            >
                <Heading
                    as="h1"
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
                    p=".3rem"
                    fontWeight="semibold"
                    color="whiteAlpha.900"
                    fontSize={["1rem", "1.5rem"]}
                    fontFamily="Inter, sans-serif"
                >
                    Desenvolvedor Front-end
                </Text>
            </Flex>

            <Flex
                mt="2rem"
                m={["1rem", "2rem"]}
                justifyContent="space-evenly"
                w={["90%", "65%", "30%", "20%"]}
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
    );
};

export default Presentation;