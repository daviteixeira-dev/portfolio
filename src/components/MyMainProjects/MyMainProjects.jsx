import { Flex, Heading, Link, SimpleGrid, Text } from "@chakra-ui/react";

import ProjectCard from "./ProjectCard";

const myProjectCards = [
    {
        title: "SaúdeA+",
        link: "https://saude-amais.vercel.app/",
        image: "/images/my-projects/site-saudeamais.png",
        text: "O studio de Pilates (saúde a+) necessita sistema de gerenciamento das atividades/modalidades do estúdio e o agendamento de aulas.",
    },
    {
        title: "JobFinder",
        link: "https://daviteixeira-btm.github.io/jobfinder/",
        image: "/images/my-projects/site-jobfinder.png",
        text: "Nesse projeto de site fiz uma página para encontrar empregos ou repostar vagas.",
    },
    {
        title: "hDC Agency",
        link: "https://daviteixeira-btm.github.io/hDC-Agency/",
        image: "/images/my-projects/site-hdc-Agency.png",
        text: "Design de site para criar uma página para encontrar empregos ou postar vagas.",
    },
]

const MyMainProjects = () => {
    return (
        <Flex
            as="section" 
            id="projetos"
            padding="1rem 2rem" 
            alignItems="center"
            flexDirection="column"
            backgroundColor="blackAlpha.100" 
        >
            <Heading 
                as="h2"
                marginTop="2rem"
                fontSize={["2rem", "2rem", "3rem", "3rem"]}
            >
                Projetos
            </Heading>

            <Text 
                marginTop="1rem" 
                textAlign="center" 
                fontSize={["1.5rem", "1.5rem", "1.3rem", "1.5rem"]}
            >
                Nessa seção você poderá ver alguns dos principais projetos que desenvolvi. 
                Clique no botão abaixo para ver outros projetos.
            </Text>

            <Link
                isExternal
                tabIndex={0}
                marginTop="2rem"
                borderRadius=".5rem"
                color="whiteAlpha.900" 
                padding=".5rem 1.5rem"
                backgroundColor="blue.600"
                style={{ textDecoration: "none"}}
                href="https://github.com/daviteixeira-btm"
            >
                Ver projetos
            </Link>

            <SimpleGrid marginTop="2rem" columns={["1", "3"]} spacing={4}>
                {
                    myProjectCards.map((item, index) => (
                        <ProjectCard
                            key={index}
                            text={item.text}
                            link={item.link}
                            title={item.title}
                            image={item.image}
                        />
                    ))
                }
            </SimpleGrid>
        </Flex>
    );
};

export default MyMainProjects;