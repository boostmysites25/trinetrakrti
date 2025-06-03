import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Experience from "../../components/Experience";
import Testimonials from "../../components/Testimonials";
import AssociatedWith from "../../components/AssociatedWith";
import Footer from "../../components/Footer";
import LeadForm from "../../components/LeadForm";
import linktrQR from "../../assets/images/linktr-qr.png";

import {
  companyDetails,
  industriesCompanyServe,
  services,
} from "../../data/constant";
import whoWeAre from "../../assets/images/who-we-are.webp";
import ServiceItemCard from "../../components/Website/ServiceItemCard";
import { Link } from "react-router-dom";
import WorkFlow from "../../components/WorkFlow";
import AIBackground from "../../components/AIBackground";
import AIFloatingElements from "../../components/AIFloatingElements";

// Lazy load components for better performance
const Header = React.lazy(() => import("../../components/Website/Header"));
const Banner = React.lazy(() => import("../../components/Website/Banner"));

const Home = () => {
  // Animate elements on scroll
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

  return (
    <>
      <Helmet>
        <title>
          TrinetraKrti - Leading AI & Software Development Company | Custom AI
          Solutions
        </title>
        <meta
          name="description"
          content="TrinetraKrti specializes in AI-powered software development, machine learning solutions, and custom application development. Transform your business with our cutting-edge technology solutions."
        />
        <meta
          name="keywords"
          content="AI development, artificial intelligence solutions, machine learning, software development, custom applications, digital transformation, TrinetraKrti"
        />
        <meta
          property="og:title"
          content="TrinetraKrti - Leading AI & Software Development Company"
        />
        <meta
          property="og:description"
          content="Transform your business with our cutting-edge AI solutions and custom software development services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trinetrakrti.com/" />
        <link rel="canonical" href="https://trinetrakrti.com/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TrinetraKrti",
              "url": "https://trinetrakrti.com/",
              "logo": "https://trinetrakrti.com/logo.png",
              "description": "Leading AI & Software Development Company specializing in custom AI solutions and digital transformation.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "${companyDetails.address}",
                "addressLocality": "${companyDetails.city}",
                "addressRegion": "${companyDetails.state}",
                "postalCode": "${companyDetails.zipCode}",
                "addressCountry": "${companyDetails.country}"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "${companyDetails.phone}",
                "contactType": "customer service",
                "email": "${companyDetails.email}"
              },
              "sameAs": [
                "${companyDetails.socialMedia?.facebook || ""}",
                "${companyDetails.socialMedia?.twitter || ""}",
                "${companyDetails.socialMedia?.linkedin || ""}",
                "${companyDetails.socialMedia?.instagram || ""}"
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="landing-bg relative">
        {/* Floating AI elements for visual enhancement */}
        <AIFloatingElements count={20} />

        <Header />
        <Banner />

        <main>
          {/* Services Section */}
          <section
            id="services"
            className="w-screen min-h-[70vh] flex justify-center relative pt-[3rem]"
            aria-label="AI-Powered Services"
          >
            {/* Interactive particle background */}
            <AIBackground intensity="light" className="absolute inset-0" />

            <div className="blurred-blue left-[-10%] top-[-10%]"></div>
            <div className="wrapper py-10 flex flex-col items-center gap-5 z-10">
              <div data-aos="fade-up" className="ai-decorative-line">
                <h2 className="font-medium text-secondary capitalize ai-gradient-text">
                  Advanced AI Solutions
                </h2>
              </div>
              <h1
                data-aos="fade-up"
                className="heading text-center main-heading relative"
                itemProp="headline"
              >
                Transforming Businesses with Cutting-edge AI Technology
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-[3px] bg-gradient-to-r from-transparent via-[#C7AC5F] to-transparent ai-shimmer"></span>
              </h1>
              <p
                data-aos="fade-up"
                className="text-center max-w-2xl text-gray-700"
                itemProp="description"
              >
                TrinetraKrti delivers innovative AI-powered solutions that help
                businesses automate processes, gain valuable insights from data,
                and create intelligent applications that drive growth and
                efficiency.
              </p>

              {/* Key benefits section */}
              <div className="flex flex-wrap justify-center gap-4 mt-4 mb-8">
                {[
                  { icon: "⚡", text: "Increased Efficiency" },
                  { icon: "📊", text: "Data-Driven Insights" },
                  { icon: "🔄", text: "Process Automation" },
                  { icon: "💡", text: "Innovative Solutions" },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-3 py-2 rounded-full border border-[#C7AC5F20] ai-reveal"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-lg">{benefit.icon}</span>
                    <span className="text-sm font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <div
                data-aos="fade-up"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl ai-stagger"
                itemScope
                itemType="https://schema.org/ItemList"
              >
                {services.slice(0, 6).map((item, index) => (
                  <div
                    key={item.id}
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/ListItem"
                  >
                    <meta itemProp="position" content={index + 1} />
                    <ServiceItemCard item={item} />
                  </div>
                ))}
              </div>

              <div data-aos="fade-up" className="mt-10">
                <Link
                  to="/services"
                  className="ai-button group px-6 py-3"
                  aria-label="View all our AI services"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore All AI Services
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      ></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </section>

          {/* Industries Section */}
          <section
            className="wrapper py-[3rem] flex flex-col gap-5 relative"
            aria-label="Industries We Serve"
            id="industries"
          >
            {/* Background patterns */}
            <div className="absolute inset-0 ai-dots-bg opacity-10"></div>

            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-20 h-20 ai-hexagon border border-[#C7AC5F30] opacity-20 ai-rotate"></div>
            <div
              className="absolute bottom-20 left-10 w-16 h-16 ai-hexagon border border-[#DCDFE030] opacity-20 ai-rotate"
              style={{ animationDirection: "reverse" }}
            ></div>

            <div className="flex flex-col gap-3 relative z-10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#C7AC5F] ai-shimmer"></div>
                <h2
                  data-aos="fade-up"
                  className="heading text-center ai-gradient-text"
                  id="industry-solutions"
                >
                  Industry-Specific AI Solutions
                </h2>
                <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#C7AC5F] ai-shimmer"></div>
              </div>
              <p
                data-aos="fade-up"
                className="mt-2 text-center mb-5 max-w-3xl mx-auto text-gray-700"
              >
                We develop customized AI solutions tailored to the unique
                challenges and opportunities in various industries, helping
                businesses gain competitive advantages through intelligent
                automation and data analysis.
              </p>
            </div>

            <div
              className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-10 ai-stagger"
              itemScope
              itemType="https://schema.org/ItemList"
            >
              {industriesCompanyServe.map((item, index) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="p-5 rounded-lg shadow-lg relative group overflow-hidden min-h-[12rem] ai-card"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <meta itemProp="position" content={index + 1} />
                  <LazyLoadImage
                    width="400"
                    height="300"
                    src={item.img}
                    alt={`${item.title} AI solutions by TrinetraKrti`}
                    className="w-full h-full object-cover absolute top-0 left-0 rounded group-hover:scale-110 transition-all duration-500"
                    loading="lazy"
                    itemProp="image"
                  />
                  <div className="w-full h-full absolute top-0 left-0 bg-white/70 group-hover:bg-black/70 transition-all duration-500 backdrop-blur-[2px]"></div>

                  {/* Circuit pattern overlay */}
                  <div className="absolute inset-0 circuit-bg opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>

                  <div className="pt-5 relative z-10 flex flex-col items-center h-full">
                    <h3
                      className="text-center text-[1.3rem] font-medium relative z-10 group-hover:text-white transition-all duration-300"
                      itemProp="name"
                    >
                      {item.title}
                      <span className="block w-0 h-[2px] bg-[#C7AC5F] mx-auto group-hover:w-1/2 transition-all duration-500"></span>
                    </h3>
                    <p
                      className="text-gray-800 text-md mt-3 relative z-10 group-hover:text-white transition-all duration-300 text-center"
                      itemProp="description"
                    >
                      {item.desc}
                    </p>
                  </div>

                  {/* Tech indicators */}
                  <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#C7AC5F10] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Development Process Section */}
            <div className="mb-16">
              <WorkFlow />
            </div>

            {/* About Company Section */}
            <section
              className="pb-16 flex flex-col items-center gap-8 z-10 relative"
              aria-label="About TrinetraKrti"
              id="about-us"
              itemScope
              itemType="https://schema.org/Organization"
            >
              {/* Interactive particle background */}
              <AIBackground intensity="light" className="absolute inset-0" />

              <div
                data-aos="fade-up"
                className="ai-decorative-line relative z-10"
              >
                <h2 className="font-medium text-secondary ai-gradient-text">
                  About TrinetraKrti
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 relative z-10">
                <div
                  className="relative ai-reveal from-left"
                  data-aos="fade-right"
                >
                  {/* Decorative tech elements */}
                  <div className="absolute -top-5 -left-5 w-16 h-16 border border-[#C7AC5F30] rounded-full opacity-20 ai-float"></div>
                  <div
                    className="absolute -bottom-5 -right-5 w-12 h-12 border border-[#DCDFE030] rounded-full opacity-20 ai-float"
                    style={{ animationDelay: "1.5s" }}
                  ></div>

                  <div className="relative h-full overflow-hidden rounded-lg ai-card group">
                    <LazyLoadImage
                      src={whoWeAre}
                      width="600"
                      height="450"
                      alt="TrinetraKrti - Leading AI Development Company"
                      className="rounded-lg h-[20rem] md:h-full aspect-video w-full object-cover object-right transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      itemProp="image"
                    />

                    {/* Tech overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00000050] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 circuit-bg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                    <div className="w-full sm:w-fit sm:max-w-[18rem] text-white h-full sm:h-fit absolute bottom-0 left-0 bg-primary/80 sm:bg-primary p-5 rounded-lg backdrop-blur-sm border border-[#DCDFE020]">
                      <h3 className="text-5xl font-bold text-white ai-gradient-text">
                        3+
                      </h3>
                      <p className="font-medium mt-3 text-white">
                        Years of Excellence
                      </p>
                      <div className="w-20 h-[2px] bg-[#DCDFE050] my-3 ai-shimmer"></div>
                      <p className="pl-5 border-l-2 border-white text-md mt-3 text-white">
                        Delivering innovative AI solutions that transform
                        businesses
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  data-aos="fade-left"
                  className="flex flex-col gap-5 ai-reveal from-right"
                >
                  <h2
                    className="heading-2 relative inline-block ai-gradient-text"
                    itemProp="name"
                  >
                    Pioneering AI Innovation
                    <span className="absolute -bottom-2 left-0 w-1/3 h-[3px] bg-[#C7AC5F] ai-shimmer"></span>
                  </h2>

                  <p
                    className="leading-relaxed text-gray-700"
                    itemProp="description"
                  >
                    TrinetraKrti is at the forefront of AI innovation,
                    developing cutting-edge solutions that help businesses
                    harness the power of artificial intelligence to solve
                    complex problems, automate processes, and gain valuable
                    insights from their data.
                    <br />
                    <br />
                    Our team of AI specialists, data scientists, and software
                    engineers combines deep technical expertise with industry
                    knowledge to create custom AI applications that deliver
                    measurable business value and competitive advantages in
                    today's rapidly evolving digital landscape.
                  </p>

                  {/* Key differentiators */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    {[
                      {
                        title: "AI Expertise",
                        desc: "Specialized in machine learning, natural language processing, and computer vision",
                      },
                      {
                        title: "Custom Solutions",
                        desc: "Tailored AI applications designed for your specific business challenges",
                      },
                      {
                        title: "Industry Experience",
                        desc: "Deep understanding of various industry domains and requirements",
                      },
                      {
                        title: "Continuous Innovation",
                        desc: "Staying ahead with the latest AI technologies and methodologies",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="p-4 bg-[#C7AC5F10] rounded-lg border border-[#C7AC5F20] ai-reveal"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <svg
                            className="w-5 h-5 text-[#C7AC5F]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            ></path>
                          </svg>
                          <span className="font-medium">{item.title}</span>
                        </div>
                        <p className="text-sm text-gray-700">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/about-us"
                    className="ai-button mt-7 w-fit group px-6 py-3"
                    aria-label="Learn more about TrinetraKrti"
                    itemProp="url"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Discover Our AI Journey
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </section>
          </section>

          {/* Technology Stack Section */}
          <section className="py-16 relative overflow-hidden bg-[#F8F9FA]">
            <div className="absolute inset-0 ai-grid-pattern opacity-10"></div>
            <div className="wrapper">
              <div className="text-center mb-10">
                <div className="flex justify-center">
                  <div className="ai-decorative-line mx-auto">
                    <h2 className="font-medium text-secondary ai-gradient-text">
                      Our Technology Stack
                    </h2>
                  </div>
                </div>
                <h2 className="heading mt-4">
                  Powered by Advanced Technologies
                </h2>
                <p className="max-w-3xl mx-auto mt-4 text-gray-700">
                  We leverage the latest technologies and frameworks to build
                  robust, scalable AI solutions
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ai-stagger">
                {[
                  { name: "TensorFlow", icon: "🧠", desc: "Deep Learning" },
                  { name: "PyTorch", icon: "🔥", desc: "Machine Learning" },
                  { name: "Python", icon: "🐍", desc: "AI Development" },
                  { name: "React", icon: "⚛️", desc: "Frontend" },
                  { name: "Node.js", icon: "🟢", desc: "Backend" },
                  { name: "AWS", icon: "☁️", desc: "Cloud Infrastructure" },
                  { name: "MongoDB", icon: "🍃", desc: "Database" },
                  { name: "Docker", icon: "🐳", desc: "Containerization" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="ai-card flex flex-col items-center p-6 text-center ai-reveal"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-3xl mb-3">{tech.icon}</div>
                    <h3 className="font-medium text-lg">{tech.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience & Stats Section */}
          <Experience />

          {/* Client Testimonials */}
          <Testimonials />

          {/* Contact Form */}
          <LeadForm />

          {/* Partners & Clients */}
          <AssociatedWith />

          {/* Connect with Us QR Section */}
          <section className="py-16 bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] relative overflow-hidden">
            <div className="absolute inset-0 ai-dots-bg opacity-10"></div>
            <div className="wrapper">
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="ai-decorative-line mx-auto">
                    <h2 className="font-medium text-secondary ai-gradient-text">
                      Stay Connected
                    </h2>
                  </div>
                </div>
                <h2 className="heading mt-4 mb-6">
                  Connect with Us on All Platforms
                </h2>
                <p className="max-w-2xl mx-auto mb-8 text-gray-700">
                  Scan the QR code below to quickly access all our social media platforms, 
                  latest updates, and connect with our community.
                </p>
                
                <div className="flex justify-center">
                  <div className="ai-card p-8 bg-white shadow-lg max-w-sm mx-auto ai-reveal">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 p-3 bg-gradient-to-br from-[#C7AC5F20] to-[#C7AC5F10] rounded-2xl">
                        <img
                          loading="lazy"
                          src={linktrQR}
                          alt="Scan to connect with TrinetraKrti on all platforms"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">Quick Connect</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Scan with your phone camera to access all our social links
                      </p>
                      <div className="flex justify-center gap-2">
                        <span className="px-3 py-1 bg-[#C7AC5F20] text-[#C7AC5F] text-xs rounded-full">
                          LinkedIn
                        </span>
                        <span className="px-3 py-1 bg-[#C7AC5F20] text-[#C7AC5F] text-xs rounded-full">
                          Instagram
                        </span>
                        <span className="px-3 py-1 bg-[#C7AC5F20] text-[#C7AC5F] text-xs rounded-full">
                          YouTube
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          {/* <section className="py-16 relative overflow-hidden">
            <div className="absolute inset-0 ai-dots-bg opacity-10"></div>
            <div className="wrapper">
              <div className="text-center mb-10">
                <div className="ai-decorative-line mx-auto">
                  <h2 className="font-medium text-secondary ai-gradient-text">Frequently Asked Questions</h2>
                </div>
                <h2 className="heading mt-4">Common Questions About AI Solutions</h2>
                <p className="max-w-3xl mx-auto mt-4 text-gray-700">
                  Get answers to the most common questions about our AI development services
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                {[
                  {
                    q: "How can AI benefit my business?",
                    a: "AI can automate repetitive tasks, analyze large datasets to uncover insights, enhance customer experiences through personalization, optimize operations, and help make data-driven decisions that drive growth and efficiency."
                  },
                  {
                    q: "How long does it take to develop a custom AI solution?",
                    a: "The timeline varies depending on the complexity of the project, but typically ranges from 2-6 months. We follow an agile development approach that allows for early prototyping and iterative improvements."
                  },
                  {
                    q: "Do I need large amounts of data to implement AI?",
                    a: "While having quality data is important, we can work with various data scenarios. For organizations with limited data, we can implement transfer learning techniques, synthetic data generation, or start with smaller, focused AI applications that grow as you collect more data."
                  },
                  {
                    q: "How do you ensure the security of AI applications?",
                    a: "We implement robust security measures throughout the development process, including data encryption, secure APIs, regular security audits, and compliance with industry standards and regulations like GDPR, HIPAA, or SOC 2 as required."
                  }
                ].map((faq, index) => (
                  <div 
                    key={index}
                    className="mb-6 ai-card p-6 ai-reveal"
                    style={{animationDelay: `${index * 0.2}s`}}
                    itemScope itemType="https://schema.org/Question"
                  >
                    <h3 
                      className="font-semibold text-lg flex items-center gap-2 mb-3"
                      itemProp="name"
                    >
                      <span className="text-[#C7AC5F]">Q:</span> {faq.q}
                    </h3>
                    <div itemScope itemType="https://schema.org/Answer">
                      <p 
                        className="text-gray-700 pl-6 border-l-2 border-[#C7AC5F30]"
                        itemProp="text"
                      >
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-10">
                <Link 
                  to="/contact" 
                  className="ai-button group px-6 py-3"
                  aria-label="Contact us with your questions"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Have More Questions? Contact Us
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </section> */}

          {/* CTA Section */}
          {/* <section className="py-16 bg-gradient-to-r from-[#010C2A] to-[#0A1A40] text-white relative overflow-hidden">
            <div className="absolute inset-0 circuit-bg opacity-10"></div>
            <div className="wrapper text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
              <p className="max-w-2xl mx-auto mb-8 text-white/80">
                Partner with TrinetraKrti to leverage the power of artificial intelligence and stay ahead in today's competitive landscape.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="px-8 py-3 bg-[#C7AC5F] text-white rounded-md hover:bg-[#C7AC5F]/80 transition-all duration-300 flex items-center gap-2"
                >
                  <span>Start Your AI Journey</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </Link>
                <Link 
                  to="/services" 
                  className="px-8 py-3 border border-white/30 text-white rounded-md hover:bg-white/10 transition-all duration-300"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </section> */}
        </main>

        <Footer />

        {/* Back to top button */}
        {/* <button 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#C7AC5F] text-white flex items-center justify-center shadow-lg hover:bg-[#C7AC5F]/80 transition-all duration-300 z-50"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button> */}
      </div>
    </>
  );
};

export default Home;
