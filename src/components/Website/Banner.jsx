import React, { useEffect, useRef } from "react";
import bannerImg from "../../assets/images/landingpages/banner-bg.webp";
import { Link } from "react-router-dom";
import robot from "../../assets/images/landingpages/ai-robot.png";
import gsap from "gsap";
import AIBackground from "../../components/AIBackground";

const Banner = () => {
  const titleRef = useRef(null);
  const robotRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Robot animation
    const tl = gsap.timeline();
    tl.to("#robot", {
      translateY: -80,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
    
    // Typing animation for title
    if (titleRef.current) {
      setTimeout(() => {
        titleRef.current.classList.add('ai-typing');
        setTimeout(() => {
          titleRef.current.classList.remove('ai-typing');
        }, 4000);
      }, 1000);
    }
    
    // Parallax effect on mouse move
    const handleMouseMove = (e) => {
      if (!containerRef.current || !robotRef.current) return;
      
      const container = containerRef.current.getBoundingClientRect();
      const robotElement = robotRef.current;
      
      // Calculate mouse position relative to container center
      const mouseX = e.clientX - container.left - container.width / 2;
      const mouseY = e.clientY - container.top - container.height / 2;
      
      // Apply subtle movement to robot
      gsap.to(robotElement, {
        x: mouseX * 0.02,
        y: mouseY * 0.02,
        duration: 0.5,
        ease: "power1.out"
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      tl.kill();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div
      id="banner"
      className="min-h-screen w-full relative flex justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${bannerImg})` }}
      ref={containerRef}
    >
      {/* Overlay with AI particles */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      <AIBackground intensity="medium" className="absolute inset-0" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-40 h-40 border border-[#BBA84E30] rounded-full opacity-20 ai-float"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 border border-[#DCDFE030] rounded-full opacity-20 ai-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 ai-hexagon border border-[#BBA84E30] opacity-20 ai-rotate"></div>
      
      {/* Circuit-like grid pattern */}
      <div className="absolute inset-0 ai-grid-bg opacity-10"></div>
      
      <div className="wrapper pt-[10rem] pb-[5rem] flex flex-col-reverse lg:grid grid-cols-[60%_40%] items-center gap-5 relative z-10">
        <div className="flex flex-col gap-6 items-start justify-center">
          <div 
            data-aos="fade-right"
            className="bg-[#BBA84E10] px-4 py-2 text-[#BBA84E] text-sm rounded-full border border-[#BBA84E30] flex items-center gap-2 ai-shimmer"
          >
            <span className="w-2 h-2 rounded-full bg-[#BBA84E] ai-pulse"></span>
            <span>AI-Powered IT Services</span>
          </div>
          
          <h1
            ref={titleRef}
            data-aos="fade-right"
            className="text-[2.5rem] md:text-5xl font-bold leading-tight relative"
          >
            Welcome to TOT - <span className="ai-gradient-text">The Brain Behind AI</span>
            <span className="absolute -bottom-2 left-0 w-1/3 h-[3px] bg-gradient-to-r from-[#BBA84E] to-transparent ai-shimmer"></span>
          </h1>
          
          <p data-aos="fade-right" className="text-md text-gray-700 leading-relaxed max-w-2xl">
            At TrinetraKrti, we specialize in delivering cutting-edge AI technology
            solutions that empower businesses to thrive in the digital age. Our
            expertise spans across various domains, ensuring that your
            organization stays ahead of the curve with intelligent automation and data-driven insights.
          </p>
          
          {/* Feature highlights */}
          <div data-aos="fade-right" className="grid grid-cols-2 gap-4 mt-4 w-full max-w-xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#BBA84E10] flex items-center justify-center border border-[#BBA84E30]">
                <svg className="w-4 h-4 text-[#BBA84E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <span className="text-sm">Advanced AI Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#BBA84E10] flex items-center justify-center border border-[#BBA84E30]">
                <svg className="w-4 h-4 text-[#BBA84E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <span className="text-sm">Intelligent Automation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#BBA84E10] flex items-center justify-center border border-[#BBA84E30]">
                <svg className="w-4 h-4 text-[#BBA84E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <span className="text-sm">Data-Driven Insights</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#BBA84E10] flex items-center justify-center border border-[#BBA84E30]">
                <svg className="w-4 h-4 text-[#BBA84E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
          
          <Link
            to="/contact"
            data-aos="fade-right"
            className="ai-button group px-6 py-3 mt-8"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started with AI
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
          </Link>
        </div>
        
        <div data-aos="fade-left" className="lg:pl-5 lg:pt-4 lg:pb-2 w-fit relative">
          {/* Glowing effect behind robot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-[#BBA84E10] filter blur-3xl opacity-70 ai-pulse"></div>
          
          {/* Animated circuit lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-0 w-16 h-[1px] bg-gradient-to-r from-[#BBA84E40] to-transparent ai-shimmer"></div>
            <div className="absolute top-1/2 right-0 w-20 h-[1px] bg-gradient-to-l from-[#BBA84E40] to-transparent ai-shimmer" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-1/4 left-1/4 w-12 h-[1px] bg-gradient-to-r from-[#BBA84E40] to-transparent ai-shimmer" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div ref={robotRef} className="relative z-10">
            <img
              loading="lazy"
              id="robot"
              src={robot}
              srcSet={`${robot} 300w, ${robot} 600w, ${robot} 1200w`}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              alt="AI robot"
              width="600"
              height="400"
              className="h-[30vh] lg:h-[40vh] w-full object-contain"
            />
          </div>
          
          {/* Tech indicators */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full border border-[#BBA84E30] ai-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full border border-[#DCDFE030] ai-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
