import React from 'react'
import image from '../assets/image-container.png'
import brushImg from '../assets/paintBrush.png' // Adjust path to your brush image

const Section5 = () => {
  return (
    <section className="py-4 py-md-5 px-2 px-lg-3">
      <div className="container-fluid py-lg-5">
        <div className="row align-items-center text-center text-lg-start g-4">

          {/* Left div: image */}
          <div className="col-12 col-lg-6 text-center text-lg-start d-flex justify-content-center justify-content-lg-start">
            <img
              src={image}
              alt="Section"
              className="img-fluid section2-img w-100"
            />
          </div>

          {/* Right div: text */}
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center align-items-lg-start">
            <h1 className="heading_1 fw-bold mb-3">
              Customise it <br className="d-none d-sm-block" />to{' '}
              <span className="brush-highlight-wrapper">
                your needs
                <img 
                  src={brushImg} 
                  alt="" 
                  className="brush-line-bg" 
                />
              </span>
            </h1>
            <p className="paragraph mb-4">
              Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
            </p>
            <button 
              className="btn blue_button btn-lg py-2.5 py-sm-3 px-3 px-sm-4 d-inline-flex align-items-center justify-content-center gap-2 text-nowrap"
              style={{
                borderRadius: '8px',
                border: 'none',
                fontSize: '0.95rem'
              }}
            >
              <span>Let’s Go</span>
              <span className="fs-6">&rarr;</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Section5