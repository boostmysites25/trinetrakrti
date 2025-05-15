import React from "react";
import img1 from "../../assets/images/services-details/logo-design1.webp";
import img2 from "../../assets/images/services-details/logo-design2.webp";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../data/constant";

const CustomLogoDesign = () => {
  const next = services[0]; // Loop back to the first service
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="custom logo design"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Custom Logo Design
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, we understand that your logo is the cornerstone of
          your brand identity, serving as the visual representation of your
          company's values, personality, and promise. Our Custom Logo Design
          services help organizations create distinctive, memorable visual
          identities that resonate with their target audience and stand the test
          of time. As specialists in brand design, we combine creative thinking
          with strategic insight to develop logos that not only look impressive
          but also effectively communicate your brand essence.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Understanding Our Approach to Logo Design
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, our Custom Logo Design services encompass a
          comprehensive methodology, ensuring a strategic approach to each
          project. Our team specializes in creating visual identities that
          balance aesthetic appeal with meaningful symbolism. From initial brand
          discovery and concept development to refinement and finalization, we
          handle every stage of the logo design process with meticulous
          attention to detail. We begin by deeply understanding your business,
          industry, target audience, and competitors, ensuring that the
          resulting logo not only looks distinctive but also authentically
          represents your brand and resonates with your specific market.
          <br />
          <br />
          On the creative side, our designers follow a structured yet
          imaginative approach that emphasizes originality, versatility, and
          timelessness. We prioritize creating logos that work effectively
          across all applications, from small digital icons to large-scale
          signage, and remain legible and impactful in all contexts. By
          combining artistic excellence with brand strategy, we help
          organizations develop logo designs that not only make a strong first
          impression but also serve as effective brand ambassadors across all
          touchpoints, building recognition, trust, and equity over time.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="custom logo design"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Brand Discovery & Logo Strategy
              </h3>
            </div>
            <p>
              We conduct thorough research to understand your brand values,
              target audience, and competitive landscape, developing a strategic
              foundation for logo design that ensures meaningful, effective
              results.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Custom Logo Creation</h3>
            </div>
            <p>
              Our designers create original, distinctive logos tailored to your
              brand identity, developing multiple concepts and refining the
              chosen direction to perfection.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Comprehensive Logo Package
              </h3>
            </div>
            <p>
              We deliver your logo in multiple formats and variations suitable
              for all applications, along with guidelines for proper usage to
              ensure consistent brand representation.
            </p>
          </div>
        </div>
      </div>
      <p>
        At TrinetraKrti, we envision logo design not as an isolated graphic
        element but as the foundation of a cohesive brand identity system. Our
        commitment to design excellence drives us to create logos that are not
        only visually striking but also strategically sound and built to last.
        With a passionate team of designers and brand strategists dedicated to
        excellence, we aim to help organizations develop visual identities that
        make powerful first impressions, build lasting recognition, and
        effectively communicate brand values across all touchpoints, creating a
        strong foundation for brand success in an increasingly visual and
        competitive business landscape.
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

export default CustomLogoDesign;
