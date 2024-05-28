import './WorkCard.css'
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'
import React from 'react'

const Work = () => {
  return (
    <div className='work-container'>
        <div className='project-container'> 
            {WorkCardData.map((value,index) => {
                return(
                    <WorkCard
                        key = {index}
                        image = {value.image}
                        title = {value.title}
                        desc = {value.desc}
                        techstack = {value.techstack}
                        link = {value.link}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work
