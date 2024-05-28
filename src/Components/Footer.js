import React from 'react'
import './Footer.css'
import {FaFacebook, 
        FaInstagram, 
        FaLinkedin, 
        FaMailBulk, 
        FaPhone} from 'react-icons/fa'
import { RiTwitterXFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return(
        <div className='footer-container'>
            <div className='inside-container'> 
                <div className='left-side'>
                    <div className='phone'>
                        <h4>
                        <FaPhone size={20}  
                        style ={{color:'#fff',marginRight:'1.5rem'}} />
                        +91 948 721 8667
                        </h4>
                    </div>
                    <div className='email'>
                        <h4>
                        <FaMailBulk size={20} 
                        style ={{color:'#fff',marginRight:'1.5rem'}} />
                        ajmal001aj@gmail.com
                        </h4>
                    </div>
                </div>

                <div className='right-side'>
                    <div className='social'>
                        <NavLink to='https://www.linkedin.com/in/ajmal-dhahsin-660228289/'>
                            <FaLinkedin id='icon' size={30} 
                            style ={{color:'#fff',marginRight:'1.5rem'}} />
                        </NavLink>
                        <NavLink to='https://x.com/ajmal007aj'>
                            <RiTwitterXFill id='icon' size={30} 
                            style ={{color:'#fff',marginRight:'1.5rem'}} />
                        </NavLink>
                        {/* <NavLink to=''>
                            <FaFacebook size={30} 
                            style ={{color:'#fff',marginRight:'1.5rem'}} />
                        </NavLink> */}
                        <NavLink to='https://www.instagram.com/ajmal1_aj?igsh=ZXZscjlrdG5iZ3pm'>
                            <FaInstagram id='icon' size={30} 
                            style ={{color:'#fff',marginRight:'1.5rem'}} />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer