import { ListItem } from "@chakra-ui/react";

import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom';

const MobileMenuItens = ( props ) => {
    return (
        <ChakraLink as={ReactRouterLink} to={props.path}>
            <ListItem
                fontSize="1.2rem"
                padding=".5rem 1rem"
                borderRadius=".3rem"
                fontWeight="semibold"
                marginBottom="1.5rem"
                color="whiteAlpha.900"
                textTransform="uppercase"
                backgroundColor="blackAlpha.900"
                borderBottom="3px solid #3182ce"
            >
                {props.value}
            </ListItem>
        </ChakraLink>
    );
};

export default MobileMenuItens;