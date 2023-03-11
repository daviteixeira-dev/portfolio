import { Flex, Hide, Show } from "@chakra-ui/react";

import TopMenu from "../Menus/TopMenu";
import Presentation from "./Presentation";
import MenuMobile from "../Menus/MenuMobile";

function Header() {
    return (
        <Flex
            w="100%"
            as="header"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "10% 30%",
                backgroundImage: "url(/images/apresentation-banner.jpg)",
            }}
        >
            <Hide below='md'>
                <TopMenu />
            </Hide>

            <Show below='md'>
                <MenuMobile />
            </Show>

            <Presentation />
        </Flex>
    );
};

export default Header;