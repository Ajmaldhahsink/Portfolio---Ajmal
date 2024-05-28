import './WorkCard.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const WorkCard = (props) => {
  return (
    <div className='project-card'>
        <h2 className='project-title'>
            {props.title}
        </h2>
        <img src={props.image} alt='pro-img'/>
        <div className='project-desc'>
            <div className='desc'>
                <p id='content'>
                    {props.desc}
                </p>
            </div>
            <div className='bar'></div>
            <p id='tech-stack'>{props.techstack}</p>
            <div className='bar2'></div>
            <div className='project-btn'>
                <NavLink to={props.link} target='_blank' className='btn'>Check-It Out
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default WorkCard
