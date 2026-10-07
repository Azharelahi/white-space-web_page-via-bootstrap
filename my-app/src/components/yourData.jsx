import React from 'react'
import image from '../assets/Element.png'

const Section8 = () => {
  return (
    <section className="py-5 px-2 px-lg-3">
      <div className="container-fluid py-lg-5">
        <div className="row align-items-center text-center text-lg-start g-4">

          {/* Text div */}
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <h1 className="fw-bold mb-3">100% your data</h1>
            <p className="lead mb-4">
             The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
            </p>
            <button className="btn btn-primary btn-lg">Get Started</button>
          </div>

          {/* Image div */}
        <div className="col-12 col-lg-6 order-1 order-lg-2 mt-5 mt-lg-0 text-center text-lg-end">
  <img
    src={image}
    alt="Section"
    className="img-fluid section2-img"
  />
</div>

        </div>
      </div>
    </section>
  )
}

export default Section8