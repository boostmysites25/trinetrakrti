import React from "react";
import bannerImg from "../../assets/images/contact-page-banner.webp";
import linktrQR from "../../assets/images/linktr-qr.png";
import { Link } from "react-router-dom";
import Header from "../../components/Website/Header";
import Footer from "../../components/Footer";

import SolveITNeeds from "../../components/Website/SolveITNeeds";
import {
  PiEnvelopeLight,
  PiMapPinAreaLight,
  PiPhoneCallLight,
} from "react-icons/pi";
import { FaQrcode } from "react-icons/fa";
import { companyDetails } from "../../data/constant";
import MapComponent from "../../components/Website/MapComponent";
import InquiryForm from "../../components/InquiryForm";

const ContactUs = () => {
  return (
    <div className="bg-[#fafafa]">
      <Header />
      <div className="min-h-[45vh] md:min-h-[70vh] w-full page-banner relative">
        <img
          loading="lazy"
          src={bannerImg}
          width="800"
          height="600"
          className="absolute h-full w-full object-cover object-center z-0"
          alt=""
        />
        <div className="absolute h-full w-full bg-black/20"></div>
        <div className="absolute z-10 py-2 top-[50%] left-1/2 -translate-x-1/2 w-full flex flex-col items-center px-3">
          <h1 data-aos="fade-up" className="heading text-white text-center">
            Contact Us
          </h1>
          <div
            data-aos="fade-up"
            className="mt-3 text-base sm:text-xl font-medium px-3 py-2 w-fit flex flex-wrap justify-center text-white items-center gap-1 sm:gap-2"
          >
            <Link to="/">Home</Link>/<Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>

      <section className="wrapper py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 lg:gap-5">
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1 flex flex-col gap-3">
            <div data-aos="fade-up" className="ai-decorative-line relative z-10">
                <h2 className="font-medium text-secondary ai-gradient-text">Contact Us</h2>
              </div>
            <h2 data-aos="fade-up" className="heading-2 capitalize">
              Let’s Build Something Together
            </h2>
            <p data-aos="fade-up" className="max-w-[35rem] lg:max-w-max">
              Big vision or small project — we’re on board. Whether you're
              reimagining your product with intelligent features or starting
              from scratch, let’s create smart digital solutions that make a
              difference.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="rounded-md relative bg-primary/5 group hover:bg-primary p-7 border-t-2 border-secondary flex flex-col"
          >
            <div className="text-secondary flex items-center justify-center group-hover:bg-white h-[4rem] w-[4rem] rounded-full bg-primary/5 text-4xl">
              <PiPhoneCallLight />
            </div>
            <PiPhoneCallLight className="absolute group-hover:text-white/10 bottom-2 right-2 text-[6rem] lg:text-[10rem] text-gray-200" />
            <span className="relative z-10 group-hover:text-white font-semibold mt-4">
              Phone Number
            </span>
            <span className="relative z-10 group-hover:text-white mt-2">
              {companyDetails.phone}
            </span>
          </div>
          <div
            data-aos="fade-up"
            className="rounded-md relative bg-primary/5 group hover:bg-primary p-7 border-t-2 border-secondary flex flex-col"
          >
            <div className="text-secondary flex items-center justify-center group-hover:bg-white h-[4rem] w-[4rem] rounded-full bg-primary/5 text-4xl">
              <PiEnvelopeLight />
            </div>
            <PiEnvelopeLight className="absolute group-hover:text-white/10 bottom-2 right-2 text-[6rem] lg:text-[10rem] text-gray-200" />
            <span className="relative z-10 group-hover:text-white font-semibold mt-4">
              Email Address
            </span>
            <span className="relative z-10 group-hover:text-white mt-2">
              {companyDetails.email}
            </span>
          </div>
          <div
            data-aos="fade-up"
            className="rounded-md relative bg-primary/5 group hover:bg-primary p-7 border-t-2 border-secondary flex flex-col"
          >
            <div className="text-secondary flex items-center justify-center group-hover:bg-white h-[4rem] w-[4rem] rounded-full bg-primary/5 text-4xl">
              <PiMapPinAreaLight />
            </div>
            <PiMapPinAreaLight className="absolute group-hover:text-white/10 bottom-2 right-2 text-[6rem] lg:text-[10rem] text-gray-200" />
            <span className="relative z-10 group-hover:text-white font-semibold mt-4">
              Location
            </span>
            <span className="relative z-10 group-hover:text-white mt-2">
              {companyDetails.location}
            </span>
          </div>
          <div
            data-aos="fade-up"
            className="rounded-md relative bg-primary/5 group hover:bg-primary p-7 border-t-2 border-secondary flex flex-col items-center"
          >
            <div className="text-secondary flex items-center justify-center group-hover:bg-white h-[4rem] w-[4rem] rounded-full bg-primary/5 text-4xl">
              <FaQrcode />
            </div>
            <FaQrcode className="absolute group-hover:text-white/10 bottom-2 right-2 text-[6rem] lg:text-[10rem] text-gray-200" />
            <span className="relative z-10 group-hover:text-white font-semibold mt-4 text-center">
              Connect with Us
            </span>
            <div className="relative z-10 mt-3 bg-white p-2 rounded-lg group-hover:bg-gray-100 transition-colors duration-300">
              <img
                loading="lazy"
                src={linktrQR}
                alt="Scan to connect with TrinetraKrti"
                className="w-[4rem] h-[4rem] object-contain"
              />
            </div>
            <span className="relative z-10 group-hover:text-white mt-2 text-xs text-center">
              Scan for all social links
            </span>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="-mb-[4rem]">
          <InquiryForm />
        </div>
      </section>
      <MapComponent />
      <div className="-mt-[6rem] relative z-10">
        <SolveITNeeds />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
