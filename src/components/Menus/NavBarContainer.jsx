import React from 'react'

import { Flex } from "@chakra-ui/react";

const NavBarContainer = ({ children, ...props }) => {
    return (
        <Flex
            top="0"
            py={4}
            px={8}
            as="nav"
            className="menu"
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
    )
}

export default NavBarContainer
