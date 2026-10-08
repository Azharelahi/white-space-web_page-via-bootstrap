import React from 'react'
import image from '../assets/WTI.png'
import brushImg from '../assets/paintBrush.png' // Adjust path to your brush image

const Section3 = () => {
  return (
    <section className="py-4 py-md-5 px-2 px-lg-3">
      <div className="container-fluid py-lg-5">
        <div className="row align-items-center text-center text-lg-start g-4">

          {/* Left div: text (shows second on laptops) */}
          <div className="col-12 col-lg-6 order-lg-2 d-flex flex-column align-items-center align-items-lg-start">
            <h1 className="heading_1 fw-bold mb-3">
              Work{' '}
              <span className="brush-highlight-wrapper">
                Together
                <img 
                  src={brushImg} 
                  alt="" 
                  className="brush-line-bg" 
                />
              </span>
            </h1>
            <p className="paragraph mb-4">
              With whitepace, share your notes with your colleagues and collaborate on them.
              You can also publish a note to the internet and share the URL with others.
            </p>
            <button 
              className="btn blue_button btn-lg py-2.5 py-sm-3 px-3 px-sm-4 d-inline-flex align-items-center justify-content-center gap-2 text-nowrap"
              style={{
                borderRadius: '8px',
                border: 'none',
                fontSize: '0.95rem'
              }}
            >
              <span>Learn More</span>
              <span className="fs-6">&rarr;</span>
            </button>
          </div>

          {/* Right div: image (shows first on laptops) */}
          <div className="col-12 col-md-7 col-lg-6 mx-auto mx-lg-0 order-lg-1 text-center text-lg-end d-flex justify-content-center justify-content-lg-end">
            <img
              src={image}
              alt="Section"
              className="img-fluid section2-img w-100"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Section3