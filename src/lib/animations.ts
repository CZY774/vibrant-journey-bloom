
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize animations on page load
export const initAnimations = () => {
  // Animate navbar on scroll
  gsap.to(".navbar", {
    scrollTrigger: {
      start: "top top",
      end: "+=50",
      toggleClass: { className: "navbar-scrolled", targets: ".navbar" }
    }
  });

  // Animate hero elements
  gsap.from(".hero-content > *", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    delay: 0.5
  });

  // Animate sections on scroll
  gsap.utils.toArray(".animate-section").forEach((section: any) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top bottom-=100",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out"
    });
  });

  // Animate project cards
  gsap.utils.toArray(".project-card").forEach((card: any, i: number) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
      },
      opacity: 0,
      y: 50,
      duration: 0.6,
      delay: i * 0.1,
      ease: "power2.out"
    });
  });

  // Parallax effect for hero section
  gsap.to(".parallax-bg", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    },
    y: (_, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed!,
    ease: "none"
  });
};

// Page transition animations
export const pageTransition = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

// Animate text splitting
export const splitTextAnimation = (selector: string) => {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach(element => {
    const text = element.textContent || "";
    element.textContent = "";
    
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      span.textContent = text[i];
      span.style.opacity = "0";
      span.style.display = "inline-block";
      element.appendChild(span);
      
      gsap.to(span, {
        opacity: 1,
        duration: 0.05,
        delay: 0.5 + i * 0.03,
        ease: "power1.inOut"
      });
    }
  });
};

// Mouse follow animation
export const initMouseFollow = () => {
  const cursor = document.createElement("div");
  cursor.classList.add("cursor-follow");
  document.body.appendChild(cursor);
  
  window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
      ease: "power2.out"
    });
  });
  
  const links = document.querySelectorAll("a, button");
  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      cursor.classList.add("cursor-hover");
    });
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-hover");
    });
  });
};
