import dynamic from "next/dynamic"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"

// Lazy load heavy sections
const FeaturesSwitcher = dynamic(() => import("@/components/FeaturesSwitcher"))
const AmenitiesSection = dynamic(() => import("@/components/amenities-section"))
const ProjectsSection = dynamic(() => import("@/components/projects-section").then(m => m.ProjectsSection))
const VirtualTourHero = dynamic(() => import("@/components/vertualTour"))
const GallerySection = dynamic(() => import("@/components/gallery-section"))
const DocumentsSection = dynamic(() => import("@/components/document"))
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section"))
const FAQSection = dynamic(() => import("@/components/faq-section"))
const Footer = dynamic(() => import("@/components/footer").then(m => m.Footer))
const FloatingCTA = dynamic(() => import("@/components/FloatingCTA"))

export default function Home() {
  return (
    <main>
      {/* Above the fold (keep normal import) */}
      <HeroSection />
      <AboutSection />

      {/* Lazy loaded sections */}
      <FeaturesSwitcher />
      <AmenitiesSection />
      <ProjectsSection />
      <VirtualTourHero />
      <GallerySection />
      <DocumentsSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}