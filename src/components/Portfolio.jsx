import React, { useState } from "react";
import { appPortfolio, webPortfolio } from "../data/constant";
import { Link } from "react-router-dom";

const Portfolio = ({ page }) => {
  const isWebDevelopment = Boolean(page === "web-development");
  let portfolio = isWebDevelopment ? webPortfolio : appPortfolio;
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div id="portfolio" className="py-[5rem] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 ai-grid-bg opacity-20 z-0"></div>
      <div
        className="absolute -right-32 top-20 w-64 h-64 rounded-full border border-secondary/10 ai-rotate opacity-30"
        style={{ animationDuration: "30s" }}
      ></div>
      <div
        className="absolute -left-20 bottom-20 w-48 h-48 rounded-full border border-secondary/20 ai-rotate opacity-20"
        style={{ animationDuration: "40s", animationDirection: "reverse" }}
      ></div>

      <div className="wrapper relative z-10">
        <div className="flex flex-col items-center gap-6">
          <div data-aos="fade-up" className="ai-decorative-line">
            <h6 className="font-medium text-secondary ai-gradient-text">
              Portfolio
            </h6>
          </div>

          <h2 className="heading text-center mb-5 relative">
            <span className="relative inline-block">
              Few of Our Projects
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-secondary/20"></span>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
            {portfolio.map((item, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={item.id}
                className="ai-card flex flex-col rounded-lg overflow-hidden relative group w-full h-[280px] cursor-pointer"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Glowing border on hover */}
                <div
                  className={`absolute inset-0 border-2 border-secondary/0 rounded-lg transition-all duration-500 ${
                    hoveredItem === item.id ? "border-secondary/30" : ""
                  }`}
                ></div>

                {/* Project image with enhanced hover effects */}
                <div className="w-full h-full overflow-hidden">
                  <img
                    loading="lazy"
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* Overlay that appears on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6`}
                  >
                    <h3 className="font-medium text-white text-xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {item.title}
                    </h3>

                    <p className="text-white/80 text-sm mb-4 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {item.description ||
                        "A custom-built solution designed to meet specific client requirements and deliver exceptional user experiences."}
                    </p>

                    <div className="flex gap-3 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                      <Link
                        to={item.link}
                        target="_blank"
                        className="px-3 py-1 border border-white/30 text-white text-xs rounded-full hover:bg-white/10 transition-all duration-300"
                      >
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 left-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-1 h-10 bg-secondary/50"></div>
                  <div className="absolute top-0 left-0 w-10 h-1 bg-secondary/50"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white/5"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
