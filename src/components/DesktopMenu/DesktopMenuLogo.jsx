import { Flex, Text, Avatar } from "@chakra-ui/react";

const DesktopMenuLogo = (props) => {
    return (
        <Flex alignItems="center" width={props.size}>
            <Avatar size={props.avatarSize} name="Davi Teixeira" src="/images/logo.png"/>
            <Text ml=".5rem" color="#f2f2f2" fontSize={props.fontSize}>Davi Teixeira</Text>
        </Flex>
    );
};

export default DesktopMenuLogo;