import React from 'react'
import logo from '../assets/hero.png' // Adjust path to your logo asset

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-primary-dark py-3 px-3 px-lg-4">
      <div className="container-fluid">
        
        {/* Brand Logo */}
        <a className="navbar-brand d-flex align-items-center gap-2 me-auto me-xl-5" href="#">
          <img src={logo} alt="whitespace logo" style={{ height: '32px' }} />
          <span className="fw-bold fs-3 text-white">whitespace</span>
        </a>

        {/* Action Buttons visible on medium/laptop screens (lg to xl) */}
        <div className="d-none d-lg-flex d-xl-none align-items-center gap-3 me-3">
          <button className="btn btn-login fw-semibold px-4 py-2">
            Login
          </button>
          <button className="btn btn-primary-blue text-white fw-semibold px-3 py-2 d-flex align-items-center gap-2">
            Try Whitespace free <span>&rarr;</span>
          </button>
        </div>

        {/* Mobile / Tablet Hamburger Toggle */}
        <button
          className="navbar-toggler border-0 shadow-none px-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          
          {/* Navigation Links with Dropdowns */}
          <ul className="navbar-nav mx-auto mb-3 mb-xl-0 gap-xl-4 align-items-start align-items-xl-center pt-3 pt-xl-0">
            
            {/* Products Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white fw-medium fs-5 fs-xl-6"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="#overview">Overview</a></li>
                <li><a className="dropdown-item" href="#features">Features</a></li>
                <li><a className="dropdown-item" href="#solutions">Solutions</a></li>
              </ul>
            </li>

            {/* Solutions Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white fw-medium fs-5 fs-xl-6"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Solutions
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="#teams">For Teams</a></li>
                <li><a className="dropdown-item" href="#enterprise">Enterprise</a></li>
              </ul>
            </li>

            {/* Resources Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white fw-medium fs-5 fs-xl-6"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="#blog">Blog</a></li>
                <li><a className="dropdown-item" href="#guides">Guides</a></li>
                <li><a className="dropdown-item" href="#help">Help Center</a></li>
              </ul>
            </li>

            {/* Pricing Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white fw-medium fs-5 fs-xl-6"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pricing
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="#plans">Plans</a></li>
                <li><a className="dropdown-item" href="#faq">FAQ</a></li>
              </ul>
            </li>

          </ul>

          {/* Action Buttons for Mobile/Tablet collapse & Desktop view */}
          <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-xl-center gap-3 mt-3 mt-xl-0 d-lg-none d-xl-flex">
            <button className="btn btn-login fw-semibold px-4 py-2">
              Login
            </button>
            <button className="btn btn-primary-blue text-white fw-semibold px-4 py-2 d-flex align-items-center justify-content-center gap-2">
              Try Whitespace free <span>&rarr;</span>
            </button>
          </div>

        </div>

      </div>
    </nav>
  )
}

export default Navbar