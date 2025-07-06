import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import StatsSection from "./components/stats-section"
import HowIHelpSection from "./components/how-i-help-section"
import AboutSection from "./components/about-section"
import BooksAndBlogSection from "./components/books-and-blog-section"
import FAQSection from "./components/faq-section"
import ContactSection from "./components/contact-section"
import Footer from "./components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <HowIHelpSection />
      <AboutSection />
      <BooksAndBlogSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
