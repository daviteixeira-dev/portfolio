import { 
    Flex, 
    Text, 
    Image,  
    Heading 
} from "@chakra-ui/react"

function Conhecimentos(){
    return(
        <Flex
            h="100%"
            w="100%"
            as="section"
            id="conhecimentos"
            bg="blackAlpha.900"
            alignItems="center"
            p={["1rem", "2rem"]}
            flexDirection={["column", "column", "row", "row"]}
        >
            <Flex
                h="100%"
                textAlign="center"
                p={["0rem", "2rem"]} 
                flexDirection="column"
                justifyContent="center"
                w={["100%", "100%", "45%", "50%"]}
            >
                <Heading
                    as="h2"
                    mb="3rem"
                    color="#f8f8f7"
                    textAlign="center"
                    fontFamily="Inter, sans-serif"
                    fontSize={["2rem", "2rem", "1.5rem", "3rem"]}
                >
                    Conhecimentos
                    <Text as="span" color="#63B3ED">.</Text>
                </Heading>

                <Text
                    color="#f8f8f7"
                    fontSize={["1.3rem", "1.3rem", "1.2rem", "1.5rem"]}
                >
                    Trabalhando e aprendendo com as seguintes tecnologias:
                </Text>
            </Flex>

            <Flex
                h="100%"
                mt="3rem"
                alignItems="center"
                flexDirection="column"
                w={["100%", "100%", "55%", "50%"]}
            >
                <Flex flexDirection={["column", "column", "row", "row"]}>
                    <Flex>
                        <Flex
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                            w={["8rem", "8rem", "5rem", "5rem"]}
                            h={["8rem", "8rem", "5rem", "5rem"]}
                            m={["1rem", "1rem", ".5rem", "1rem"]}
                        >
                            <Image
                                alt="HTML5" 
                                borderRadius=".5rem"
                                src="images/pasta-logos/html5.png"
                                w={["4rem", "4rem", "3rem", "4rem"]}
                                h={["4rem", "4rem", "3rem", "4rem"]}
                            />
                            <Text color="#f8f8f7">HTML5</Text>
                        </Flex>
                        <Flex
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                            w={["8rem", "8rem", "5rem", "5rem"]}
                            h={["8rem", "8rem", "5rem", "5rem"]}
                            m={["1rem", "1rem", ".5rem", "1rem"]}
                        >
                            <Image
                                alt="CSS3"
                                borderRadius=".5rem"
                                src="images/pasta-logos/css3.png"
                                w={["4rem", "4rem", "3rem", "4rem"]}
                                h={["4rem", "4rem", "3rem", "4rem"]}
                            />
                            <Text color="#f8f8f7">CSS3</Text>
                        </Flex>
                    </Flex>

                    <Flex>
                        <Flex
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                            w={["8rem", "8rem", "5rem", "5rem"]}
                            h={["8rem", "8rem", "5rem", "5rem"]}
                            m={["1rem", "1rem", ".5rem", "1rem"]}
                        >
                            <Image
                                alt="JavaScript"
                                borderRadius=".5rem"
                                w={["4rem", "4rem", "3rem", "4rem"]}
                                h={["4rem", "4rem", "3rem", "4rem"]}
                                src="images/pasta-logos/javascript.png"
                            />
                            <Text color="#f8f8f7">JavaScript</Text>
                        </Flex>
                        <Flex
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                            w={["8rem", "8rem", "5rem", "5rem"]}
                            h={["8rem", "8rem", "5rem", "5rem"]}
                            m={["1rem", "1rem", ".5rem", "1rem"]}
                        >
                            <Image
                                alt="TypeScript"
                                borderRadius=".5rem"
                                w={["4rem", "4rem", "3rem", "4rem"]}
                                h={["4rem", "4rem", "3rem", "4rem"]}
                                src="images/pasta-logos/typescript.png"
                            />
                            <Text color="#f8f8f7">TypeScript</Text>
                        </Flex>
                    </Flex>    
                </Flex>

                <Flex flexDirection={["column", "column", "row", "row"]}>

                    <Flex>
                        <Flex
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                            w={["8rem", "8rem", "5rem", "5rem"]}
                            h={["8rem", "8rem", "5rem", "5rem"]}
                            m={["1rem", "1rem", ".5rem", "1rem"]}
                        >
                            <Image
                                alt="SASS"
                                borderRadius=".5rem"
                                src="images/pasta-logos/sass.png"
                                w={["4rem", "4rem", "3rem", "4rem"]}
                                h={["4rem", "4rem", "3rem", "4rem"]}
                            />
                            <Text color="#f8f8f7">Sass</Text>
                        </Flex>
                        <Flex
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                            w={["8rem", "8rem", "5rem", "5rem"]}
                            h={["8rem", "8rem", "5rem", "5rem"]}
                            m={["1rem", "1rem", ".5rem", "1rem"]}
                        >
                            <Image
                                alt="Styled Components"
                                borderRadius=".5rem"
                                w={["3rem", "3rem", "2rem", "3rem"]}
                                h={["3rem", "3rem", "2rem", "3rem"]}
                                src="images/pasta-logos/styled-components.png"
                            />
                            <Text
                                color="#f8f8f7"
                                textAlign="center"
                            >
                                Styled Components
                            </Text>
                        </Flex>
                    </Flex>

                    <Flex>
                        <Flex
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                            w={["8rem", "8rem", "5rem", "5rem"]}
                            h={["8rem", "8rem", "5rem", "5rem"]}
                            m={["1rem", "1rem", ".5rem", "1rem"]}
                        >
                            <Image
                                alt="Bootstrap"
                                borderRadius=".5rem"
                                w={["4rem", "4rem", "3rem", "4rem"]}
                                h={["4rem", "4rem", "3rem", "4rem"]}
                                src="images/pasta-logos/bootstrap.png"
                            />
                            <Text color="#f8f8f7">Bootstrap</Text>
                        </Flex>
                        <Flex
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                            w={["8rem", "8rem", "5rem", "5rem"]}
                            h={["8rem", "8rem", "5rem", "5rem"]}
                            m={["1rem", "1rem", ".5rem", "1rem"]}
                        >
                            <Image
                                alt="jQuery"
                                borderRadius=".5rem"
                                src="images/pasta-logos/jquery.png"
                                w={["4rem", "4rem", "3rem", "4rem"]}
                                h={["4rem", "4rem", "3rem", "4rem"]}
                            />
                            <Text color="#f8f8f7">jQuery</Text>
                        </Flex>
                    </Flex>

                </Flex>

                <Flex flexDirection={["column", "column", "row", "row"]}>
                    <Flex>
                        <Flex
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                            w={["8rem", "8rem", "5rem", "5rem"]}
                            h={["8rem", "8rem", "5rem", "5rem"]}
                            m={["1rem", "1rem", ".5rem", "1rem"]}
                        >
                            <Image
                                alt="ReactJS"
                                borderRadius=".5rem"
                                w={["4rem", "4rem", "3rem", "4rem"]}
                                h={["4rem", "4rem", "3rem", "4rem"]}
                                src="images/pasta-logos/reactjs.png"
                            />
                            <Text color="#f8f8f7">ReactJS</Text>
                        </Flex>
                        <Flex
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                            w={["8rem", "8rem", "5rem", "5rem"]}
                            h={["8rem", "8rem", "5rem", "5rem"]}
                            m={["1rem", "1rem", ".5rem", "1rem"]}
                        >
                            <Image
                                alt="Material UI"
                                borderRadius=".5rem"
                                w={["4rem", "4rem", "3rem", "4rem"]}
                                h={["4rem", "4rem", "3rem", "4rem"]}
                                src="images/pasta-logos/material-ui.png"
                            />
                            <Text color="#f8f8f7">Material UI</Text>
                        </Flex>
                    </Flex>

                    <Flex>
                        <Flex
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                            w={["8rem", "8rem", "5rem", "5rem"]}
                            h={["8rem", "8rem", "5rem", "5rem"]}
                            m={["1rem", "1rem", ".5rem", "1rem"]}
                        >
                            <Image
                                alt="Chakra UI"
                                borderRadius=".5rem"
                                w={["4rem", "4rem", "3rem", "4rem"]}
                                h={["4rem", "4rem", "3rem", "4rem"]}
                                src="images/pasta-logos/chakra-ui.png"
                            />
                            <Text color="#f8f8f7">Chakra UI</Text>
                        </Flex>

                        <Flex
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                            w={["8rem", "8rem", "5rem", "5rem"]}
                            h={["8rem", "8rem", "5rem", "5rem"]}
                            m={["1rem", "1rem", ".5rem", "1rem"]}
                        >
                            <Text
                                color="#f8f8f7"
                                fontSize={["1.1rem", "1.1rem", ".8rem", "1.1rem"]}
                            >
                                Aprendendo cada vez mais!
                            </Text>
                        </Flex>
                    </Flex>    
                </Flex>
                
            </Flex>
        </Flex>
    );
};

export default Conhecimentos;