import React from 'react'

import image from './../assets/Element.png'
import bgElement from './../assets/Elemen.png'
import smBgElement from './../assets/sm.png'
import highlightBg from './../assets/paintBrush.png'
import HeroSection from './LHRI/HeroSection'


const Section8 = () => {
  return (
    <>
             <HeroSection
      bgColor="#f3f5f7"
      textColor="#0b0b0b"
       lgLeft="image"
      heading={"100% Your Data"}
      accent={{
        src: highlightBg,
        width: '100%',
        top: '60%',
        left: '0',
      }}
      paragraph="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
"
      buttonText="Read More"
      imageSrc={image}
      bgLg={bgElement}
      bgSm={smBgElement}
    />
    </>
    // <section className="py-4 py-md-5 px-2 px-lg-3">
    //   <div className="container-fluid py-lg-5">
    //     <div className="row align-items-center text-center text-lg-start g-4">

    //       {/* Text div */}
    //       <div className="col-12 col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-center align-items-lg-start">
    //         <h1 className="heading_1 fw-bold mb-3">
    //           100%{' '}
    //           <span className="brush-highlight-wrapper">
    //             your data
    //             <img 
    //               src={paintBrush} 
    //               alt="" 
    //               className="brush-line-bg" 
    //             />
    //           </span>
    //         </h1>
    //         <p className="paragraph mb-4">
    //           The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
    //         </p>
    //         <button 
    //           className="btn blue_button btn-lg py-2.5 py-sm-3 px-3 px-sm-4 d-inline-flex align-items-center justify-content-center gap-2 text-nowrap"
    //           style={{
    //             borderRadius: '8px',
    //             border: 'none',
    //             fontSize: '0.95rem'
    //           }}
    //         >
    //           <span>Get Started</span>
    //           <span className="fs-6">&rarr;</span>
    //         </button>
    //       </div>

    //       {/* Image div */}
    //       <div className="col-12 col-lg-6 order-1 order-lg-2 mt-3 mt-lg-0 text-center text-lg-end d-flex justify-content-center justify-content-lg-end">
    //         <img
    //           src={image}
    //           alt="Section"
    //           className="img-fluid section2-img w-100"
    //         />
    //       </div>

    //     </div>
    //   </div>
    // </section>
  )
}

export default Section8