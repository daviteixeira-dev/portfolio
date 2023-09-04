import { Flex, Link, ListItem, Tooltip } from "@chakra-ui/react";

const AboutMeItens = ( props) => {
    return (
        <ListItem fontSize={["1.5rem", "2rem"]}>
            <Flex>
                <Tooltip label={props.tooltip}>
                    <Link
                        isExternal
                        href={props.path}
                        borderRadius=".5rem"
                        color="whiteAlpha.900"
                        backgroundColor="black"
                        padding={[".5rem", "1rem"]}
                        _hover={{ color: "blue.500" }}
                    >
                        {props.value}
                    </Link>
                </Tooltip>
            </Flex>
        </ListItem>
    );
};

export default AboutMeItens;