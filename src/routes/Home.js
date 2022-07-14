import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Technologies from "../components/Technologies";
import ContactSection from "../components/ContactSection";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Technologies />
            <Skills />
            <ContactSection />
        </>
    );
};

export default Home;
