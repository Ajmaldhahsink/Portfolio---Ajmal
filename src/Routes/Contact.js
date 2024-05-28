import React from 'react'
import Pagehero from '../Components/Pagehero'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Form from '../Components/Form'

const Contact = () => {
  return (
    <div>
      <Nav />
      <Pagehero title='CONTACT' desc="Let's Work Together "/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
