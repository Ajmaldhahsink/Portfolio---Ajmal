import React from 'react'
import Pagehero from '../Components/Pagehero'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Work from '../Components/Work'

const Project = () => {
  return (
    <div>
      <Nav />
      <Pagehero title='PROJECTS' desc='My Freelance Works' />
      <Work />
      <Footer />
    </div>
  )
}

export default Project
