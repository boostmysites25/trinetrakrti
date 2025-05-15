import React from "react";
import developmentImg from "../../assets/images/landingpages/development-1.webp";

const Development = ({ page }) => {
  const isWeb = page === "web-development";
  return (
    <div className="w-screen min-h-[70vh] flex justify-center relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="blurred-blue right-[-10%] bottom-[-10%] opacity-70"></div>
      <div className="absolute inset-0 ai-dots-bg opacity-20"></div>

      {/* Decorative elements */}
      <div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-secondary/10 ai-rotate opacity-30"
        style={{ animationDuration: "35s" }}
      ></div>
      <div
        className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full border border-secondary/20 ai-rotate opacity-20"
        style={{ animationDuration: "25s", animationDirection: "reverse" }}
      ></div>

      <div className="wrapper py-16 flex flex-col items-center gap-8 z-10">
        <div data-aos="fade-right" className="ai-decorative-line">
          <h6 className="font-medium text-secondary ai-gradient-text">
            {isWeb ? "Web Development" : "App Development"}
          </h6>
        </div>

        <div className="wrapper grid md:grid-cols-[50%_40%] items-center gap-10 mt-4">
          {/* Image with enhanced styling */}
          <div
            className="relative w-full h-full group aspect-video"
            data-aos="fade-right"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-2 border border-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Glowing dots */}
            <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-secondary ai-pulse"></div>
            <div
              className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-secondary ai-pulse"
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Main image with hover effects */}
            <div className="rounded-lg w-full aspect-video h-full shadow-xl">
              <img
                loading="lazy"
                src={developmentImg}
                alt="development"
                className="w-full h-full object-cover rounded-lg transition-all duration-700 group-hover:scale-105"
              />

              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg"></div>
            </div>

            {/* Tech indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {["React", "Node.js", "AI"].map((tech, index) => (
                <div
                  key={index}
                  className="text-xs bg-white shadow-md border border-secondary/10 px-2 py-1 rounded-full text-gray-600 ai-float"
                  style={{ animationDelay: `${0.5 + index * 0.2}s` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Content with enhanced styling */}
          <div data-aos="fade-left" className="flex flex-col gap-6 relative">
            {/* Decorative circuit lines */}
            <div className="absolute -left-4 top-0 bottom-0 w-1 border-l border-dashed border-secondary/30"></div>
            <div className="absolute -left-4 top-1/4 w-4 border-t border-dashed border-secondary/30"></div>
            <div className="absolute -left-4 bottom-1/4 w-4 border-t border-dashed border-secondary/30"></div>

            <h2 className="text-[2rem] md:text-4xl leading-tight font-semibold relative">
              <span className="block mt-1">
                Crafting Exceptional Digital Experiences
              </span>
            </h2>

            <p className="text-gray-600 backdrop-blur-sm bg-white/5 p-4 rounded-lg border-l-2 border-secondary/30 relative">
              {isWeb
                ? "Unlock the full potential of your brand with our custom web development solutions. We build responsive, user-friendly websites tailored to your business goals—designed to boost engagement, improve user experience, and drive conversions. From eye-catching designs to smooth functionality, our websites help your business stand out, rank higher on search engines, and convert visitors into loyal customers."
                : "Transform your ideas into powerful mobile applications designed to meet your unique business needs. We craft visually stunning, high-performance apps that offer seamless functionality and exceptional user experiences across iOS and Android platforms. With a focus on innovation, quality, and scalability, our mobile app solutions help you captivate users, boost retention, and achieve measurable business growth."}

              {/* Decorative dot */}
              <div className="absolute -left-[9px] top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-secondary/20 border-2 border-white"></div>
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                { title: "Custom Solutions", icon: "🔧" },
                { title: "Responsive Design", icon: "📱" },
                { title: "Performance Focused", icon: "⚡" },
                { title: "SEO Optimized", icon: "🔍" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 ai-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <span className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-sm">
                    {feature.icon}
                  </span>
                  <span className="text-sm font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
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
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".05"
            className="fill-secondary"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".05"
            className="fill-secondary"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Development;
