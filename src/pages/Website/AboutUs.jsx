import React from "react";
import Header from "../../components/Website/Header";
import banner from "../../assets/images/about-us-page-banner.webp";
import linktrQR from "../../assets/images/linktr-qr.png";
import SEOMetaTags from "../../components/SEOMetaTags";
import { seoData } from "../../data/seoData";

import img1 from "../../assets/images/about-us-page-2.png";
import img2 from "../../assets/images/about-us-page-3.png";
import projectsImg from "../../assets/images/icons/projects.png";
import clientsImg from "../../assets/images/icons/clients.png";
import awardsImg from "../../assets/images/icons/awards.png";
import bgShape from "../../assets/images/bg-shape.png";
import process1 from "../../assets/images/w-process1.png";
import process2 from "../../assets/images/w-process2.png";
import process3 from "../../assets/images/w-process3.png";
import arrow from "../../assets/images/icons/Arrow.png";
import SolveITNeeds from "../../components/Website/SolveITNeeds";
import Footer from "../../components/Footer";
import { services } from "../../data/constant";

const AboutUs = () => {
  return (
    <div className="landing-bg">
      <SEOMetaTags 
        title={seoData.aboutUs.title}
        description={seoData.aboutUs.description}
        keywords={seoData.aboutUs.keywords}
        canonicalUrl={seoData.aboutUs.canonicalUrl}
      />
      <Header />
      <div data-aos="fade-down" className="h-[50vh] md:h-[60vh]">
        <img
          loading="lazy"
          src={banner}
          width="800"
          height="600"
          className="h-full object-cover w-full object-left md:object-top"
          alt="banner"
        />
      </div>
      <section className="wrapper py-[5rem]">
        <div className="grid lg:grid-cols-2 lg:items-start gap-10">
          <div>
            <div data-aos="fade-up" className="ai-decorative-line">
              <h6 className="font-medium text-secondary capitalize">
                Know about us
              </h6>
            </div>
            <h2 className="heading capitalize mt-5">About Us</h2>
            <p className="mt-6">
              At TrinetraKrt, we do more than build tech — we build digital
              experiences that matter. From startups with bold ideas to
              enterprises navigating transformation, we partner with companies
              across industries to deliver tailor-made digital solutions powered
              by emerging technologies. <br />
              Rooted in creativity and driven by data, we bring a
              multidisciplinary team of developers, designers, analysts, and
              strategists together to help you launch, scale, and grow smarter
              with our AI driven cutting edge solutions.
            </p>
          </div>
          <div className="h-full w-full">
            <img
              loading="lazy"
              src={img1}
              width="500"
              height="400"
              alt="about us"
              className="object-contain max-h-[30rem] mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="w-full grid lg:grid-cols-[60%_35%] items-end relative">
        <img
          loading="lazy"
          src={img2}
          alt="experience"
          width="800"
          height="600"
          className="w-full h-[80vh] lg:block hidden object-contain z-10 grayscale-[20%]"
        />
        <div
          data-aos="fade-left"
          className="px-6 flex flex-col items-center lg:items-start lg:pl-5 w-full z-10"
        >
          <div data-aos="fade-up" className="ai-decorative-line relative z-10">
            <h2 className="font-medium text-secondary ai-gradient-text">
              Work Experience
            </h2>
          </div>
          <h2 className="text-[2rem] md:text-4xl capitalize text-center lg:text-start font-semibold mb-5">
            We have been working for over 3 years
          </h2>
          <img
            loading="lazy"
            src={img2}
            width="400"
            height="300"
            alt="experience"
            className="w-full max-w-[20rem] block lg:hidden object-contain mx-auto object-right z-10"
          />
          <div className="z-10 bg-[#010C2A] w-full p-5 grid md:grid-cols-3 gap-5 lg:w-[70vw] lg:-translate-x-[30vw]">
            <div className="flex flex-col gap-2 text-white items-start md:border-r-2 border-white/40 p-5">
              <img
                loading="lazy"
                src={projectsImg}
                alt="projects-icon"
                className="h-[2rem] obj2ct-c -mb-4ontain"
              />
              <h2 className="text-4xl font-bold">70+</h2>
              <p className="border-l-2 border-[#00CDFF] pl-3">
                Projects Completed
              </p>
            </div>
            <div className="flex flex-col gap-2 text-white items-start md:border-r-2 border-white/40 p-5 md:pl-10">
              <img
                loading="lazy"
                src={clientsImg}
                alt="projects-icon"
                className="h-[2rem] obj2ct-c -mb-4ontain"
              />
              <h2 className="text-4xl font-bold">100%</h2>
              <p className="border-l-2 border-[#00CDFF] pl-3">
                Satisfied clients
              </p>
            </div>
            <div className="flex flex-col gap-2 text-white items-start p-5 md:pl-10">
              <img
                loading="lazy"
                src={awardsImg}
                alt="projects-icon"
                className="h-[2rem] obj2ct-c -mb-4ontain"
              />
              <h2 className="text-4xl font-bold">3+</h2>
              <p className="border-l-2 border-[#00CDFF] pl-3">Awards</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative my-[5rem]">
        <img
          loading="lazy"
          src={bgShape}
          className="w-[37%] absolute left-3 top-0 object-contain"
          alt=""
        />
        <img
          loading="lazy"
          src={bgShape}
          className="w-[37%] absolute right-3 rotate-[125deg] top-0 object-contain"
          alt=""
        />
        <div className="wrapper flex flex-col items-center">
          <div data-aos="fade-up" className="ai-decorative-line relative z-10">
            <h2 className="font-medium text-secondary ai-gradient-text">
              Work Process
            </h2>
          </div>
          <h2 className="heading mt-2">Our Work Process</h2>
          <div className="grid lg:grid-cols-3 mt-10 gap-6 lg:gap-10">
            <div className="max-w-[20rem] lg:w-full z-10 relative bg-white/80 flex flex-col gap-2 items-center text-center justify-center aspect-square rounded-full p-5 border-2 border-primary">
              <img
                loading="lazy"
                src={process1}
                className="w-[3rem] sm:w-[5rem] object-contain"
                alt="process"
                width="100"
                height="100"
              />
              <h5 className="text-xl font-semibold">Goal Setting</h5>
              <p className="px-6 text-sm">
                Define your project objectives and goals.
              </p>
              <img
                loading="lazy"
                src={arrow}
                className="h-[5rem] sm:h-[6rem] object-contain absolute right-[-2rem] sm:right-[-3.5rem] rotate-[100deg] lg:rotate-12 bottom-[-3.5rem] lg:top-0"
                alt=""
              />
            </div>
            <div className="max-w-[20rem] lg:w-full z-10 relative bg-white/80 flex flex-col gap-2 items-center text-center justify-center aspect-square rounded-full p-5 border-2 border-primary">
              <img
                loading="lazy"
                src={process2}
                className="w-[3rem] sm:w-[5rem] object-contain"
                alt="process"
                width="100"
                height="100"
              />
              <h5 className="text-xl font-semibold">Select Service</h5>
              <p className="px-6 text-sm">
                Choose the best service according to your requirements.
              </p>
              <img
                loading="lazy"
                src={arrow}
                className="h-[5rem] sm:h-[6rem] object-contain absolute left-[-2rem] sm:left-[-3.5rem] lg:left-auto lg:right-[-3.5rem] rotate-[80deg] lg:-rotate-12 scale-y-[-1] bottom-[-3.5rem] sm:bottom-0"
                alt=""
              />
            </div>
            <div className="max-w-[20rem] lg:w-full z-10 relative bg-white/80 flex flex-col gap-2 items-center text-center justify-center aspect-square rounded-full p-5 border-2 border-primary">
              <img
                loading="lazy"
                src={process3}
                className="w-[3rem] sm:w-[5rem] object-contain"
                alt="process"
                width="100"
                height="100"
              />
              <h5 className="text-xl font-semibold">Solve Problem</h5>
              <p className="px-6 text-sm">
                We solve your problems using latest technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper text-center">
        <h1 className="heading mb-6">Who We Are</h1>
        <p>
          TrinetraKrt is a leading IT company specializing in providing
          innovative solutions to businesses worldwide. Our mission is to
          empower organizations with cutting-edge technology, enabling them to
          thrive in the digital world.
          <br />
          <br />
          With a team of expert developers, designers, and project managers,
          TrinetraKrt has established itself as a trusted partner for businesses
          seeking reliable and efficient IT services. We offer a wide range of
          services, including{" "}
          {services.slice(0, 8).map((service) => `${service.title}, `)} and
          more.
        </p>
      </section>
      
      {/* Connect with Us QR Section */}
      <section className="wrapper py-16">
        <div className="text-center">
          <div data-aos="fade-up" className="ai-decorative-line w-fit mx-auto">
            <h6 className="font-medium text-secondary capitalize">
              Stay Connected
            </h6>
          </div>
          <h2 data-aos="fade-up" className="heading mt-5 mb-6">
            Follow Our Journey
          </h2>
          <p data-aos="fade-up" className="max-w-2xl mx-auto mb-8 text-gray-700">
            Stay updated with our latest innovations, insights, and company news. 
            Scan the QR code to connect with us on all social platforms.
          </p>
          
          <div data-aos="fade-up" className="flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 max-w-xs">
              <div className="w-48 h-48 mx-auto mb-4 p-2 bg-gradient-to-br from-[#C7AC5F20] to-[#C7AC5F10] rounded-xl">
                <img
                  loading="lazy"
                  src={linktrQR}
                  alt="Connect with TrinetraKrti on all platforms"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quick Connect</h3>
              <p className="text-sm text-gray-600">
                Scan to access all our social links
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <SolveITNeeds />
      <Footer />
    </div>
  );
};

export default AboutUs;
