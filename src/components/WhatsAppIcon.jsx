import React from "react";
import { Link } from "react-router-dom";
import { companyDetails } from "../data/constant";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = () => {
  return (
    <Link
      rel="noreferrer"
      target="_blank"
      to={"https://wa.me/" + companyDetails.phone.replace("+", "")}
      className="w-[3rem] md:w-[4rem] h-[3rem] md:h-[4rem] z-30 hover:-translate-y-1 cursor-pointer rounded-full bg-[#25D366] hover:bg-[#0f0f0f] fixed bottom-7 left-4 md:left-7 flex items-center justify-center transition-all duration-300"
    >
      <FaWhatsapp className="text-white text-3xl md:text-4xl" />
    </Link>
  );
};

export default WhatsAppIcon;
