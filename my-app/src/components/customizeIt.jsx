import React from 'react'
import image from '../assets/image-container.png'
import brushImg from '../assets/paintBrush.png'
import HeroSection from './LHRI/HeroSection'

const Section5 = () => {
  return (
    <HeroSection
      bgColor="#ffffff"
      bgLg={null}
      bgSm={null}
      textColor="#0c0c0c"
      lgLeft="image"
      heading={"Customize it To your needs"}
      accent={{ src: brushImg, width: '100%', top: '70%', left: '0' }}
      paragraph="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
      buttonText="Let’s Go"
      imageSrc={image}
    />
  )
}

export default Section5