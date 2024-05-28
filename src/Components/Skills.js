import './Skills.css'
import React, {useEffect} from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'

import img1 from '../images/html5.png'
import img2 from '../images/css3.png'
import img3 from '../images/js.png'
import img4 from '../images/react.png'
import img5 from '../images/mysql.png'
import img6 from '../images/PHP.png'
import img7 from '../images/java.webp'
import img8 from '../images/aws.png'

const Skills = () => {

    useEffect(() => {
        Aos.init({duration:1000});
    },[]);

  return (
    <div className='skill-container'>
        <div data-aos='fade-right' className='left'>
            <p id='side-bar'>--------  &nbsp;&nbsp;&nbsp; My Skills</p>
            <h1>
                What my Programming Skills Included?
            </h1>
            <p>
                    I develop simple, creative and responsive user interface that helps
                    users get things done with less effort and time with those 
                    technologies.
            </p>
            </div>
            <div data-aos='fade-right' className='right'>
                <div className='img1-div'>
                    <img className='img1' src={img1} alt='html' />
                </div>
                <div className='img1-div'>
                    <img className='img1' src={img2} alt='css' />
                </div>
                <div className='img1-div'>
                    <img className='img1' src={img3} alt='js' />
                </div>
                <div className='img1-div'>
                    <img className='img1' src={img4} alt='react' />
                </div>
                <div className='img1-div'>
                    <img className='img1' src={img5} alt='mysql' />
                </div>
                <div className='img1-div'>
                    <img className='img1' src={img6} alt='php' />
                </div>
                <div className='img1-div'>
                    <img className='img1' src={img7} alt='java' />
                </div>
                <div className='img1-div'>
                    <img className='img1' src={img8} alt='aws' />
                </div>
        </div>
    </div>
  )
}

export default Skills
