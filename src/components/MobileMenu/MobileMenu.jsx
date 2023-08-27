import React from "react";

import { 
    Flex, 
    Button, 
    Drawer, 
    DrawerBody, 
    DrawerFooter, 
    DrawerHeader, 
    DrawerOverlay, 
    DrawerContent,
    useDisclosure,
    DrawerCloseButton, 
} from "@chakra-ui/react";

import MobileMenuList from "./MobileMenuList";
import DesktopMenuLogo from "../DesktopMenu/DesktopMenuLogo";

const MobileMenu = () => {

    const btnRef = React.useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex position="absolute" as="nav">
            
            <Button variant="solid" margin="1rem" ref={btnRef} colorScheme="blue" onClick={onOpen}>
                Menu
            </Button>

            <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay />

                <DrawerContent>
                    <DrawerCloseButton color="whiteAlpha.900" />

                    <DrawerHeader backgroundColor="gray.800">
                        <DesktopMenuLogo size="100%" />
                    </DrawerHeader>

                    <DrawerBody backgroundColor="gray.700">
                        <MobileMenuList />
                    </DrawerBody>

                    <DrawerFooter backgroundColor="gray.800">
                        <Button variant='solid' onClick={onClose}>
                            Fechar
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
};

export default MobileMenu;