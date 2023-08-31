import { Flex, Text, Heading } from "@chakra-ui/react";

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
            p="2rem"
            h="auto"
            w="100%"
            pt="6rem"
            as="section"
            id="services"
            bg="blackAlpha.900"
            flexDirection="column"
            justifyContent="center"
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
            
            <Flex
                justifyContent="space-evenly"
                flexDirection={["column", "row"]}
            >
                {
                    myServiceCardsItems.map((item, index) => (
                        <MyServicesCard key={index} icon={item.icon} title={item.title} text={item.text} />
                    ))
                }
            </Flex> 
        </Flex>
    );
};

export default MyServices;