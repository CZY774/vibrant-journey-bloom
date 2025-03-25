
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { initAnimations, splitTextAnimation, initMouseFollow } from '../lib/animations';

const Index = () => {
  useEffect(() => {
    // Initialize all animations
    initAnimations();
    
    // Initialize text splitting for headings
    splitTextAnimation('.split-text');
    
    // Initialize mouse follow animation
    initMouseFollow();
    
    // Add cursor styling
    const style = document.createElement('style');
    style.innerHTML = `
      .cursor-follow {
        position: fixed;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.3);
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: width 0.3s, height 0.3s, background-color 0.3s;
      }
      .cursor-hover {
        width: 40px;
        height: 40px;
        background-color: rgba(0, 0, 0, 0.1);
        mix-blend-mode: difference;
      }
      
      @keyframes scrollDown {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100%); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Clean up
      document.head.removeChild(style);
      const cursor = document.querySelector('.cursor-follow');
      if (cursor) {
        document.body.removeChild(cursor);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
