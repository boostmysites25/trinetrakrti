import React, { useEffect, useRef } from "react";
import ServiceDetailsBanner from "./ServiceDetailsBanner";
import { Link, Outlet, useLocation } from "react-router-dom";
import { services, companyDetails } from "../../data/constant";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../Footer";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import Header from "./Header";
import SolveITNeeds from "./SolveITNeeds";
import { RiRobot2Line } from "react-icons/ri";
import { MdOutlineWavingHand } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

const ServicePageLayout = () => {
  const { pathname } = useLocation();
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Add scroll animation for elements
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elements = document.querySelectorAll(".animate-on-scroll");

      elements.forEach((element) => {
        const elementPosition =
          element.getBoundingClientRect().top + scrollPosition;
        const offset = window.innerHeight * 0.8;

        if (scrollPosition > elementPosition - offset) {
          element.classList.add("animate-active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <ServiceDetailsBanner />
      <div className="wrapper relative">
        {/* AI-themed decorative elements */}
        <div className="absolute top-20 left-0 w-32 h-32 bg-[#C7AC5F10] rounded-full blur-3xl ai-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-[#DCDFE010] rounded-full blur-3xl ai-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Circuit-like lines */}
        <div className="hidden lg:block absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#C7AC5F30] to-transparent"></div>
        <div className="hidden lg:block absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#DCDFE030] to-transparent"></div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 ai-circuit-bg opacity-5"></div>

        {/* Floating tech elements - hidden on mobile for better performance */}
        <div className="hidden sm:block absolute top-[30%] right-[5%] w-16 h-16 ai-hexagon border border-[#C7AC5F30] opacity-20 ai-float"></div>
        <div
          className="hidden sm:block absolute bottom-[20%] left-[5%] w-12 h-12 ai-hexagon border border-[#DCDFE030] opacity-20 ai-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="pt-[3rem] sm:pt-[5rem] pb-[1rem] grid md:grid-cols-[30%_65%] gap-5 sm:gap-10 relative z-10">
          <div className="w-full hidden md:flex flex-col gap-10">
            <div
              ref={servicesRef}
              className="bg-gradient-to-br from-[#DCDFE010] to-[#DCDFE030] backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-lg border border-[#DCDFE030] shadow-lg ai-reveal from-left"
            >
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="relative">
                  <RiRobot2Line className="text-[#C7AC5F] text-xl sm:text-2xl relative z-10" />
                  <div className="absolute inset-0 bg-[#C7AC5F20] rounded-full filter blur-md w-6 h-6 sm:w-8 sm:h-8 -top-1 -left-1 sm:-top-2 sm:-left-2 ai-pulse"></div>
                </div>
                <h4 className="text-xl sm:text-2xl font-medium ai-gradient-text">
                  Our AI Solutions
                </h4>
              </div>

              <div className="mt-3 sm:mt-5 flex flex-wrap md:flex-col gap-2 sm:gap-3 ">
                {services.map((item, index) => (
                  <Link
                    key={item.id}
                    className={`${
                      item.link === pathname
                        ? "bg-[#C7AC5F] text-white"
                        : "bg-[#DCDFE020] text-black hover:bg-[#C7AC5F20]"
                    } flex items-center gap-2 justify-between p-3 rounded-md backdrop-blur-sm transition-all duration-300 border border-[#DCDFE040] group`}
                    to={item.link}
                  >
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <img
                          loading="lazy"
                          src={item.icon}
                          alt={item.title}
                          className="min-w-5 w-5 h-5 object-contain relative z-10"
                        />
                        {item.link === pathname && (
                          <div className="absolute inset-0 bg-white rounded-full filter blur-sm w-6 h-6 -top-0.5 -left-0.5 ai-pulse"></div>
                        )}
                      </div>
                      <span>{item.title}</span>
                    </div>
                    <PiCaretDoubleRightBold
                      className={`text-md ${
                        item.link === pathname
                          ? "text-white"
                          : "text-[#C7AC5F] group-hover:translate-x-1"
                      } transition-all duration-300`}
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div
              ref={contactRef}
              className="text-center bg-gradient-to-br from-[#ffffff] to-[#00000070] flex flex-col items-center gap-5 text-white px-4 lg:px-6 py-10 rounded-lg shadow-lg backdrop-blur-sm ai-reveal from-bottom"
            >
              {/* Decorative tech circles */}
              <div className="absolute -top-3 -right-3 w-10 h-10 border border-[#C7AC5F30] rounded-full opacity-30 ai-float"></div>
              <div
                className="absolute -bottom-3 -left-3 w-8 h-8 border border-[#DCDFE030] rounded-full opacity-30 ai-float"
                style={{ animationDelay: "1.2s" }}
              ></div>

              <div className="w-[3.5rem] h-[3.5rem] bg-[#C7AC5F] text-white rounded-full p-3 flex justify-center items-center shadow-lg relative">
                <MdOutlineWavingHand className="text-3xl ai-pulse" />
                <div
                  className="absolute inset-0 rounded-full bg-[#C7AC5F50] ai-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>

              <h4 className="text-2xl font-medium ai-gradient-text">
                Need AI Assistance?
              </h4>

              <p className="font-semibold text-black/60 relative">
                <span className="absolute -left-6 top-1/2 w-4 h-[1px] bg-[#C7AC5F50]"></span>
                {companyDetails.phone}
                <span className="absolute -right-6 top-1/2 w-4 h-[1px] bg-[#C7AC5F50]"></span>
              </p>

              <Link
                to={`tel:${companyDetails.phone}`}
                className="ai-button w-full py-3 group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Connect Now</span>
                  <IoIosArrowRoundForward className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>

          <div className="w-full relative">
            {/* Decorative tech elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 border border-[#C7AC5F30] rounded-full opacity-20 ai-float"></div>
            <div
              className="absolute -bottom-10 -right-10 w-20 h-20 border border-[#DCDFE030] rounded-full opacity-20 ai-float"
              style={{ animationDelay: "1.5s" }}
            ></div>

            {/* Content wrapper with subtle glow */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C7AC5F10] via-transparent to-[#DCDFE010] rounded-xl blur-xl opacity-50"></div>
              <div className="relative z-10">
                <Outlet />
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-br from-[#00000090] to-[#00000070] md:hidden flex flex-col items-center gap-3 sm:gap-5 text-white px-4 py-6 sm:py-10 rounded-lg border border-[#DCDFE020] shadow-lg backdrop-blur-sm ai-reveal from-bottom">
            {/* Decorative tech circles - simplified for mobile */}
            <div className="hidden sm:block absolute -top-3 -right-3 w-10 h-10 border border-[#C7AC5F30] rounded-full opacity-30 ai-float"></div>
            <div
              className="hidden sm:block absolute -bottom-3 -left-3 w-8 h-8 border border-[#DCDFE030] rounded-full opacity-30 ai-float"
              style={{ animationDelay: "1.2s" }}
            ></div>

            <div className="w-[3rem] sm:w-[3.5rem] h-[3rem] sm:h-[3.5rem] bg-[#C7AC5F] text-white rounded-full p-2 sm:p-3 flex justify-center items-center shadow-lg relative">
              <MdOutlineWavingHand className="text-2xl sm:text-3xl ai-pulse" />
              <div
                className="absolute inset-0 rounded-full bg-[#C7AC5F50] ai-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>

            <h4 className="text-xl sm:text-2xl font-medium ai-gradient-text">
              Need AI Assistance?
            </h4>

            <p className="font-semibold text-[#DCDFE0] relative text-sm sm:text-base">
              <span className="hidden sm:block absolute -left-6 top-1/2 w-4 h-[1px] bg-[#C7AC5F50]"></span>
              {companyDetails.phone}
              <span className="hidden sm:block absolute -right-6 top-1/2 w-4 h-[1px] bg-[#C7AC5F50]"></span>
            </p>

            <Link
              to={`tel:${companyDetails.phone}`}
              className="ai-button w-full py-2 sm:py-3 group mt-2"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Connect Now</span>
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <SolveITNeeds />
      <Footer />
    </>
  );
};

export default ServicePageLayout;
