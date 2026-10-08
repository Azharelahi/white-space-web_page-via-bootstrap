import React from 'react'
import image from '../assets/image-container.png'
import bgElement from '../assets/Elemen.png'
import smBgElement from '../assets/sm.png'
import './Section1.css'

const Section1 = () => {
  return (
    <section 
      className="hero_sec_7042 py-4 py-md-5 px-3 px-sm-4 px-lg-3"
      style={{
        '--bg-lg': `url(${bgElement})`,
        '--bg-sm': `url(${smBgElement})`
      }}
    >
      <div className="container-fluid py-lg-5">
        <div className="row align-items-center text-center text-lg-start g-4 g-md-5">

          {/* Left Column - Heading, Text & CTA */}
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center align-items-lg-start gap-3 gap-md-4 mb-2 mb-lg-0">
            <h1 className="fw-bold mb-0 display-6 display-md-4 text-white">
              Get More Done with whitespace
            </h1>
            <p 
              className="lead mb-0 fs-6 fs-md-5"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                color: "#eae5e5"
              }}
            >
              Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.
            </p>
            <button className="btn hero_sec_7042_btn btn-lg fw-semibold px-3 px-sm-4 py-2 py-sm-3 d-inline-flex align-items-center gap-2 mt-2 text-nowrap">
              <span>Try Taskey free</span>
              <span>&rarr;</span>
            </button>
          </div>

          {/* Right Column - Foreground Image */}
          <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-center">
            <img
              src={image}
              alt="Hero Illustration"
              className="img-fluid hero_sec_7042_img w-100"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Section1