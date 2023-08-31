import { Link } from "@chakra-ui/react";

const FooterLinks = ( props ) => {
    return (
        <Link 
            isExternal
            padding="1rem" 
            fontSize="1.5rem"
            href={props.link}
            borderRadius="50%"
            border="2px solid"
            color="whiteAlpha.900" 
            backgroundColor="gray.600" 
        >
            {props.icon}
        </Link>
    );
};

export default FooterLinks;