import React from 'react'
import image from '../assets/image-container.png'
import brushImg from '../assets/paintBrush.png' // Adjust path to your brush image

const Section4 = () => {
  return (
    <section 
      className="py-4 py-md-5 px-2 px-lg-3"
      style={{ backgroundColor: '#043873', color: '#ffffff' }}
    >
      <div className="container-fluid py-lg-5">
        <div className="row align-items-center text-center text-lg-start g-4">

          {/* Left div */}
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center align-items-lg-start">
            <h1 className="fw-bold mb-3 heading_1" style={{ color: '#ffffff' }}>
              Use as{' '}
              <span className="brush-highlight-wrapper">
                Extension
                <img 
                  src={brushImg} 
                  alt="" 
                  className="brush-line-bg" 
                />
              </span>
            </h1>
            <p className="lead mb-4 fs-6 fs-md-5" style={{ color: '#e5e7eb' }}>
              Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
            </p>
            <button 
              className="btn btn-lg hero-cta-btn py-2.5 py-sm-3 px-3 px-sm-4 d-inline-flex align-items-center justify-content-center gap-2 text-nowrap"
              style={{
                backgroundColor: '#4F9CF9',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.95rem',
                transition: 'all 0.2s ease-in-out'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#3880e0')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4F9CF9')}
            >
              <span>Let's Go</span>
              <span className="fs-6">&rarr;</span>
            </button>
          </div>

          {/* Right div */}
          <div className="col-12 col-md-8 col-lg-6 text-center text-lg-end mx-auto mx-lg-0 d-flex justify-content-center justify-content-lg-end">
            <img
              src={image}
              alt="Extension illustration"
              className="img-fluid section2-img w-100"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Section4