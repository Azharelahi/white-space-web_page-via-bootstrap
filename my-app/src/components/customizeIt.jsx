import React from 'react'
import image from '../assets/image-container.png'

const Section5 = () => {
  return (
    <section className="py-5 px-2 px-lg-3">
      <div className="container-fluid py-lg-5">
        <div className="row align-items-center text-center text-lg-start g-4">

          {/* Left div: image */}
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <img
              src={image}
              alt="Section"
              className="img-fluid section2-img"
            />
          </div>

          {/* Right div: text */}
          <div className="col-12 col-lg-6">
            <h1 className="fw-bold mb-3">Customise it<br />to your needs</h1>
            <p className="lead mb-4">
              Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
            </p>
            <button 
              className="btn btn-lg"
              style={{
                backgroundColor: '#4F9CF9',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s ease-in-out'
              }}
            >
              Let’s Go <span>&rarr;</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Section5