import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'


const contact = () => {
  return (
      <section id='contact'>
        <h5>Get in Touch</h5>
        <h2>Contact me</h2>

        <div className="container contact__container">
          <div className="contact__options">
          
            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>dnell.personal@gmail.com</h5>
              <a href="mailto:dnell.personal@gmail.com">Send a message</a>
            </article>


            <article className="contact__option">
              <BsMessenger className='contact__option-icon'/>
              <h4>Facebook Message</h4>
              <h5>dan.nell.313</h5>
              <a href="https://m.me/dan.nell.313">Send a message</a>
            </article>


            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+44 755 3939 130</h5>
              <a href="https://api.whatsapp.com/send?phone=447553939130">Send a message</a>
            </article>
          
          </div>
       
          <form action="">
              <input type="text" name='name' placeholder='Your Full Name' required />
              <input type="email" name='email' placeholder='Your Email' required />
              <textarea type="message" rows='7' placeholder='Your Message' required ></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>

          </form>

        </div>

      </section>
  )
}

export default contact