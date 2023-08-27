import { Flex, Link, ListItem } from "@chakra-ui/react";

const AboutMeItens = ( props) => {
    return (
        <ListItem fontSize="2rem">
            <Flex>
                <Link
                    isExternal
                    href={props.path}
                    borderRadius=".5rem"
                    color="whiteAlpha.900"
                    backgroundColor="black"
                    padding={[".5rem", "1rem"]}
                >
                    {props.value}
                </Link>
            </Flex>
        </ListItem>
    );
};

export default AboutMeItens;