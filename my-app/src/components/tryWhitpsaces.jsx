import React from 'react'
import appleLogo from './../assets/apple.png'       // Adjust path if needed
import androidLogo from './../assets/android.png'   // Adjust path if needed
import windowsLogo from './../assets/windows.png'   // Adjust path if needed

const Section12 = () => {
  return (
    <section className="py-5 px-2 px-lg-3" style={{ backgroundColor: "#043873", color: "#ffffff" }}>
      <div className="container py-lg-5 rounded">
        
        {/* Content Wrapper for responsive alignment (Left below 992px, Centered at 992px and above) */}
        <div className="row">
          <div className="col-12 text-start text-lg-center">

            {/* Row 1: Heading */}
            <div className="row mb-3">
              <div className="col-12 col-md-10 col-lg-8 ms-0 me-auto ms-lg-auto me-lg-auto">
                <h2 className="fw-bold heading_1 text-white">Try Whitepace Today</h2>
              </div>
            </div>

            {/* Row 2: Paragraph */}
            <div className="row mb-4">
              <div className="col-12 col-md-10 col-lg-8 ms-0 me-auto ms-lg-auto me-lg-auto">
                <p className="paragraph" style={{ color: '#e5e7eb' }}>
                  Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
                </p>
              </div>
            </div>

            {/* Row 3: Button */}
            <div className="row mb-4">
              <div className="col-12 d-flex justify-content-start justify-content-lg-center">
                <button className="btn btn-primary btn-lg blue_button">
                  Try Taskey <span>&rarr;</span>
                </button>
              </div>
            </div>

            {/* Row 4: Subtitle Paragraph */}
            <div className="row mb-5">
              <div className="col-12 col-md-8 col-lg-6 ms-0 me-auto ms-lg-auto me-lg-auto">
                <p className="paragraph fs-6" style={{ color: '#9ca3af' }}>
                  Trusted by teams worldwide. Explore our partner integrations and visual tools below.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Row 5: Platform Logos Flex Wrapper */}
        <div className="d-flex align-items-center justify-content-start justify-content-lg-center gap-4">
          <img
            src={appleLogo}
            alt="Apple Logo"
            style={{ width: '40px', height: '40px', objectFit: 'contain' }}
            className="img-fluid"
          />
          <img
            src={androidLogo}
            alt="Android Logo"
            style={{ width: '40px', height: '40px', objectFit: 'contain' }}
            className="img-fluid"
          />
          <img
            src={windowsLogo}
            alt="Windows Logo"
            style={{ width: '40px', height: '40px', objectFit: 'contain' }}
            className="img-fluid"
          />
        </div>

      </div>
    </section>
  )
}

export default Section12