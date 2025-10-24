import AgencySection from "@/components/AgencySection";
import BusinessGoals from "@/components/BusinessGoals";
import DigitalAgency from "@/components/DigitalAgency";
import Service from "@/components/Service";
import ExperianceNumber from "@/components/ExperianceNumber";
import GetInTouch from "@/components/GetInTouch";
import AddValue from "@/components/AddValue";
import WhatPeopleSay from "@/components/WhatPeopleSay";
import News from "@/components/News";
import FormWithCard from "@/components/FormWithCard";
import AutoServicesCarousel from "@/components/Carousel";

export const metadata = {
  title: {
    absolute: "Digital Marketing | Mobile App Development | Payroll Outsourcing | Web Development |",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <AutoServicesCarousel />
      <DigitalAgency />
      <Service />
      <AgencySection />
      <BusinessGoals />
      <ExperianceNumber />
      <GetInTouch />
      <AddValue />
      <WhatPeopleSay />
      <News />
      <FormWithCard />
    </main>
  );
}

