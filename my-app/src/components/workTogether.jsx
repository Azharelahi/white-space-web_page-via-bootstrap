import React from 'react'
import image from '../assets/WTI.png'

const Section3 = () => {
  return (
    <section className="py-5 px-2 px-lg-3">
      <div className="container-fluid py-lg-5">
        <div className="row align-items-center text-center text-lg-start g-4">

          {/* Left div: text (shows second on laptops) */}
          <div className="col-12 col-lg-6 order-lg-2">
            <h1 className="fw-bold mb-3">Work Together</h1>
            <p className="lead mb-4">
              With whitepace, share your notes with your colleagues and collaborate on them.
              You can also publish a note to the internet and share the URL with others.
            </p>
            <button className="btn btn-primary btn-lg">Learn More <span>&rarr;</span></button>
          </div>

          {/* Right div: image (shows first on laptops, aligned to the right side of container) */}
          <div className="col-10 col-lg-6 mx-auto mx-lg-0 order-lg-1 text-center text-lg-end d-flex justify-content-center justify-content-lg-end">
            <img
              src={image}
              alt="Section"
              className="img-fluid section2-img"
              style={{ maxWidth: '80%' }} /* Adjust percentage or pixel max-width here */
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Section3