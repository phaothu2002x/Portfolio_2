import React from "react";
import Hero from "./sections/hero";
import Showcase from "./sections/Showcase";
import NavBar from "./components/NavBar";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import ContextSection from "./sections/ContextSection";
import Footer from "./sections/Footer";

function App() {
    return (
        <>
            <NavBar />
            <Hero />
            <Showcase />
            <LogoSection />
            <FeatureCards />
            <ExperienceSection />
            <TechStack />
            <Testimonials />
            <ContextSection />
            <Footer />
        </>
    );
}

export default App;
