import React from 'react'
import paintBrush from '../assets/blueacc.png' 
import tabletBg from '../assets/Group5.png'       // Image for 768px - 991px
import laptopBg from '../assets/BACKGROUND.png'       // Import your second image for 992px - 1399px
import desktopBg from '../assets/backgroundlg.png'      // Import your third image for 1400px and up
import "./stylesheets/yourwork.css"

const Section7 = () => {
  return (
    <section 
      className="section7_root py-md-5 px-3 px-lg-3" 
      style={{ 
        backgroundColor: '#043873', 
        color: '#ffffff', 
        paddingTop: "6rem", 
        paddingBottom: "6rem",
        '--sec7-bg-md': `url(${tabletBg})`,
        '--sec7-bg-lg': `url(${laptopBg})`,
        '--sec7-bg-xl': `url(${desktopBg})`
      }}
    >
      <div className="container-fluid py-lg-5">
        <div className="row justify-content-start justify-content-xxl-center">
          <div className="col-12 section7-content-wrapper text-start text-xxl-center d-flex flex-column align-items-start align-items-xxl-center">

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

            <p className="section7-text mb-4 ms-0 me-auto ms-xxl-auto me-xxl-auto" style={{ color: '#e5e7eb', maxWidth: '800px' }}>
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