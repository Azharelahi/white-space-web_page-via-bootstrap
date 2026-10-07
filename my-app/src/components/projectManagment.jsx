import React from 'react'
import image from '../assets/image-container.png'

const Section2 = () => {
  return (
    <section className="py-5 px-2 px-lg-3">
      <div className="container-fluid py-lg-5">
        <div className="row align-items-center text-center text-lg-start g-4">

          {/* Left div */}
          <div className="col-12 col-lg-6">
            <h1 className="fw-bold mb-3 heading_1">Project <br /> Management</h1>
            <p className="paragraph mb-4">
              Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
            </p>
            <button 
              className="btn btn-lg mt-4 py-3 blue_button"
              style={{
                backgroundColor: '#4F9CF9',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s ease-in-out'
              }}
            >
              Get Started <span>&rarr;</span>
            </button>
          </div>

          {/* Right div */}
          <div className="col-12 col-md-9 col-lg-6 mx-auto mx-lg-0 text-center text-lg-end d-flex justify-content-center justify-content-lg-end image_container">
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

export default Section2