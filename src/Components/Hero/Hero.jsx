import React from 'react';
import './Hero.css';
import darkarrow from '../../assets/dark-arrow.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import hero1 from '../../assets/hero.png';
import hero2 from '../../assets/hero.png';
import hero3 from '../../assets/hero.png';

const slides = [
  {
    bgImage: hero1,
    title: 'We Ensure better education for a better world',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    bgImage: hero2,
    title: 'Unlock your potential with quality learning',
    desc: 'Experience the best online and offline courses designed for you.',
  },
  {
    bgImage: hero3,
    title: 'Join a vibrant learning community',
    desc: 'Grow, network, and achieve your dreams with us.',
  },
];

const Hero = () => {
  return (
    <Swiper
      className='hero-swiper'
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 4000 }}
      loop
      pagination={{ clickable: true }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className='hero'
            style={{
              backgroundImage: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${slide.bgImage})`,
            }}
          >
            <div className='hero-text'>
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
              <button className='btn'>
                Explore more <img src={darkarrow} alt='' />
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
