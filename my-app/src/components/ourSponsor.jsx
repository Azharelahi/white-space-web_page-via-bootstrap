import React from 'react'
import './Sponsors.css'
import microsoftLogo from '../assets/Microsoft.png'
import paintBrush from '../assets/paintBrush.png' // Adjust path if needed

const sponsorsData = [
  {
    name: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    height: '38px'
  },
  {
    name: 'Microsoft',
    logo: microsoftLogo,
    height: '32px'
  },
  {
    name: 'Slack',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
    wordmark: 'slack',
    isSlack: true,
    height: '36px'
  },
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    height: '34px'
  }
]

const Sponsors = () => {
  return (
    <section className="sponsors_sec_9083 py-5 px-3 bg-white">
      <div className="container py-lg-4">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark position-relative d-inline-block">
            Our{' '}
            <span className="brush-highlight-wrapper">
              sponsors
              <img 
                src={paintBrush} 
                alt="" 
                className="brush-line-bg" 
              />
            </span>
          </h2>
        </div>

        {/* Sponsor Logos Container */}
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between justify-content-lg-around gap-5 gap-lg-4">
          {sponsorsData.map((sponsor, index) => (
            <div 
              key={index} 
              className="sponsors_sec_9083_logo_wrapper d-flex align-items-center justify-content-center"
            >
              {sponsor.isSlack ? (
                /* Custom Slack Combo SVG to render crisp logo + text */
                <div className="d-flex align-items-center gap-2">
                  <img 
                    src={sponsor.logo} 
                    alt="Slack Icon" 
                    style={{ height: '36px', width: 'auto' }} 
                  />
                  <span className="fw-bold fs-2 text-dark tracking-tight">slack</span>
                </div>
              ) : (
                <img 
                  src={sponsor.logo} 
                  alt={`${sponsor.name} logo`} 
                  className="img-fluid sponsors_sec_9083_img"
                  style={{ maxHeight: sponsor.height, width: 'auto' }}
                />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Sponsors