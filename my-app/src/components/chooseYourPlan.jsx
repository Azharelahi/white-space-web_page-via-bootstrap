import React, { useState } from 'react'
import './PricingSection.css'
import paintBrush from '../assets/paintBrush.png'
const pricingPlans = [
  {
    id: 'free',
    title: 'Free',
    price: '$0',
    description: 'Capture ideas and find them quickly',
    featured: false,
    features: [
      'Sync unlimited devices',
      '10 GB monthly uploads',
      '200 MB max. note size',
      'Customize Home dashboard and access extra widgets',
      'Connect primary Google Calendar account',
      'Add due dates, reminders, and notifications to your tasks'
    ]
  },
  {
    id: 'personal',
    title: 'Personal',
    price: '$11.99',
    description: 'Keep home and family on track',
    featured: true,
    features: [
      'Sync unlimited devices',
      '10 GB monthly uploads',
      '200 MB max. note size',
      'Customize Home dashboard and access extra widgets',
      'Connect primary Google Calendar account',
      'Add due dates, reminders, and notifications to your tasks'
    ]
  },
  {
    id: 'organization',
    title: 'Organization',
    price: '$49.99',
    description: 'Capture ideas and find them quickly',
    featured: false,
    features: [
      'Sync unlimited devices',
      '10 GB monthly uploads',
      '200 MB max. note size',
      'Customize Home dashboard and access extra widgets',
      'Connect primary Google Calendar account',
      'Add due dates, reminders, and notifications to your tasks'
    ]
  }
]

const PricingSection = () => {
  const [activePlanIndex, setActivePlanIndex] = useState(1)

  return (
    <section className="pricing_sec_1024 py-5 px-3 bg-white">
      <div className="container py-lg-4">
        
        {/* Section Header */}
        <div className="text-center mb-5 mx-auto" style={{ maxWidth: '650px' }}>
         <h2 className="heading_1 fw-bold mb-3 text-dark position-relative d-inline-block">
  Choose{' '}
  <span className="brush-highlight-wrapper">
    Your Plan
    <img 
      src={paintBrush} 
      alt="" 
      className="brush-line-bg" 
    />
  </span>
</h2>
          <p className="paragraph mt-0">
            Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="row g-4 align-items-center justify-content-center">
          {pricingPlans.map((plan, index) => {
            const isFeatured = plan.featured
            const mobileDisplayClass = index === activePlanIndex ? 'd-block' : 'd-none d-md-block'

            return (
              <div 
                key={plan.id} 
                className={`col-12 col-md-6 col-lg-4 ${mobileDisplayClass}`}
              >
                <div 
                  className={`card h-100 p-4 border rounded-4 pricing_sec_1024_card_transition ${
                    isFeatured 
                      ? 'pricing_sec_1024_card_dark text-white shadow-lg pricing_sec_1024_featured_card' 
                      : 'bg-white text-dark border-warning-subtle'
                  }`}
                >
                  <div className="card-body d-flex flex-column p-2">
                    
                    {/* Plan Header */}
                    <h4 className="fw-bold mb-2">{plan.title}</h4>
                    <h2 className={`fw-bold mb-2 ${isFeatured ? 'text-warning' : 'text-dark'}`}>
                      {plan.price}
                    </h2>
                    <p className={`paragraph mt-0 mb-4 ${isFeatured ? 'text-white-50' : ''}`}>
                      {plan.description}
                    </p>

                    {/* Features List */}
                    <ul className="list-unstyled d-flex flex-column gap-3 mb-5 flex-grow-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="d-flex align-items-start gap-3">
                          <i 
                            className={`bi bi-check-circle-fill fs-5 mt-n1 ${
                              isFeatured ? 'text-warning' : 'text-dark'
                            }`}
                          ></i>
                          <span className={`paragraph mt-0 ${isFeatured ? 'text-white' : ''}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Action Button */}
                    <div className="mt-auto">
                      <button 
                        className={`btn blue_button btn-lg w-100 py-3 rounded-3 fw-semibold ${
                          isFeatured 
                            ? 'pricing_sec_1024_btn_blue text-white' 
                            : 'btn-outline-warning border-warning-subtle'
                        }`}
                        style={{ border: 'none' }}
                      >
                        Get Started <span>&rarr;</span>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile Carousel Indicators */}
        <div className="d-flex justify-content-center align-items-center gap-2 mt-4 d-md-none">
          {pricingPlans.map((_, index) => (
            <button
              key={index}
              onClick={() => setActivePlanIndex(index)}
              className={`border-0 rounded-circle pricing_sec_1024_dot_transition ${
                activePlanIndex === index 
                  ? 'pricing_sec_1024_card_dark pricing_sec_1024_dot_active' 
                  : 'pricing_sec_1024_btn_blue opacity-50'
              }`}
              style={{ width: '12px', height: '12px', padding: 0 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default PricingSection