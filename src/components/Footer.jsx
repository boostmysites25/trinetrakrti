import React from "react";
import bg from "../assets/images/footer-bg.jpg";
import logo from "../assets/images/logo/logo1.png";
import emailIcon from "../assets/images/icons/email.png";
import phoneIcon from "../assets/images/icons/phone.png";
import locationIcon from "../assets/images/icons/location.png";
import linktrQR from "../assets/images/linktr-qr.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { companyDetails, serviceDetailPages } from "../data/constant";

const Footer = () => {
  return (
    <div
      className="border-t-2 py-[2rem] bg-cover bg-top"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="wrapper grid grid-cols-1 md:grid-cols-4 lg:grid-cols-[auto,1fr,auto] gap-10">
        <div className="w-fit md:col-span-4 lg:col-span-1 md:place-self-center lg:place-self-auto">
          <img src={logo} alt="logo" className="w-[10rem] object-contain" />
        </div>
        <div className="md:col-span-4 lg:col-span-1 flex flex-col gap-4">
          <h6 className="text-lg font-medium">Our Services</h6>
          <div className="flex sm:flex-row flex-col gap-2 sm:gap-4 text-md">
            <div className="flex flex-col gap-2">
              {serviceDetailPages.slice(0, 5).map(({ label, link }) => (
                <Link className="!min-h-fit" to={link} key={label}>
                  {label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {serviceDetailPages.slice(5, 10).map(({ label, link }) => (
                <Link className="!min-h-fit" to={link} key={label}>
                  {label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {serviceDetailPages.slice(10, 16).map(({ label, link }) => (
                <Link className="!min-h-fit" to={link} key={label}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-4">
          <h6 className="text-lg font-medium">Contact Info</h6>
          <div className="flex flex-col gap-5">
            <ul className="flex flex-col gap-6 text-md">
              <li className="flex gap-2 items-center">
                <img
                  loading="lazy"
                  src={emailIcon}
                  alt="email"
                  className="w-[1.5rem] object-contain grayscale"
                />
                <a href={`mailto:${companyDetails.email}`}>
                  <span className="font-medium">Email:</span>{" "}
                  {companyDetails.email}
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <img
                  loading="lazy"
                  src={phoneIcon}
                  alt="phone"
                  className="w-[1.5rem] object-contain grayscale"
                />
                <a href={`tel:${companyDetails.phone}`}>
                  <span className="font-medium">Phone:</span>{" "}
                  {companyDetails.phone}
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <img
                  loading="lazy"
                  src={locationIcon}
                  alt="location"
                  className="w-[1.5rem] object-contain grayscale"
                />
                <a
                  href={companyDetails.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="max-w-[20rem] text-wrap"
                >
                  <span className="font-medium">
                    Location:{" "}
                    <span className="font-normal whitespace-pre-line">
                      {companyDetails.location}
                    </span>
                  </span>
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <Link
                to={companyDetails.facebook}
                target="_blank"
                rel="noreferrer"
                className="bg-primary/10 text-primary/70 w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center text-2xl hover:bg-gradient-to-r hover:text-primary hover:-translate-y-1 transition-all duration-300"
              >
                <FaFacebookF />
              </Link>
              <Link
                to={companyDetails.instagram}
                target="_blank"
                rel="noreferrer"
                className="bg-primary/10 text-primary/70 w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center text-2xl hover:bg-gradient-to-r hover:text-primary hover:-translate-y-1 transition-all duration-300"
              >
                <FaInstagram />
              </Link>
              <Link
                to={companyDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                className="bg-primary/10 text-primary/70 w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center text-2xl hover:bg-gradient-to-r hover:text-primary hover:-translate-y-1 transition-all duration-300"
              >
                <FaLinkedin />
              </Link>
              <Link
                to={companyDetails.youtube}
                target="_blank"
                rel="noreferrer"
                className="bg-primary/10 text-primary/70 w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center text-2xl hover:bg-gradient-to-r hover:text-primary hover:-translate-y-1 transition-all duration-300"
              >
                <FaYoutube />
              </Link>
            </div>
            
            {/* Linktree QR Code */}
            <div className="mt-6 flex flex-col items-center gap-2">
              <h6 className="text-sm font-medium text-gray-600">Connect with us</h6>
              <div className="bg-white p-2 rounded-lg shadow-md">
                <img
                  loading="lazy"
                  src={linktrQR}
                  alt="Scan to connect with TrinetraKrti on all platforms"
                  className="w-[8rem] h-[8rem] object-contain"
                />
              </div>
              <p className="text-xs text-gray-500 text-center max-w-[8rem]">
                Scan QR code to access all our social links
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
