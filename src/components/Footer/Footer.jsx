import { Flex, Heading, Text, Link, SimpleGrid, Avatar } from "@chakra-ui/react";

import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

import FooterLinks from "./FooterLinks";

const myFooterLinks = [
    {
        icon: <FaInstagram />,
        link: "https://www.instagram.com/daviteixeira_dev/",
        tooltip: "Instagram"
    },
    {
        icon: <FaLinkedinIn />,
        link: "https://www.linkedin.com/in/daviteixeira-me/",
        tooltip: "LinkedIn"
    },
    {
        icon: <FaEnvelope />,
        link: "mailto:daviteixeira.dev@gmail.com",
        tooltip: "E-mail"
    }
]

const Footer = () => {
    return (
        <SimpleGrid 
            spacing={2} 
            as="footer"
            id="contato"
            alignItems="center" 
            columns={["1", "3"]} 
            backgroundColor="black"
            padding={["1rem", "2.5rem 2rem"]} 
        >
            <Heading 
                as="h3" 
                fontSize="1rem"
                fontWeight="bold" 
                marginBottom="1rem" 
                color="whiteAlpha.900" 
            >
                Copyright © 2023 <Link href="https://daviteixeira.dev.br/" isExternal color="blue.600">daviteixeira.dev.br</Link>. Todos os direitos reservados.
            </Heading>

            <Flex  alignItems="center" flexDirection="column">
                <Flex marginBottom="1rem" width="100%" justifyContent="space-evenly">
                    {
                        myFooterLinks.map((item, index) => (
                            <FooterLinks 
                                key={index} 
                                icon={item.icon} 
                                link={item.link} 
                                tooltip={item.tooltip} 
                            />
                        ))
                    }
                </Flex>
            </Flex>

            <Flex alignItems="center" justifyContent="center">
                <Text color="whiteAlpha.900" fontSize="1.1rem" fontWeight="bold">Powered by </Text>
                <Avatar src="/images/logo.png" marginLeft="1rem" />
            </Flex>
        </SimpleGrid>
    );
};

export default Footer;