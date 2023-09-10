import { Flex, Text, Avatar, Show } from "@chakra-ui/react";

import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom';

const DesktopMenuLogo = (props) => {
    return (
        <ChakraLink 
            to="/" 
            width="auto"  
            as={ReactRouterLink} 
            style={{ textDecoration: "none"}}
        >
            <Flex alignItems="center" width="100%">

                <Avatar size={props.avatarSize} name="Davi Teixeira" src="/images/logo.png"/>

                <Show above="md">
                    <Text 
                        ml=".5rem" 
                        color="#f2f2f2" 
                        width={["8rem", "10rem"]}
                        fontSize={props.fontSize} 
                    >
                        Davi Teixeira
                    </Text>
                </Show>
            </Flex>
        </ChakraLink>
    );
};

export default DesktopMenuLogo;