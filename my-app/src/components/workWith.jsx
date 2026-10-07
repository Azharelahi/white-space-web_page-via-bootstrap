import React from 'react'
import image from '../assets/Apps.png'

const Section10 = () => {
  return (
    <section className="py-5 px-2 px-lg-3">
      <div className="container-fluid py-lg-5">
        <div className="row align-items-center text-center text-lg-start g-4">

          {/* Image div (shows first on desktops) */}
          <div className="col-12 col-lg-6 order-1 order-lg-1 text-center text-lg-start d-flex justify-content-center justify-content-lg-start">
            <img
              src={image}
              alt="Section"
              className="img-fluid section2-img"
            />
          </div>

          {/* Text div (shows second on desktops) */}
          <div className="col-12 col-lg-6 order-2 order-lg-2">
            <h1 className="fw-bold mb-3">Work with Your Favorite Apps Using whitepace</h1>
            <p className="lead mb-4">
              Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
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
              Read more <span>&rarr;</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Section10