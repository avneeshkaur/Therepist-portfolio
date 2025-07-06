"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function HowIHelpSection() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* ========== How I Help Section ========== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f4f7f9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl sm:text-7xl font-bold text-[#1E4145] mb-12">How I Help</h2>

          <div
            className={`relative gap-8 flex flex-wrap ${
              windowWidth <= 767 ? "flex-col items-center" : "justify-start"
            }`}
          >
            {/* Stress Counseling Card */}
            <div
              className="bg-[#B5DBDF] rounded-2xl p-6 shadow-md border border-[#9fbdbd] group cursor-pointer hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] z-10 relative transition-all"
              style={{
                width:
                  windowWidth <= 639
                    ? "100%"
                    : windowWidth <= 719
                    ? "90%"
                    : windowWidth <= 767
                    ? "100%"
                    : windowWidth <= 879
                    ? "320px"
                    : "400px",
              }}
            >
              <div className="w-full h-56 rounded-lg mb-4 overflow-hidden group-hover:translate-x-2 transition-transform">
                <img src="/image/STRESS-MANAGEMENT.png" alt="Stress Management" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E4145] mb-3 group-hover:translate-x-2 transition-transform">
                Anxiety & Stress Management  in Los Angeles, CA
              </h3>
              <p className="text-[#1E4145] text-base mb-4 leading-relaxed group-hover:translate-x-2 transition-transform">
                Anxiety and stress management services in Los Angeles, CA, providing personalized support for mental well-being.
              </p>
              <Button
                variant="outline"
                className="w-full border border-[#1E4145] text-[#1E4145] hover:bg-white hover:text-[#1E4145] rounded-lg text-sm py-2 cursor-pointer"
              >
                Learn More
              </Button>
            </div>

            {/* Relationship Counseling Card */}
            <div
              className="bg-[#B5DBDF] rounded-2xl p-6 shadow-md border border-[#9fbdbd] group cursor-pointer hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] z-10 relative transition-all"
              style={{
                width:
                  windowWidth <= 639
                    ? "100%"
                    : windowWidth <= 719
                    ? "90%"
                    : windowWidth <= 767
                    ? "100%"
                    : windowWidth <= 879
                    ? "320px"
                    : "400px",
              }}
            >
              <div className="w-full h-56 rounded-lg mb-4 overflow-hidden group-hover:translate-x-2 transition-transform">
                <img src="/image/Relationship-counseling.png" alt="Relationship Counseling" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E4145] mb-3 group-hover:translate-x-2 transition-transform">
                Relationship Counseling in Los Angeles, CA
              </h3>
              <p className="text-[#1E4145] text-base mb-4 leading-relaxed group-hover:translate-x-2 transition-transform">
                Tailored relationship counseling services in Los Angeles, CA, designed to strengthen communication, resolve conflicts, and foster deeper emotional connections.
              </p>
              <Button
                variant="outline"
                className="w-full border border-[#1E4145] text-[#1E4145] hover:bg-white hover:text-[#1E4145] rounded-lg text-sm py-2 cursor-pointer"
              >
                Learn More
              </Button>
            </div>

            {/* Trauma Recovery Card */}
            <div
              className="bg-[#B5DBDF] rounded-2xl p-6 shadow-md border border-[#9fbdbd] group cursor-pointer hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] z-10 relative transition-all"
              style={{
                width:
                  windowWidth <= 639
                    ? "100%"
                    : windowWidth <= 719
                    ? "90%"
                    : windowWidth <= 767
                    ? "100%"
                    : windowWidth <= 879
                    ? "320px"
                    : "400px",
              }}
            >
              <div className="w-full h-56 rounded-lg mb-4 overflow-hidden group-hover:translate-x-2 transition-transform">
                <img src="/image/Trauma-Recovery.png" alt="Trauma Recovery" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E4145] mb-3 group-hover:translate-x-2 transition-transform">
                Trauma Recovery in Los Angeles, CA
              </h3>
              <p className="text-[#1E4145] text-base mb-4 leading-relaxed group-hover:translate-x-2 transition-transform">
                Compassionate trauma recovery in Los Angeles, CA, using proven approaches to help you heal from past experiences and regain your sense of safety and strength.
              </p>
              <Button
                variant="outline"
                className="w-full border border-[#1E4145] text-[#1E4145] hover:bg-white hover:text-[#1E4145] rounded-lg text-sm py-2 cursor-pointer"
              >
                Learn More
              </Button>
            </div>

            {/* Decorative Plant Image */}
            <div
              style={{ display: windowWidth <= 880 ? "none" : "block" }}
              className="absolute bottom-[-65px] right-8 w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48 2xl:w-56 z-0 transition-all duration-300 ease-in-out"
            >
              <img src="/image/plant.webp" alt="Decorative Plant" className="w-full h-auto scale-x-[-1]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}