import './AboutPage.css'
import React ,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import img from '../images/about-profile.png'
import Aos from "aos";
import 'aos/dist/aos.css'

const AboutPage = () =>{

    useEffect(() => {
        Aos.init({duration:1000});
    },[]);

    return(
        <div className='About-container'>
            <div data-aos='flip-right' className='left'>
                <h1>
                    Need a Creative Product?<br/>
                    I can Help You !
                </h1>
                <p>
                    This is Ajmal. I am a react front-end Developer. Proficient in 
                    building robust user interfaces and interactive components using 
                    React.js,ensuring seamless user experiences and optimized performance.
                </p>
                <Link to='/Contact'>
                    <button className='btn'>For Enquires </button>
                </Link>
            </div>
            <div data-aos='flip-left' className='right'>
                <div>
                    <img className='img' src={img
                    } alt='about'/>
                </div>
            </div>
        </div>
    );
}

export default AboutPage