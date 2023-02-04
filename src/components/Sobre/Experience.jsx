import {
    Box,
    Flex,
    Text,
    Heading,
    ListItem,
    Accordion,
    UnorderedList,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    AccordionButton
} from '@chakra-ui/react'

import { FaRocket } from 'react-icons/fa';

function Experience() {
    return (
        <Flex
            textAlign='center'
            m={['.5rem', '1rem']}
            flexDirection='column'
        >
            <Accordion
                allowMultiple
                defaultIndex={[0]}
            >
                <AccordionItem>
                    <Heading>
                        <AccordionButton
                            display='flex'
                            justifyContent='space-between'
                            _expanded={{ bg: 'black', color: 'white' }}
                        >
                            <FaRocket />
                            <Text
                                as='span'
                                display='flex'
                                textAlign='left'
                                fontWeight='bold'
                                fontSize={['1rem', '1.5rem']}
                            >
                                LEAD Dell
                            </Text>
                            <AccordionIcon />
                        </AccordionButton>
                    </Heading>

                    <AccordionPanel>
                        <Box
                            mb={4}
                            display='flex'
                            textAlign='left'
                            flexDirection='column'
                        >
                            <Heading
                                mb={2}
                                as='span'
                                fontSize={['1rem', '1.3rem']}
                            >
                                Estágio em Desenvolvedor Front-end
                                <Text
                                    as='span'
                                    fontSize='1rem'
                                > (04/2022 - 02/2023)</Text>
                            </Heading>
                            <Text textAlign='left' mb='1rem'>
                                Membro da equipe de desenvolvimento Front-end, fui responsável pela 
                                implementação de correções, melhorias e novas funcionalidades para 
                                desenvolvimento dos entregáveis do projeto, utilizando as 
                                metodologias ágeis de desenvolvimento, a partir do backlog de 
                                requisitos planejados.
                            </Text>
                            <UnorderedList>
                                <ListItem>
                                    Utilização de tecnologias como: ReactJS v.16+ com Typescript;
                                </ListItem>
                                <ListItem>
                                    Implementações de features, correção de bugs, integrações com endpoints, refatoração de código;
                                </ListItem>
                                <ListItem>
                                    Conhecimento inicial sobre CI/CD;
                                </ListItem>
                                <ListItem>
                                    Vivência com Scrum como metodologia ágil;
                                </ListItem>
                                <ListItem>
                                    Conhecimento inicial em teste de software com Jest;
                                </ListItem>
                                <ListItem>
                                    Testes unitários com JEST/Testing-Library;
                                </ListItem>
                                <ListItem>
                                    API's com Swagger.
                                </ListItem>
                            </UnorderedList>
                        </Box>

                        <Box
                            display='flex'
                            textAlign='left'
                            flexDirection='column'
                        >
                            <Heading
                                mb={2}
                                as='span'
                                fontSize={['1rem', '1.3rem']}
                            >
                                Estágio em Diagramador Web
                                <Text
                                    as='span'
                                    fontSize='1rem'
                                > (12/2021 - 03/2022)</Text>
                            </Heading>
                            <Text textAlign='left' mb='1rem'>
                                Trabalhei na construção dos cursos ofertados na plataforma EAD 
                                Accessible Learning, desenvolvendo assim as ferramentas de 
                                aprendizagem.
                            </Text>
                            <UnorderedList>
                                <ListItem>
                                    Execução de implementações de melhorias, correções e retestes nas da plataforma;
                                </ListItem>
                                <ListItem>
                                    Utilização de HTML, CSS, JavaScript, Bootstrap e práticas de Acessibilidade Web.
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Flex>
    );
};

export default Experience;