import React from 'react'
import paintBrush from '../assets/paintBrush.png' // Adjust path if needed

const Section7 = () => {
  return (
    <section 
      className="py-4 py-md-5 px-3 px-lg-3"
      style={{ backgroundColor: '#043873', color: '#ffffff' }}
    >
      <div className="container-fluid py-lg-5">
        <div className="row justify-content-center">
          <div className="col-12 text-center d-flex flex-column align-items-center">

            <h1 className="section7-title fw-bold mb-3" style={{ color: '#ffffff' }}>
              Your work, everywhere{' '}
              <span className="brush-highlight-wrapper">
                you are
                <img 
                  src={paintBrush} 
                  alt="" 
                  className="brush-line-bg" 
                />
              </span>
            </h1>

            <p className="section7-text mb-4 mx-auto" style={{ color: '#e5e7eb', maxWidth: '800px' }}>
              Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
            </p>

            <button 
              className="btn btn-lg py-2.5 py-sm-3 px-3 px-sm-4 d-inline-flex align-items-center justify-content-center gap-2 text-nowrap"
              style={{
                backgroundColor: '#4F9CF9',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.95rem',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease-in-out'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#3880e0')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4F9CF9')}
            >
              <span>Try Taskey</span>
              <span className="fs-6">&rarr;</span>
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Section7