import React from 'react'
import './Herosec.css'
import image from '../images/Myprofile.jpg'

const Hero = () => {
  return (
    <div className='hero'>
    <div className='container'>
    <div className='row'>
      <div className='col-2 colone'>
            <h1>Hello Friend !</h1>
            <h2>This is <span>Ajmal</span></h2>
            <h3>Web Developer</h3>
      </div>
      <div className='col-2 coltwo'>
          <div className='box'>
            <div className='content'>
                <img className='hero-img' src={image} alt='hero'/>
            </div>
          </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Hero
