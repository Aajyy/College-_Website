import React from 'react'
import './About.css'
import aboutImage from '../../assets/about.png';
import play_Icon from '../../assets/play-icon.png';

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={aboutImage} alt="" className='about-image' />
        <img src={play_Icon} alt="" className='play-icon' />

      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomarrow's Leader Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quisquam similique culpa exercitationem. Rerum unde atque, tenetur eligendi molestiae minus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsa sequi magnam expedita, nihil provident ipsum corrupti. Molestias, et aspernatur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus quaerat eos repudiandae dolores, saepe autem blanditiis, nulla veniam labore enim. Id eligendi dicta nisi.</p>

      </div>

    </div>
  )
}

export default About;