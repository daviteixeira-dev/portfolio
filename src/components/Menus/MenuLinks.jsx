import React from 'react'

import { Box } from "@chakra-ui/react";

const menuItems = [
    {
        id: 1,
        link: "/",
        title: "Início"
    },
    {
        id: 2,
        link: "#sobre",
        title: "Sobre mim"
    },
    {
        id: 3,
        link: "#services",
        title: "Serviços"
    },
    {
        id: 4,
        link: "#conhecimentos",
        title: "Conhecimentos"
    },
    {
        id: 5,
        link: "#projetos",
        title: "Projetos"
    },
    {
        id: 6,
        link: "#blog",
        title: "Blog"
    },
    {
        id: 7,
        link: "#contato",
        title: "Contato"
    }
];

const MenuLinks = () => {
    return (
        <Box
            as="ul"
            w="100%"
            spacing={8}
            display="flex"
            align="center"
            pt={[4, 4, 0, 0]}
            m={[0, 0, "1rem", 0]}
            justifyContent="space-around"
            direction={["column", "column", "row", "row"]}
            justify={["center", "space-between", "flex-end", "flex-end"]}
        >
            {
                menuItems.map(menu => (
                    <li style={{ listStyle: "none" }}>
                        <a href={`${menu.link}`}>{menu.title}</a>
                    </li>
                ))
            }
        </Box>  
    )
}

export default MenuLinks;