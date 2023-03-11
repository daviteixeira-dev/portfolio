import React from "react";

import { Box, Flex } from "@chakra-ui/react";

import Logo from "../Header/Logo";

const menuItems = [
    {
        id: 1,
        link: "/",
        title: "Início"
    },
    {
        id: 2,
        link: "#sobre",
        title: "Sobre mim"
    },
    {
        id: 3,
        link: "#services",
        title: "Serviços"
    },
    {
        id: 4,
        link: "#conhecimentos",
        title: "Conhecimentos"
    },
    {
        id: 5,
        link: "#projetos",
        title: "Projetos"
    },
    {
        id: 6,
        link: "#blog",
        title: "Blog"
    },
    {
        id: 7,
        link: "#contato",
        title: "Contato"
    }
];

const MenuLinks = () => {

    return (
        <Box
            as="ul"
            w="100%"
            spacing={8}
            display="flex"
            align="center"
            pt={[4, 4, 0, 0]}
            m={[0, 0, "1rem", 0]}
            justifyContent="space-around"
            direction={["column", "column", "row", "row"]}
            justify={["center", "space-between", "flex-end", "flex-end"]}
        >
            {
                menuItems.map(menu => (
                    <li style={{ listStyle: "none" }}>
                        <a href={`${menu.link}`}>{menu.title}</a>
                    </li>
                ))
            }
        </Box>
    );
};

const NavBarContainer = ({ children, ...props }) => {
    return (
        <Flex
            top="0"
            py={4}
            px={8}
            as="nav"
            className="menu"
            w="100%"
            bg="black"
            zIndex={2}
            boxShadow="sm"
            align="center"
            display="flex"
            color="#f8f8f7"
            position="fixed"
            justify="space-between"
            fontFamily="Inter, sans-serif"
            {...props}
        >
            {children}
        </Flex>
    );
};

const TopMenu = (props) => {

    const menuItems = document.querySelectorAll('.menu a[href^="#"]')

    menuItems.forEach(item => {
        item.addEventListener('click', scrollToIdOnClick)
    })

    function getScrollTopByHref(element) {
        const id = element.getAttribute('href');
        return document.querySelector(id).offsetTop;
    }

    function scrollToIdOnClick(event) {
        event.preventDefault();
        const to = getScrollTopByHref(event.target) - 80;
        scrollToPosition(to)
    }

    function scrollToPosition(to) {
        // window.scroll({
        //     top: to,
        //     behavior: "smooth",
        // })

        smoothScrollTo(0, to);
    }

    /**
     * Smooth scroll animation
     * @param {int} endX: destination x coordinate
     * @param {int} endY: destination y coordinate
     * @param {int} duration: animation duration in ms
    */

    function smoothScrollTo(endX, endY, duration) {
        const startX = window.scrollX || window.pageXOffset;
        const startY = window.scrollY || window.pageYOffset;
        const distanceX = endX - startX;
        const distanceY = endY - startY;
        const startTime = new Date().getTime();

        duration = typeof duration !== 'undefined' ? duration : 400;

        // Easing function
        const easeInOutQuart = (time, from, distance, duration) => {
            if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
            return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
        };

        const timer = setInterval(() => {
            const time = new Date().getTime() - startTime;
            const newX = easeInOutQuart(time, startX, distanceX, duration);
            const newY = easeInOutQuart(time, startY, distanceY, duration);
            if (time >= duration) {
                clearInterval(timer);
            }
            window.scroll(newX, newY);
        }, 1000 / 60); // 60 fps
    };

    return (
        <NavBarContainer {...props}>
            <Logo />
            <MenuLinks />
        </NavBarContainer>
    );
};

export default TopMenu;