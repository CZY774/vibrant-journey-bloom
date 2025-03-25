
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial animations
    gsap.from('.nav-item', {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      duration: 0.8,
      delay: 1,
      ease: 'power2.out'
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    if (!isMenuOpen) {
      // Menu opening animation
      gsap.fromTo('.mobile-nav-item', 
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out' }
      );
    }
  };

  return (
    <nav className={`navbar fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold tracking-tight">Portfolio</a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="nav-item text-sm font-medium hover:text-black/70 transition-colors">Home</a>
          <a href="#about" className="nav-item text-sm font-medium hover:text-black/70 transition-colors">About</a>
          <a href="#projects" className="nav-item text-sm font-medium hover:text-black/70 transition-colors">Projects</a>
          <a href="#contact" className="nav-item text-sm font-medium hover:text-black/70 transition-colors">Contact</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col space-y-1">
            <span className={`w-full h-px bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-full h-px bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-px bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden absolute w-full bg-white/90 backdrop-blur-lg transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-60 shadow-lg' : 'max-h-0'}`}>
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <a href="#home" className="mobile-nav-item text-sm font-medium hover:text-black/70 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" className="mobile-nav-item text-sm font-medium hover:text-black/70 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#projects" className="mobile-nav-item text-sm font-medium hover:text-black/70 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" className="mobile-nav-item text-sm font-medium hover:text-black/70 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
