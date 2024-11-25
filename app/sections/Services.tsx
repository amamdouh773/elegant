import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { services } from '../assets/services'
import ServiceCard from '../components/ServiceCard'
import { useTranslations } from 'next-intl'

const Services = ({locale}:{locale:string|string[]|undefined}) => {
  const t = useTranslations("Services-section")
  return (
    <div className='flex justify-start items-start flex-col m-14 pb-10'>
      <HeaderComponent text={t("title")} />
      <div className='flex justify-between gap-y-24 flex-wrap'>
      {services.map(service=>
      <ServiceCard key={service.name} icon={service.icon} name={t(service.name)} locale={locale} />
      )
      }
      </div>
    </div>
  )
}

export default Services
