import { Flex } from "@chakra-ui/react";
import DesktopMenuList from "./DesktopMenuList";
import DesktopMenuLogo from "./DesktopMenuLogo";

const DesktopMenu = () => {
    return (
        <Flex 
            as="nav"
            zIndex={2}
            width="100%"
            height="7rem"
            position="fixed"
            padding="0 2rem"
            alignItems="center"
            boxShadow="dark-lg"
            backgroundColor="black"
        >
            <DesktopMenuLogo size="20%" />
            <DesktopMenuList />
        </Flex>
    ); 
};

export default DesktopMenu;