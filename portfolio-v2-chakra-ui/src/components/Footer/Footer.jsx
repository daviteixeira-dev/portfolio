import React from "react";
import { Box, Text } from "@chakra-ui/react"

function Footer(){
    return(
        <Box as="footer" border="1px solid">
            <ul>
                <li>
                    <a href="#">
                        GitHub
                    </a>
                </li>
                <li>
                    <a href="#">
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href="#">
                        Instagram
                    </a>
                </li>
                <li>
                    <a href="#">
                        Youtuber
                    </a>
                </li>
                <li>
                    <a href="#">
                        Twitter
                    </a>
                </li>
            </ul>
            <Text>Desenvolvido por: 
                <Text as="em">
                    <a 
                        href="https://github.com/daviteixeira-btm" 
                        target="_blank"
                    >
                        Davi Teixeira
                    </a>
                </Text>
            </Text>
        </Box>
    )
}

export default Footer;