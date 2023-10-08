import { 
    Flex, 
    Link, 
    Heading, 
    ListItem, 
    UnorderedList 
} from "@chakra-ui/react";

const Indice = () => {
    return (
        <Flex 
            as='nav'
            width="20rem"
            padding="1.5rem"
            borderRadius=".8rem"
            height="fit-content"
            flexDirection='column' 
            border="2px solid #3182ce"
            background="gray.100"
        >
            <Flex as='header' marginBottom="1rem">
                <Heading as='h6'>Índice</Heading>
            </Flex>

            <UnorderedList>
                <ListItem marginBottom="1rem">
                    <Link href="#title1">React Helmet: Maximizando o SEO de seus sites com React</Link>
                </ListItem>
                <ListItem marginBottom="1rem">
                    <Link href="#title2">O que é o React Helmet?</Link>
                </ListItem>
                <ListItem marginBottom="1rem">
                    <Link href="#title3">Por que o React Helmet é importante para SEO?</Link>
                </ListItem>
                <ListItem marginBottom="1rem">
                    <Link href="#title4">Como Usar o React Helmet</Link>
                </ListItem>
                <ListItem marginBottom="1rem">
                    <Link href="#title5">Conclusão</Link>
                </ListItem>
            </UnorderedList>
        </Flex>
    );
};

export default Indice
