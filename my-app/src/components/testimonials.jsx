import React, { useState, useRef, useEffect } from 'react'
import './Testimonials.css'
import paintBrush from '../assets/paintBrush.png'

const testimonialData = [
  {
    id: 1,
    quote: "Whitespace is designed as a collaboration tool for businesses that is a full project management solution.",
    author: "Oberon Shaw, MCH",
    title: "Head of Talent Acquisition, North America",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    theme: "blue" // Card 1: Blue
  },
  {
    id: 2,
    quote: "Whitespace is designed as a collaboration tool for businesses that is a full project management solution.",
    author: "Oberon Shaw, MCH",
    title: "Head of Talent Acquisition, North America",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    theme: "light" // Card 2: White
  },
  {
    id: 3,
    quote: "Whitespace is designed as a collaboration tool for businesses that is a full project management solution.",
    author: "Oberon Shaw, MCH",
    title: "Head of Talent Acquisition, North America",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    theme: "blue" // Card 3: Blue
  }
]

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef(null)

  // Track active scroll position to update dot indicator
  const handleScroll = () => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const cardWidth = container.clientWidth
    if (cardWidth > 0) {
      const index = Math.round(container.scrollLeft / cardWidth)
      setActiveIndex(index)
    }
  }

  // Programmatically scroll when clicking a dot
  const scrollToSlide = (index) => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const cardWidth = container.clientWidth
    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    })
    setActiveIndex(index)
  }

  return (
    <section className="client_testimonials_5082 py-5 px-3 bg-white">
      <div className="container py-lg-4">

        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark position-relative d-inline-block heading_1">
            What Our{' '}
            <span className="brush-highlight-wrapper">
              Clients Says
              <img 
                src={paintBrush} 
                alt="" 
                className="brush-line-bg" 
              />
            </span>
          </h2>
        </div>

        {/* Scrollable Track */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="client_testimonials_5082_scroll_container d-flex flex-row flex-nowrap pb-2 overflow-x-auto align-items-stretch"
        >
          {testimonialData.map((item) => {
            const isLight = item.theme === 'light'

            return (
              <div 
                key={item.id} 
                className="client_testimonials_5082_card_wrapper flex-shrink-0 px-2"
              >
                <div 
                  className={`card h-100 p-4 rounded-4 client_testimonials_5082_card_transition ${
                    isLight 
                      ? 'client_testimonials_5082_card_white shadow-lg' 
                      : 'client_testimonials_5082_card_blue text-white'
                  }`}
                >
                  <div className="card-body d-flex flex-column justify-content-between p-2">
                    
                    <div>
                      {/* Quote Icon */}
                      <div className="mb-3">
                        <svg 
                          width="52" 
                          height="40" 
                          viewBox="0 0 52 40" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            d="M0 24C0 10.7 8.6 2.5 22.3 0L24.8 5C15.8 7.2 12.3 12 11.7 17.5H23V40H0V24ZM28.5 24C28.5 10.7 37.1 2.5 50.8 0L53.3 5C44.3 7.2 40.8 12 40.2 17.5H51.5V40H28.5V24Z" 
                            fill={isLight ? "#043873" : "#FFFFFF"}
                          />
                        </svg>
                      </div>

                      {/* Testimonial Text */}
                      <p className={`fs-6 lh-base mb-4 ${isLight ? 'text-dark' : 'text-white'}`}>
                        {item.quote}
                      </p>
                    </div>

                    <div>
                      {/* Divider Line */}
                      <hr className={`my-4 ${isLight ? 'client_testimonials_5082_divider_dark' : 'client_testimonials_5082_divider_light'}`} />

                      {/* User Info */}
                      <div className="client_testimonials_5082_user_box d-flex align-items-center gap-3">
                        <img 
                          src={item.avatar} 
                          alt={item.author} 
                          className="rounded-circle object-fit-cover flex-shrink-0"
                          style={{ width: '60px', height: '60px' }}
                        />
                        <div>
                          <h6 className={`fw-bold mb-1 fs-6 ${isLight ? 'text-dark' : 'text-white'}`}>
                            {item.author}
                          </h6>
                          <p className={`mb-0 small ${isLight ? 'text-secondary' : 'client_testimonials_5082_subtext_blue'}`}>
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Dynamic Pagination Indicators (Dots) */}
        <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`border-0 rounded-circle client_testimonials_5082_dot ${
                activeIndex === index 
                  ? 'client_testimonials_5082_dot_active' 
                  : 'client_testimonials_5082_dot_inactive'
              }`}
              style={{ width: '10px', height: '10px', padding: 0 }}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials