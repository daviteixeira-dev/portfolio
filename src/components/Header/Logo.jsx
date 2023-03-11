import React from "react";

import { Text, Image, Flex } from "@chakra-ui/react";

function Logo(){
  return(
    <Flex alignItems="center" width="40rem">
      <Image
        mr="1rem"
        boxSize='3rem'
        objectFit='cover'
        src="images/logo.png"
        alt='Essa é a logo do meu website'
      />
      <Text fontSize="lg" fontWeight="bold">
        Davi Teixeira
      </Text>
    </Flex>
  );
};

export default Logo;