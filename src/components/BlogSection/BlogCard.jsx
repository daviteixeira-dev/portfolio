import { 
    Card, 
    Text,
    Image,
    Button, 
    Avatar, 
    Heading, 
    CardBody, 
    CardFooter, 
    CardHeader, 
} from "@chakra-ui/react";

import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom';

const BlogCard = ( props ) => {
    return (
        <Card maxW={props.widthCard}>
            <ChakraLink 
                as={ReactRouterLink} 
                to={props.cardLink} 
                style={{textDecoration: "none"}}
            >
                <CardHeader p="1rem">
                    <Image
                        width="100%"
                        height="12rem"
                        borderRadius=".5rem"
                        src={props.cardImage}
                        alt={props.cardAlt}
                    />
                </CardHeader>
                <CardBody p="0 1.5rem" textAlign="left">

                    <Text fontSize=".6rem" color="blue.900" fontWeight="semibold" padding=".5rem">{props.cardTag}</Text>

                    <Heading fontSize="1rem" fontWeight="bold">{props.cardTitle}</Heading>

                    <Text fontSize=".8rem" mt=".5rem">{props.cardDate}</Text>

                    <Text mt=".5rem" fontSize="1rem">
                        {props.cardText}
                    </Text>

                </CardBody>

                <CardFooter padding="1rem" display="flex" alignItems="center">
                    <Avatar size="sm" name="Davi Teixeira" src={props.cardImageAutor} />
                    <Text ml=".5rem" color="#222" fontSize="1rem">{props.cardNameAutor}</Text>
                </CardFooter>
            </ChakraLink>
        </Card>
    );
};

export default BlogCard;