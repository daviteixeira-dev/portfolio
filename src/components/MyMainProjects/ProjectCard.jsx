import { 
    Card, 
    Link, 
    Text, 
    Image, 
    Heading, 
    CardBody, 
    CardFooter, 
    CardHeader, 
} from "@chakra-ui/react";

const ProjectCard = ( props ) => {
    return (
        <Card tabIndex={0}>
            <CardHeader>
                <Image 
                    fit="cover"
                    width="100%"
                    height="14rem"
                    src={props.image} 
                />
            </CardHeader>
            <CardBody>
                <Heading textAlign="center">
                    {props.title}
                </Heading>
                <Text textAlign="center" marginTop="1rem">
                    {props.text}
                </Text>
            </CardBody>
            <CardFooter justifyContent="center">
                <Link
                    isExternal
                    tabIndex={0}
                    href={props.link}
                    borderRadius=".5rem"
                    padding=".5rem 1rem"
                    color="whiteAlpha.900"
                    backgroundColor="blue.600"
                    style={{ textDecoration: "none" }}
                >
                    Vizualizar Projeto
                </Link>
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;