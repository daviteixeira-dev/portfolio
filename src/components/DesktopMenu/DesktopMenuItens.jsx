import { Link, ListItem } from "@chakra-ui/react";

const DesktopMenuItens = ( props ) => {
    return (
        <ListItem color="whiteAlpha.900" fontSize="1rem" outline="0" boxShadow={0} border="0 none">
            <Link 
                href={props.path}
                _focus={{ padding: ".5rem" }}
                _hover={{ color: "#3182ce" }} 
                style={{ textDecoration: "none" }}
            >
                {props.value}
            </Link>
        </ListItem> 
    );
};

export default DesktopMenuItens;