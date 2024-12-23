import AboutFounder from '@/components/AboutFounder'
import AboutGettingStarted from '@/components/AboutGettingStarted'
import SubHeader from '@/components/SubHeader'
import WhatPeopleSay from '@/components/WhatPeopleSay'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <SubHeader title="About Us"
        bgImage="/about-us-banner.webp"
        paragraph="Join the Market who is fallen in love with Soft stings. Digital
          marketers in our ageny help in building a loyal audience through the
          power of storytelling" />
      <AboutGettingStarted />
      <AboutFounder />
      <WhatPeopleSay />
     
    
    </div>
  )
}

export default AboutPage
