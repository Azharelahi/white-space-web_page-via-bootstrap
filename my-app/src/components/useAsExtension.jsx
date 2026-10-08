import React from 'react'
import image from '../assets/image-container.png'

const Section4 = () => {
  return (
    <section 
      className="py-5 px-2 px-lg-3"
      style={{ backgroundColor: '#043873', color: '#ffffff' }}
    >
      <div className="container-fluid py-lg-5">
        <div className="row align-items-center text-center text-lg-start g-4">

          {/* Left div */}
          <div className="col-12 col-lg-6">
            <h1 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
              Use as extension
            </h1>
            <p className="lead mb-4" style={{ color: '#e5e7eb' }}>
              Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
            </p>
            <button 
              className="btn btn-lg hero-cta-btn"
              style={{
                backgroundColor: '#4F9CF9',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 24px',
                transition: 'all 0.2s ease-in-out'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#3880e0')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4F9CF9')}
            >
              Let's Go <span>&rarr;</span>
            </button>
          </div>

          {/* Right div */}
          <div className="col-12 col-md-8 col-lg-6 text-center text-lg-end mx-auto mx-lg-0 d-flex justify-content-center justify-content-lg-end">
            <img
              src={image}
              alt="Extension illustration"
              className="img-fluid section2-img"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Section4