"use client"

import { Sparkles } from "lucide-react"
import { Button } from "./ui/button"
import { useState, useEffect } from "react"

export default function AboutSection() {
  const [translateX, setTranslateX] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const testimonials = [
    {
      id: 1,
      name: "Happy Client",
      content: "Client testimonials are coming soon. Please check back later for insights from those who have worked with Serena Blake,  .",
    },
    {
      id: 2,
      name: "Happy Client",
      content: "Client testimonials are coming soon. Please check back later for insights from those who have worked with Serena Blake,  .",
    },
    {
      id: 3,
      name: "Happy Client",
      content: "Client testimonials are coming soon. Please check back later for insights from those who have worked with Serena Blake,  .",
    },
    {
      id: 4,
      name: "Happy Client",
      content: "Client testimonials are coming soon. Please check back later for insights from those who have worked with Serena Blake,  .",
    },
  ]

  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials]

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setTranslateX((prev) => {
          const cardWidth = 382
          const cycleLength = cardWidth * testimonials.length
          const constantSpeed = 0.5
          const newTranslateX = prev + constantSpeed

          if (newTranslateX >= cycleLength) {
            return 0
          }

          return newTranslateX
        })
      }, 16)
      return () => clearInterval(interval)
    }
  }, [isPaused, testimonials.length])

  return (
    <>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1E4145]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-1xl sm:text-2xl lg:text-3xl font-bold text-[#B5DBDF] leading-tight">
                Schedule A<br /> Consultation
              </h2>
            </div>
            <div className="text-center flex-1 max-w-2xl">
              <p className="text-xl sm:text-xl text-[#B5DBDF] leading-relaxed font-bold">
                Serena Blake is currently accepting new clients. Available for online and in-person sessions.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-[#B5DBDF] hover:bg-white hover:text-[#1E4145] px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Healing
              </Button>
            </div>
          </div>
        </div>
      </section>
    
      {/* About Section */}
      <section id="about" className="scroll-mt-28 py-16 px-4 sm:px-6 lg:px-8 bg-[#B5DBDF]">
        <div className="max-w-6xl mx-auto">

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img
                  src="/image/DOCTOR.webp"
                  alt="Serena 's Professional Photo"
                  className="w-[300px] h-[460px] sm:w-[350px] sm:h-[520px] lg:w-[450px] lg:h-[640px] object-cover rounded-3xl border-[6px] border-white lg:mt-35"
                />
                <div className="absolute bottom-4 left-4 bg-black/30 text-white p-4 rounded-lg backdrop-blur-sm">
                  <p className="font-semibold text-base">Serena Blake</p>
                  <p className="text-sm"> </p>
                  <p className="text-sm flex items-center gap-2">
                    <img src="/image/Gold_Star_(with_border).svg" alt="Star" className="w-5 h-5" />
                    Top Rated | 8+ Years Experience
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-center lg:justify-end mb-5 mr-0 lg:mr-8">
                <span className="bg-[#FEF3C7] text-[#1E4145] px-2 py-1 rounded-lg text-[13px] shadow-md tracking-wide">
                  About Serena Blake,   fExperienced Clinical Psychologist in  Los Angeles, VA
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1E4145] mb-8">Hi I'm Serena Blake</h2>
              <div className="space-y-6 text-[#1E4145] leading-relaxed text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
                <p> Dr. Serena Blake is a licensed clinical <strong>psychologist (PsyD)</strong> based in Los Angeles, CA, with eight years of experience and over 500 client sessions.</p>
                <p>She blends evidence-based approaches—like <strong>cognitive-behavioral therapy</strong> and <strong>mindfulness—with compassionate, personalized care</strong> to help you overcome anxiety, strengthen relationships, and heal from trauma.</p>
                <p>Whether you meet in her <strong>Maplewood Drive office</strong> or connect <strong>virtually via Zoom</strong>, Dr. Blake is committed to creating a safe, supportive space for you to thrive.</p>
              </div>
            </div>
          </div>

          {/* Featured In */}
          <div id="media" className="scroll-mt-33 flex flex-col lg:flex-row justify-between items-center lg:items-start mb-16 gap-8 lg:gap-0">
            <div className="w-full lg:w-auto text-center lg:text-left">
              <h3 className="text-3xl font-bold text-[#1E4145]">Featured In</h3>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end items-center gap-12 lg:gap-14">
              {/* Logos */}
              <a href="https://www.psychologytoday.com/us/therapists/Serena -shumaker- Los Angeles-va/112300" target="_blank" rel="noopener noreferrer">
                <img src="/image/featured/pscology today.webp" alt="Psychology Today" className="w-[220px] grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" />
              </a>
              <a href="https://www.theravive.com/therapists/Serena -shumaker.aspx" target="_blank" rel="noopener noreferrer">
                <img src="/image/featured/avive.webp" alt="theravive" className="w-[200px] grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" />
              </a>
              <a href="https://www.christiancounselordirectory.com/Therapist/Serena -Shumaker- _46949" target="_blank" rel="noopener noreferrer">
                <img src="/image/featured/critian.webp" alt="Christian Counselor Directory" className="w-[180px] grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" />
              </a>
              <a href="https://therapist.com/clinician/eleanor-shumaker-26506/" target="_blank" rel="noopener noreferrer">
                <img src="/image/featured/Therapist.com-logo.43d1c2a1.svg" alt="therapist.com" className="w-[180px] grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Testimonials Carousel */}
          
          <div id="testimonials" className="scroll-mt-33 mb-16">
          <div className="flex justify-center lg:justify-start mb-5 mr-0 lg:mr-8">
                <span className="bg-[#FEF3C7] text-[#1E4145] px-2 py-1 rounded-lg text-[13px] shadow-md tracking-wide">
                  Client Success Stories & Testimonials
                </span>
              </div>
            <div className="text-left mb-12">
              <h3 className="text-5xl font-bold text-black mb-4">What Former Clients Say</h3>
              <p className="text-[#1E4145] max-w-3xl leading-relaxed text-[18px] sm:text-[20px]">
                Real experiences from individuals who have worked with Serena Blake,  .
              </p>
            </div>

            {/* Carousel */}
            <div className="relative h-80 overflow-hidden bg-[#B5DBDF] rounded-2xl">
              <div
                className="flex gap-8 h-full items-center"
                style={{
                  transform: `translateX(${translateX}px)`,
                  width: `${infiniteTestimonials.length * 382}px`,
                  marginLeft: `-${382 * testimonials.length}px`,
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {infiniteTestimonials.map((testimonial, index) => (
                  <div key={`${testimonial.id}-${index}`} className="flex-shrink-0 w-[350px]">
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm h-64 flex flex-col transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-105">
                      <div className="mb-6">
                        <span className="text-gray-600 text-sm font-medium">{testimonial.name}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-600 leading-relaxed text-base">{testimonial.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gradient edges */}
              <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#B5DBDF] to-transparent pointer-events-none z-10"></div>
              <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#B5DBDF] to-transparent pointer-events-none z-10"></div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
