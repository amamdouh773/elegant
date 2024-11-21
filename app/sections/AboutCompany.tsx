import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { aboutData } from '../assets/aboutData'
import AboutCard from '../components/AboutCard'


const AboutCompany = () => {
  return (
    <div className="flex flex-col items-end justify-start">
    <HeaderComponent text="Elegant Visa Canada" style="self-center" />
    {aboutData.map((item) => (
      <AboutCard
        title={item.title}
        description={item.description}
        url={item.url}
        key={item.title}
      />
    ))}
  </div>
  )
}

export default AboutCompany
