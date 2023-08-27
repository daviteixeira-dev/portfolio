import { Flex } from "@chakra-ui/react";

import AboutMeList from "./AboutMeList";

const AboutMeMenu = () => {
    return (
        <Flex
            as="nav"
            mt="2rem"
            width="100%"
            height="6rem"
            alignItems="center"
        >
            <AboutMeList />
        </Flex>
    );
};

export default AboutMeMenu;