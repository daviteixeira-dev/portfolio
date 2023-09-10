import { Flex, ListItem, UnorderedList } from "@chakra-ui/react";

import DesktopMenuLogo from "../../../components/DesktopMenu/DesktopMenuLogo";

import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom';

const DesktopMenuBlog = () => {
    return (
        <Flex 
            as="nav"
            zIndex={2}
            width="100%" 
            height="6rem" 
            position="fixed"
            alignItems="center" 
            boxShadow="dark-lg"
            backgroundColor="black"
            padding={["1rem", "0 2rem"]}
            justifyContent="space-between"
        >
            <DesktopMenuLogo 
                avatarSize="lg" 
                fontSize={["1.2rem", "1.5rem"]} 
            />

            <UnorderedList listStyleType="none" display="flex" >
                <ListItem>
                    <ChakraLink
                        to="/"
                        as={ReactRouterLink}
                        padding=".5rem 1rem"
                        borderRadius=".2rem"
                        color="whiteAlpha.900" 
                        backgroundColor="blue.500"
                        style={{ textDecoration: "none" }}
                    >
                        Portfólio
                    </ChakraLink>
                </ListItem>
            </UnorderedList>
        </Flex>
    );
};

export default DesktopMenuBlog;