import React from 'react'
import Pagehero from '../Components/Pagehero'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import AboutPage from '../Components/AboutPage'

const About = () => {
  return (
    <div>
      <Nav />
      <Pagehero title='ABOUT' desc='Hi! This is Ajmal' />
      <AboutPage />
      <Footer />
    </div>
  )
}

export default About
