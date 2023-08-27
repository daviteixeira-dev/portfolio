import { Flex, Hide, Show } from "@chakra-ui/react";

import MobileMenu from "../MobileMenu/MobileMenu";
import DesktopMenu from "../DesktopMenu/DesktopMenu";

const Header = () => {
    return (
        <Flex as="header" width="100%">
            <Hide below='md'>
                <DesktopMenu />
            </Hide>

            <Show below='md'>
                <MobileMenu />
            </Show>
        </Flex>
    );
};

export default Header;