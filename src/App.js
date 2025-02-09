import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import WhatsAppButton from './components/WhatsAppButton';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  useEffect(() => {
    // Initialize AOS with reduced motion preference check
    const initAOS = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      AOS.init({
        duration: prefersReducedMotion ? 0 : 800,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic',
        disable: window.innerWidth < 768
      });
    };

    initAOS();

    // Optimize scroll performance
    let scrolling = false;
    const smoothScroll = (target, duration = 1000) => {
      if (scrolling) return;
      scrolling = true;

      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const navbarOffset = 70;
      const distance = targetPosition - startPosition - navbarOffset;
      
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: targetPosition - navbarOffset,
          autoKill: true
        },
        ease: "power2.inOut",
        onComplete: () => {
          scrolling = false;
        }
      });
    };

    // Handle smooth scroll for navigation with debouncing
    const handleClick = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      const target = document.querySelector(href);
      if (target) {
        smoothScroll(target);
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.removeEventListener('click', handleClick);
      anchor.addEventListener('click', handleClick);
    });

    // Handle resize with debouncing
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        AOS.refresh();
        ScrollTrigger.refresh();
      }, 250);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="App">
      <div className="fixed-elements-layer">
        <Header />
        <WhatsAppButton />
      </div>
      <main className="main-content">
        <Hero />
        <Services />
        <About />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
