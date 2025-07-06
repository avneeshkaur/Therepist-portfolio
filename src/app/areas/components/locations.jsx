import Link from "next/link";
import React from 'react';
import { MapPin, Phone, Calendar, Settings } from 'lucide-react';

const Locations = () => {
  const locations = [
    {
      name: " Los Angeles, VA",
      description: "Located in  Los Angeles, VA, our practice offers convenient in-person therapy sessions in the capital city.",
      address: "4913 Fitzhugh Avenue, Suite 102,  Los Angeles, VA 23230",
      phone: "(323) 555-0192",
      distance: null,
      isMain: true
    },
    {
      name: "Ashland, VA",
      description: "Providing in-person therapy services in Ashland, VA.",
      phone: "(323) 555-0192",
      distance: "approx ~13 miles away from office in  Los Angeles, VA"
    },
    {
      name: "Mechanicsville, VA",
      description: "Offering in-person therapy options for families in Mechanicsville.",
      phone: "(323) 555-0192",
      distance: "approx ~12 miles away from office in  Los Angeles, VA"
    },
    {
      name: "Lakeside, VA",
      description: "In-person therapy sessions available in the Lakeside area.",
      phone: "(323) 555-0192",
      distance: "approx ~7 miles away from office in  Los Angeles, VA"
    },
    {
      name: "East Highland Park, VA",
      description: "Convenient in-person therapy for residents of East Highland Park.",
      phone: "(323) 555-0192",
      distance: "approx ~5 miles away from office in  Los Angeles, VA"
    },
    {
      name: "Short Pump, VA",
      description: "In-person therapy services available in Short Pump's vibrant community.",
      phone: "(323) 555-0192",
      distance: "approx ~12 miles away from office in  Los Angeles, VA"
    },
    {
      name: "Highland Springs, VA",
      description: "Offering in-person therapy sessions to the Highland Springs area.",
      phone: "(323) 555-0192",
      distance: "approx ~8 miles away from office in  Los Angeles, VA"
    },
    {
      name: "Glen Allen, VA",
      description: "Providing in-person therapy services in Glen Allen, VA.",
      phone: "(323) 555-0192",
      distance: "approx ~10 miles away from office in  Los Angeles, VA"
    },
    {
      name: "Sandston, VA",
      description: "In-person therapy sessions available in Sandston and surrounding areas.",
      phone: "(323) 555-0192",
      distance: "approx ~9 miles away from office in  Los Angeles, VA"
    },
    {
      name: "Bon Air, VA",
      description: "Offering in-person therapy services to residents of Bon Air.",
      phone: "(323) 555-0192",
      distance: "approx ~11 miles away from office in  Los Angeles, VA"
    },
    {
      name: "Chester, VA",
      description: "In-person therapy available for families and individuals in Chester.",
      phone: "(323) 555-0192",
      distance: "approx ~15 miles away from office in  Los Angeles, VA"
    },
    {
      name: "Midlothian, VA",
      description: "Providing in-person therapy sessions in Midlothian, VA.",
      phone: "(323) 555-0192",
      distance: "approx ~16 miles away from office in  Los Angeles, VA"
    },
    {
      name: "Moseley, VA",
      description: "In-person therapy sessions available for the Moseley community.",
      phone: "(323) 555-0192",
      distance: "approx ~20 miles away from office in  Los Angeles, VA"
    },
    {
      name: "Hopewell, VA",
      description: "Offering in-person therapy services in Hopewell, VA.",
      phone: "(323) 555-0192",
      distance: "approx ~20 miles away from office in  Los Angeles, VA"
    },
    {
      name: "Petersburg, VA",
      description: "Providing in-person therapy sessions in Petersburg, VA.",
      phone: "(323) 555-0192",
      distance: "approx ~25 miles away from office in  Los Angeles, VA"
    },
    {
      name: "Colonial Heights, VA",
      description: "In-person therapy available for residents of Colonial Heights, VA.",
      phone: "(323) 555-0192",
      distance: "approx ~25 miles away from office in  Los Angeles, VA"
    },
    {
      name: "New Kent, VA",
      description: "Offering in-person therapy sessions in New Kent, VA.",
      phone: "(323) 555-0192",
      distance: "approx ~16 miles away from office in  Los Angeles, VA"
    },
    {
      name: "Powhatan, VA",
      description: "In-person therapy services available in Powhatan, VA.",
      phone: "(323) 555-0192",
      distance: "approx ~30 miles away from office in  Los Angeles, VA"
    },
    {
      name: "Goochland, VA",
      description: "Providing in-person therapy sessions in Goochland, VA.",
      phone: "(323) 555-0192",
      distance: "approx ~25 miles away from office in  Los Angeles, VA"
    },
    {
      name: "Ruther Glen, VA",
      description: "Offering in-person therapy in Ruther Glen and nearby communities.",
      phone: "(323) 555-0192",
      distance: "approx ~35 miles away from office in  Los Angeles, VA"
    },
    {
      name: "Williamsburg, VA",
      description: "Providing in-person therapy services in historic Williamsburg, VA.",
      phone: "(323) 555-0192",
      distance: "approx ~56 miles away from office in  Los Angeles, VA"
    },
    {
      name: "Fredericksburg, VA",
      description: "Offering in-person therapy in Fredericksburg, VA.",
      phone: "(323) 555-0192",
      distance: "approx ~62 miles away from office in  Los Angeles, VA"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Locations</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive therapy services across multiple locations, offering both in-person and online sessions to best serve your needs.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                {location.name}
              </h2>
              
              <p className="text-gray-600 mb-4 text-base leading-relaxed">
                {location.description}
              </p>

              {/* Address for main location */}
              {location.address && (
                <div className="flex items-start mb-3">
                  <MapPin className="w-4 h-4 text-gray-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-base text-gray-600">{location.address}</span>
                </div>
              )}

              {/* Distance for other locations */}
              {location.distance && (
                <div className="flex items-start mb-3">
                  <MapPin className="w-4 h-4 text-gray-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-base text-gray-600">{location.distance}</span>
                </div>
              )}

              {/* Phone */}
              <div className="flex items-center mb-6">
                <Phone className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-base text-gray-600">{location.phone}</span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
              <Link href="/contact" className="w-full">
  <button className="w-full bg-[#1E4145] hover:bg-[#4a6b70] text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
    <Calendar className="w-4 h-4 mr-2" />
    Schedule
  </button>
</Link>
                <Link
  href="/services"
  className="w-full bg-white hover:underline hover:underline-offset-auto text-[#1E4145] font-medium py-2 px-4 transition-colors duration-200 flex items-center justify-center"
>
  Services
</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;