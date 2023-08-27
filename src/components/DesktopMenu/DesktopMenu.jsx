import { Flex } from "@chakra-ui/react";
import DesktopMenuList from "./DesktopMenuList";
import DesktopMenuLogo from "./DesktopMenuLogo";

const DesktopMenu = () => {
    return (
        <Flex 
            as="nav"
            width="100%"
            height="7rem"
            position="fixed"
            padding="0 .5rem"
            alignItems="center"
            backgroundColor="gray.900"
        >
            <DesktopMenuLogo size="20%" />
            <DesktopMenuList />
        </Flex>
    ); 
};

export default DesktopMenu;