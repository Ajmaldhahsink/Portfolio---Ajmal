import './Pagehero.css'
import React from 'react'

const Pagehero = (props) => {
  return (
    <div className='main-image'>
        <div className='container'>
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </div>      
    </div>
  );
}

export default Pagehero
