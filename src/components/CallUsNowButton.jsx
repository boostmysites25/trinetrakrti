import React from "react";
import { PiPhoneCallFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { companyDetails } from "../data/constant";

const CallUsNowButton = () => {
  return (
    <Link
      to={`tel:+${companyDetails.phone}`}
      className="w-[4rem] z-30 hover:-translate-y-1 h-[4rem] cursor-pointer rounded-full border-4 border-white bg-primary hover:bg-secondary fixed bottom-7 left-7 flex items-center justify-center transition-all duration-300"
    >
      <PiPhoneCallFill className="text-white text-4xl" />
    </Link>
  );
};

export default CallUsNowButton;
