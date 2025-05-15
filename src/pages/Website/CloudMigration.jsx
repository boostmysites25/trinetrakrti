import React from "react";
import img1 from "../../assets/images/services-details/cloudmigration1.webp";
import img2 from "../../assets/images/services-details/cloudmigration2.webp";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../data/constant";

const CloudMigration = () => {
  const next = services[11];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="cloud migration services"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Cloud Migration Services
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, we understand that migrating to the cloud is a
          transformative journey that requires careful planning, technical
          expertise, and a strategic approach. Our Cloud Migration services help
          organizations seamlessly transition their applications, data, and
          infrastructure to cloud environments, minimizing disruption while
          maximizing the benefits of cloud computing. As specialists in cloud
          technologies, we guide our clients through every stage of the
          migration process, ensuring a smooth transition that sets the
          foundation for future innovation and growth.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Understanding Our Approach to Cloud Migration
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, our Cloud Migration services encompass a
          comprehensive methodology, ensuring a strategic approach to each
          migration project. Our team specializes in developing tailored
          migration strategies that align with your business objectives,
          technical requirements, and risk tolerance. From initial assessment
          and planning to execution and post-migration optimization, we handle
          every phase of the migration lifecycle with meticulous attention to
          detail. We work across major cloud platforms including AWS, Microsoft
          Azure, and Google Cloud Platform, providing expertise in various
          migration patterns such as rehosting (lift and shift), replatforming,
          refactoring, and more.
          <br />
          <br />
          On the implementation side, our cloud engineers follow a structured
          migration approach that emphasizes minimal disruption, data integrity,
          and security. We prioritize thorough testing and validation at each
          stage, implementing robust rollback procedures to mitigate risks. By
          combining technical expertise with project management discipline, we
          help organizations execute cloud migrations that not only successfully
          transition workloads to the cloud but also position them to take full
          advantage of cloud capabilities, including scalability, cost
          optimization, and access to advanced services that drive innovation
          and competitive advantage.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="cloud migration services"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Migration Assessment & Strategy
              </h3>
            </div>
            <p>
              We conduct comprehensive assessments of your current environment
              and develop detailed migration strategies that minimize risk,
              optimize costs, and align with your business objectives.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Application & Database Migration
              </h3>
            </div>
            <p>
              Our team executes seamless migrations of applications and
              databases to cloud environments, ensuring data integrity,
              performance optimization, and minimal downtime during the
              transition.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Cloud Optimization & Modernization
              </h3>
            </div>
            <p>
              We help organizations not just move to the cloud but truly
              transform their applications and infrastructure to take full
              advantage of cloud capabilities, implementing modern architectures
              and services that enhance performance, scalability, and
              cost-efficiency.
            </p>
          </div>
        </div>
      </div>
      <p>
        At TrinetraKrti, we envision cloud migration as not just a technical
        exercise but a strategic transformation that enables organizations to
        become more agile, innovative, and competitive. Our commitment to cloud
        excellence drives us to continuously refine our migration methodologies
        and stay at the forefront of emerging cloud technologies and best
        practices. With a passionate team of cloud specialists dedicated to
        excellence, we aim to help organizations navigate the complexities of
        cloud migration and emerge with modernized, optimized environments that
        provide a solid foundation for future growth and digital innovation.
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

export default CloudMigration;
