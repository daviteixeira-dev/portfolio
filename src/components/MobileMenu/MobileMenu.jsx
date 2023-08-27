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
            
            <Button variant="outline" margin="1rem" ref={btnRef} colorScheme="whiteAlpha" onClick={onOpen}>
                Menu
            </Button>

            <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay />

                <DrawerContent>
                    <DrawerCloseButton color="whiteAlpha.900" />

                    <DrawerHeader backgroundColor="black">
                        <DesktopMenuLogo size="100%" />
                    </DrawerHeader>

                    <DrawerBody backgroundColor="blackAlpha.900">
                        <MobileMenuList />
                    </DrawerBody>

                    <DrawerFooter backgroundColor="black">
                        <Button variant='outline' colorScheme="whiteAlpha" onClick={onClose}>
                            Fechar
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
};

export default MobileMenu;