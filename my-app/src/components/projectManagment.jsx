import React from 'react'

import "./stylesheets/section2.css"
import image from './../assets/image-container.png'
import bgElement from './../assets/Elemen.png'
import smBgElement from './../assets/Group.png'
import highlightBg from './../assets/paintBrush.png'
import HeroSection from './LHRI/HeroSection'
const Section2 = () => {
  return (
    <>
      <HeroSection
      bgColor="#f2f2f3"
      textColor="#010101"
      heading={"Project\n Management"}
      accent={{
        src: highlightBg,
        width: '100%',
        top: '60%',
        left: '0',
      }}
      paragraph="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
      buttonText="Try Taskey free"
      imageSrc={image}
      bgLg={bgElement}
      bgSm={smBgElement}
    />
    </>
//     <section className=" px-2 px-lg-3 section2_Container">
//       <div className="container-fluid py-lg-5">
//         <div className="row align-items-center text-center text-lg-start g-4">

//           {/* Left div */}
//           <div className="col-12 col-lg-6 px-md-4 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
//             <h1 className="fw-bold mb-3 mb-lg-0 heading_1">
//               Project <br className="d-none d-sm-block" />
//               <span className="brush-highlight-wrapper">
//                 Management
//                 <img 
//                   src={paintBrush} 
//                   alt="" 
//                   className="brush-line-bg" 
//                 />
//               </span>
//             </h1>
//             <p className="paragraph mb-4 mb-lg-2">
//               Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
//             </p>
          
// <button className="section2_button d-inline-flex align-items-center justify-content-center gap-2 text-nowrap">
//   <span>Get Started</span>
//   <span className="section2_button_arrow">&rarr;</span>
// </button>

//           </div>

//           {/* Right div */}
//           <div className="col-12  col-lg-6 mx-auto mx-lg-0 text-center text-lg-end d-flex justify-content-center justify-content-lg-end image_container">
//             <img
//               src={image}
//               alt="Section"
//               className=" section2-img w-100"
//             />
//           </div>

//         </div>
//       </div>
//     </section>
  )
}

export default Section2