import { Flex } from "@chakra-ui/react";

import MainMenu from "./MainMenu";
import Presentation from "./Presentation";

function Header(){
    return(
        <Flex
            w="100%"
            as="header"
            style={{                
                backgroundSize: "cover",
                backgroundPosition: "10% 30%",
                backgroundImage: "url(/images/apresentation-banner.jpg)",
            }}
        >
            <MainMenu />
            <Presentation />
        </Flex>
    );
};

export default Header;