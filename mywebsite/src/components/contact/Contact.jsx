import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BiPhone} from 'react-icons/bi'

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contact</h2> 
      <div className="contact__container">
            <div className='contact__cards'>
              <article className='contact__card'>
              <AiOutlineMail className='email__icon'></AiOutlineMail>
              <h4>ojasupadhye@gmail.com</h4>
              </article>
              <article className='contact__card'>
              <BiPhone className='phone__icon'></BiPhone>
              <h4>(650)942-3180</h4>
              </article>
            </div>
          </div>
    </section>
  )
}

export default Contact
