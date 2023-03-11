import React from "react";

import { Link, Box, Flex, Text } from "@chakra-ui/react";

import Logo from "../Header/Logo";

// List Items
const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
        <li style={{ listStyle: "none"}}>
            <Link href={to} style={{ textDecoration: 'none' }}>
                <Text display="block" {...rest} _hover={{ borderBottom: "3px solid #63B3ED"}}>
                    {children}
                </Text>
            </Link>
        </li>
    );
};

// UL
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
            <MenuItem to="/">Início</MenuItem>
            <MenuItem to="#sobre">Sobre mim</MenuItem>
            <MenuItem to="#services">Serviços</MenuItem>
            <MenuItem to="#conhecimentos">Conhecimentos</MenuItem>
            <MenuItem to="#projetos">Projetos</MenuItem>
            <MenuItem to="#blog">Blog</MenuItem>
            <MenuItem to="#contato">Contato</MenuItem>
        </Box>
    );
};

const NavBarContainer = ({ children, ...props }) => {
    return (
        <Flex
            top="0"
            py={4}
            px={8}
            as="nav"
            w="100%"
            bg="black"
            zIndex={2}
            boxShadow="sm"
            align="center"
            display="flex"
            color="#f8f8f7"
            position="fixed"
            justify="space-between"
            fontFamily="Inter, sans-serif"
            {...props}
        >
            {children}
        </Flex>
    );
};

const TopMenu = (props) => {

    return(
        <NavBarContainer {...props }>
            <Logo />
            <MenuLinks />
        </NavBarContainer>
    );
};

export default TopMenu;