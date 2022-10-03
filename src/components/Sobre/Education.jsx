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

import { FaBook } from 'react-icons/fa';

function Education() {
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
                            <FaBook />
                            <Text
                                as='span'
                                display='flex'
                                fontWeight='bold'
                                fontSize={['1rem', '1.5rem']}
                                textAlign={['center', 'left']}
                            >
                                Universidade Federal do Ceará
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
                                as='span'
                                fontSize={['1rem', '1.3rem']}
                            >
                                Bacharelado em Sistemas de Informação
                                <Text
                                    as='span'
                                    fontSize='1rem'
                                > (2019 - Atual)</Text>
                            </Heading>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <Heading>
                        <AccordionButton
                            display='flex'
                            justifyContent='space-between'
                            _expanded={{ bg: 'black', color: 'white' }}
                        >
                            <FaBook />
                            <Text
                                as='span'
                                display='flex'
                                fontWeight='bold'
                                fontSize={['1rem', '1.5rem']}
                                textAlign={['center', 'left']}
                            >
                                E.E.E.P Alfredo Nunes de Melo
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
                                as='span'
                                fontSize={['1rem', '1.3rem']}
                            >
                                Técnico em Informática
                                <Text
                                    as='span'
                                    fontSize='1rem'
                                > (2013 - 2015)</Text>
                            </Heading>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Flex>
    );
};

export default Education;