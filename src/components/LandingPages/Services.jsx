import React from "react";
import {
  appDevelopmentServices,
  webDevelopmentServices,
} from "../../data/constant";

const Services = ({ page }) => {
  const isWeb = page === "web-development";
  const services = isWeb ? webDevelopmentServices : appDevelopmentServices;

  return (
    <div
      id="services"
      className="w-screen min-h-[70vh] flex justify-center relative pt-[3rem] overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="blurred-blue left-[-10%] top-[-10%] opacity-60"></div>
      <div className="absolute inset-0 ai-grid-pattern opacity-20"></div>

      {/* Decorative elements */}
      <div
        className="absolute top-20 right-10 w-32 h-32 border border-secondary/20 rounded-full ai-rotate"
        style={{ animationDuration: "30s" }}
      ></div>
      <div
        className="absolute bottom-20 left-10 w-48 h-48 border border-secondary/10 rounded-full ai-rotate"
        style={{ animationDuration: "40s", animationDirection: "reverse" }}
      ></div>

      <div className="wrapper py-16 flex flex-col items-center gap-8 z-10">
        <div data-aos="fade-up" className="ai-decorative-line">
          <h6 className="font-medium text-secondary ai-gradient-text">
            {isWeb ? "Web Development Services" : "App Development Services"}
          </h6>
        </div>

        <h1
          data-aos="fade-up"
          className="text-[2rem] md:text-4xl leading-tight font-semibold text-center max-w-3xl relative"
        >
          <span className="relative inline-block">
            {isWeb
              ? "Cutting-Edge Web Development Services for High-Performance Websites"
              : "Cutting-Edge App Development Services for Engaging Mobile Applications"}
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-secondary/20"></span>
          </span>
        </h1>

        <p data-aos="fade-up" className="text-center max-w-2xl text-gray-600">
          {isWeb
            ? "High-performance web development services designed to deliver secure, scalable, and user-friendly websites that elevate your business's online presence and engage your audience."
            : "High-performance app development services designed to deliver secure, scalable, and user-friendly applications that elevate your business's digital reach and engage your audience."}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto max-w-6xl w-full">
          {services.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="ai-card group flex flex-col gap-4 items-start p-6 relative overflow-hidden transition-all duration-500 hover:translate-y-[-5px]"
            >
              {/* Glowing corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-1 h-16 bg-secondary/30"></div>
                <div className="absolute top-0 right-0 w-16 h-1 bg-secondary/30"></div>
              </div>

              {/* Service icon with animation */}
              <div className="w-[4.5rem] h-[4.5rem] rounded-lg bg-white/80 shadow-lg flex items-center justify-center relative overflow-hidden group-hover:shadow-secondary/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  loading="lazy"
                  src={item.icon}
                  alt={item.title}
                  className="w-[2.5rem] grayscale transition-all duration-500 group-hover:scale-110"
                />

                {/* Animated border on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary group-hover:w-full transition-all duration-700"></div>
              </div>

              {/* Service title with animated underline */}
              <div className="relative">
                <h6 className="font-semibold text-lg text-gray-800">
                  {item.title}
                </h6>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-500"></div>
              </div>

              {/* Service description */}
              <p className="text-gray-600 text-sm">{item.description}</p>

              {/* Bottom glowing accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white/5"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Services;
