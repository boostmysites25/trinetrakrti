import React from "react";
import img1 from "../../../assets/images/services-details/uiux2.webp";
import img2 from "../../../assets/images/services-details/uiux1.webp";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../../data/constant";

const UIUXDesign = () => {
  const next = services[12];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="UI/UX design"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          UI/UX Design
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, we understand that exceptional user experience is a
          critical differentiator that can determine the success of your digital
          products. Our UI/UX design services help businesses create intuitive,
          engaging, and effective digital experiences that delight users and
          achieve business objectives. As specialists in user-centered design,
          we combine creative thinking with data-driven insights to create
          interfaces that not only look beautiful but also function seamlessly,
          driving user engagement, satisfaction, and conversion.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Understanding Our Approach to UI/UX Design
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, our UI/UX design services encompass a comprehensive
          methodology, ensuring a strategic approach to each project. Our team
          specializes in creating user experiences that balance aesthetic appeal
          with functional efficiency. From user research and persona development
          to information architecture, wireframing, and visual design, we handle
          every stage of the design process with meticulous attention to detail.
          We employ user-centered design principles, placing the needs,
          preferences, and behaviors of your target audience at the center of
          our design decisions, ensuring that the final product resonates with
          users and achieves your business goals.
          <br />
          <br />
          On the implementation side, our designers follow a structured yet
          iterative approach that emphasizes collaboration, testing, and
          refinement. We prioritize usability testing and user feedback,
          continuously validating and improving our designs to ensure they meet
          real-world user needs. By combining creative excellence with technical
          understanding, we help organizations implement UI/UX solutions that
          not only create visually stunning interfaces but also deliver
          seamless, intuitive experiences that guide users effortlessly toward
          desired actions, whether that's making a purchase, signing up for a
          service, or engaging with content.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="UI/UX design"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                User Research & Analysis
              </h3>
            </div>
            <p>
              We conduct comprehensive research to understand your users' needs,
              behaviors, and pain points, providing a solid foundation for
              informed design decisions that truly resonate with your audience.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Interface Design & Prototyping
              </h3>
            </div>
            <p>
              Our team creates visually appealing interfaces with interactive
              prototypes that bring your digital product to life, allowing for
              testing and refinement before development begins.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Usability Testing & Optimization
              </h3>
            </div>
            <p>
              We conduct rigorous testing and iterative refinement to ensure
              your digital product delivers an exceptional user experience that
              meets both user needs and business goals.
            </p>
          </div>
        </div>
      </div>
      <p>
        At TrinetraKrti, we envision a future where thoughtful design bridges
        the gap between technology and human needs, making digital experiences
        more intuitive, accessible, and enjoyable for everyone. Our commitment
        to design excellence drives us to stay at the forefront of emerging
        trends, tools, and methodologies in UI/UX design. With a passionate team
        of designers, researchers, and usability experts dedicated to
        excellence, we aim to help organizations create digital experiences that
        not only meet functional requirements but also forge emotional
        connections with users, building brand loyalty and driving sustainable
        business success in an increasingly digital world.
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

export default UIUXDesign;
