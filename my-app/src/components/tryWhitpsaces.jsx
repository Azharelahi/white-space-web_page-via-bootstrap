import React from 'react'

const Section12 = () => {
  return (
    <section className="py-5 px-2 px-lg-3 bg-light">
      <div className="container py-lg-5">
        
        {/* Row 1: Heading */}
        <div className="row mb-3 text-center">
          <div className="col-12 col-md-10 col-lg-8 mx-auto">
            <h2 className="fw-bold heading_1">Section 12 Title</h2>
          </div>
        </div>

        {/* Row 2: Paragraph */}
        <div className="row mb-4 text-center">
          <div className="col-12 col-md-10 col-lg-8 mx-auto">
            <p className="paragraph">
              This is the main introductory text for section 12. Describe your key offering, feature, or platform capabilities here clearly for the user.
            </p>
          </div>
        </div>

        {/* Row 3: Button */}
        <div className="row mb-4 text-center">
          <div className="col-12">
            <button className="btn btn-primary btn-lg blue_button">
              Get Started
            </button>
          </div>
        </div>

        {/* Row 4: Paragraph */}
        <div className="row mb-5 text-center">
          <div className="col-12 col-md-8 col-lg-6 mx-auto">
            <p className="paragraph text-muted fs-6">
              Trusted by teams worldwide. Explore our partner integrations and visual tools below.
            </p>
          </div>
        </div>

        {/* Row 5: 3 Columns for Images */}
        <div className="row g-4 align-items-center text-center">
          
          {/* Column 1 */}
          <div className="col-10 col-sm-8 col-md-4 mx-auto mx-md-0 d-flex justify-content-center">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Feature 1"
              className="img-fluid rounded shadow-sm"
            />
          </div>

          {/* Column 2 */}
          <div className="col-10 col-sm-8 col-md-4 mx-auto mx-md-0 d-flex justify-content-center">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Feature 2"
              className="img-fluid rounded shadow-sm"
            />
          </div>

          {/* Column 3 */}
          <div className="col-10 col-sm-8 col-md-4 mx-auto mx-md-0 d-flex justify-content-center">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Feature 3"
              className="img-fluid rounded shadow-sm"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Section12