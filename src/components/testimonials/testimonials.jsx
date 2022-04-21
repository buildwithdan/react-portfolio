import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules

import {Pagination, Navigation} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


const data = [

  {
    id: 1,
    avatar: AVTR1,
    name: 'Peter Snow',
    Review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem earum quas commodi minima beatae totam voluptatum assumenda sint vel eveniet dolorum in, ipsum quae maxime eius expedita quidem incidunt debitis?suck1'
  },

  {
    id: 2,
    avatar: AVTR2,
    name: 'Peter Snow2',
    Review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem earum quas commodi minima beatae totam voluptatum assumenda sint vel eveniet dolorum in, ipsum quae maxime eius expedita quidem incidunt debitis?suck2'
  },

  {
    id: 3,
    avatar: AVTR3,
    name: 'Peter Snow3',
    Review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem earum quas commodi minima beatae totam voluptatum assumenda sint vel eveniet dolorum in, ipsum quae maxime eius expedita quidem incidunt debitis?suck3'
  }

]



const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'
          // install Swiper modules
          modules={[Pagination, Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}>
        

        {data.map(({id, avatar, name, Review}) => {
            return(
              
              <SwiperSlide key={id} className='testimonial'>
              <div className='client__avatar'>
                <img src={AVTR1} alt="" />
              </div>
                <h5 className='client name'>{name}</h5>
                <small className='client review'>{Review}</small>
              </SwiperSlide>

            )
          }
          
          
          )
        }



      </Swiper>
    </section>

  )
}

export default testimonials