'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Overview', href: '#overview', active: false },
  { name: 'Amenities', href: '#amenities', active: false },
  { name: 'Gallery', href: '#gallery', active: false },
  { name: 'Testimonials', href: '#testimonials', active: false },
  { name: 'FAQ', href: '#faq_sec', active: false }
];

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navLinksState, setNavLinksState] = useState(navLinks);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 py-3 md:py-4 backdrop-blur-sm"
        style={{ background: 'rgba(0, 0, 0, 0.3)' }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center gap-2 sm:gap-3">
                <div className="relative">
                  <img 
                    src="/Malaxmi-Final-Logo.-2png.png" 
                    alt="Mahalaxmi Nagar Logo" 
                    className="w-32 h-auto sm:w-40 md:w-45 object-contain" 
                  />
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinksState.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-semibold transition-colors uppercase tracking-wide hover:opacity-100"
                  style={{
                    color: link.active ? 'var(--secondary)' : 'var(--primary-foreground)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(16px, 1.2vw, 20px)',
                    opacity: link.active ? 1 : 0.9
                  }}
                  onClick={() => {
                    setNavLinksState(navLinksState.map(navLink => ({
                      ...navLink,
                      active: navLink.name === link.name
                    })));
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Phone Number - Desktop */}
            <div className="hidden lg:flex items-center ml-4 xl:ml-6">
              <a
                href="tel:+919423987948"
                className="font-bold transition-all hover:scale-105 rounded whitespace-nowrap"
                style={{
                  color: 'var(--foreground)',
                  fontFamily: 'var(--font-heading)',
                  backgroundColor: 'var(--secondary)',
                  fontSize: 'clamp(16px, 1.2vw, 20px)',
                  padding: '10px 16px'
                }}
              >
                +91 9423987948
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors touch-manipulation"
              style={{ color: 'var(--primary-foreground)' }}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              className="lg:hidden py-4 border-t mt-2 animate-fadeIn"
              style={{ 
                borderColor: 'rgba(255, 255, 255, 0.2)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
              }}
            >
              <nav className="flex flex-col space-y-1">
                {navLinksState.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setNavLinksState(navLinksState.map(navLink => ({
                        ...navLink,
                        active: navLink.name === link.name
                      })));
                    }}
                    className="text-base sm:text-lg font-semibold py-3 px-4 transition-all uppercase rounded touch-manipulation hover:bg-white/10"
                    style={{
                      color: link.active ? 'var(--secondary)' : 'var(--primary-foreground)',
                      fontFamily: 'var(--font-heading)',
                      opacity: link.active ? 1 : 0.9
                    }}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="tel:+919423987948"
                  className="text-base sm:text-lg font-bold mt-4 py-3 px-4 rounded text-center touch-manipulation transition-transform hover:scale-105"
                  style={{
                    color: 'var(--foreground)',
                    backgroundColor: 'var(--secondary)',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  +91 9423987948
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: 'url("/gallery_9.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
          paddingTop: '80px'
        }}
      >
        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(30, 80, 33, 0.35) 0%, rgba(30, 55, 15, 0.39) 50%, rgba(27, 70, 25, 0.39) 100%)'
          }}
        ></div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
          <div className="max-w-2xl space-y-6 sm:space-y-8">
            {/* Top Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded shadow-lg"
              style={{
                backgroundColor: 'var(--background)',
                color: 'var(--tcolor)'
              }}
            >
              <span
                className="text-xs sm:text-sm font-bold tracking-wide"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                MOUZA SUMTHANA
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="font-bold leading-tight"
              style={{
                fontFamily: 'var(--font-heading)',
                textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
                fontSize: 'clamp(2rem, 8vw, 4rem)',
                lineHeight: '1.1',
                letterSpacing: '0.01em',
                color: 'var(--primary-foreground)'
              }}
            >
              Mahalaxmi Nagar - 45
            </h1>

            {/* Subtitle - Optional enhancement */}
            <p 
              className="text-base sm:text-lg md:text-xl max-w-xl"
              style={{
                color: 'var(--primary-foreground)',
                textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
                opacity: 0.95
              }}
            >
              Your Dream Home Awaits
            </p>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-4">
              <a href="#faq_sec">
                <button
                  className="rounded hover:cursor-pointer font-bold tracking-wide transition-all hover:scale-105 active:scale-95 shadow-lg uppercase w-full sm:w-auto touch-manipulation"
                  style={{
                    background: 'var(--secondary)',
                    color: 'var(--foreground)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(13px, 2.5vw, 16px)',
                    padding: '14px 32px',
                  }}
                >
                  Enquire Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        /* Improve scroll behavior on mobile */
        @media (max-width: 768px) {
          section {
            background-attachment: scroll !important;
          }
        }

        /* Ensure touch targets are large enough */
        @media (hover: none) and (pointer: coarse) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </>
  );
}