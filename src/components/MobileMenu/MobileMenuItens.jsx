import { ListItem } from "@chakra-ui/react";

import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom';

const MobileMenuItens = ( props ) => {
    return (
        <ListItem
            fontSize="1.5rem"
            padding=".5rem 1rem"
            borderRadius=".3rem"
            color="whiteAlpha.900"
            backgroundColor="gray.900"
        >
            <ChakraLink as={ReactRouterLink} to={props.path}>
                {props.value}
            </ChakraLink>
        </ListItem>
    );
};

export default MobileMenuItens;