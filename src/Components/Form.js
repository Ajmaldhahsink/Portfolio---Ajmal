import './Form.css'
import React , {useEffect, useState} from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'


const Form = () => {

  useEffect(() => {
    Aos.init({duration:1000});
  },[]);

  const[formData,setFormData] = useState({
    cusname: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors,setErrors] = useState({})
  const handleChange = (e) =>{
    const{name,value} = e.target;
    setFormData({
      ...formData,[name] : value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const handleErrors = {}
      if(!formData.cusname.trim()){
        handleErrors.cusname = "** Name is required **"
      }
      if(!formData.email.trim()){
        handleErrors.email = "** Email is required **"
      }else if(!/\S+@\S+\.\S+/.test(formData.email)){
        handleErrors.email = "Email is required"
      }
      if(!formData.subject.trim()){
        handleErrors.subject = "** Subject is required **"
      }
      if(!formData.message.trim()){
        handleErrors.message = "** Mention your message **"
      }

      setErrors(handleErrors)
      if(Object.keys(handleErrors).length === 0){
        Swal.fire("Submitted Successfully");
      }

  }


  return (
    <div data-aos='fade-up' className='form'>
      <form onSubmit={handleSubmit}>

        <label>Your Name</label>
        <input type='text' name='cusname' onChange={handleChange}/>
        {errors.cusname && <span>{errors.cusname}</span>}

        <label>Email</label>
        <input type='email' name='email' onChange={handleChange}/>
        {errors.email && <span>{errors.email}</span>}

        <label>Subject</label>
        <input type='text' name='subject' onChange={handleChange}/>
        {errors.subject && <span>{errors.subject}</span>}

        <label>Message</label>
        <textarea 
            rows='4' placeholder='Type Your Message here . . . '
            name='message' onChange={handleChange}
        >
        </textarea>
        {errors.message && <span>{errors.message}</span>}

        <button className='btn'>SUBMIT</button>
      </form>
    </div>
  )
}

export default Form
