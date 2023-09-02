import { Flex, Link, ListItem, UnorderedList } from "@chakra-ui/react";

import DesktopMenuLogo from "./DesktopMenuLogo";

const DesktopMenuBlog = () => {
    return (
        <Flex 
            as="nav"
            zIndex={2}
            width="100%" 
            height="7rem" 
            position="fixed"
            alignItems="center" 
            boxShadow="dark-lg"
            backgroundColor="black"
            padding={["1rem", "0 2rem"]}
            justifyContent="space-between"
        >
            <DesktopMenuLogo 
                avatarSize="md" 
                fontSize={["1.2rem", "1.5rem"]} 
                size={["100%", "100%", "100%", "20%"]} 
            />

            <UnorderedList listStyleType="none" display="flex" >
                <ListItem>
                    <Link 
                        href="/" 
                        padding=".5rem 1rem"
                        borderRadius=".2rem"
                        color="whiteAlpha.900" 
                        backgroundColor="blue.500"
                        style={{ textDecoration: "none" }}
                    >
                        Portfólio
                    </Link>
                </ListItem>
            </UnorderedList>
        </Flex>
    );
};

export default DesktopMenuBlog;