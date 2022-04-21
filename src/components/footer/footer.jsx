import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import { FaTwitter } from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      <a href="#" classname='footer__logo'></a>

      <ul classname='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

      <div classname='footer__socials'>
        <a href="https://facebook.com"><FaFacebookF /> </a>
        <a href="https://twitter.com"><FaTwitter /></a>
        <a href="https://instagram.com"><FiInstagram/></a>
      </div>



    </footer>
  )
}

export default footer