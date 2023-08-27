import { Flex, Text, Avatar } from "@chakra-ui/react";

const DesktopMenuLogo = (props) => {
    return (
        <Flex alignItems="center" width={props.size}>
            <Avatar size="lg" name="Davi Teixeira" src="../../public/images/logo.png"/>
            <Text ml=".5rem" color="#f2f2f2" fontSize="1.5rem">Davi Teixeira</Text>
        </Flex>
    );
};

export default DesktopMenuLogo;