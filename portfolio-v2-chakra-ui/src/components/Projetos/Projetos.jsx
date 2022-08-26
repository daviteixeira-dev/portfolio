import React from "react";
import { Flex, Heading, Link, Text, } from "@chakra-ui/react"

function Projetos(){
    return(
        <Flex
            bg="#ededec"
            as="section"
            id="projetos"
            textAlign="center"
            flexDirection="column"
            p={["1rem", "1rem", "1.5rem", "2rem"]}
        >
            <Heading
                as="h2"
                mb="2rem"
                textAlign="center"
                color="blackAlpha.900"
                fontFamily="Inter, sans-serif"
                fontSize={["2rem", "2rem", "3rem", "3rem"]}
            >
                Projetos
                <Text as="span" color="#63B3ED">.</Text>
            </Heading>

            <Text
                color="blackAlpha.900"
                fontFamily="Inter, sans-serif"
                fontSize={["1.5rem", "1.5rem", "1.3rem", "1.5rem"]}
            >
                Nessa seção você poderá ver alguns dos principais projetos que desenvolvi. 
            </Text>
            <Text
                color="blackAlpha.900"
                fontFamily="Inter, sans-serif"
                fontSize={["1.5rem", "1.5rem", "1.3rem", "1.5rem"]}
            >
                Caso queira ver mais alguns outros projetos, clique em:
            </Text>
            
            <Flex
                mt="1rem"
                justifyContent="center"
            >
                <Link 
                    isExternal
                    w="5rem"
                    fontSize="1rem"
                    p=".5rem .5rem"
                    borderRadius=".5rem"
                    color="whiteAlpha.900"                   
                    style={{ textDecoration: "none" }}
                    href="https://github.com/daviteixeira-btm"
                    bgGradient='linear(to-l, blue.600, blue.300)'
                    _hover={{
                        bgGradient: 'linear(to-l, blue.500, blue.200)'
                    }}
                >
                    Ver mais
                </Link>
            </Flex>

            <Flex
                mt="2rem"
                justifyContent="space-between"
                flexDirection={["column", "column", "column", "row"]}
            >
                <Flex
                    justifyContent="space-between"
                    w={["100%", "100%", "100%", "49%"]}
                    flexDirection={["column", "column", "row", "row"]}
                >
                    <Flex
                        mb="1rem"
                        h="30rem"
                        flexDirection="column"
                        w={["100%", "100%", "49%", "49%"]}
                    >
                        <Flex
                            h="15rem"
                            style={{                
                                backgroundSize: "cover",
                                backgroundImage: "url(/images/my-projects/site-jobfinder.png)",
                            }}
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
                                JobFinder
                            </Heading>

                            <Text
                                mt="1rem"
                                color="#f8f8f7"
                                fontSize="1rem"
                            >
                                Nesse projeto de site fiz uma página para encontrar 
                                empregos ou repostar vagas.
                            </Text>
                        </Flex>
                        <Flex
                            h="5rem"
                            p="1.2rem"
                            bg="gray.900"
                            justifyContent="center"
                        >
                            <Link 
                                isExternal
                                w="6rem"
                                fontSize="1rem"
                                p=".5rem .5rem"
                                borderRadius=".5rem"
                                color="whiteAlpha.900"                   
                                style={{ textDecoration: "none" }}
                                bgGradient='linear(to-l, blue.600, blue.300)'
                                href="https://github.com/daviteixeira-btm"
                                _hover={{
                                    bgGradient: 'linear(to-l, blue.500, blue.200)'
                                }}
                            >
                                Ver mais
                            </Link>
                        </Flex> 
                    </Flex>

                    <Flex
                        mb="1rem"
                        h="30rem"
                        flexDirection="column"
                        w={["100%", "100%", "49%", "49%"]}
                    >
                        <Flex
                            h="15rem"
                            style={{                
                                backgroundSize: "cover",
                                backgroundImage: "url(/images/my-projects/site-saudeamais.png)",
                            }}
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
                                SaúdeA+
                            </Heading>

                            <Text
                                mt="1rem"
                                color="#f8f8f7"
                                fontSize="1rem"
                            >
                                O studio de Pilates (saúde a+) necessita sistema de 
                                gerenciamento das atividades/modalidades do estúdio 
                                e o agendamento de aulas teste e reposições.
                            </Text>
                        </Flex>
                        <Flex
                            h="5rem"
                            p="1.2rem"
                            bg="gray.900"
                            justifyContent="center"
                        >
                            <Link 
                                isExternal
                                w="6rem"
                                fontSize="1rem"
                                p=".5rem .5rem"
                                borderRadius=".5rem"
                                color="whiteAlpha.900"                   
                                style={{ textDecoration: "none" }}
                                bgGradient='linear(to-l, blue.600, blue.300)'
                                href="https://github.com/daviteixeira-btm"
                                _hover={{
                                    bgGradient: 'linear(to-l, blue.500, blue.200)'
                                }}
                            >
                                Ver mais
                            </Link>
                        </Flex> 
                    </Flex>
                </Flex>

                <Flex
                    justifyContent="space-between"
                    w={["100%", "100%", "100%", "49%"]}
                    flexDirection={["column", "column", "row", "row"]}
                >
                    <Flex
                        mb="1rem"
                        h="30rem"
                        flexDirection="column"
                        w={["100%", "100%", "49%", "49%"]}
                    >
                        <Flex
                            h="15rem"
                            style={{                
                                backgroundSize: "cover",
                                backgroundImage: "url(/images/my-projects/site-hdc-Agency.png)",
                            }}
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
                                hDC Agency
                            </Heading>

                            <Text
                                mt="1rem"
                                color="#f8f8f7"
                                fontSize="1rem"
                            >
                                Design de site para criar uma página para encontrar 
                                empregos ou postar vagas.
                            </Text>
                        </Flex>
                        <Flex
                            h="5rem"
                            p="1.2rem"
                            bg="gray.900"
                            justifyContent="center"
                        >
                            <Link 
                                isExternal
                                w="6rem"
                                fontSize="1rem"
                                p=".5rem .5rem"
                                borderRadius=".5rem"
                                color="whiteAlpha.900"                   
                                style={{ textDecoration: "none" }}
                                bgGradient='linear(to-l, blue.600, blue.300)'
                                href="https://github.com/daviteixeira-btm"
                                _hover={{
                                    bgGradient: 'linear(to-l, blue.500, blue.200)'
                                }}
                            >
                                Ver mais
                            </Link>
                        </Flex> 
                    </Flex>

                    <Flex
                        mb="1rem"
                        h="30rem"
                        flexDirection="column"
                        w={["100%", "100%", "49%", "49%"]}
                    >
                        <Flex
                            h="15rem"
                            style={{                
                                backgroundSize: "cover",
                                backgroundImage: "url(/images/my-projects/site-galleria.png)",
                            }}
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
                                Galleria
                            </Heading>

                            <Text
                                mt="1rem"
                                color="#f8f8f7"
                                fontSize="1rem"
                            >
                                Aprendendo os conceitos básicos de SASS e SCSS criando uma 
                                página de galeria de fotos.
                            </Text>
                        </Flex>
                        <Flex
                            h="5rem"
                            p="1.2rem"
                            bg="gray.900"
                            justifyContent="center"
                        >
                            <Link 
                                isExternal
                                w="6rem"
                                fontSize="1rem"
                                p=".5rem .5rem"
                                borderRadius=".5rem"
                                color="whiteAlpha.900"                   
                                style={{ textDecoration: "none" }}
                                bgGradient='linear(to-l, blue.600, blue.300)'
                                href="https://github.com/daviteixeira-btm"
                                _hover={{
                                    bgGradient: 'linear(to-l, blue.500, blue.200)'
                                }}
                            >
                                Ver mais
                            </Link>
                        </Flex> 
                    </Flex>
                </Flex>

            </Flex>
        </Flex>
    );
};

export default Projetos;