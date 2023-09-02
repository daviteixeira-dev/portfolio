import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";

import { FaCode, FaCogs, FaTabletAlt, FaAccessibleIcon } from "react-icons/fa";

import MyServicesCard from "./MyServicesCard";

const myServiceCardsItems = [
    {
        icon: <FaCode />,
        title: 'Desenvolvimento',
        text: 'Desenvolvimento de sites profissionais, sistemas web, blogs e lojas virtuais.'
    },
    {
        icon: <FaTabletAlt />,
        title: 'Responsividade',
        text: 'Criação de sites responsivos para a melhor visualização em todas as resoluções.'
    },
    {
        icon: <FaCogs />,
        title: 'SEO',
        text: 'Estratégias para fazer com que seu site apareça cada vez mais nas buscas.'
    },
    {
        icon: <FaAccessibleIcon />,
        title: 'Acessibilidade',
        text: 'Desenvolvimento de websites que sejam acessiveis para os mais diversos usúarios.'
    }
];

const MyServices = () => {
    return (
        <Flex
            as="section"
            width="100%"
            height="auto"
            id="services"
            padding="2rem"
            flexDirection="column"
            justifyContent="center"
            backgroundColor="blackAlpha.900"
            paddingTop={["2rem", "2rem", "2rem", "10rem"]}
        >
            <Heading
                as="h2"
                fontSize="3rem"
                textAlign="center"
                marginBottom="3rem"
                color="whiteAlpha.900"
                fontFamily="Inter, sans-serif"
            >
                Serviços
            </Heading>
            
            <SimpleGrid
                spacing={4}
                columns={["1", "1", "2", "4"]}
            >
                {
                    myServiceCardsItems.map((item, index) => (
                        <MyServicesCard key={index} icon={item.icon} title={item.title} text={item.text} />
                    ))
                }
            </SimpleGrid> 
        </Flex>
    );
};

export default MyServices;