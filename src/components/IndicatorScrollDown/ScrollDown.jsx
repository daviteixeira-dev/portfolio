import { Box, Text } from "@chakra-ui/react";

import './ScrollDown.css';

const ScrollDown = () => {
    return (
        <Box as='span'>
            <Box as='span' className='mouse-btn'>
                <Box as='span' className='mouse-scroll'></Box>
            </Box>
            <Text as='span' style={{color: '#c2c2c2'}} fontWeight="semibold">Saiba Mais</Text>
        </Box>
    );
};

export default ScrollDown;