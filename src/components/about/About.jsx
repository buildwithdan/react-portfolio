import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
     <section id='about'>
       <h5>Get to Know</h5>
       <h1>About Me</h1>

       <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About_Image'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__cards'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>started in March 2022</small>
            </article>
          
            <article className='about__cards'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>0</small>
            </article>

            <article className='about__cards'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ completed projects</small>
            </article>


          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestiae odit excepturi, labore voluptatum laudantium sed commodi ipsa tempora officia ut explicabo quia, sint adipisci aspernatur, necessitatibus doloribus facilis laborum.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>




         </div>
        </div>
       </div>
       </section>
        )
}

export default About