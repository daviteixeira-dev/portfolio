import { 
    Card, 
    Text, 
    Link, 
    Image,
    Button, 
    Avatar, 
    Heading, 
    CardBody, 
    CardFooter, 
    CardHeader, 
} from "@chakra-ui/react";

const BlogCard = ( props ) => {
    return (
        <Card maxW={props.widthCard}>
            <Link href={props.cardLink} isExternal style={{textDecoration: "none"}}>
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

                    <Button variant="link" fontSize=".6rem" padding=".5rem">{props.cardTag}</Button>

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
            </Link>
        </Card>
    );
};

export default BlogCard;