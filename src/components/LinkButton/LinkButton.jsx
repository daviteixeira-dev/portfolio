import React from "react";

import { Link } from "@chakra-ui/react";

function LinkButton(props){
    return(
        <Link
            minW="5rem"
            p=".5rem 1rem"
            fontSize="1rem"
            href={props.link}
            textAlign="center"
            borderRadius=".5rem"
            color="whiteAlpha.900"
            isExternal={props.isExternal}
            fontFamily="Inter, sans-serif"   
            style={{ textDecoration: "none" }}
            bgGradient='linear(to-l, blue.600, blue.300)'
            _hover={{
                bgGradient: 'linear(to-l, blue.500, blue.200)'
            }}
        >
            {props.children}
        </Link>
    );
};

export default LinkButton;