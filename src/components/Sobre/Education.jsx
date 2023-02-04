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
                                mb='1rem'
                                fontSize={['1rem', '1.3rem']}
                            >
                                Bacharelado em Sistemas de Informação
                                <Text
                                    as='span'
                                    fontSize='1rem'
                                > (2019 - Atual)</Text>
                            </Heading>
                            <UnorderedList>
                                <ListItem>
                                    Bolsista no Programa de Educação Tutorial, PET-SI (Dezembro 2021 - Março 2022);
                                </ListItem>
                                <ListItem>
                                    Bolsista no Núcleo de Inovação e Empreendedorismo, INOVE (Agosto 2019 - Agosto 2021);
                                </ListItem>
                                <ListItem>
                                    Bolsista no Programa de Aprendizagem Cooperativa em Células Estudantis, PACCE (Fevereiro 2019 - Agosto 2019).
                                </ListItem>
                            </UnorderedList>
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
                                mb='1rem'
                                fontSize={['1rem', '1.3rem']}
                            >
                                Técnico em Informática
                                <Text
                                    as='span'
                                    fontSize='1rem'
                                > (2013 - 2015)</Text>
                            </Heading>
                            <Text>
                                No cumprimento do estágio curricular exigido pelo curso de 
                                técnico de informática pela Instituição de Ensino EEEP Alfredo 
                                Nunes de Melo, atuei na secretaria de agricultura de Acopiara/CE 
                                onde era responsável por realizar as manutenções nos computadores.
                            </Text>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Flex>
    );
};

export default Education;