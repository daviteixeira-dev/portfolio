import React from "react";

import "./MainBanner.css";

import { Container, Button } from "react-bootstrap";

import logo from "../../images/logo.png"

function MainBanner(){
    return (
        <Container 
            fluid 
            id="main-banner" 
            style={{ backgroundImage: "url(/images/main-banner.webp)" }}
        >
            <img
                src={logo} 
                width="200" 
                height="200"
                class="mb-2"
                loading="eager"
                alt="Logomarca de apresentação"
                title="Logomarca para o banner de apresentação"
            />
            <h1>Davi Teixeira<br /><span>&lt; Front-End Developer /&gt;</span></h1>
            <Button>Entre em contato</Button>
        </Container>
    )
}

export default MainBanner;