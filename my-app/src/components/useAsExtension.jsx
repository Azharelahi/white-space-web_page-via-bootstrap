import React from 'react'
import image from '../assets/image-container.png'

const Section4 = () => {
  return (
    <section className="py-5 px-2 px-lg-3">
      <div className="container-fluid py-lg-5">
        <div className="row align-items-center text-center text-lg-start g-4">

          {/* Left div */}
          <div className="col-12 col-lg-6">
            <h1 className="fw-bold mb-3">Your Heading Here</h1>
            <p className="lead mb-4">
              Your paragraph goes here. Keep it short and clear.
            </p>
            <button className="btn btn-primary btn-lg">Get Started</button>
          </div>

          {/* Right div */}
          <div className="col-12 col-lg-6 text-center text-lg-end">
            <img
              src={image}
              alt="Section"
              className="img-fluid section2-img"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Section4