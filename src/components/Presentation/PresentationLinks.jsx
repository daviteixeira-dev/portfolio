import { Link, Tooltip } from "@chakra-ui/react";

const PresentationLinks = ( props ) => {
    return (
        <Tooltip label={props.tooltip}>
            <Link 
                isExternal
                href={props.link}
                color="gray.400"
                _hover={{ color: "gray.300" }}
                fontSize={["1.8rem", "3rem", "4rem", "4.5rem"]}
            >
                {props.icon}
            </Link>
        </Tooltip>
    );
};

export default PresentationLinks;