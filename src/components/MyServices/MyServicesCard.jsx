import { Card, CardBody, CardHeader, Text, Heading } from "@chakra-ui/react"

const MyServicesCard = ( props ) => {
    return (
        <Card 
            width="100%"
            tabIndex={0}
            marginBottom="1rem" 
            backgroundColor="gray.900" 
        >
            <CardHeader 
                display="flex"
                fontSize="3rem"
                color="whiteAlpha.900"
                justifyContent="center"
            >
                {props.icon}
            </CardHeader>
            <CardBody>
                <Heading 
                    as="h3"
                    textAlign="center"
                    color="whiteAlpha.900"
                    fontSize={["1.5rem", "1.5rem", "1.3rem", "1.6rem"]}
                >
                    {props.title}
                </Heading>
                <Text 
                    marginTop="1rem"
                    textAlign="center"
                    color="whiteAlpha.900"
                    fontSize={["1.2rem", "1.2rem", "1.2rem", "1.2rem"]}
                >
                    {props.text}
                </Text>
            </CardBody>
        </Card>
    );
};

export default MyServicesCard;