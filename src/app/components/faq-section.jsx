"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function FAQAndQuoteSection() {
  const [openIndex, setOpenIndex] = useState(null)
  const [scrollY, setScrollY] = useState(0)

  // Track scroll position for rotation effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleItem = (index) => {
    setOpenIndex(prev => prev === index ? null : index)
  }

  const faqItems = [
    { question: "What are your fees?", answer: "For individual its $200 and for couples its $240" },
    { question: "Do you accept insurance?", answer: "No, but a superbill is provided for self-submission." },
    { question: "Are online sessions available?", answer: "Yes—all virtual sessions via Zoom." },
    { question: "What are your office hours?", answer: "In-person: Tue & Thu, 10 AM–6 PM and Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM" },
    { question: "What is your cancellation policy?", answer: "24-hour notice required." },
  ]

  return (
    <>
      <section id="rates" className="scroll-mt-28 bg-[#B5DBDF]">
        <div className="py-[clamp(4rem,6vw,6rem)] px-4 sm:px-6 lg:px-8">
          <div className="max-w-[min(95vw,1100px)] mx-auto">
            <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-bold text-[#1E4145] mb-[clamp(2rem,4vw,4rem)] text-start">
              Frequently Asked Questions
            </h2>
            <hr className="text-[#1E4145]" />
            <div>
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-[#1E4145]">
                  <button
                    onClick={() => toggleItem(index)}
                    className="group w-full py-[clamp(1.5rem,3vw,2rem)] flex justify-between items-center transition-colors duration-300"
                  >
                    <div className="flex-1 flex justify-items-start">
                      <h3 className="text-[clamp(1.25rem,2vw,1.75rem)] font-semibold text-[#1E4145] group-hover:text-[#1E4145]/70 transition-colors duration-300">
                        {item.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`ml-4 w-[clamp(1.5rem,2vw,2rem)] h-[clamp(1.5rem,2vw,2rem)] text-[#1E4145] transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[400px] opacity-100 py-[clamp(1rem,2vw,2rem)]" : "max-h-0 opacity-0 py-0"} pr-0 text-start`}>
                    <p className="text-[#1E4145] leading-relaxed text-[clamp(1rem,1.5vw,1.25rem)]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9F9] py-[clamp(6rem,10vw,10rem)] px-4 sm:px-6 lg:px-8">
          <div className="max-w-[min(95vw,1400px)] mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-[clamp(4rem,6vw,6rem)]">

          {/* Left side SVG - Made much larger */}
          <div className="flex-shrink-0 order-2 md:order-1 md:ml-[-2rem]">
            <svg width="450" height="270" viewBox="0 0 200 120" className="text-[#1E4145]" fill="none">
              <rect x="20" y="60" width="30" height="50" stroke="currentColor" strokeWidth="2" fill="none" />
              <rect x="60" y="40" width="35" height="70" stroke="currentColor" strokeWidth="2" fill="none" />
              <rect x="105" y="20" width="40" height="90" stroke="currentColor" strokeWidth="2" fill="none" />
              <rect x="155" y="50" width="25" height="60" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="35" cy="75" r="2" fill="currentColor" />
              <circle cx="35" cy="90" r="2" fill="currentColor" />
              <circle cx="77" cy="55" r="2" fill="currentColor" />
              <circle cx="77" cy="70" r="2" fill="currentColor" />
              <circle cx="125" cy="35" r="2" fill="currentColor" />
              <circle cx="125" cy="50" r="2" fill="currentColor" />
              <circle cx="167" cy="65" r="2" fill="currentColor" />
              <circle cx="167" cy="80" r="2" fill="currentColor" />
              <circle cx="40" cy="25" r="8" fill="#FCD34D" />
              <line x1="0" y1="110" x2="200" y2="110" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          {/* Right side Quote - Made larger text */}
          <div className="text-center order-1 md:order-2 max-w-[min(90vw,600px)] flex-1">
            <blockquote className="text-[clamp(2rem,3.5vw,3rem)] font-serif font-bold italic text-[#1E4145] leading-tight mb-4">
              "Come to me, all who labor and are heavy laden, and I will give you rest."
            </blockquote>
            <cite className="text-[clamp(1.25rem,2vw,1.75rem)] font-serif font-bold text-[#1E4145] italic">— Matthew 11:28</cite>
          </div>

        </div>
      </section>

      {/* Map section with leaves image positioned on the right */}
      <div className="relative">
        {/* Leaves image positioned on the right side with rotation */}
        <div className="absolute top-0 right-0 z-10 mr-[3vw] mt-[-40px]">
          <Image
            src="/image/leaves.webp"
            alt="Leaves"
            width={100}
            height={100}
            className="w-[80px] h-[80px] object-contain transition-transform duration-75"
            style={{
              transform: `rotate(${scrollY * 0.2}deg)`
            }}
          />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.523501866518!2d-118.45118302482513!3d34.00477102023632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2baf0f6080855%3A0x86d0e86efd5ecc4!2sMaplewood%20Ave%2C%20Los%20Angeles%2C%20CA%2090066%2C%20USA!5e0!3m2!1sen!2sin!4v1751728310105!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 'none' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  )
}