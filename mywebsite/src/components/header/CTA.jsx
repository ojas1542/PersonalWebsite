import React from 'react'
import RES from '../../assets/Ojas_Upadhye_resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={RES} download className='btn'> Download Resume </a>
      <a href="#contact" className='btn btn-primary'> Contact</a>
    </div>
  )
}

export default CTA
