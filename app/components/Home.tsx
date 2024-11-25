import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Stories from '../sections/Stories'

const HomePage = ({locale}:{locale:string}) => {
  return (
    <div>
      <Hero locale={locale}/>
      <About locale={locale} />
      <Services locale={locale} />
      <Stories locale={locale} />
    </div>
  )
}

export default HomePage
