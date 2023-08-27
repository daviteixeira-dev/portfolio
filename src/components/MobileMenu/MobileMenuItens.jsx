import { ListItem, Link } from "@chakra-ui/react";

const MobileMenuItens = ( props ) => {
    return (
        <ListItem
            fontSize="1.5rem"
            padding=".5rem 1rem"
            borderRadius=".3rem"
            color="whiteAlpha.900"
            backgroundColor="gray.900"
        >
            <Link href={props.path}>
                {props.value}
            </Link>
        </ListItem>
    );
};

export default MobileMenuItens;