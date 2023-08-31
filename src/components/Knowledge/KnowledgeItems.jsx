import { Card, CardBody, CardHeader, Image, Text } from "@chakra-ui/react";

const KnowledgeItems = ( props ) => {
    return (
        <Card width="100%" alignItems="center" backgroundColor="gray.900" tabIndex={0}>
            <CardHeader>
                <Image width="4rem" src={props.icon} alt={props.alt} />
            </CardHeader>
            <CardBody padding="0" margin=".5rem">
                <Text color="whiteAlpha.900" textAlign="center">
                    {props.description}
                </Text>
            </CardBody>
        </Card>
    );
};

export default KnowledgeItems;