import React from "react";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const ServiceItemCard = ({ item }) => {
  return (
    <Link
      to={item.link}
      className="h-full flex flex-col justify-between gap-5 bg-white hover:shadow-2xl transition-all duration-300 hover:bg-primary group rounded-lg border border-[#DCDFE030] p-5 ai-card relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 circuit-bg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
      
      {/* Glowing border effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#BBA84E50] to-[#DCDFE050] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      </div>
      
      <div className="flex flex-col gap-4 items-start relative z-10">
        <div className="relative">
          {/* Glowing circle behind icon */}
          <div className="absolute inset-0 rounded-full bg-[#BBA84E20] filter blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
          
          <div className="group-hover:scale-[120%] transition-all duration-300 w-[4rem] h-[4rem] p-3 rounded-full bg-[#BBA84E10] flex items-center justify-center relative z-10 ai-float">
            <img
              width="75"
              height="75"
              loading="lazy"
              src={item.icon}
              alt="icon"
              className="group-hover:scale-[120%] transition-all duration-300 w-[3rem] grayscale group-hover:grayscale-0"
            />
          </div>
          
          {/* Animated rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#BBA84E30] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ai-pulse"></div>
        </div>
        
        <div className="space-y-2">
          <h6 className="font-medium text-lg group-hover:text-white relative inline-block">
            {item.title}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </h6>
          
          <p className="text-gray-700 group-hover:text-white/90 text-md leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
      
      <div className="relative z-10">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#DCDFE030] to-transparent mb-3 group-hover:via-white/30 transition-colors duration-300"></div>
        
        <Link
          to={item.link}
          className="text-[#BBA84E] group-hover:text-white transition-all duration-300 text-md flex gap-2 items-center"
        >
          <span className="group-hover:translate-x-1 transition-transform duration-300">Know More</span> 
          <PiCaretDoubleRightBold className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
      
      {/* Tech indicator */}
      <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#BBA84E10] border border-[#BBA84E30] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg className="w-3 h-3 text-[#BBA84E] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      </div>
    </Link>
  );
};

export default ServiceItemCard;
