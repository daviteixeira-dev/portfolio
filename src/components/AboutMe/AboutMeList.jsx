import { UnorderedList } from "@chakra-ui/react";

import { FaInstagram, FaYoutube, FaDev, FaMedium } from "react-icons/fa";

import { SiDuolingo } from "react-icons/si";

import AboutMeItens from "./AboutMeItens";

const aboutMeListItens = [
    {
        path: 'https://www.instagram.com/daviteixeira_dev/',
        value: <FaInstagram />,
        tooltip: "Instagram"
    },
    {
        path: 'https://www.youtube.com/@daviteixeira_dev',
        value: <FaYoutube />,
        tooltip: "YouTube"
    },
    {
        path: 'https://dev.to/daviteixeiradev',
        value: <FaDev />,
        tooltip: "Dev.to"
    },
    {
        path: 'https://duome.eu/daviteixeira.me',
        value: <SiDuolingo />,
        tooltip: "Duolingo"
    },
    {
        path: 'https://medium.com/@daviteixeira.btm',
        value: <FaMedium />,
        tooltip: "Medium"
    },
]

const AboutMeList = () => {
    return (
        <UnorderedList
            margin="0"
            width="100%"
            display="flex"
            alignItems="center"
            listStyleType="none"
            justifyContent={["space-between","space-evenly"]}
        >
            {
                aboutMeListItens.map((item, index) => (
                    <AboutMeItens 
                        key={index} 
                        path={item.path} 
                        value={item.value}
                        tooltip={item.tooltip} 
                    />
                ))
            }
        </UnorderedList>
    );
};

export default AboutMeList;