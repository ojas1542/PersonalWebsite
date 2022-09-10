import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import ME from '../../assets/me-about.jpg';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ME} alt="About Image"/>
          </div>
        </div>

          <div className="about__content">
            <div className='about__cards'>
              <article className='about__card'>
              <FaAward className='about__icon'></FaAward>
              <h5>Experience</h5>
              <small>6 Months Work Experience</small>
              </article>
            </div>
          </div>


        </div>

    </section>
  )
}

export default About
