import React from 'react';

import {
    Box,
    Flex,
    Text,
    Heading,
    Accordion,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    AccordionButton,
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
                                > (2022 - Atual)</Text>
                            </Heading>
                            <Text textAlign='left'>
                                Membro da equipe de desenvolvimento Front-end, responsável
                                pela implementação de correções, melhorias e novas funcionalidades
                                para desenvolvimento dos entregáveis do projeto, utilizando as metodologias
                                ágeis de desenvolvimento, a partir do backlog de requisitos planejados.
                            </Text>
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
                            <Text textAlign='left'>
                                Trabalhei na construção dos cursos ofertados na plataforma EAD Accessible
                                Learning, desenvolvendo assim as ferramentas de aprendizagem, como também
                                com a execução de implementações de melhorias, correções e retestes nas
                                ferramentas de aprendizagem na plataforma.
                            </Text>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Flex>
    );
};

export default Experience;