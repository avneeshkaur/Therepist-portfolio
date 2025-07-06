"use client"

import { useState, useEffect } from "react"
import { Phone, Sparkles } from "lucide-react"
import Footer from "../components/footer"


// Mock Button component since we don't have the actual one
const Button = ({ children, className, ...props }) => (
  <button className={className} {...props}>
    {children}
  </button>
)


export default function Service() {
  // Contact form state - Updated with all required fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "", // This is "What brings you here?"
    preferredTime: "",
    agreeToContact: false,
  })

  // Form validation and submission state
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Testimonials carousel state
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

  // Contact form handlers - Updated with validation
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  // Form validation function
  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number"
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Please tell us what brings you here"
    }

    // Preferred time validation
    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = "Preferred contact time is required"
    }

    // Checkbox validation
    if (!formData.agreeToContact) {
      newErrors.agreeToContact = "You must agree to be contacted"
    }

    return newErrors
  }

  // Updated submit handler with validation
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formErrors = validateForm()
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      setIsSubmitting(false)
      return
    }

    try {
      console.log("Form submitted:", formData)
      // Add your form submission logic here
      
      // Reset form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        preferredTime: "",
        agreeToContact: false,
      })
      setErrors({})
      
      // Show success message
      alert("Thank you! Your message has been sent successfully.")
      
    } catch (error) {
      console.error("Form submission error:", error)
      alert("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleGoogleMapsClick = () => {
    // You can implement navigation to maps here
    console.log("Navigate to maps")
  }

  // Testimonials carousel effect
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

    
    

    useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        setFormData((prev) => ({
          ...prev,
          name: storedUser.name || "",
          email: storedUser.email || "",
        }));
      }
    }, []);

  return (
    <div>
      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Profile and Content */}
            <div className="space-y-8">
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <img
                    src="/image/DOCTOR.webp"
                    alt="Serena Blake Professional Photo"
                    className="w-[300px] h-[350px] object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#1E4145] mb-6 leading-tight">
                  Hi, I'm Serena Blake, Los Angels CA
                </h2>
                <p className="text-[#1E4145] leading-relaxed text-lg">
                Dr. Serena Blake (PsyD) is a licensed clinical psychologist in <strong>Los Angeles</strong> with <strong>8+ years</strong> of experience and <strong>500+ client sessions</strong>. She uses evidence-based therapies like CBT and mindfulness to help clients overcome anxiety, improve relationships, and heal from trauma. Sessions are available in her <strong>Maplewood Drive</strong> office or <strong>online via Zoom.</strong>
                </p>
              </div>
            </div>

            {/* Right Side - Call Button and Contact Form */}
            <div className="space-y-6">
              {/* Call Button and OR */}
              <div className="flex flex-col items-center gap-4">
                <Button className="bg-[#B5DBDF] text-[#1E4145] hover:bg-[#1E4145] hover:text-[#B5DBDF] px-8 py-3 text-lg font-semibold transition-all duration-300 flex items-center gap-2 rounded-lg">
                  <Phone className="w-5 h-5" />
                  Call Serena Blake
                </Button>
                <span className="text-[#1E4145] text-lg font-medium">OR</span>
              </div>

              {/* Contact Form - Updated with all required fields */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-black max-w-md mx-auto">
                <div className="text-center mb-4">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">Get In Touch</h2>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Simply fill out the brief fields below and Serena will be in touch with you soon, usually within one
                    business day. This form is safe, private, and completely free.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className={`w-full h-10 px-3 border rounded-sm focus:ring-1 focus:ring-[#1E4145] focus:border-[#1E4145] outline-none transition-colors placeholder-gray-600 text-sm text-black ${
                        errors.name ? "border-red-500" : "border-black"
                      }`}
                      required
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className={`w-full h-10 px-3 border rounded-sm focus:ring-1 focus:ring-[#1E4145] focus:border-[#1E4145] outline-none transition-colors placeholder-gray-600 text-sm text-black ${
                        errors.email ? "border-red-500" : "border-black"
                      }`}
                      required
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(323) 555-0192"
                      className={`w-full h-10 px-3 border rounded-sm focus:ring-1 focus:ring-[#1E4145] focus:border-[#1E4145] outline-none transition-colors placeholder-gray-600 text-sm text-black ${
                        errors.phone ? "border-red-500" : "border-black"
                      }`}
                      required
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  {/* What brings you here Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
                      What brings you here? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your needs or concerns..."
                      rows={3}
                      className={`w-full px-3 py-2 border rounded-sm focus:ring-1 focus:ring-[#1E4145] focus:border-[#1E4145] outline-none transition-colors resize-vertical placeholder-gray-600 text-sm text-black ${
                        errors.message ? "border-red-500" : "border-black"
                      }`}
                      required
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {/* Preferred Time Field */}
                  <div>
                    <label htmlFor="preferredTime" className="block text-xs font-medium text-gray-700 mb-1">
                      Preferred time to reach you *
                    </label>
                    <input
                      type="text"
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      placeholder="e.g., Weekday mornings, evenings after 6pm"
                      className={`w-full h-10 px-3 border rounded-sm focus:ring-1 focus:ring-[#1E4145] focus:border-[#1E4145] outline-none transition-colors placeholder-gray-600 text-sm text-black ${
                        errors.preferredTime ? "border-red-500" : "border-black"
                      }`}
                      required
                    />
                    {errors.preferredTime && <p className="text-red-500 text-xs mt-1">{errors.preferredTime}</p>}
                  </div>

                  {/* Agreement Checkbox */}
                  <div className="flex items-start gap-2 mt-4">
                    <input
                      type="checkbox"
                      id="agreeToContact"
                      name="agreeToContact"
                      checked={formData.agreeToContact}
                      onChange={handleInputChange}
                      className={`mt-1 h-4 w-4 text-[#1E4145] border-gray-300 rounded focus:ring-[#1E4145] ${
                        errors.agreeToContact ? "border-red-500" : ""
                      }`}
                      required
                    />
                    <label htmlFor="agreeToContact" className="text-xs text-gray-700">
                      I agree to be contacted by Serena Blake via phone, email, or text message regarding my inquiry. *
                    </label>
                  </div>
                  {errors.agreeToContact && <p className="text-red-500 text-xs mt-1">{errors.agreeToContact}</p>}

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`border border-[#1E4145] border-3 w-full bg-[#1E4145] hover:bg-white text-[#B5DBDF] hover:text-[#1E4145] py-2 mt-4 rounded-sm font-medium transition-colors text-sm ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>

                  {/* Legal Text */}
                  <p className="text-xs text-gray-500 leading-relaxed mt-3">
                    By submitting, you confirm you are 18+ and agree to our{" "}
                    <a href="#" className="text-[#1E4145] underline">
                      Privacy Policy & ToS
                    </a>{" "}
                    and to receive emails & texts from Serena Blake.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
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
            <div className="relative h-80 overflow-hidden bg-white rounded-2xl">
              <div
                className="flex gap-8 h-full items-center"
                style={{
                  transform: `translateX(${translateX}px)`,
                  width: `${infiniteTestimonials.length * 382}px`,
                  marginLeft: `-${382 * testimonials.length}px`,
                  transition: isPaused ? "transform 0.3s ease-out" : "none", // Smooth pause/resume
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {infiniteTestimonials.map((testimonial, index) => (
                  <div key={`${testimonial.id}-${index}`} className="flex-shrink-0 w-[350px]">
                    <div className="bg-[#B5DBDF] backdrop-blur-sm rounded-2xl p-8 shadow-sm h-64 flex flex-col transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-105">
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
              <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
              <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}