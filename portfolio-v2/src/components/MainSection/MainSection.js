import React from "react";
import MainBanner from "../MainBanner/MainBanner";

import "./MainSection.css";

function MainSection(){
    return (
        <main 
            id="services-banner" 
            alt="Imagem de Francesco Ungaro no Pexels" 
            style={{ backgroundImage: "url(/images/services-banner.jpg)" }}
        >
            <MainBanner />
        </main>
    )
}

export default MainSection;