import React from 'react'
import image from '../assets/Apps.png'

const Section10 = () => {
  return (
    <section 
      className="py-4 py-md-5 px-2 px-lg-3"
      style={{ backgroundColor: '#043873', color: '#ffffff' }}
    >
      <div className="container-fluid py-lg-5">
        <div className="row align-items-center text-center text-lg-start g-4">

          {/* Image div */}
          <div className="col-12 col-md-8 col-lg-6 order-1 order-lg-1 mx-auto mx-lg-0 text-center text-lg-start d-flex justify-content-center justify-content-lg-start">
            <img
              src={image}
              alt="Apps integration illustration"
              className="img-fluid section2-img w-100"
            />
          </div>

          {/* Text div */}
          <div className="col-12 col-lg-6 order-2 order-lg-2 d-flex flex-column align-items-center align-items-lg-start">
            <h1 className="fw-bold mb-3 heading_1" style={{ color: '#ffffff' }}>
              Work with Your Favorite Apps Using whitepace
            </h1>
            <p className="lead mb-4 fs-6 fs-md-5" style={{ color: '#e5e7eb' }}>
              Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
            </p>
            <button 
              className="btn btn-lg py-2.5 py-sm-3 px-3 px-sm-4 d-inline-flex align-items-center justify-content-center gap-2 text-nowrap"
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
              <span>Read more</span>
              <span className="fs-6">&rarr;</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Section10