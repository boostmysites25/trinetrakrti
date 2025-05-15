import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo/logo1.png";
import { Link, useLocation } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import { RiRobot2Line } from "react-icons/ri";
import { websitePagesLinks } from "../../data/constant";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? "bg-white/80 backdrop-blur-md shadow-md" 
        : "bg-white/50 backdrop-blur-sm"
    } text-primary`}>
      {/* Decorative header line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#BBA84E50] to-transparent"></div>
      
      <div className="flex wrapper items-center gap-8 justify-between relative">
        {/* Animated circuit pattern */}
        <div className="absolute inset-0 ai-circuit-bg opacity-5"></div>
        
        <Link
          to="/"
          className="cursor-pointer relative"
        >
          {/* Logo glow effect */}
          <div className="absolute -inset-1 bg-[#BBA84E20] rounded-full filter blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <img
            loading="lazy"
            src={logo}
            alt="logo"
            width="auto"
            height="auto"
            className="h-[5rem] md:h-[6.5rem] object-contain relative z-10"
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          {websitePagesLinks.map((item, index) => (
            <Link
              className={`${
                pathname === item.link 
                  ? "text-[#BBA84E] font-medium" 
                  : "text-gray-700 hover:text-[#BBA84E]"
              } text-sm cursor-pointer transition-all duration-300 relative group overflow-hidden`}
              key={item.id}
              to={item.link}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Underline animation */}
              <span className="relative z-10">{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#BBA84E] group-hover:w-full transition-all duration-300"></span>
              
              {/* Active indicator */}
              {pathname === item.link && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-[#BBA84E] ai-pulse"></span>
              )}
            </Link>
          ))}
          
          {/* AI indicator */}
          <div className="flex items-center gap-1 text-xs text-[#BBA84E] bg-[#BBA84E10] px-3 py-1 rounded-full border border-[#BBA84E30]">
            <RiRobot2Line className="text-sm ai-pulse" />
            <span>AI Powered</span>
          </div>
        </div>
        
        <div
          className="block lg:hidden justify-self-end relative z-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Hamburger
            color="#BBA84E"
            size="26"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </div>
      </div>
      
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        className="z-10 p-2 bg-gradient-to-br from-white to-[#DCDFE010] backdrop-blur-md"
      >
        {/* Drawer background pattern */}
        <div className="absolute inset-0 ai-dots-bg opacity-10"></div>
        
        <div className="mb-6 flex items-center justify-between pr-[.7rem] py-[.4rem] relative">
          <img
            src={logo}
            width="auto"
            height="auto"
            alt="logo"
            className="h-[2.5rem] object-contain"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#BBA84E] text-[2.2rem] hover:rotate-90 transition-all duration-300"
          >
            <IoMdClose />
          </button>
        </div>
        
        <div className="py-4 px-7 flex flex-col gap-4 ai-stagger">
          {websitePagesLinks.map(({ label, link, id }, index) => (
            <Link
              onClick={() => setIsOpen(false)}
              key={id}
              className={`${
                pathname === link 
                  ? "text-[#BBA84E] font-medium" 
                  : "text-gray-700"
              } text-xl transition-all duration-300 hover:translate-x-2 flex items-center gap-2 ai-reveal from-right`}
              to={link}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pathname === link && <span className="w-2 h-2 rounded-full bg-[#BBA84E] ai-pulse"></span>}
              {label}
            </Link>
          ))}
          
          {/* AI indicator in mobile menu */}
          <div className="flex items-center gap-2 text-sm text-[#BBA84E] bg-[#BBA84E10] px-4 py-2 rounded-full border border-[#BBA84E30] self-start mt-4">
            <RiRobot2Line className="text-lg ai-pulse" />
            <span>AI Powered Solutions</span>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
