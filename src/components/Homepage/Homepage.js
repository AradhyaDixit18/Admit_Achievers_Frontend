import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from '../HeroSection/HeroSection'
import StatsSection from '../StatsSection/ StatsSection'
import ResultSection from '../ResultSection/ResultSection'
import TestimonialSlider from '../TestimonialSlider/TestimonialSlider'
import FAQSection from '../FaqSection/FaqSection'
import Footer from '../Footer/Footer'

const Homepage = () => {
  return (
    <>   
     <Navbar/>
   <HeroSection/>
   <StatsSection/>
   <ResultSection/>
   <TestimonialSlider/>
   <FAQSection/>
   <Footer/>
  </>

  )
}

export default Homepage