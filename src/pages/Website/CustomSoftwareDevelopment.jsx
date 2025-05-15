import React from "react";
import img1 from "../../assets/images/services-details/web-development1.jpeg";
import img2 from "../../assets/images/services-details/custom-software.webp";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../data/constant";

const CustomSoftwareDevelopment = () => {
  const next = services[14];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="custom software development"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Custom Software Development
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, we understand that off-the-shelf software solutions
          often can't address the unique challenges and opportunities of your
          business. Our Custom Software Development services help organizations
          create tailor-made applications that perfectly align with their
          specific processes, requirements, and strategic objectives. As
          specialists in bespoke software solutions, we combine technical
          expertise with business acumen to deliver applications that drive
          efficiency, innovation, and competitive advantage.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Understanding Our Approach to Custom Software Development
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, our Custom Software Development services encompass a
          comprehensive methodology, ensuring a strategic approach to each
          project. Our team specializes in creating software solutions that
          address specific business challenges and opportunities. From initial
          requirements gathering and system design to development, testing,
          deployment, and ongoing support, we handle every stage of the software
          development lifecycle with meticulous attention to detail. We employ
          agile development practices, working in iterative cycles that allow
          for regular feedback, adaptation, and the early delivery of business
          value, ensuring that the final product truly meets your needs.
          <br />
          <br />
          On the technical side, our software engineers implement robust,
          scalable architectures using modern technologies and best practices.
          We prioritize code quality, security, and maintainability, creating
          systems that not only solve today's problems but can also evolve with
          your business over time. By combining technical excellence with deep
          business understanding, we help organizations implement custom
          software solutions that not only automate processes and improve
          efficiency but also enable new capabilities and business models that
          drive growth and competitive differentiation.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="custom software development"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Enterprise Application Development
              </h3>
            </div>
            <p>
              We create comprehensive business applications that streamline
              operations, integrate with existing systems, and provide powerful
              tools for managing complex business processes.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Legacy System Modernization
              </h3>
            </div>
            <p>
              Our team transforms outdated systems into modern, flexible
              applications, preserving valuable business logic while
              implementing new technologies, interfaces, and capabilities.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Integration & API Development
              </h3>
            </div>
            <p>
              We develop robust integration solutions and APIs that connect
              disparate systems, enabling seamless data flow and creating
              unified, efficient workflows across your organization.
            </p>
          </div>
        </div>
      </div>
      <p>
        At TrinetraKrti, we envision custom software as a strategic asset that
        not only solves immediate business problems but also creates long-term
        competitive advantages. Our commitment to software excellence drives us
        to stay at the forefront of emerging technologies, architectural
        patterns, and development methodologies. With a passionate team of
        software engineers, architects, and business analysts dedicated to
        excellence, we aim to help organizations create bespoke software
        solutions that not only meet current requirements but also provide the
        flexibility and scalability to adapt to changing business needs,
        enabling sustainable growth and innovation in an increasingly digital
        business landscape.
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

export default CustomSoftwareDevelopment;
