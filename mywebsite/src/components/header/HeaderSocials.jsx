import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/ojas-upadhye-1431ab139/' target='_blank'><BsLinkedin/></a>
      <a href='https://github.com/ojas1542' target='_blank'><FaGithubSquare/></a>
    </div>
  )
}

export default HeaderSocials
