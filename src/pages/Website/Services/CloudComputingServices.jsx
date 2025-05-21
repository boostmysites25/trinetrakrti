import React from "react";
import img1 from "../../../assets/images/services-details/cloudcomputing1.jpg";
import img2 from "../../../assets/images/services-details/cloudcomputing2.png";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../../data/constant";

const CloudComputingServices = () => {
  const next = services[5];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="cloud computing services"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Cloud Computing Services
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, we understand that cloud computing has become the backbone of modern 
          business infrastructure, enabling unprecedented scalability, flexibility, and cost-efficiency. 
          Our cloud computing services help organizations leverage the power of distributed computing 
          resources to transform their IT operations, accelerate innovation, and gain competitive 
          advantages. As experts in cloud technologies, we guide our clients through every stage of 
          their cloud journey, from strategy development to implementation and ongoing optimization.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Understanding Our Approach to Cloud Computing
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, our cloud computing services encompass a comprehensive suite of solutions, 
          ensuring a tailored approach to each organization's unique needs. Our team specializes in 
          designing and implementing cloud architectures that align with business objectives while 
          optimizing for performance, security, and cost. We work across major cloud platforms including 
          AWS, Microsoft Azure, and Google Cloud Platform, providing multi-cloud and hybrid cloud 
          solutions that maximize flexibility and minimize vendor lock-in. This platform-agnostic 
          approach ensures that our clients can leverage the best services for their specific requirements.
          <br />
          <br />
          On the implementation side, our cloud engineers follow industry best practices for cloud 
          deployment, emphasizing infrastructure as code, automated provisioning, and continuous 
          integration/continuous deployment (CI/CD) pipelines. We prioritize robust security measures, 
          implementing comprehensive identity and access management, encryption, and compliance controls. 
          By combining technical expertise with strategic business understanding, we help organizations 
          implement cloud solutions that not only modernize their IT infrastructure but also drive 
          business transformation, enabling agility, innovation, and sustainable growth.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="cloud computing services"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Cloud Infrastructure Design & Implementation
              </h3>
            </div>
            <p>
              We design and deploy scalable, secure cloud infrastructures tailored to your business 
              needs, leveraging the full capabilities of leading cloud platforms to optimize 
              performance and cost-efficiency.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Cloud-Native Application Development
              </h3>
            </div>
            <p>
              Our team builds modern, microservices-based applications specifically designed for 
              cloud environments, ensuring maximum scalability, resilience, and operational efficiency.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Cloud Security & Compliance</h3>
            </div>
            <p>
              We implement comprehensive cloud security measures and compliance controls, protecting 
              your data and applications while ensuring adherence to industry regulations and standards.
            </p>
          </div>
        </div>
      </div>
      <p>
        At TrinetraKrti, we envision a future where cloud computing continues to evolve, enabling 
        increasingly sophisticated and powerful business capabilities. Our commitment to cloud 
        innovation drives us to stay at the forefront of emerging technologies such as serverless 
        computing, edge computing, and AI-powered cloud services. With a passionate team of cloud 
        specialists dedicated to excellence, we aim to help organizations navigate the complexities 
        of cloud adoption and optimization, transforming their IT infrastructure into a strategic 
        asset that drives business value, innovation, and competitive advantage in an increasingly 
        digital world.
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

export default CloudComputingServices;