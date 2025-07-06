"use client"

import { useState, useEffect } from "react"

export default function TestimonialsCarousel() {
  const [translateX, setTranslateX] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const testimonials = [
    {
      id: 1,
      name: "Happy Client",
      content:
        "Client testimonials are coming soon. Please check back later for insights from those who have worked with Serena Blake,  .",
    },
    {
      id: 2,
      name: "Happy Client",
      content:
        "Client testimonials are coming soon. Please check back later for insights from those who have worked with Serena Blake,  .",
    },
    {
      id: 3,
      name: "Happy Client",
      content:
        "Client testimonials are coming soon. Please check back later for insights from those who have worked with Serena Blake,  .",
    },
    {
      id: 4,
      name: "Happy Client",
      content:
        "Client testimonials are coming soon. Please check back later for insights from those who have worked with Serena Blake,  .",
    },
  ]

  // Duplicate testimonials to create infinite loop effect
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials]

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setTranslateX((prev) => {
          // Each card is 350px wide + 32px gap = 382px total
          const cardWidth = 382
          const cycleLength = cardWidth * testimonials.length

          // Constant slow speed - move 0.5px per frame
          const constantSpeed = 0.5
          const newTranslateX = prev + constantSpeed

          // Reset position when we've moved one full set of testimonials
          if (newTranslateX >= cycleLength) {
            return 0
          }

          return newTranslateX
        })
      }, 16) // ~60fps for smooth animation

      return () => clearInterval(interval)
    }
  }, [isPaused, testimonials.length])

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">What Former Clients Say</h2>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Real experiences from individuals who have worked with Serena Blake,  .
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="relative h-80 overflow-hidden">
          {/* Sliding Cards */}
          <div
            className="flex gap-8 h-full items-center"
            style={{
              transform: `translateX(${translateX}px)`,
              width: `${infiniteTestimonials.length * 382}px`,
              marginLeft: `-${382 * testimonials.length}px`,
              transition: isPaused ? "transform 0.3s ease-out" : "none", // Smooth pause/resume
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {infiniteTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${Math.floor(index / testimonials.length)}`}
                className="flex-shrink-0 w-[350px]"
              >
                {/* Card with hover effects */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm h-64 flex flex-col transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-105">
                  {/* Client Name */}
                  <div className="mb-6">
                    <span className="text-gray-600 text-sm font-medium transition-colors duration-300">
                      {testimonial.name}
                    </span>
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1">
                    <p className="text-gray-600 leading-relaxed text-base transition-all duration-300">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient fade effects on edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-teal-100 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-teal-100 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  )
}
