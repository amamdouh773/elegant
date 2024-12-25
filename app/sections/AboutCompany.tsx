import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { aboutData } from '../assets/aboutData'
import AboutCard from '../components/AboutCard'
import { useTranslations } from 'next-intl'


const AboutCompany = () => {
  const t = useTranslations("About-Page");
  return (
    <div className="flex flex-col items-end justify-start ltr max-lg:justify-center max-lg:items-center">
    <HeaderComponent text={t("title")} style="self-center" />
    {aboutData.map((item) => (
      <AboutCard
        title={t(item.title)}
        description={t(item.description)}
        url={item.url}
        key={item.title}
      />
    ))}
  </div>
  )
}

export default AboutCompany
