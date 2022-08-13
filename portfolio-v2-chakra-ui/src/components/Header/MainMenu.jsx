import React from "react";

import { Link, Box, Flex, Text, Stack } from "@chakra-ui/react";

import { FaBars, FaTimes} from "react-icons/fa";

import Logo from "./Logo";

const MenuToggle = ({ toggle, isOpen }) => {
    return (
      <Box display={{ base: "block", md: "none" }} onClick={toggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Box>
    );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
      <Link href={to} style={{ textDecoration: 'none' }}>
        <Text display="block" {...rest} _hover={{ borderBottom: "3px solid #63B3ED"}}>
          {children}
        </Text>
      </Link>
    );
};

const MenuLinks = ({ isOpen }) => {
    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack 
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "column", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <MenuItem to="/">Início</MenuItem>
                <MenuItem to="#sobre">Sobre mim</MenuItem>
                <MenuItem to="#services">Serviços</MenuItem>
                <MenuItem to="#conhecimentos">Conhecimentos</MenuItem>
                <MenuItem to="#projetos">Projetos</MenuItem>
                <MenuItem to="#blog">Blog</MenuItem>
                <MenuItem to="#contato">Contato</MenuItem>
            </Stack>
        </Box>
    );
};

const NavBarContainer = ({ children, ...props }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            p={8}
            bg={["black", "black", "black", "black"]}
            color={["#f8f8f7", "#f8f8f7", "#f8f8f7", "#f8f8f7"]}
            fontFamily="Inter, sans-serif"
            position="fixed"
            top="0"
            {...props}
        >
            {children}
        </Flex>
    );
};

const MainMenu = (props) => {

    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <NavBarContainer {...props }>
            <Logo 
                w="200px"
                color={["#eee7f3", "#eee7f3", "#eee7f3", "#eee7f3"]}
            />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavBarContainer>
    );
};

export default MainMenu;