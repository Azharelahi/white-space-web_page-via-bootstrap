import React from 'react'

const Section14 = () => {
  return (
    <div className="bg-primary-dark text-white border-top border-secondary border-opacity-25 py-4 px-3">
      <div className="container">
        
        {/* Main Flex Wrapper */}
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-lg-between gap-4">
          
          {/* Left Navigation Links & Copyright */}
          <div className="d-flex flex-column flex-md-row align-items-center gap-3 gap-md-4 text-center text-md-start">
            
            {/* Language Selector */}
            <div className="dropdown">
              <button
                className="btn btn-link text-white text-decoration-none dropdown-toggle p-0 border-0 d-flex align-items-center gap-2"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-globe"></i> English
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="#en">English</a></li>
                <li><a className="dropdown-item" href="#es">Spanish</a></li>
                <li><a className="dropdown-item" href="#fr">French</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <a href="#terms" className="text-white text-decoration-none text-nowrap">
              Terms &amp; privacy
            </a>
            <a href="#security" className="text-white text-decoration-none text-nowrap">
              Security
            </a>
            <a href="#status" className="text-white text-decoration-none text-nowrap">
              Status
            </a>

            {/* Copyright */}
            <span className="text-white text-nowrap">
              &copy;2021 Whitespace LLC.
            </span>

          </div>

          {/* Divider line for Mobile & Tablet view */}
          <hr className="w-100 d-lg-none my-1 border-secondary opacity-25" />

          {/* Social Icons */}
          <div className="d-flex align-items-center justify-content-center gap-4">
            <a href="#facebook" className="text-white fs-5 text-decoration-none" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#twitter" className="text-white fs-5 text-decoration-none" aria-label="Twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#linkedin" className="text-white fs-5 text-decoration-none" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Section14