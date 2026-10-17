import React from 'react'
import HeroSection from './LHRI/HeroSection'

import image from './../assets/image-container.png'
import bgElement from './../assets/Elemen.png'
import smBgElement from './../assets/sm.png'
import highlightBg from './../assets/paintBrush.png'

const Testing = () => {
  return (
    <HeroSection
      bgColor="#043873"
      heading={"Get More Done\nwith whitespace"}
      accent={{
        src: highlightBg,
        width: '100%',
        top: '70%',
        left: '0',
      }}
      paragraph="Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks."
      buttonText="Try Taskey free"
      imageSrc={image}
      bgLg={bgElement}
      bgSm={smBgElement}
    />
  )
}

export default Testing