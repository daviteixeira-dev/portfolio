import { Link, ListItem } from "@chakra-ui/react";

const DesktopMenuItens = ( props ) => {
    return (
        <ListItem color="whiteAlpha.900" fontSize="1.5rem">
            <Link href={props.path}>
                {props.value}
            </Link>
        </ListItem>
    );
};

export default DesktopMenuItens;