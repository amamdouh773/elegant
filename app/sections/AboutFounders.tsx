import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { foundersData } from "../assets/FoundersData";
import FounderCard from "../components/FounderCard";
import { useTranslations } from "next-intl";

const AboutFounders = () => {
  const t = useTranslations("Founders");
  return (
    <div>
      <HeaderComponent text="Elegant Founders" />
      <div className="flex justify-around max-lg:flex-col">
        {foundersData.map((founder) => (
          <FounderCard
            key={founder.name}
            name={t(founder.name)}
            image={founder.image}
            about={t(founder.about)}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutFounders;
