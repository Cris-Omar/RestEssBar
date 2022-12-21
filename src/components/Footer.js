import React from 'react'
import "../styles/style.css"

//footer Icons:
import InstaIcon from "../assets/icons/InstagramIcon"
import FacebookIcon from '../assets/icons/FacebookIcon'
import LinkedInIcon from '../assets/icons/LinkedIn'

export default function Footer() {

  return (

    <div className="footer">

      <div className='socialMedia'>
      <li><a target="_blank" rel="noreferrer" href='https://www.instagram.com/' ><InstaIcon /></a></li>
       <li><a target="_blank" rel="noreferrer" href='https://www.facebook.com/restessbar' ><FacebookIcon /></a></li>
       <li><a target="_blank" rel="noreferrer" href='https://www.linkedin.com/' ><LinkedInIcon /></a></li>
      </div>

      <p>
        RestEssBar Schweiz &copy; 2022
      </p>

    </div>
  )
}
