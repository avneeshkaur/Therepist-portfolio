"use client";

import Link from 'next/link';
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [areasDropdown, setAreasDropdown] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure component is hydrated before showing interactive elements
  useEffect(() => {
    setIsClient(true);
  }, []);

  const servicesItems = [
    { title: "Christian Individual Counseling", subtitle: "in Los Angels, CA", description: "Discover Peace, Purpose, and God's Truth in Richmond, VA.", href: "/services/individual" },
    { title: "Christian Couples Counseling", subtitle: "in Los Angels, CA", description: "Heal Your Relationship, Grow Closer to God Together in Richmond.", href: "/services/couples" }
  ];

  const areasItems = [
    { title: "Los Angels, CA", description: "Richmond is known for its rich Civil War history, the James River rapids..."},
    { title: "Ashland, VA", description: "Ashland is home to Randolph-Macon College and features a charming..."},
    { title: "Mechanicsville, VA", description: "Mechanicsville is known for its Civil War battlefields and suburban..."},
    { title: "Lakeside, VA", description: "Lakeside sits just east of Richmond and is known for its proximity to maj..."},
    { title: "East Highland Park, VA", description: "East Highland Park is a residential suburb directly east of downtown..."},
    { title: "Short Pump, VA", description: "Short Pump is a major shopping and dining district in western Henrico..."},
    { title: "Highland Springs, VA", description: "Highland Springs is known for its historically African American..."},
    { title: "Glen Allen, VA", description: "Glen Allen is a well-established suburb of Richmond, featuring parks like De..."},
    { title: "Sandston, VA", description: "Sandston is located just east of Richmond International Airport and i..."},
    { title: "Bon Air, VA", description: "Bon Air is a historic suburb named for its location on Richmond's south side..."},
    { title: "Chester, VA", description: "Chester is a census-designated place in Chesterfield County, with a mix of..."},
    { title: "Midlothian, VA", description: "Midlothian is known for its historic coal mining heritage, shopping..."}
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-[#FFF0EC] py-2 px-4 sm:px-8 border-b border-[#1e4b4f]">
        <div className="max-w-7xl mx-auto flex justify-between text-sm text-[#1e4b4f]">
          <div className="flex items-center gap-2">
            <Image
              src="/image/phone-call-svgrepo-com.svg"
              alt="Phone"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>(323) 555-0192</span>
          </div>
          <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <a href="mailto:serena@blakepsychology.com" className="hover:underline transition-all duration-200">
                serena@blakepsychology.com
              </a>
            </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
            </svg>
            <Link href="/maps" className="hover:underline transition-all duration-200">
              <span>1287 Maplewood Drive, Los Angeles, CA 90026</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md py-2 sm:py-3 px-4 sm:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/image/Serena.png"
                alt="Serena Blake"
                width={170}
                height={50}
                className="w-44 md:w-40 h-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex flex-grow justify-center gap-2 font-medium relative">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => isClient && setServicesDropdown(true)}
              onMouseLeave={() => isClient && setServicesDropdown(false)}
            >
              <Link href="/services">
                <span className="hover:text-[#214089] hover:bg-gray-100 px-3 py-2 rounded-md transition-all duration-200" style={{ fontSize: "clamp(10px, 1.4vw, 22px)", color: "#1e4b4f", cursor: "pointer" }}>
                  Services
                </span>
              </Link>
              
              {isClient && servicesDropdown && (
                <div className="absolute top-full left-0 pt-2 w-80 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200">
                    <div className="p-4 space-y-4">
                      {servicesItems.map((item, index) => (
                        <Link key={index} href={item.href}>
                          <div className="p-3 rounded-lg hover:bg-[#B5DBDF] hover:text-[#1e4b4f] transition-all duration-200 cursor-pointer">
                            <h4 className="font-semibold text-[#1e4b4f] text-sm">
                              {item.title} <span className="font-normal">{item.subtitle}</span>
                            </h4>
                            <p className="text-gray-600 text-xs mt-1">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/#about">
              <span className="hover:text-[#214089] hover:bg-gray-100 px-3 py-2 rounded-md transition-all duration-200" style={{ fontSize: "clamp(10px, 1.4vw, 22px)", color: "#1e4b4f", cursor: "pointer" }}>
                About
              </span>
            </Link>

            <Link href="/#testimonials">
              <span className="hover:text-[#214089] hover:bg-gray-100 px-3 py-2 rounded-md transition-all duration-200" style={{ fontSize: "clamp(10px, 1.4vw, 22px)", color: "#1e4b4f", cursor: "pointer" }}>
                Testimonials
              </span>
            </Link>

            <Link href="/#rates">
              <span className="hover:text-[#214089] hover:bg-gray-100 px-3 py-2 rounded-md transition-all duration-200" style={{ fontSize: "clamp(10px, 1.4vw, 22px)", color: "#1e4b4f", cursor: "pointer" }}>
                Rates & FAQs
              </span>
            </Link>

            {/* Areas Served Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => isClient && setAreasDropdown(true)}
              onMouseLeave={() => isClient && setAreasDropdown(false)}
            >
              <Link href="/areas">
                <span className="hover:text-[#214089] hover:bg-gray-100 px-3 py-2 rounded-md transition-all duration-200" style={{ fontSize: "clamp(10px, 1.4vw, 22px)", color: "#1e4b4f", cursor: "pointer" }}>
                  Areas Served
                </span>
              </Link>
              
              {isClient && areasDropdown && (
                <div className="absolute top-full right-0 pt-2 w-96 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 max-h-96 overflow-y-auto">
                    <div className="p-4 grid grid-cols-2 gap-2">
                      {areasItems.map((item, index) => (
                        <Link key={index} href={"/services"}>
                          <div className="p-2 rounded-lg hover:bg-[#B5DBDF] hover:text-[#1e4b4f] transition-all duration-200 cursor-pointer">
                            <h4 className="font-semibold text-[#1e4b4f] text-xs">{item.title}</h4>
                            <p className="text-gray-600 text-xs mt-1 line-clamp-2">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact">
              <span className="hover:text-[#214089] hover:bg-gray-100 px-3 py-2 rounded-md transition-all duration-200" style={{ fontSize: "clamp(16px, 1.5vw, 22px)", color: "#1e4b4f", cursor: "pointer" }}>
                Contact
              </span>
            </Link>
          </nav>

          {/* Get Started Button */}
          <div className="flex-shrink-0 hidden lg:block">
            <Link href="/login">
              <Button
                variant="outline"
                className="border-[#1e4b4f] text-[#1e4b4f] bg-white hover:bg-[#1e4b4f] hover:text-white font-bold rounded-md px-7 py-6 text-lg flex items-center cursor-pointer transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-1" />
                Get Started
              </Button>
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="lg:hidden">
            <button onClick={() => isClient && setIsOpen(true)}>
              <Image
                src="/image/burger-menu-svgrepo-com.svg"
                alt="Menu"
                width={28}
                height={28}
                className="w-7 h-7"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isClient && (
        <div
          className={`fixed top-0 right-0 h-full w-80 max-w-[80%] bg-[#f4f7f9] z-50 shadow-lg transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-2xl text-[#1e4b4f] hover:text-[#214089] transition-colors duration-200"
          >
            ✕
          </button>

          {/* Logo Text */}
          <div
            style={{ fontSize: "clamp(35px, 3vw, 40px)", fontWeight: 700, color: "#1e4b4f", textAlign: "center", marginBottom: "2.5rem", marginTop: "2.5rem" }}
          >
            Serena Blake
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col items-center justify-center gap-0 px-6">
            <Link href="/services" onClick={() => setIsOpen(false)}>
              <span className="hover:text-[#214089] transition-colors duration-200" style={{ fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 700, color: "#1e4b4f" }}>Services</span>
            </Link>
            <Link href="/#about" onClick={() => setIsOpen(false)}>
              <span className="hover:text-[#214089] transition-colors duration-200" style={{ fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 700, color: "#1e4b4f" }}>About</span>
            </Link>
            <Link href="/#testimonials" onClick={() => setIsOpen(false)}>
              <span className="hover:text-[#214089] transition-colors duration-200" style={{ fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 700, color: "#1e4b4f" }}>Testimonials</span>
            </Link>
            <Link href="/#rates" onClick={() => setIsOpen(false)}>
              <span className="hover:text-[#214089] transition-colors duration-200" style={{ fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 700, color: "#1e4b4f" }}>Rates & FAQs</span>
            </Link>
            <Link href="/areas" onClick={() => setIsOpen(false)}>
              <span className="hover:text-[#214089] transition-colors duration-200" style={{ fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 700, color: "#1e4b4f" }}>Areas Served</span>
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <span className="hover:text-[#214089] transition-colors duration-200" style={{ fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 700, color: "#1e4b4f" }}>Contact</span>
            </Link>
          </nav>
        </div>
      )}

      {/* Backdrop overlay for mobile menu */}
      {isClient && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}