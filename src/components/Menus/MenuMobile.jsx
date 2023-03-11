import React from 'react'

import {
    Flex,
    Button,
    Drawer,
    IconButton,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerContent,
    DrawerOverlay,
    useDisclosure,
    DrawerCloseButton
} from '@chakra-ui/react'

import './MenuMobile.css';

import { FiMenu } from 'react-icons/fi'

function MenuMobile() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const btnRef = React.useRef()

    return (
        <Flex zIndex={1} position='absolute'>

            <IconButton
                m='1rem'
                ref={btnRef}
                onClick={onOpen}
                icon={<FiMenu />}
                color="whiteAlpha.900"
                bgGradient='linear(to-l, blue.600, blue.300)'
                _hover={{ bgGradient: 'linear(to-l, blue.500, blue.200)' }}
            />

            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />

                <DrawerContent>

                    <DrawerCloseButton color="whiteAlpha.900" />

                    <DrawerHeader bg="gray.900" color="whiteAlpha.900">
                        Menu
                    </DrawerHeader>

                    <DrawerBody bg="gray.900" color="whiteAlpha.900">
                        <nav>
                            <ul className='listaMenuMobile'>
                                <li className='MenuMobileItem'><a href="/">Início</a></li>
                                <li className='MenuMobileItem'><a href="/projects">Projetos</a></li>
                                <li className='MenuMobileItem'><a href="/blog">Blog</a></li>
                            </ul>
                        </nav>
                    </DrawerBody>

                    <DrawerFooter bg="gray.900" color="whiteAlpha.900">
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Fechar
                        </Button>
                    </DrawerFooter>

                </DrawerContent>
            </Drawer>
        </Flex>
    )
}

export default MenuMobile