import { Link, Tooltip } from "@chakra-ui/react";

const PresentationLinks = ( props ) => {
    return (
        <Tooltip label={props.tooltip}>
            <Link 
                isExternal
                color="gray.400"
                href={props.link}
                _hover={{ color: "blue.500" }}
                fontSize={["1.8rem", "3rem", "4rem", "4.5rem"]}
            >
                {props.icon}
            </Link>
        </Tooltip>
    );
};

export default PresentationLinks;