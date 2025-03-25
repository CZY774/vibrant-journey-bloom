
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Create animation for section entry
    gsap.from(sectionRef.current.querySelectorAll('.about-animate'), {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom-=100',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power2.out'
    });
    
    // Create animation for skill bars
    gsap.from('.skill-progress', {
      scrollTrigger: {
        trigger: '.skills-container',
        start: 'top bottom-=100',
      },
      width: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power2.inOut'
    });
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-padding"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          {/* Left Column - About Text */}
          <div className="md:w-1/2">
            <span className="about-animate inline-block text-sm font-medium uppercase tracking-wider mb-2 text-muted-foreground">About Me</span>
            <h2 className="about-animate text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
              Creating meaningful digital experiences through design and code
            </h2>
            <div className="about-animate space-y-4 text-muted-foreground">
              <p>
                I'm a passionate designer and developer who loves crafting beautiful, 
                user-centered digital experiences. With a keen eye for detail and a 
                dedication to clean, elegant code, I create websites that are both 
                visually stunning and highly functional.
              </p>
              <p>
                My approach combines creative thinking with technical expertise, 
                allowing me to transform complex ideas into intuitive, user-friendly 
                interfaces. I believe that good design should not only look beautiful 
                but also serve a purpose and solve real problems.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design trends, 
                learning new technologies, or seeking inspiration in art, nature, 
                and architecture.
              </p>
            </div>
          </div>
          
          {/* Right Column - Skills */}
          <div className="md:w-1/2">
            <span className="about-animate inline-block text-sm font-medium uppercase tracking-wider mb-2 text-muted-foreground">My Skills</span>
            <h3 className="about-animate text-2xl font-display font-bold tracking-tight mb-8">
              Technical proficiencies
            </h3>
            
            <div className="skills-container space-y-6">
              {/* Skill Item */}
              <div className="about-animate">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">HTML & CSS</span>
                  <span className="text-sm">95%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="skill-progress h-full bg-primary rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              {/* Skill Item */}
              <div className="about-animate">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">JavaScript</span>
                  <span className="text-sm">90%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="skill-progress h-full bg-primary rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              {/* Skill Item */}
              <div className="about-animate">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">React</span>
                  <span className="text-sm">85%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="skill-progress h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              {/* Skill Item */}
              <div className="about-animate">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Tailwind CSS</span>
                  <span className="text-sm">90%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="skill-progress h-full bg-primary rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              {/* Skill Item */}
              <div className="about-animate">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">UI/UX Design</span>
                  <span className="text-sm">80%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="skill-progress h-full bg-primary rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
