import React from "react";

import Logo from "../Header/Logo";
import MenuLinks from "./MenuLinks";
import NavBarContainer from "./NavBarContainer";

const TopMenu = (props) => {
    return (
        <NavBarContainer {...props}>
            <Logo />
            <MenuLinks />
        </NavBarContainer>
    );
};

export default TopMenu;