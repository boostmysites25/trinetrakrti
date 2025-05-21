import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../../data/constant";
import img1 from "../../../assets/images/services-details/consulting2.webp";
import img2 from "../../../assets/images/services-details/consulting1.webp";

const Consulting = () => {
  // Find the index of this service in the services array
  const currentIndex = services.findIndex(
    (service) => service.link === "/services/consulting"
  );
  // Get the next service (or the first one if this is the last service)
  const next = services[(currentIndex + 1) % services.length] || services[0];

  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="it consulting"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          IT Consulting Services
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, our IT consulting services provide strategic guidance
          to help businesses leverage technology for growth and innovation. We
          understand that navigating the complex technology landscape can be
          challenging, which is why our expert consultants work closely with you
          to develop tailored solutions that align with your business objectives
          and drive measurable results.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Our Comprehensive Consulting Approach
        </h2>
        <p data-aos="fade-up" className="description">
          Our consulting methodology begins with a thorough assessment of your
          current technology infrastructure, business processes, and strategic
          goals. We identify opportunities for improvement and innovation,
          developing a roadmap that outlines clear steps toward digital
          transformation and operational excellence.
          <br />
          <br />
          We believe in collaborative partnerships, working alongside your team
          to ensure that our recommendations are practical, implementable, and
          aligned with your organization's culture and capabilities. Our
          consultants bring deep industry knowledge and technical expertise,
          providing insights that help you make informed decisions about
          technology investments and strategic initiatives.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="it consulting"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Strategic IT Planning</h3>
            </div>
            <p>
              We help you develop comprehensive IT strategies that align with
              your business goals, ensuring that technology investments deliver
              maximum value and competitive advantage.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Digital Transformation Consulting
              </h3>
            </div>
            <p>
              Our experts guide you through the digital transformation journey,
              helping you reimagine business processes, customer experiences,
              and operational models through innovative technology solutions.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Technology Assessment and Optimization
              </h3>
            </div>
            <p>
              We evaluate your current technology stack, identifying
              opportunities to optimize performance, reduce costs, and enhance
              security through strategic improvements and modernization.
            </p>
          </div>
        </div>
      </div>
      <p>
        At TrinetraKrti, we're committed to delivering consulting services that
        drive tangible business outcomes. Our team of experienced consultants
        combines industry knowledge with technical expertise to provide insights
        and recommendations that help you navigate complex technology decisions
        with confidence. Whether you're looking to optimize your current IT
        infrastructure, embark on a digital transformation journey, or develop a
        technology roadmap for future growth, our consulting services provide
        the strategic guidance you need to succeed in today's rapidly evolving
        digital landscape.
      </p>
      <hr />
      <div className="flex flex-col sm:flex-row w-full justify-end gap-6">
        <Link to={next.link} className="flex items-center self-end gap-3">
          <img
            loading="lazy"
            src={next.icon}
            alt=""
            className="w-[3rem] h-[3rem] object-contain grayscale"
          />
          <div className="flex flex-col gap-1">
            <h6 className="text-md font-semibold">{next.title}</h6>
            <p className="flex items-center gap-2 text-sm text-secondary">
              Next <IoIosArrowRoundForward className="text-2xl" />
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Consulting;
