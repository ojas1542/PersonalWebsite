import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
    <h2>Experience</h2>

    <div className='container experience__container'>
      <div className='experience_frontend'>
        <h3>Frontend Development</h3>
        <div className='experience__content'>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>

          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>TypeScript</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Streamlit</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>BackboneJS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
        </div>
      </div>
      <div className='experience_backend'>
      <h3>Backend Development</h3>
        <div className='experience__content'>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Experienced</small>
            </div>

          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>C++</h4>
            <small className='text-light'>Intermediate</small>
            </div>

          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Flask</h4>
            <small className='text-light'>Experienced</small>
            </div>

          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>PostgreSQL</h4>
            <small className='text-light'>Experienced</small>
            </div>
 
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Streamlit</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Experience
