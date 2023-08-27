import { UnorderedList } from "@chakra-ui/react";

import DesktopMenuItens from "./DesktopMenuItens";

const desktopMenuItens = [
    {
        path: '/',
        value: "Início"
    },
    {
        path: '#sobre',
        value: "Sobre mim"
    },
    {
        path: '#services',
        value: "Serviços"
    },
    {
        path: '#conhecimentos',
        value: "Conhecimentos"
    },
    {
        path: '#projetos',
        value: "Projetos"
    },
    {
        path: '#blog',
        value: "Blog"
    },
    {
        path: '#contato',
        value: "Contato"
    },
]

const DesktopMenuList = () => {
    return (
        <UnorderedList
            width="100%"
            display="flex"
            listStyleType="none"
            justifyContent="space-evenly"
        >
            {
                desktopMenuItens.map((item, index) => (
                    <DesktopMenuItens key={index} path={item.path} value={item.value} />
                ))
            }
        </UnorderedList>
    );
};

export default DesktopMenuList;