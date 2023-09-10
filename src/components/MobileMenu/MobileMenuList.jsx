import { UnorderedList } from "@chakra-ui/react";

import MobileMenuItens from "./MobileMenuItens";

const mobileMenuItens = [
    {
        path: '/',
        value: "Início"
    },
    {
        path: '/projetos',
        value: "Projetos"
    },
    {
        path: '/blog',
        value: "Blog"
    },
]

const MobileMenuList = () => {
    return (
        <UnorderedList
            height="100%"
            display="flex"
            listStyleType="none"
            flexDirection="column"
            justifyContent="start"
        >
            {
                mobileMenuItens.map((item, index) => (
                    <MobileMenuItens key={index} path={item.path} value={item.value} />
                ))
            }
        </UnorderedList>
    );
};

export default MobileMenuList;