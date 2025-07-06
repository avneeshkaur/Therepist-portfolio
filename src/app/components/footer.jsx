import { Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Logo and Contact Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="bg-white rounded-full px-6 py-4 w-fit mb-4">
              <img 
                src="/image/Serena.png" 
                alt="Serena Blake - Licensed Clinical Social Worker" 
                className="w-auto h-16 object-contain"
              />
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap items-center gap-2 mb-4 text-sm">
              <span className="flex items-center gap-1">
                <img 
                  src="/image/Gold_Star_(with_border).svg" 
                  alt="Top Rated" 
                  className="w-4 h-4"
                />
                <span>Top Rated</span>
              </span>
              <span>•</span>
              <span className="underline cursor-pointer hover:text-teal-200">Testimonials</span>
              <span>•</span>
              <span className="underline cursor-pointer hover:text-teal-200">Media Mentions</span>
            </div>

            {/* Address */}
            <div className="mb-4 text-sm leading-relaxed">
              <p> 1287 Maplewood Drive,</p>
              <p>Los Angeles, CA</p>
              <p>90026</p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 mb-6">
              <Phone className="w-4 h-4" />
              <span>(323) 555-0192</span>
            </div>

            {/* Psychology Today Badge */}
            <div className="w-fit">
              <a 
                href="https://www.psychologytoday.com/us/therapists/Serena -shumaker-richmond-va/112300" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                <img 
                  src="/image/featured/pscology today.webp" 
                  alt="Verified by Psychology Today" 
                  className="w-auto h-12 object-contain"
                />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">LINKS</h3>
            <ul className="space-y-3">
              <li>
                <a href="#contact" className="hover:text-teal-200 transition-colors">
                  Get In Touch
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-teal-200 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-teal-200 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-teal-200 transition-colors">
                  FAQ's
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-200 transition-colors">
                  Therapies
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-teal-200 transition-colors">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h3 className="text-lg font-bold mb-4">AREAS SERVED</h3>
            <ul className="space-y-2 text-sm">
              <li>Los Angeles, CA</li>
              <li>Ashland, VA</li>
              <li>Mechanicsville, VA</li>
              <li>Lakeside, VA</li>
              <li>East Highland Park, VA</li>
              <li>Short Pump, VA</li>
              <li>Highland Springs, VA</li>
              <li>Glen Allen, VA</li>
              <li>Sandston, VA</li>
              <li>Bon Air, VA</li>
              <li>Chester, VA</li>
              <li>Midlothian, VA</li>
              <li>Moseley, VA</li>
              <li>Hopewell, VA</li>
              <li>Petersburg, VA</li>
              <li>Colonial Heights, VA</li>
              <li>New Kent, VA</li>
              <li>Powhatan, VA</li>
              <li>Goochland, VA</li>
              <li>Ruther Glen, VA</li>
              <li>Williamsburg, VA</li>
              <li>Fredericksburg, VA</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">SERVICES</h3>
            <ul className="space-y-3">
              <li>
                <a href="#individual" className="hover:text-teal-200 transition-colors">
                  Christian Individual Counseling in Los Angeles, CA
                </a>
              </li>
              <li>
                <a href="#couples" className="hover:text-teal-200 transition-colors">
                  Christian Couples Counseling in Los Angeles, CA
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-teal-700 pt-8">
          <div className="text-center space-y-">
            <p className="text-sm">Serena Blake © Copyright 2024. All Rights Reserved.</p>
            <p className="text-xs text-teal-200">
              Credits to freepik for media www.freepik.com People illustrations by Storyset
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <a href="#privacy" className="text-teal-200 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span className="text-teal-400">•</span>
              <a href="#terms" className="text-teal-200 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}