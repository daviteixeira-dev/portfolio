import React from "react";
import { Flex, Heading, Text, Image  } from "@chakra-ui/react"

function Conhecimentos(){
    return(
        <Flex
            h="100%"
            w="100%"
            as="section"
            id="conhecimentos"
            bg="blackAlpha.900"
            p={["1rem", "2rem"]}
            flexDirection={["column", "row"]}
        >
            <Flex
                textAlign="center"
                w={["100%", "50%"]}
                p={["0rem", "2rem"]}
                //border='1px solid red' 
                flexDirection="column"
                justifyContent="center"
            >
                <Heading
                    as="h2"
                    mb="3rem"
                    color="#f8f8f7"
                    textAlign="center"
                    fontSize={["2rem", "3rem"]}
                    fontFamily="Inter, sans-serif"
                >
                    Conhecimentos
                    <Text as="span" color="#63B3ED">.</Text>
                </Heading>

                <Text
                    color="#f8f8f7"
                    fontSize="1.5rem"
                >
                    Trabalhando e aprendendo com as seguintes tecnologias:
                </Text>
            </Flex>

            <Flex
                w={["100%", "50%"]}
                flexDirection="column"
            >
                <Flex flexDirection={["column", "row"]}>
                    <Flex>
                        <Flex
                            m="1rem"
                            w="8rem"
                            h="8rem"
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                        >
                            <Image 
                                w={["4rem", "5rem"]}
                                h={["4rem", "5rem"]}
                                borderRadius=".5rem"
                                src="images/pasta-logos/html5.png"
                            />
                            <Text color="#f8f8f7">HTML5</Text>
                        </Flex>
                        <Flex
                            m="1rem"
                            w="8rem"
                            h="8rem"
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                        >
                            <Image 
                                w={["4rem", "5rem"]}
                                h={["4rem", "5rem"]}
                                borderRadius=".5rem"
                                src="images/pasta-logos/css3.png"
                            />
                            <Text color="#f8f8f7">CSS3</Text>
                        </Flex>
                    </Flex>

                    <Flex>
                        <Flex
                            m="1rem"
                            w="8rem"
                            h="8rem"
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                        >
                            <Image 
                                w={["4rem", "5rem"]}
                                h={["4rem", "5rem"]}
                                borderRadius=".5rem"
                                src="images/pasta-logos/javascript.webp"
                            />
                            <Text color="#f8f8f7">JavaScript</Text>
                        </Flex>
                        <Flex
                            m="1rem"
                            w="8rem"
                            h="8rem"
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                        >
                            <Image 
                                w={["4rem", "5rem"]}
                                h={["4rem", "5rem"]}
                                borderRadius=".5rem"
                                src="images/pasta-logos/typescript.png"
                            />
                            <Text color="#f8f8f7">TypeScript</Text>
                        </Flex>
                    </Flex>    
                </Flex>

                <Flex flexDirection={["column", "row"]}>

                    <Flex>
                        <Flex
                            m="1rem"
                            w="8rem"
                            h="8rem"
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                        >
                            <Image 
                                w={["4rem", "5rem"]}
                                h={["4rem", "5rem"]}
                                borderRadius=".5rem"
                                src="images/pasta-logos/sass.webp"
                            />
                            <Text color="#f8f8f7">Sass</Text>
                        </Flex>
                        <Flex
                            m="1rem"
                            w="8rem"
                            h="8rem"
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                        >
                            <Image 
                                w={["3rem", "4rem"]}
                                h={["3rem", "4rem"]}
                                borderRadius=".5rem"
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
                            m="1rem"
                            w="8rem"
                            h="8rem"
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                        >
                            <Image 
                                w={["4rem", "5rem"]}
                                h={["4rem", "5rem"]}
                                borderRadius=".5rem"
                                src="images/pasta-logos/bootstrap.png"
                            />
                            <Text color="#f8f8f7">Bootstrap</Text>
                        </Flex>
                        <Flex
                            m="1rem"
                            w="8rem"
                            h="8rem"
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                        >
                            <Image 
                                w={["4rem", "5rem"]}
                                h={["4rem", "5rem"]}
                                borderRadius=".5rem"
                                src="images/pasta-logos/jquery.png"
                            />
                            <Text color="#f8f8f7">jQuery</Text>
                        </Flex>
                    </Flex>

                </Flex>

                <Flex flexDirection={["column", "row"]}>
                    <Flex>
                        <Flex
                            m="1rem"
                            w="8rem"
                            h="8rem"
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                        >
                            <Image 
                                w={["4rem", "5rem"]}
                                h={["3.5rem", "4.5rem"]}
                                borderRadius=".5rem"
                                src="images/pasta-logos/reactjs.png"
                            />
                            <Text color="#f8f8f7">ReactJS</Text>
                        </Flex>
                        <Flex
                            m="1rem"
                            w="8rem"
                            h="8rem"
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                        >
                            <Image 
                                w={["4rem", "5rem"]}
                                h={["4rem", "5rem"]}
                                borderRadius=".5rem"
                                src="images/pasta-logos/material-ui.png"
                            />
                            <Text color="#f8f8f7">Material UI</Text>
                        </Flex>
                    </Flex>

                    <Flex>
                        <Flex
                            m="1rem"
                            w="8rem"
                            h="8rem"
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                        >
                            <Image 
                                w={["4rem", "5rem"]}
                                h={["4rem", "5rem"]}
                                borderRadius=".5rem"
                                src="images/pasta-logos/chakra-ui.png"
                            />
                            <Text color="#f8f8f7">Chakra UI</Text>
                        </Flex>

                        <Flex
                            m="1rem"
                            w="8rem"
                            h="8rem"
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                        >
                            <Text
                                color="#f8f8f7"
                                fontSize="1.1rem"
                            >
                                E aprendendo cada vez mais!
                            </Text>
                        </Flex>
                    </Flex>    
                </Flex>
                
            </Flex>
        </Flex>
    );
};

export default Conhecimentos;