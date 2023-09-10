import { Flex } from "@chakra-ui/react";

import DesktopMenuList from "./DesktopMenuList";

import DesktopMenuLogo from "./DesktopMenuLogo";

const DesktopMenu = () => {
    return (
        <Flex 
            as="nav"
            zIndex={2}
            width="100%"
            height="6rem"
            position="fixed"
            padding="0 2rem"
            alignItems="center"
            boxShadow="dark-lg"
            backgroundColor="black"
        >
            <DesktopMenuLogo 
                avatarSize="lg" 
                fontSize={["1.2rem", "1.5rem"]} 
            />
            
            <DesktopMenuList />
        </Flex>
    ); 
};

export default DesktopMenu;