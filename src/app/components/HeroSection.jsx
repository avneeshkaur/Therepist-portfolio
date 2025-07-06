"use client";

import { Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const texts = [
    { text: "Greater Purpose in Your Life Direction", icon: "/image/noun-simple-compass-4178565.svg" },
    { text: "Greater Peace in Your Heart", icon: "/image/Heart-hand-shake.svg" },
    { text: "Greater Love in Your Relationships", icon: "/image/heart.svg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/image/Stairs.webp"
          alt="Background"
          fill
          quality={100}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <section className="relative min-h-[600px] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-10 text-white leading-tight">
        <h2 className="mb-3 font-medium" style={{ fontSize: "clamp(10px, 2vw, 15px)", lineHeight: "1.3" }}>
        Clinical Psychologist Services in Los Angeles & Central Virginia
        </h2>

        <h1 className="mb-4 font-bold" style={{ fontSize: "clamp(28px, 3vw, 38px)", lineHeight: "1.2" }}>
          Professional Counseling for Clinical Psychologist and Growth
        </h1>

        <p className="mb-4 font-medium" style={{ fontSize: "clamp(16px, 2vw, 22px)", lineHeight: "1.4" }}>
          Begin your journey today towards spiritual growth, deeper relationships, and lasting inner peace.
        </p>

        <p className="mb-4 font-bold" style={{ fontSize: "clamp(18px, 2vw, 22px)", lineHeight: "1.3" }}>
          I want to work with you for...
        </p>

        {/* Rotating Text with Icon */}
        <div className="relative h-[40px] mb-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={texts[currentIndex].text}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-2"
            >
              <Image
                src={texts[currentIndex].icon}
                alt="Icon"
                width={24}
                height={24}
                style={{
                  filter: "invert(74%) sepia(11%) saturate(300%) hue-rotate(140deg) brightness(95%) contrast(85%)",
                }}
              />
              <span
                style={{
                  color: "#B4D9DD",
                  fontWeight: "bold",
                  fontSize: "clamp(18px, 2vw, 24px)",
                }}
              >
                {texts[currentIndex].text}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 text-white text-sm">
          <a href="#about" className="flex items-center gap-1 hover:underline cursor-pointer">
            <Image
              src="/image/Gold_Star_(with_border).svg"
              alt="Star"
              width={18}
              height={18}
            />
            <span className="font-medium">Top Rated</span>
          </a>
          <span>•</span>
          <a href="#about" className="font-medium underline cursor-pointer">8+ Years Practice</a>
          <span>•</span>
          <a href="#testimonials" className="font-medium underline cursor-pointer">Testimonials</a>
          <span>•</span>
          <a href="#media" className="font-medium underline cursor-pointer">Media Mentions</a>
        </div>

        {/* Animated Gradient Button */}
        <div className="relative group">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 blur-2xl opacity-50 group-hover:opacity-70 transition duration-1000 animate-gradientMove"></div>
          <Link href="/contact">
            <button
              className="relative flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold rounded-xl text-[#214089] bg-[#E3EEFD] hover:bg-white/95 shadow-xl transition-all duration-300"
            >
              <Sparkles className="w-5 h-5" color="#214089" />
              Start Healing Today
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
