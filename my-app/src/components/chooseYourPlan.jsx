import React, { useState, useRef, useEffect } from 'react'
import './PricingSection.css'
import paintBrush from '../assets/paintBrush.png'
import checkIconDark from '../assets/Icon.png'  // Icon for dark/featured background
import checkIconLight from '../assets/icon2.png' // Icon for white background

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
  const scrollContainerRef = useRef(null)

  // Function to programmatically scroll to a specific plan card
  const scrollToPlan = (index) => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    const cards = container.querySelectorAll('.pricing_card_wrapper')

    if (cards[index]) {
      const card = cards[index]
      // Calculate scroll position to center or align the card
      const scrollPosition = card.offsetLeft - (container.clientWidth - card.clientWidth) / 2
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
    }
    setActivePlanIndex(index)
  }

  // Handle user scrolling (swipe) and update active dot
  const handleScroll = () => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    const cards = container.querySelectorAll('.pricing_card_wrapper')
    const containerCenter = container.scrollLeft + container.clientWidth / 2

    let closestIndex = 0
    let minDistance = Infinity

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2
      const distance = Math.abs(containerCenter - cardCenter)
      if (distance < minDistance) {
        minDistance = distance
        closestIndex = index
      }
    })

    setActivePlanIndex(closestIndex)
  }

  // Center the featured plan card on mount
  useEffect(() => {
    scrollToPlan(1)
  }, [])

  return (
    <section className="pricing_sec_1024 py-4 py-md-5 px-0 px-sm-2 bg-white overflow-hidden">
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
      `}</style>

      <div className="container py-lg-4 px-3 px-sm-4">
        
        {/* Section Header */}
        <div className="text-center mb-4 mb-md-5 mx-auto" style={{ maxWidth: '650px' }}>
          <h2 className="heading_1 fw-bold mb-2 mb-md-3 text-dark position-relative d-inline-block">
            Choose {' '}
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
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="row g-3 g-md-4 align-items-stretch justify-content-start justify-content-lg-center flex-nowrap flex-lg-wrap overflow-x-auto overflow-x-lg-visible pb-3 pb-lg-0 px-2 px-md-5 px-lg-0 hide-scrollbar pricing_scroll_track"
        >
          {pricingPlans.map((plan, index) => {
            const isFeatured = plan.featured

            return (
              <div 
                key={plan.id} 
                className="col-11 col-md-8 col-lg-4 flex-shrink-0 flex-shrink-lg-1 pricing_card_wrapper"
              >
                <div 
                  className={`card h-100 p-3 p-md-4 border rounded-4 pricing_sec_1024_card_transition ${
                    isFeatured 
                      ? 'pricing_sec_1024_card_dark text-white shadow-lg pricing_sec_1024_featured_card' 
                      : 'bg-white text-dark border-warning-subtle'
                  }`}
                >
                  <div className="card-body d-flex flex-column p-2 p-md-3">
                    
                    {/* Plan Header */}
                    <h4 className="fw-bold mb-1 mb-md-2">{plan.title}</h4>
                    <h2 className={`fw-bold mb-1 mb-md-2 ${isFeatured ? 'text-white' : 'text-dark'}`}>
                      {plan.price}
                    </h2>
                    <p className={`paragraph mt-0 mb-3 mb-md-4 ${isFeatured ? 'text-white-50' : ''}`}>
                      {plan.description}
                    </p>

                    {/* Features List */}
                    <ul className="list-unstyled d-flex flex-column gap-2 gap-md-3 mb-4 mb-md-5 flex-grow-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="d-flex align-items-start gap-2 gap-md-3">
                          <img 
                            src={isFeatured ? checkIconDark : checkIconLight} 
                            alt="check" 
                            style={{ width: '18px', height: '18px', objectFit: 'contain', marginTop: '2px' }}
                          />
                          <span className={`paragraph mt-0 ${isFeatured ? 'text-white' : ''}`} style={{ fontSize: '0.92rem' }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Action Button */}
                    <div className="mt-auto">
                      <button 
                        className={`btn py-2 px-4 rounded-3 fw-semibold d-inline-flex align-items-center justify-content-start gap-2 ${
                          isFeatured 
                            ? 'pricing_sec_1024_btn_blue text-white' 
                            : 'bg-transparent text-dark border border-secondary-subtle'
                        }`}
                        style={{ fontSize: '0.95rem' }}
                      >
                        <span>Get Started</span>
                        <span className="fs-6">&rarr;</span>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile & Medium Carousel Indicators */}
        <div className="d-flex justify-content-center align-items-center gap-2 mt-3 d-lg-none">
          {pricingPlans.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToPlan(index)}
              className={`border-0 rounded-circle pricing_sec_1024_dot_transition ${
                activePlanIndex === index 
                  ? 'pricing_sec_1024_card_dark pricing_sec_1024_dot_active' 
                  : 'pricing_sec_1024_btn_blue opacity-50'
              }`}
              style={{ width: '10px', height: '10px', padding: 0, cursor: 'pointer' }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default PricingSection