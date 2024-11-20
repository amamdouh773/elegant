import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Stories from '../sections/Stories'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Stories />
      <Footer />
    </div>
  )
}

export default HomePage
