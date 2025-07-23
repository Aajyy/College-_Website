import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import './index.css';
import Hero from './Components/Hero/Hero';
import Program from './Components/Programs/Program';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='What We Offer' />
        <Program />
        <About />
        <Title subTitle=' Gallery' title='Campus Photos' />
        <Gallery />
        <Title subTitle='Testimonials' title='What Our Students Say' />
        {/* Testimonials component can be added here */}
        <Testimonials />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact/>


      </div>
    </div>

  )
}

export default App;