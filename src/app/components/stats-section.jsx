"use client"

import { useState, useEffect, useRef } from "react"

export default function StatsSection() {
  const [yearsCount, setYearsCount] = useState(0)
  const [sessionsCount, setSessionsCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  // Intersection Observer to detect when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          // Reset counters when component goes out of view
          setIsVisible(false)
          setYearsCount(0)
          setSessionsCount(0)
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of component is visible
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Animate counters when component becomes visible
  useEffect(() => {
    if (isVisible) {
      // Start animation after 500ms delay
      const startDelay = setTimeout(() => {
        // Animate years counter to 8
        const yearsInterval = setInterval(() => {
          setYearsCount((prev) => {
            if (prev >= 8) {
              clearInterval(yearsInterval)
              return 8
            }
            return prev + 1
          })
        }, 50) // Increment every 50ms

        // Animate sessions counter to 500
        const sessionsInterval = setInterval(() => {
          setSessionsCount((prev) => {
            if (prev >= 500) {
              clearInterval(sessionsInterval)
              return 500
            }
            return prev + 1000 // Increment by 1000 for faster animation
          })
        }, 30) // Increment every 30ms

        return () => {
          clearInterval(yearsInterval)
          clearInterval(sessionsInterval)
        }
      }, 500)

      return () => clearTimeout(startDelay)
    }
  }, [isVisible])

  // Format number with commas
  const formatNumber = (num) => {
    return num.toLocaleString()
  }

  return (
    <section ref={sectionRef} className="py-19 px-4 sm:px-6 lg:px-8 bg-[#345457]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">
          {/* Years Experience */}
          <div className="text-white">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">{yearsCount}+</div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Years Experience</h3>
            <p className="text-sm sm:text-base text-teal-100 leading-relaxed">
              Providing compassionate and effective Individual and Couples Therapy
            </p>
          </div>

          {/* Individual Client Sessions */}
          <div className="text-white">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">{formatNumber(sessionsCount)}+</div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Individual Client Sessions</h3>
            <p className="text-sm sm:text-base text-teal-100 leading-relaxed">
              Helping individuals and couples heal, grow, and find purpose
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
