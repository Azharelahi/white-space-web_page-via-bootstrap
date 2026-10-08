import React from 'react'
import image from '../assets/image-container.png'
import paintBrush from '../assets/paintBrush.png' // Adjust path if needed

const Section2 = () => {
  return (
    <section className="py-4 py-md-5 px-2 px-lg-3">
      <div className="container-fluid py-lg-5">
        <div className="row align-items-center text-center text-lg-start g-4">

          {/* Left div */}
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center align-items-lg-start">
            <h1 className="fw-bold mb-3 heading_1">
              Project <br className="d-none d-sm-block" />
              <span className="brush-highlight-wrapper">
                Management
                <img 
                  src={paintBrush} 
                  alt="" 
                  className="brush-line-bg" 
                />
              </span>
            </h1>
            <p className="paragraph mb-4">
              Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
            </p>
            <button 
              className="btn btn-lg py-2.5 py-sm-3 px-3 px-sm-4 blue_button d-inline-flex align-items-center justify-content-center gap-2 text-nowrap"
              style={{
                backgroundColor: '#4F9CF9',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s ease-in-out',
                fontSize: '0.95rem'
              }}
            >
              <span>Get Started</span>
              <span className="fs-6">&rarr;</span>
            </button>
          </div>

          {/* Right div */}
          <div className="col-12 col-md-9 col-lg-6 mx-auto mx-lg-0 text-center text-lg-end d-flex justify-content-center justify-content-lg-end image_container">
            <img
              src={image}
              alt="Section"
              className="img-fluid section2-img w-100"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Section2