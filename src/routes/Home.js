import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Technologies from "../components/Technologies";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Technologies />
            <Skills />
        </>
    );
};

export default Home;
