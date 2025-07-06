"use client"

import { useState } from "react"
import { Phone } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ContactSection({ hideNote = false }) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "", // This will be "What brings you here?"
    preferredTime: "",
    agreeToContact: false,
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

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
      
      // Show success message or redirect
      alert("Thank you! Your message has been sent successfully.")
      
    } catch (error) {
      console.error("Form submission error:", error)
      alert("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleGoogleMapsClick = () => {
    router.push("/maps")
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#B5DBDF]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Office Information */}
          <div className="space-y-12">
            {/* Our Office */}
            <div>
              <h2 className="text-4xl font-semibold text-[#1E4145] mb-4">Our Office</h2>
              <div className="text-[#1E4145] mb-1 text-xl">
                <p> 1287 Maplewood Drive</p>
                <p> Los Angeles</p>
                <p> CA 90026</p>
              </div>
              <button 
                onClick={handleGoogleMapsClick}
                className="bg-[#1E4145] hover:bg-[#1E4145] text-[#B5DBDF] px-4 py-2 rounded hover:cursor-pointer"
              >
                Google Maps
              </button>
            </div>

            {/* Hours */}
            <div>
              <h2 className="text-3xl font-bold text-[#1E4145] mb-4">Hours</h2>
              <div className="text-[#1E4145] text-xl">
                <p>In-person: Tue & Thu, 10 AM–6 PM</p>
                <p>Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-3xl font-bold text-[#1E4145] mb-4">Contact</h2>
              <div className="flex items-center gap-2 text-[#1E4145] text-xl">
                <Phone className="w-5 h-5" />
                <span>(323) 555-0192</span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
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
                  className={`w-full h-10 px-3 border rounded-sm focus:ring-1 focus:ring-[#1E4145] focus:border-[#1E4145] outline-none transition-colors placeholder-gray-600 text-sm ${
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
                  className={`w-full h-10 px-3 border rounded-sm focus:ring-1 focus:ring-[#1E4145] focus:border-[#1E4145] outline-none transition-colors placeholder-gray-600 text-sm ${
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
                  className={`w-full h-10 px-3 border rounded-sm focus:ring-1 focus:ring-[#1E4145] focus:border-[#1E4145] outline-none transition-colors placeholder-gray-600 text-sm ${
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
                  className={`w-full px-3 py-2 border rounded-sm focus:ring-1 focus:ring-[#1E4145] focus:border-[#1E4145] outline-none transition-colors resize-vertical placeholder-gray-600 text-sm ${
                    errors.message ? "border-red-500" : "border-black"
                  }`}
                  required
                ></textarea>
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
                  className={`w-full h-10 px-3 border rounded-sm focus:ring-1 focus:ring-[#1E4145] focus:border-[#1E4145] outline-none transition-colors placeholder-gray-600 text-sm ${
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

        {/* Insurance Note - Conditionally rendered */}
        {!hideNote && (
          <div className="mt-12 bg-white rounded-xl p-6 border border-black">
            <p className="text-[#1E40AF] leading-relaxed text-lg">
              <span className="text-red-600 font-semibold">⚠ Please Note:</span>
              <br />
              I do not take insurance directly. However, I can provide you with a billing sheet with the necessary facts and codes so you can file for{" "}
              <strong>out-of-network benefits</strong> with your insurance company.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}