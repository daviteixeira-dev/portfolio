import { useEffect } from "react";

import { Heading, Text, Flex, Image } from "@chakra-ui/react";

import ReadingBody from "../components/ReadingBody";

import DesktopMenuBlog from "../components/DesktopMenuBlog";

const Article_ReactHelmet = () => {

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
                    React Helmet: Maximizando o SEO de seus sites com React
                </Heading>

                <Image 
                    fit="cover" 
                    height="30rem"
                    marginBottom="1rem"
                    src="/images/blog-images/react-helmet.jpg" 
                    alt="Alguma coisa aqui de descrição." 
                />

                <Text
                    fontSize="1rem" 
                    textAlign='justify' 
                    marginBottom="1rem"
                    color="blackAlpha.900" 
                >
                   Se você é um desenvolvedor web que trabalha com React, provavelmente já sabe que a 
                   otimização para mecanismos de busca (SEO) e o controle de metadados são fundamentais 
                   para o sucesso de qualquer aplicativo ou site. É aqui que o React Helmet entra em cena. 
                </Text>

                <Text
                    fontSize="1rem" 
                    textAlign='justify' 
                    marginBottom="1rem"
                    color="blackAlpha.900" 
                >
                   O React Helmet é uma biblioteca que oferece uma solução elegante e eficaz para lidar 
                   com metadados em aplicativos React. Neste artigo, vamos explorar o que é o React 
                   Helmet, como ele funciona e como você pode usá-lo para melhorar o SEO e o controle 
                   de metadados em seus projetos React. 
                </Text>

                <Heading 
                    as="h2"
                    fontSize="1.5rem"
                    marginBottom="1.5rem"
                    color="blackAlpha.900"
                >
                    O que é o React Helmet?
                </Heading>

                <Text
                    fontSize="1rem" 
                    textAlign='justify' 
                    marginBottom="1rem"
                    color="blackAlpha.900" 
                >
                    O React Helmet é uma biblioteca que permite manipular dinamicamente as 
                    tags {'<head>'} de um documento HTML em seus aplicativos React. Essas 
                    tags {'<head>'} incluem informações vitais para SEO, como títulos, descrições, 
                    tags meta e muito mais. O React Helmet permite que você atualize esses 
                    metadados de forma programática com base no estado de sua aplicação.
                </Text>

                <Heading 
                    as="h2"
                    fontSize="1.5rem"
                    marginBottom="1.5rem"
                    color="blackAlpha.900"
                >
                    Por que o React Helmet é importante para SEO?
                </Heading>

                <Text 
                    fontSize="1rem" 
                    textAlign='justify' 
                    marginBottom="1rem"
                    color="blackAlpha.900" 
                >
                    Os mecanismos de busca como o Google levam em consideração os metadados 
                    ao determinar a classificação de uma página nos resultados de pesquisa. Ao 
                    usar o React Helmet, você pode personalizar os metadados para cada página 
                    de seu aplicativo, tornando-o mais amigável para mecanismos de busca e 
                    aumentando suas chances de ser encontrado pelos usuários.
                </Text>

                <Heading 
                    as="h2"
                    fontSize="1.5rem"
                    marginBottom="1.5rem"
                    color="blackAlpha.900"
                >
                    Como Usar o React Helmet
                </Heading>

                <Text
                    fontSize="1rem" 
                    textAlign='justify' 
                    marginBottom="1rem"
                    color="blackAlpha.900" 
                >
                    O uso do React Helmet é relativamente simples. Primeiro, você deve 
                    instalá-lo em seu projeto com um comando como:
                </Text>

                <Text 
                    fontSize="1rem" 
                    textAlign='justify' 
                    marginBottom="1rem"
                    color="blackAlpha.900" 
                >
                    npm install react-helmet
                </Text>

                <Text 
                    fontSize="1rem" 
                    textAlign='justify' 
                    marginBottom="1rem"
                    color="blackAlpha.900" 
                >
                    Depois de instalado, você pode importar o componente Helmet 
                    de 'react-helmet' em seus componentes React e usá-lo para definir 
                    os metadados desejados. Por exemplo:
                </Text>

                <Text 
                    fontSize="1rem" 
                    textAlign='justify' 
                    marginBottom="1rem"
                    color="blackAlpha.900" 
                >
                    "Código"
                </Text>

                <Heading 
                    as="h2"
                    fontSize="1.5rem"
                    marginBottom="1.5rem"
                    color="blackAlpha.900"
                >
                    Conclusão
                </Heading>

                <Text 
                    fontSize="1rem" 
                    textAlign='justify' 
                    marginBottom="1rem"
                    color="blackAlpha.900" 
                >
                    O React Helmet é uma ferramenta poderosa para desenvolvedores React que 
                    desejam melhorar o SEO e o controle de metadados em seus aplicativos. Com 
                    ele, você pode personalizar facilmente títulos, descrições, tags meta e 
                    muito mais para cada página de seu site, aumentando a visibilidade nos 
                    mecanismos de busca e oferecendo uma experiência de usuário melhorada.
                </Text>

                <Text 
                    fontSize="1rem" 
                    textAlign='justify' 
                    marginBottom="1rem"
                    color="blackAlpha.900" 
                >
                    Espero que este artigo tenha sido útil! Fique atento para mais dicas e tutoriais 
                    sobre desenvolvimento web e React em nosso blog.
                </Text>
            </ReadingBody>
        </>
    );
};

export default Article_ReactHelmet;