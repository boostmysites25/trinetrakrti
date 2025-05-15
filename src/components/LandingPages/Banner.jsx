import React, { useEffect, useRef, useState } from "react";
import bannerImg from "../../assets/images/landingpages/banner-bg.webp";
import robot from "../../assets/images/landingpages/ai-robot.png";
import gsap from "gsap";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import AIBackground from "../AIBackground";

const Banner = ({ page }) => {
  const [isLoaded, setIsLoaded] = useState(false);
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
        x: mouseX * 0.1,
        y: mouseY * 0.1,
        duration: 0.5,
        ease: "power1.out",
      });
    };

    // Particle animation for futuristic effect
    const particleContainer = document.getElementById("particle-container");
    if (particleContainer) {
      for (let i = 0; i < 30; i++) {
        createParticle(particleContainer);
      }
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      tl.kill();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Function to create floating particles
  const createParticle = (container) => {
    const particle = document.createElement("div");
    particle.className = "absolute rounded-full bg-secondary/20 ai-float";

    // Random size between 5px and 15px
    const size = Math.random() * 10 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    // Random animation duration between 3s and 8s
    particle.style.animationDuration = `${Math.random() * 5 + 3}s`;

    // Random delay
    particle.style.animationDelay = `${Math.random() * 5}s`;

    container.appendChild(particle);
  };

  const isWeb = page === "web-development";
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
      <div className="absolute top-20 left-20 w-40 h-40 border border-[#C7AC5F30] rounded-full opacity-20 ai-float"></div>
      <div
        className="absolute bottom-20 right-20 w-60 h-60 border border-[#DCDFE030] rounded-full opacity-20 ai-float"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 ai-hexagon border border-[#C7AC5F30] opacity-20 ai-rotate"></div>

      {/* Circuit-like grid pattern */}
      <div className="absolute inset-0 ai-grid-bg opacity-10"></div>

      <div className="wrapper w-full pt-[10rem] pb-[5rem] flex flex-col-reverse lg:grid grid-cols-[60%_40%] items-center gap-5 relative z-10">
        <div className="flex flex-col gap-6 items-start justify-center">
          <div
            data-aos="fade-right"
            className="bg-[#C7AC5F10] px-4 py-2 text-[#C7AC5F] text-sm rounded-full border border-[#C7AC5F30] flex items-center gap-2 ai-shimmer"
          >
            <span className="w-2 h-2 rounded-full bg-[#C7AC5F] ai-pulse"></span>
            <span>{isWeb ? "Web Development" : "App Development"}</span>
          </div>

          <h1
            // ref={titleRef}
            data-aos="fade-right"
            className="text-[2.5rem] md:text-5xl font-bold leading-tight relative"
          >
            TrinetraKrti -{" "}
            <span className="ai-gradient-text !font-bold">
              <Typewriter
                delaySpeed={2000}
                words={[
                  isWeb
                    ? " Empowering Businesses with Innovative Web Solutions"
                    : " Delivering Seamless Mobile Experiences for Your Users",
                ]}
                loop
              />
            </span>
            <span className="absolute -bottom-2 left-0 w-1/3 h-[3px] bg-gradient-to-r from-[#C7AC5F] to-transparent ai-shimmer"></span>
          </h1>

          <p
            data-aos="fade-right"
            className="text-md text-gray-700 leading-relaxed max-w-2xl"
          >
            {isWeb
              ? "Transform your online presence into an interactive canvas with our cutting-edge web development services. We craft responsive websites that captivate users, enhance brand visibility, and drive business success. Join us on this journey towards digital excellence!"
              : "At TrinetraKrti, we specialize in crafting mobile applications that redefine user experiences. With our expertise in AI-driven solutions, we empower businesses to thrive in the digital landscape. Let's embark on this exciting journey together!"}
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <Link
              smooth={true}
              to="contact"
              spy={false}
              offset={-100}
              duration={500}
              data-aos="fade-right"
              className="cursor-pointer ai-button ai-pulse group relative overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 w-full h-full bg-secondary group-hover:opacity-80 transition-opacity duration-300"></span>
            </Link>

            <Link
              data-aos="fade-right"
              data-aos-delay="100"
              smooth={true}
              to="portfolio"
              spy={false}
              offset={-100}
              duration={500}
              className="cursor-pointer border-2 border-secondary/50 text-secondary hover:bg-secondary/10 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300"
            >
              Our Portfolio
            </Link>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="lg:pl-5 lg:pt-4 lg:pb-2 w-fit relative"
        >
          {/* Glowing effect behind robot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-[#C7AC5F10] filter blur-3xl opacity-70 ai-pulse"></div>

          {/* Animated circuit lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-0 w-16 h-[1px] bg-gradient-to-r from-[#C7AC5F40] to-transparent ai-shimmer"></div>
            <div
              className="absolute top-1/2 right-0 w-20 h-[1px] bg-gradient-to-l from-[#C7AC5F40] to-transparent ai-shimmer"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/4 w-12 h-[1px] bg-gradient-to-r from-[#C7AC5F40] to-transparent ai-shimmer"
              style={{ animationDelay: "1s" }}
            ></div>
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
          <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full border border-[#C7AC5F30] ai-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full border border-[#DCDFE030] ai-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
