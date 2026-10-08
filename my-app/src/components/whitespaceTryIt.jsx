import React from 'react'
import logo from '../assets/Vector.png' // Adjust path to your logo icon/image
import './whitespaceTryIt.css' // Import the CSS file for styling

const Section13 = () => {
  return (
    <footer className="bg-primary-dark text-white py-4 py-md-5 px-3">
      <div className="container py-lg-4">
        <div className="row g-4 text-center text-lg-start justify-content-between">
          
          {/* Column 1: Brand Info */}
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center align-items-lg-start">
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-3">
              <img src={logo} alt="whitespace logo" className="me-2" style={{ height: '26px' }} />
              <span className="fw-bold fs-4 fs-sm-3 text-white">whitespace</span>
            </div>
            <p className="footer-text text-white-50">
              whitespace was created for the new ways we live and work. We make a better workspace around the world.
            </p>
          </div>

          {/* Column 2: Product */}
          <div className="col-12 col-md-6 col-lg-2">
            <h5 className="fw-bold mb-3 text-white">Product</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 footer-links">
              <li><a href="#overview" className="text-warning text-decoration-none">Overview</a></li>
              <li><a href="#pricing" className="text-white-50 text-decoration-none">Pricing</a></li>
              <li><a href="#stories" className="text-white-50 text-decoration-none">Customer stories</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="col-12 col-md-6 col-lg-2">
            <h5 className="fw-bold mb-3 text-white">Resources</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 footer-links">
              <li><a href="#blog" className="text-white-50 text-decoration-none">Blog</a></li>
              <li><a href="#guides" className="text-white-50 text-decoration-none">Guides &amp; tutorials</a></li>
              <li><a href="#help" className="text-white-50 text-decoration-none">Help center</a></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="col-12 col-md-6 col-lg-2">
            <h5 className="fw-bold mb-3 text-white">Company</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 footer-links">
              <li><a href="#about" className="text-white-50 text-decoration-none">About us</a></li>
              <li><a href="#careers" className="text-white-50 text-decoration-none">Careers</a></li>
              <li><a href="#media" className="text-white-50 text-decoration-none">Media kit</a></li>
            </ul>
          </div>

          {/* Column 5: Try It Today CTA */}
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center align-items-lg-start">
            <h4 className="fw-bold mb-3 text-white">Try It Today</h4>
            <p className="footer-text text-white-50 mb-4">
              Get started for free. Add your whole team as your needs grow.
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
            >
              <span>Start today</span>
              <span className="fs-6">&rarr;</span>
            </button>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Section13