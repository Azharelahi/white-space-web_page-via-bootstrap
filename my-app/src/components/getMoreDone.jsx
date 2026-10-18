import React from 'react'
import image from '../assets/image-container.png'
import bgElement from '../assets/Elemen.png'
import smBgElement from '../assets/sm.png'
import lgBgElement from '../assets/elemenlarge.png' // Imported large background image
import './stylesheets/Section1.css'
import Navbar from './Navbar'

const Section1 = () => {
  return (
    <header 
      className="hero_wrapper_7042"
      style={{
        '--bg-sm': `url(${smBgElement})`,
        '--bg-lg': `url(${bgElement})`,
        '--bg-xl': `url(${lgBgElement})`
      }}
    >
      <Navbar />
      <section className="hero_sec_7042">
        <div className="container-fluid">
          <div className="row align-items-center text-center text-lg-start g-0 d-lg-flex justify-content-lg-around">

            {/* Left Column - Heading, Text & CTA */}
            <div className="col-12 col-lg-6 hero_left_col d-flex flex-column align-items-center align-items-lg-start">
              <h1 className="hero_heading fw-bold mb-0 text-white">
                Get More Done with whitespace
              </h1>
              <p className="hero_text mb-0">
                Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.
              </p>
              <button className="btn hero_sec_7042_btn fw-semibold d-inline-flex align-items-center gap-2 text-nowrap">
                <span>Try Taskey free</span>
                <span>&rarr;</span>
              </button>
            </div>

            {/* Right Column - Foreground Image */}
            <div className="col-12 col-lg-6 hero_right_col d-flex justify-content-center justify-content-lg-end align-items-center">
              <img
                src={image}
                alt="Hero Illustration"
                className="img-fluid hero_sec_7042_img"
              />
            </div>

          </div>
        </div>
      </section>
    </header>
  )
}

export default Section1