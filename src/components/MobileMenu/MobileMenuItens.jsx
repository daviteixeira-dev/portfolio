import { ListItem, Link } from "@chakra-ui/react";

const MobileMenuItens = ( props ) => {
    return (
        <ListItem
            fontSize="2rem"
            padding=".5rem 1rem"
            borderRadius=".3rem"
            color="whiteAlpha.900"
            backgroundColor="gray.800"
        >
            <Link href={props.path}>
                {props.value}
            </Link>
        </ListItem>
    );
};

export default MobileMenuItens;