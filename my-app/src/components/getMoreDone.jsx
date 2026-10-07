import React from 'react'
import image from '../assets/image-container.png'
import './Section1.css'

const Section1 = () => {
  return (
    <section className="hero_sec_7042 py-5 px-2 px-lg-3 text-white">
      <div className="container-fluid py-lg-5">
        <div className="row align-items-center text-center text-lg-start g-4">

          {/* Left Column - Heading, Text & CTA */}
          <div className="col-12 col-lg-6">
            <h1 className="fw-bold mb-3 display-4">
              Get More Done with whitespace
            </h1>
            <p className="lead mb-4 text-white-50">
              Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.
            </p>
            <button className="btn hero_sec_7042_btn btn-lg fw-semibold px-4 py-3 d-inline-flex align-items-center gap-2">
              Try Whitespace free <span>&rarr;</span>
            </button>
          </div>

          {/* Right Column - Image Container */}
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