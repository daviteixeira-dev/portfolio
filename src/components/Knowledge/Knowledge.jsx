import { Flex, Text, Heading, SimpleGrid } from "@chakra-ui/react";

import KnowledgeItems from "./KnowledgeItems";

const myKnowledgeItems = [
    {
        alt: "HTML5",
        icon: "images/pasta-logos/html5.png",
        description: "HTML5",
    },
    {
        alt: "CSS3",
        icon: "images/pasta-logos/css3.png",
        description: "CSS3",
    },
    {
        alt: "JavaScript",
        icon: "images/pasta-logos/javascript.png",
        description: "JavaScript",
    },
    {
        alt: "TypeScript",
        icon: "images/pasta-logos/typescript.png",
        description: "TypeScript",
    },
    {
        alt: "SASS",
        icon: "images/pasta-logos/sass.png",
        description: "SASS",
    },
    {
        alt: "Styled Components",
        icon: "images/pasta-logos/styled-components.png",
        description: "Styled Components",
    },
    {
        alt: "Bootstrap",
        icon: "images/pasta-logos/bootstrap.png",
        description: "Bootstrap",
    },
    {
        alt: "jQuery",
        icon: "images/pasta-logos/jquery.png",
        description: "jQuery",
    },
    {
        alt: "ReactJS",
        icon: "images/pasta-logos/reactjs.png",
        description: "ReactJS",
    },
    {
        alt: "Material UI",
        icon: "images/pasta-logos/material-ui.png",
        description: "Material UI",
    },
    {
        alt: "Chakra UI",
        icon: "images/pasta-logos/chakra-ui.png",
        description: "Chakra UI",
    },
    {
        alt: "jQuery",
        icon: "images/pasta-logos/muscle.png",
        description: "E muito mais!",
    },
    
];

const Knowledge = () => {
    return (
        <Flex
            as="section"
            width="100%"
            id="conhecimentos"
            bg="blackAlpha.900"
            alignItems="center"
            p={["1rem", "1rem", "1rem", "2rem"]}
            flexDirection={["column", "column", "column", "row"]}
        >
            <Flex
                textAlign="center"
                flexDirection="column"
                justifyContent="center"
                width={["100%", "100%", "100%", "50%"]}
                padding={["0rem", "0rem", "1rem", "2rem"]} 
            >
                <Heading
                    as="h2"
                    textAlign="center"
                    color="whiteAlpha.900"
                    fontSize={["2rem", "2rem", "3rem", "3rem"]}
                >
                    Conhecimentos
                </Heading>

                <Text
                    marginTop="1rem"
                    color="whiteAlpha.900"
                    fontSize={["1.3rem", "1.3rem", "1.5rem", "1.5rem"]}
                >
                    Trabalhalho com as seguintes tecnologias:
                </Text>
            </Flex>

            <Flex
                height="100%"
                alignItems="center"
                padding={["1rem", "2rem"]}
                justifyContent="space-evenly"
                width={["100%", "100%", "100%", "50%"]}
                marginTop={["2rem", "2rem", "2rem", "4rem"]}
            >
                <SimpleGrid columns={["2", "2", "4", "4"]} spacing={4}>
                    {
                        myKnowledgeItems.map((item, index) => (
                            <KnowledgeItems
                                key={index}
                                alt={item.alt}
                                icon={item.icon}
                                description={item.description}
                            />
                        ))
                    }
                </SimpleGrid>   
            </Flex>
        </Flex>
    );
};

export default Knowledge;