import React, { useEffect } from "react";
import Header from "../../components/LandingPages/Header";
import Banner from "../../components/LandingPages/Banner";
import Services from "../../components/LandingPages/Services";
import Development from "../../components/LandingPages/Development";
import Experience from "../../components/Experience";
import Testimonials from "../../components/Testimonials";
import AssociatedWith from "../../components/AssociatedWith";
import Footer from "../../components/Footer";
import LeadForm from "../../components/LeadForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { industriesCompanyServe } from "../../data/constant";
import WorkFlow from "../../components/WorkFlow";
import InquiryForm from "../../components/InquiryForm";
import Portfolio from "../../components/Portfolio";
import SEOMetaTags from "../../components/SEOMetaTags";
import { seoData } from "../../data/seoData";

const LandingPage = ({ page }) => {
  // Add scroll animation effect for elements with ai-reveal class
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".ai-reveal");

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine which SEO data to use based on the page prop
  const getSeoData = () => {
    if (page === "web-development") {
      return seoData.webDevelopmentLanding;
    } else if (page === "app-development") {
      return seoData.appDevelopmentLanding;
    }
    // Default to web development if no match
    return seoData.webDevelopmentLanding;
  };

  return (
    <div className="landing-bg ai-gradient-bg">
      <SEOMetaTags 
        title={getSeoData().title}
        description={getSeoData().description}
        keywords={getSeoData().keywords}
        canonicalUrl={getSeoData().canonicalUrl}
      />
      {/* Floating particles for futuristic effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-secondary/10 ai-float"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 3}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <WhatsAppIcon />
      <Header />
      <Banner page={page} />

      <div className="pt-[2rem] relative">
        {/* Decorative circuit pattern */}
        <div className="absolute inset-0 circuit-bg opacity-10 z-0"></div>
        <InquiryForm />
      </div>
      <div className="mt-[4rem]">
        <Services page={page} />
      </div>
      <Development page={page} />
      <Portfolio page={page} />
      <div className="wrapper py-[4rem] flex flex-col gap-6 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 ai-dots-bg opacity-30 z-0"></div>
        <div
          className="absolute -right-20 -top-20 w-64 h-64 rounded-full border border-secondary/10 ai-rotate opacity-30"
          style={{ animationDuration: "25s" }}
        ></div>
        <div
          className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full border border-secondary/5 ai-rotate opacity-20"
          style={{ animationDuration: "40s" }}
        ></div>

        <div className="flex flex-col gap-3 relative z-10">
          <div data-aos="fade-up" className="ai-decorative-line mx-auto">
            <h6 className="font-medium text-secondary ai-gradient-text">
              Our Expertise
            </h6>
          </div>
          <h2
            data-aos="fade-up"
            className="text-[2rem] md:text-4xl leading-tight font-semibold text-center relative"
          >
            <span className="relative inline-block">
              Industries We Serve
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-secondary/20"></span>
            </span>
          </h2>
          <p
            data-aos="fade-up"
            className="mt-2 text-center mb-3 max-w-2xl mx-auto"
          >
            We cater to a wide range of industries, delivering tailored AI and
            tech solutions to meet specific needs:
          </p>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-7 relative z-10">
          {industriesCompanyServe.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="p-5 rounded-lg shadow-lg relative group overflow-hidden min-h-[12rem] ai-card border border-secondary/10 backdrop-blur-sm"
            >
              {/* Glowing corner accent */}
              <div className="absolute top-0 right-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-1 h-10 bg-secondary/30"></div>
                <div className="absolute top-0 right-0 w-10 h-1 bg-secondary/30"></div>
              </div>

              <img
                loading="lazy"
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover absolute top-0 left-0 rounded group-hover:scale-110 transition-all duration-500"
              />

              <div className="w-full h-full absolute top-0 left-0 bg-white/70 group-hover:bg-black/70 transition-all duration-500 backdrop-blur-sm"></div>

              <div className="relative z-10 h-full flex flex-col">
                <p className="text-center text-[1.3rem] font-medium relative z-10 group-hover:text-white transition-all duration-300">
                  {item.title}
                </p>

                <div className="w-12 h-1 bg-secondary/50 mx-auto my-2 group-hover:w-20 transition-all duration-500"></div>

                <p className="text-gray-800 text-md mt-2 relative z-10 group-hover:text-white transition-all duration-300 flex-grow">
                  {item.desc}
                </p>
              </div>

              {/* Bottom glowing accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
      <WorkFlow page={page} />
      <Experience />
      <Testimonials />

      {/* Add a divider with AI styling */}
      <div className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 ai-dots-bg opacity-20"></div>
        <div className="wrapper">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
        </div>
      </div>

      <LeadForm />
      <AssociatedWith />

      {/* Add a floating tech indicators section */}
      {/* <div className="relative py-16 overflow-hidden bg-gradient-to-b from-transparent to-white/5">
        <div className="absolute inset-0 circuit-bg opacity-10"></div>
        <div className="wrapper">
          <div className="ai-decorative-line mx-auto mb-6">
            <h6 className="font-medium text-secondary ai-gradient-text">
              Technologies We Use
            </h6>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {[
              "React",
              "Node.js",
              "Python",
              "AI/ML",
              "AWS",
              "MongoDB",
              "Flutter",
              "Firebase",
            ].map((tech, index) => (
              <div
                key={index}
                className="ai-card px-6 py-3 text-center ai-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <Footer />

      {/* Add a back-to-top button */}
      {/* <button 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg hover:bg-secondary/80 transition-all duration-300 z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button> */}
    </div>
  );
};

export default LandingPage;
