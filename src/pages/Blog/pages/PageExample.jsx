import { useEffect } from "react";

import { Heading, Text, Flex, Image } from "@chakra-ui/react";

import ReadingBody from "../components/ReadingBody";

import DesktopMenuBlog from "../components/DesktopMenuBlog";

const PageExample = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Flex 
                as="header" 
                width="100%" 
                height="70vh" 
                background="blackAlpha.900"
            >
                <DesktopMenuBlog />
            </Flex>

            <ReadingBody>

                <Heading
                    as="h1"
                    textAlign="center" 
                    marginBottom="2rem"
                    color="whiteAlpha.900" 
                >
                    How ToCreate Best UX Design With Adobe Xd
                </Heading>

                <Image 
                    fit="cover" 
                    height="30rem"
                    marginBottom="1rem"
                    src="/images/froned.jpg" 
                    alt="Alguma coisa aqui de descrição." 
                />

                <Heading 
                    as="h2"
                    fontSize="1.5rem"
                    marginBottom="1.5rem"
                    color="blackAlpha.900"
                >
                    Create Best UX Design
                </Heading>

                <Text
                    fontSize="1rem" 
                    textAlign='justify' 
                    marginBottom="1rem"
                    color="blackAlpha.900" 
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores 
                    sed voluptatem alias architecto aliquam esse, ab praesentium aliquid 
                    recusandae culpa officia quasi in quidem odit ratione unde dolores 
                    perspiciatis mollitia? Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ut impedit sunt sed, delectus veritatis, voluptatem 
                    velit quae totam facilis molestiae harum nisi ipsa nulla quia autem 
                    nobis ad sapiente labore.
                </Text>

                <Text 
                    fontSize="1rem" 
                    textAlign='justify' 
                    marginBottom="1rem"
                    color="blackAlpha.900" 
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores 
                    sed voluptatem alias architecto aliquam esse, ab praesentium aliquid 
                    recusandae culpa officia quasi in quidem odit ratione unde dolores 
                    perspiciatis mollitia? Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ut impedit sunt sed, delectus veritatis, voluptatem 
                    velit quae totam facilis molestiae harum nisi ipsa nulla quia autem 
                    nobis ad sapiente labore.
                </Text>

                <Heading 
                    as="h2"
                    fontSize="1.5rem"
                    marginBottom="1.5rem"
                    color="blackAlpha.900"
                >
                    Create Best UX Design
                </Heading>

                <Text
                    fontSize="1rem" 
                    textAlign='justify' 
                    marginBottom="1rem"
                    color="blackAlpha.900" 
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores 
                    sed voluptatem alias architecto aliquam esse, ab praesentium aliquid 
                    recusandae culpa officia quasi in quidem odit ratione unde dolores 
                    perspiciatis mollitia? Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ut impedit sunt sed, delectus veritatis, voluptatem 
                    velit quae totam facilis molestiae harum nisi ipsa nulla quia autem 
                    nobis ad sapiente labore.
                </Text>

                <Text 
                    fontSize="1rem" 
                    textAlign='justify' 
                    marginBottom="1rem"
                    color="blackAlpha.900" 
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores 
                    sed voluptatem alias architecto aliquam esse, ab praesentium aliquid 
                    recusandae culpa officia quasi in quidem odit ratione unde dolores 
                    perspiciatis mollitia? Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ut impedit sunt sed, delectus veritatis, voluptatem 
                    velit quae totam facilis molestiae harum nisi ipsa nulla quia autem 
                    nobis ad sapiente labore.
                </Text>

                <Text 
                    fontSize="1rem" 
                    textAlign='justify' 
                    marginBottom="1rem"
                    color="blackAlpha.900" 
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores 
                    sed voluptatem alias architecto aliquam esse, ab praesentium aliquid 
                    recusandae culpa officia quasi in quidem odit ratione unde dolores 
                    perspiciatis mollitia? Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ut impedit sunt sed, delectus veritatis, voluptatem 
                    velit quae totam facilis molestiae harum nisi ipsa nulla quia autem 
                    nobis ad sapiente labore.
                </Text>
            </ReadingBody>
        </>
    );
};

export default PageExample;