import React, { useEffect, useState } from "react";
import bannerImg from "../../assets/images/landingpages/banner-bg.webp";
import robot from "../../assets/images/landingpages/ai-robot.png";
import gsap from "gsap";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

const Banner = ({ page }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after a small delay for entrance animation
    setTimeout(() => setIsLoaded(true), 300);

    // Robot floating animation
    const tl = gsap.timeline();
    tl.to("#robot", {
      translateY: -80,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Particle animation for futuristic effect
    const particleContainer = document.getElementById("particle-container");
    if (particleContainer) {
      for (let i = 0; i < 30; i++) {
        createParticle(particleContainer);
      }
    }

    return () => {
      tl.kill();
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
      className={`min-h-screen w-full relative flex justify-center bg-cover bg-center bg-no-repeat ai-grid-bg overflow-hidden ${
        isLoaded ? "banner-loaded" : ""
      }`}
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Particle container for floating elements */}
      <div
        id="particle-container"
        className="absolute inset-0 z-0 overflow-hidden"
      ></div>

      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-secondary/20 ai-rotate opacity-50"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border border-secondary/10 ai-rotate opacity-30"
        style={{ animationDuration: "20s" }}
      ></div>

      {/* Glowing orb */}
      <div className="absolute top-1/3 right-1/3 w-8 h-8 rounded-full bg-secondary/30 ai-pulse"></div>

      <div className="wrapper w-full pt-[10rem] pb-[5rem] flex flex-col-reverse lg:grid grid-cols-[60%_40%] items-center gap-5 relative z-10">
        <div className="flex flex-col gap-6 items-start justify-center">
          <div data-aos="fade-right" className="ai-decorative-line">
            <h6 className="font-medium text-secondary ai-gradient-text">
              {isWeb ? "Web Development" : "App Development"}
            </h6>
          </div>

          <h1
            data-aos="fade-right"
            className="text-[2.5rem] md:text-5xl font-bold leading-tight relative"
          >
            <span className="relative inline-block">
              <span className="relative z-10">TrinetraKrti - </span>
            </span>
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
          </h1>

          <p
            data-aos="fade-right"
            className="text-sm text-gray-600 max-w-3xl backdrop-blur-sm bg-white/5 p-4 rounded-lg border-l-2 border-secondary/30"
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

          {/* Tech stack indicators */}
          <div className="flex gap-3 mt-4 ai-stagger">
            {["React", "Node.js", "AI", "Mobile", "Cloud"].map(
              (tech, index) => (
                <div
                  key={index}
                  className="ai-fade-in text-xs bg-white/10 backdrop-blur-sm border border-secondary/20 px-2 py-1 rounded-full text-gray-600"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>

        <div className="relative">
          {/* Decorative ring around robot */}
          <div
            className="absolute inset-0 border-2 border-dashed border-secondary/20 rounded-full ai-rotate"
            style={{ animationDuration: "15s" }}
          ></div>

          {/* Robot image with enhanced animation */}
          <div
            data-aos="fade-left"
            className="lg:pl-5 lg:pt-4 lg:pb-2 w-fit relative"
          >
            <div className="absolute inset-0 bg-secondary/5 rounded-full filter blur-xl"></div>
            <img
              loading="lazy"
              id="robot"
              src={robot}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              alt="AI Robot"
              width="600"
              height="400"
              className="h-[30vh] lg:h-[40vh] w-full object-contain relative z-10"
            />

            {/* Glowing dots around robot */}
            <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-secondary ai-pulse"></div>
            <div
              className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-secondary ai-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12 md:h-16"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white/10"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Banner;
