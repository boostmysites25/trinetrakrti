import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { services } from "../../data/constant";
import bannerImg from "../../assets/images/services-details/services-details-page-banner.jpg";
import { FiArrowRight } from "react-icons/fi";

const ServiceDetailsBanner = () => {
  const { pathname } = useLocation();
  const service = services.find((item) => item.link === pathname);
  const title = service?.title;
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const particlesRef = useRef(null);
  
  useEffect(() => {
    // Add animation for banner elements
    const animateBanner = () => {
      if (bannerRef.current) {
        bannerRef.current.classList.add('banner-loaded');
      }
      if (titleRef.current) {
        setTimeout(() => {
          titleRef.current.classList.add('title-loaded');
        }, 300);
      }
    };
    
    // Create floating particles effect - optimized for different screen sizes
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      const container = particlesRef.current;
      
      // Determine particle count based on screen width
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile ? 10 : 20;
      
      // Clear existing particles
      container.innerHTML = '';
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        
        // Smaller particles on mobile
        const size = isMobile ? 
          (Math.random() * 6 + 3) : // 3-9px on mobile
          (Math.random() * 10 + 5); // 5-15px on desktop
        
        // Random position - keep particles more in view on mobile
        const posX = isMobile ? 
          (10 + Math.random() * 80) : // 10-90% on mobile (avoid edges)
          (Math.random() * 100);      // 0-100% on desktop
        
        const posY = isMobile ? 
          (10 + Math.random() * 80) : // 10-90% on mobile (avoid edges)
          (Math.random() * 100);      // 0-100% on desktop
        
        // Faster animations on mobile for better effect
        const duration = isMobile ? 
          (Math.random() * 8 + 8) :  // 8-16s on mobile
          (Math.random() * 10 + 10); // 10-20s on desktop
        
        // Random delay
        const delay = Math.random() * 5;
        
        // Set styles
        particle.style.position = 'absolute';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.borderRadius = '50%';
        
        // Thinner borders on mobile
        const borderWidth = isMobile ? '0.5px' : '1px';
        particle.style.border = `${borderWidth} solid ${Math.random() > 0.5 ? '#BBA84E40' : '#DCDFE040'}`;
        
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        // Lower opacity on mobile
        particle.style.opacity = isMobile ? '0.2' : '0.3';
        
        container.appendChild(particle);
      }
    };
    
    animateBanner();
    createParticles();
    
    // Cleanup function
    return () => {
      if (particlesRef.current) {
        particlesRef.current.innerHTML = '';
      }
    };
  }, [pathname]);

  return (
    <div ref={bannerRef} className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] w-full page-banner relative overflow-hidden">
      {/* Animated background with overlay */}
      <img
        loading="lazy"
        src={bannerImg}
        className="absolute h-full w-full object-cover object-center z-0 scale-105 transition-transform duration-700"
        alt=""
      />
      
      {/* Stronger gradient overlay for better text visibility on all devices */}
      <div className="absolute h-full w-full bg-gradient-to-b from-[#000000cc] via-[#00000099] to-[#000000cc]"></div>
      
      {/* Futuristic grid pattern overlay */}
      <div className="absolute h-full w-full opacity-10 ai-grid-bg"></div>
      
      {/* Particles container - reduced for mobile */}
      <div ref={particlesRef} className="absolute h-full w-full z-[1]"></div>
      
      {/* Decorative elements - optimized for mobile */}
      <div className="absolute top-3 left-3 sm:top-5 md:top-10 sm:left-5 md:left-10 w-16 sm:w-20 md:w-32 h-16 sm:h-20 md:h-32 border border-[#BBA84E] rounded-full opacity-10 ai-pulse"></div>
      <div className="absolute bottom-3 right-3 sm:bottom-5 md:bottom-10 sm:right-5 md:right-10 w-16 sm:w-24 md:w-40 h-16 sm:h-24 md:h-40 border border-[#DCDFE0] rounded-full opacity-10 ai-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Content container with better mobile positioning */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          ref={titleRef} 
          className="z-10 w-full max-w-[90%] md:max-w-[80%] flex flex-col items-center opacity-0 transition-all duration-700 py-6 px-4 sm:px-6 md:px-10 bg-[#00000040] backdrop-blur-[2px] rounded-xl border border-[#ffffff10] service-banner-content"
        >
          {/* Service icon and title - better mobile layout */}
          <div className="w-full flex flex-col items-center mb-4 sm:mb-6">
            {/* Icon with glow effect */}
            <div className="relative mb-4 sm:mb-5">
              <div className="absolute w-20 h-20 rounded-full bg-[#BBA84E30] filter blur-lg ai-pulse"></div>
              <img 
                src={service?.icon} 
                alt={title} 
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain relative z-10 p-2 sm:p-3 bg-[#00000040] rounded-full border border-[#BBA84E40]" 
              />
            </div>
            
            {/* Title with better visibility */}
            <h1 
              data-aos="fade-up" 
              className="heading text-white text-center relative ai-glitch text-2xl sm:text-3xl md:text-4xl font-bold" 
              data-text={title}
            >
              {title}
              <span className="absolute -bottom-3 left-0 right-0 mx-auto w-[100px] sm:w-[150px] h-[3px] bg-[#BBA84E] ai-shimmer"></span>
            </h1>
          </div>
          
          {/* Description - added for context */}
          <p className="text-gray-200 text-center max-w-[600px] mb-6 text-sm sm:text-base hidden sm:block">
            {service?.shortDesc || "Innovative AI-powered solutions tailored to meet your business needs and drive digital transformation."}
          </p>
          
          {/* Breadcrumbs - improved for all screen sizes */}
          <div
            data-aos="fade-up"
            className="text-sm sm:text-base font-medium px-4 sm:px-5 py-2 sm:py-3 w-fit flex flex-wrap justify-center text-white items-center gap-2 sm:gap-3 bg-[#00000080] backdrop-blur-sm rounded-full border border-[#BBA84E30] shadow-lg"
          >
            <Link to="/" className="hover:text-[#BBA84E] transition-colors duration-300">Home</Link>
            <FiArrowRight className="text-[#BBA84E] text-xs sm:text-sm" />
            <Link to="/services" className="hover:text-[#BBA84E] transition-colors duration-300">Services</Link>
            <FiArrowRight className="text-[#BBA84E] text-xs sm:text-sm" />
            <span className="text-[#BBA84E] font-bold truncate max-w-[120px] sm:max-w-none">{title}</span>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-[#00000080] to-transparent"></div>
    </div>
  );
};

export default ServiceDetailsBanner;
