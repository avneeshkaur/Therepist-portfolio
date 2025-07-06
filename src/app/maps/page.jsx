import { Button } from "../components/ui/button"
import ContactSection from "../components/contact-section"
import Footer from "../components/footer"

export default function service() {
  return (
    <div>
        <div className="bg-white py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
          </div>
        </div>
        <ContactSection hideNote={true} />
        <Footer />
    </div>
  )
}