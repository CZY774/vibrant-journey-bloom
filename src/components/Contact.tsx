
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Animate section elements
    gsap.from('.contact-animate', {
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
    
    // Animate form inputs on focus
    const inputs = formRef.current?.querySelectorAll('input, textarea');
    inputs?.forEach(input => {
      input.addEventListener('focus', () => {
        gsap.to(input, {
          borderColor: '#000',
          duration: 0.3,
          ease: 'power1.out'
        });
      });
      
      input.addEventListener('blur', () => {
        if (!(input as HTMLInputElement).value) {
          gsap.to(input, {
            borderColor: 'hsl(var(--border))',
            duration: 0.3,
            ease: 'power1.out'
          });
        }
      });
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    
    // Animation for success message
    gsap.to('.form-success', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
    
    // Reset form
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.reset();
        gsap.to('.form-success', {
          opacity: 0,
          y: -10,
          duration: 0.5,
          ease: 'power2.in'
        });
      }
    }, 3000);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="section-padding"
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="contact-animate inline-block text-sm font-medium uppercase tracking-wider mb-2 text-muted-foreground">Get In Touch</span>
            <h2 className="contact-animate text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
              Let's Work Together
            </h2>
            <p className="contact-animate text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? 
              Fill out the form below, and I'll get back to you as soon as possible.
            </p>
          </div>
          
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="contact-animate">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none transition-colors"
                />
              </div>
              <div className="contact-animate">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none transition-colors"
                />
              </div>
            </div>
            
            <div className="contact-animate">
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                required
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none transition-colors"
              />
            </div>
            
            <div className="contact-animate">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={6}
                required
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>
            
            <div className="contact-animate flex items-center justify-between">
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full transition-all hover:scale-105"
              >
                Send Message
              </button>
              
              <div className="form-success opacity-0 translate-y-[-10px] text-sm text-green-600 font-medium">
                Message sent successfully!
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
