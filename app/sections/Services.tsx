import React from 'react'
import Header from '../components/HeaderComponent'
import { services } from '../assets/services'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <div className='flex justify-start items-start flex-col m-14 pb-10'>
      <Header text='What do We Offer' />
      <div className='flex justify-between gap-y-24 flex-wrap'>
      {services.map(service=>
      <ServiceCard key={service.name} icon={service.icon} name={service.name} />
      )
      }
      </div>
    </div>
  )
}

export default Services
