import React, { useEffect } from "react";
import Nav from '../Components/Nav';
import Hero from '../Components/Herosec';
import AboutPage from '../Components/AboutPage';
import Work from '../Components/Work';
import Form from '../Components/Form';
import Footer from '../Components/Footer';
import Aos from "aos";
import 'aos/dist/aos.css'
import Skills from "../Components/Skills";

const Home = () =>{

    useEffect(() => {
        Aos.init({duration:1000});
    },[]);

    return(
        <div>
            <Nav />
            <Hero />
            <h1 data-aos='fade-up' id='side-heading'>ABOUT</h1>
            <AboutPage />
            <h1 data-aos='fade-up' id='side-heading'>SKILLS</h1>
            <Skills />
            <h1 data-aos='fade-up' id='side-heading'>PROJECTS</h1>
            <Work />
            <h1 data-aos='fade-up' id='side-heading'>Be In-Touch</h1>
            <Form />
            <Footer />
        </div>
    );
}

export default Home