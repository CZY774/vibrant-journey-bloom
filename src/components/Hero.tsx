
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Split text animation for the main heading
    if (textRef.current) {
      const text = textRef.current.innerText;
      const splitText = text.split('').map((char, i) => 
        `<span style="opacity: 0; transform: translateY(20px); display: inline-block;">${char}</span>`
      ).join('');
      
      textRef.current.innerHTML = splitText;
      
      gsap.to(textRef.current.querySelectorAll('span'), {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.02,
        delay: 0.5
      });
    }
    
    // Parallax effect
    const parallaxElements = heroRef.current?.querySelectorAll('[data-speed]');
    
    if (parallaxElements) {
      gsap.to(parallaxElements, {
        y: (i, el) => {
          const speed = parseFloat(el.getAttribute('data-speed') || '0');
          return -window.innerHeight * 0.2 * speed;
        },
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }
    
    // Fade in animation for subtitle and CTA
    gsap.from('.hero-subtitle, .hero-cta', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.2,
      delay: 1.2
    });
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      ref={heroRef}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-blue-100/30 to-transparent rounded-full blur-3xl"
          data-speed="0.2"
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-t from-pink-100/20 to-transparent rounded-full blur-3xl"
          data-speed="0.3"
        ></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 z-10 hero-content text-center">
        <h1 
          ref={textRef}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6"
        >
          Creating digital experiences <br />that matter
        </h1>
        <p className="hero-subtitle text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          I'm a passionate developer crafting beautiful and functional websites 
          with attention to every detail and pixel-perfect design.
        </p>
        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects"
            className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full transition-all hover:scale-105"
          >
            View My Work
          </a>
          <a 
            href="#contact"
            className="px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-full transition-all hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <div className="w-0.5 h-6 bg-muted-foreground/30 relative overflow-hidden">
          <div className="w-full h-full bg-foreground absolute top-0 animate-[scrollDown_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
