import { UnorderedList } from "@chakra-ui/react";

import { FaInstagram, FaYoutube, FaDev, FaGithub, FaMedium } from "react-icons/fa";
import { SiDuolingo } from "react-icons/si";
import AboutMeItens from "./AboutMeItens";

const aboutMeListItens = [
    {
        path: 'https://www.instagram.com/daviteixeira_dev/',
        value: <FaInstagram />
    },
    {
        path: 'https://www.youtube.com/@daviteixeira_dev',
        value: <FaYoutube />
    },
    {
        path: 'https://dev.to/daviteixeiradev',
        value: <FaDev />
    },
    {
        path: 'https://duome.eu/daviteixeira.me',
        value: <SiDuolingo />
    },
    {
        path: 'https://medium.com/@daviteixeira.btm',
        value: <FaMedium />
    },
]

const AboutMeList = () => {
    return (
        <UnorderedList
            width="100%"
            display="flex"
            alignItems="center"
            listStyleType="none"
            justifyContent={["space-between","space-evenly"]}
        >
            {
                aboutMeListItens.map((item, index) => (
                    <AboutMeItens key={index} path={item.path} value={item.value} />
                ))
            }
        </UnorderedList>
    );
};

export default AboutMeList;