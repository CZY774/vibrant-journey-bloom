
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'Modern E-commerce Platform',
    description: 'A sleek, responsive e-commerce website with advanced filtering and smooth animations.',
    tags: ['React', 'TailwindCSS', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=2940&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 2,
    title: 'Portfolio for Photographer',
    description: 'Minimalist portfolio site with beautiful transitions and image galleries.',
    tags: ['HTML', 'TailwindCSS', 'GSAP'],
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2940&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 3,
    title: 'Travel Agency Website',
    description: 'Interactive website with parallax effects and custom animations.',
    tags: ['React', 'TailwindCSS', 'GSAP'],
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2940&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    description: 'Clean, intuitive banking application with focus on user experience.',
    tags: ['React', 'TailwindCSS', 'Redux'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2940&auto=format&fit=crop',
    link: '#'
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !projectsRef.current) return;
    
    // Header animation
    gsap.from('.projects-header > *', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom-=100',
      },
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power2.out'
    });
    
    // Project cards animation
    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: projectsRef.current,
        start: 'top bottom-=100',
      },
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out'
    });
    
    // Set up hover animations for each project card
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      const image = card.querySelector('.project-image') as HTMLElement;
      const content = card.querySelector('.project-content') as HTMLElement;
      
      card.addEventListener('mouseenter', () => {
        gsap.to(image, {
          scale: 1.05,
          duration: 0.4,
          ease: 'power1.out'
        });
        
        gsap.to(content, {
          y: -10,
          duration: 0.4,
          ease: 'power1.out'
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(image, {
          scale: 1,
          duration: 0.4,
          ease: 'power1.out'
        });
        
        gsap.to(content, {
          y: 0,
          duration: 0.4,
          ease: 'power1.out'
        });
      });
    });
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="section-padding bg-secondary/50"
    >
      <div className="container mx-auto">
        <div className="projects-header text-center mb-16">
          <span className="inline-block text-sm font-medium uppercase tracking-wider mb-2 text-muted-foreground">My Work</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            Selected Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent work. Each project represents a unique challenge 
            and showcases different aspects of my design and development skills.
          </p>
        </div>
        
        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <a 
              key={project.id}
              href={project.link}
              className="project-card block group relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image w-full h-full object-cover transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              
              <div className="project-content relative z-10 p-8 text-white h-full flex flex-col justify-end transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-display font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-white/80 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-white/20 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 7l9.2 9.2M17 7v10H7"/>
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
