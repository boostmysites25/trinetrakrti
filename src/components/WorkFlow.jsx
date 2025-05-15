import React from "react";
import {
  appDevelopmentWorkflow,
  generalDevelopmentWorkflow,
  webDevelopmentWorkflow,
} from "../data/constant";
import { Link } from "react-scroll";

const WorkFlow = ({ page }) => {
  let workflow;

  if (page === "web-development") {
    workflow = webDevelopmentWorkflow;
  } else if (page === "app-development") {
    workflow = appDevelopmentWorkflow;
  } else {
    workflow = generalDevelopmentWorkflow;
  }

  return (
    <div className="min-h-screen flex justify-center relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="blurred-blue left-[-10%] bottom-[-10%] opacity-70"></div>
      <div className="absolute inset-0 ai-grid-pattern opacity-20"></div>

      {/* Decorative elements */}
      <div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-secondary/10 ai-rotate opacity-30"
        style={{ animationDuration: "35s" }}
      ></div>
      <div
        className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full border border-secondary/20 ai-rotate opacity-20"
        style={{ animationDuration: "25s", animationDirection: "reverse" }}
      ></div>

      {/* Connected dots background */}
      <div className="absolute inset-0 circuit-bg opacity-10"></div>

      <div
        data-aos="fade-up"
        className="wrapper flex flex-col items-center gap-8 z-10 py-16"
      >
        <div className="ai-decorative-line">
          <h6 className="font-medium text-secondary ai-gradient-text">
            How We Build Your Success
          </h6>
        </div>

        <h2 className="heading text-center mb-5 relative">
          <span className="relative inline-block">
            Our Development Process
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-secondary/20"></span>
          </span>
        </h2>

        {/* Connected workflow line */}
        <div className="relative w-full max-w-6xl mx-auto hidden lg:block">
          <div className="absolute top-[7rem] left-[calc(16.67%-2rem)] right-[calc(16.67%-2rem)] h-1 bg-gradient-to-r from-secondary/20 via-secondary/40 to-secondary/20"></div>

          {/* Connection dots */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute top-[7rem] w-4 h-4 rounded-full bg-secondary ai-pulse"
              style={{
                left: `calc(${i * 33.33 - 16.67}% - 0.5rem)`,
                animationDelay: `${i * 0.5}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="z-10 grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl">
          {workflow.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="ai-card group relative flex flex-col gap-4 items-start p-6 overflow-hidden transition-all duration-500 hover:translate-y-[-5px]"
            >
              {/* Step number with enhanced styling */}
              <div
                className="absolute -z-0 flex justify-center items-center h-[9rem] w-[9rem] rounded-full bg-secondary/5 bottom-1 right-1 ai-rotate opacity-70"
                style={{ animationDuration: "20s" }}
              >
                <span className="text-8xl text-secondary/20 font-extrabold">
                  {item.id}
                </span>
              </div>

              {/* Glowing corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-1 h-16 bg-secondary/30"></div>
                <div className="absolute top-0 right-0 w-16 h-1 bg-secondary/30"></div>
              </div>

              {/* Icon with animation */}
              <div className="z-10 w-[4.5rem] h-[4.5rem] rounded-lg bg-white/80 shadow-lg flex items-center justify-center relative overflow-hidden group-hover:shadow-secondary/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  loading="lazy"
                  width="50"
                  height="50"
                  src={item.icon}
                  alt={item.title}
                  className="w-[2.5rem] grayscale transition-all duration-500 group-hover:scale-110"
                />

                {/* Animated border on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary group-hover:w-full transition-all duration-700"></div>
              </div>

              {/* Title with animated underline */}
              <div className="z-10 relative">
                <h6 className="font-semibold text-xl text-gray-800">
                  {item.title}
                </h6>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-500"></div>
              </div>

              {/* Description */}
              <p className="z-10 text-gray-600 text-sm">{item.description}</p>

              {/* Bottom glowing accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Connecting line for mobile */}
              {index < workflow.length - 1 && (
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-8 border-l-2 border-dashed border-secondary/30 sm:hidden"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA button */}
        <Link
          to="contact"
          smooth
          duration={500}
          spy={true}
          offset={-50}
          data-aos="fade-up"
          className="cursor-pointer mt-10 ai-button group relative overflow-hidden"
        >
          <span className="relative z-10">Start Your Project</span>
          <span className="absolute inset-0 w-full h-full bg-secondary group-hover:opacity-80 transition-opacity duration-300"></span>
        </Link>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-10"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".05"
            className="fill-secondary"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default WorkFlow;
