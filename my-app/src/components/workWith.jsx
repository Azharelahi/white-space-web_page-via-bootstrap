import React from 'react'
import image from '../assets/Apps.png'
import brushImg from '../assets/paintBrush.png'
import groupBg from '../assets/Group2.png' // Import your background image
import FeatureSection from "./../components/LHRI/FeatureSection.jsx"

const Section10 = () => {
  return (
    <>
      <FeatureSection
        bgColor="#043873"
        textColor="#f7f0f0"
        heading={"Work With your \nFavorite Apps using white space"}
        accent={{ src: brushImg, width: '100%', top: '70%', left: '0' }}
        paragraph="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
        buttonText="Let’s Go"
        imageSrc={image}
        mobileFirst="image"
        bgSm={groupBg}
        bgLg={groupBg}
        bgXl={groupBg}
      />
    </>
  )
}

export default Section10