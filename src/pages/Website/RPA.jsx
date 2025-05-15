import React from "react";
import img1 from "../../assets/images/services-details/rpa1.webp";
import img2 from "../../assets/images/services-details/rpa2.webp";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../data/constant";

const RPA = () => {
  const next = services[7];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="robotic process automation"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Robotic Process Automation (RPA)
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, we understand that Robotic Process Automation (RPA) is transforming how 
          businesses operate by automating repetitive, rule-based tasks that previously required 
          human intervention. Our RPA services help organizations streamline operations, reduce errors, 
          and free up valuable human resources for more strategic, creative work. As specialists in 
          business process optimization, we leverage cutting-edge RPA technologies to drive efficiency, 
          accuracy, and cost savings across your enterprise.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Understanding Our Approach to RPA
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, our RPA services encompass a comprehensive methodology, ensuring a 
          strategic approach to automation implementation. Our team specializes in identifying 
          ideal processes for automation through detailed process analysis and mapping. We evaluate 
          factors such as process complexity, frequency, standardization, and potential ROI to 
          prioritize automation opportunities. Working with leading RPA platforms including UiPath, 
          Automation Anywhere, and Blue Prism, we design and develop software robots (bots) that 
          mimic human interactions with digital systems, performing tasks with greater speed, 
          accuracy, and consistency than manual processing.
          <br />
          <br />
          On the implementation side, our RPA engineers follow a structured development approach 
          that emphasizes scalability, maintainability, and security. We prioritize creating robust, 
          exception-handling mechanisms and comprehensive logging to ensure reliable bot performance 
          even when encountering unexpected scenarios. By combining technical expertise with deep 
          business process understanding, we help organizations implement RPA solutions that deliver 
          immediate operational improvements while laying the foundation for broader digital 
          transformation initiatives, including intelligent automation that incorporates AI and 
          machine learning capabilities.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="robotic process automation"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Process Assessment & Bot Development
              </h3>
            </div>
            <p>
              We analyze your business processes to identify automation opportunities, then design 
              and develop custom bots that execute these processes with precision and reliability.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Attended & Unattended Automation
              </h3>
            </div>
            <p>
              Our team implements both attended bots that collaborate with employees and unattended 
              bots that operate independently, creating a flexible automation ecosystem tailored to 
              your operational needs.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Intelligent Automation</h3>
            </div>
            <p>
              We enhance traditional RPA with AI capabilities such as natural language processing, 
              computer vision, and machine learning, enabling automation of more complex, 
              judgment-based processes.
            </p>
          </div>
        </div>
      </div>
      <p>
        At TrinetraKrti, we envision a future where RPA evolves into increasingly intelligent 
        automation that can handle complex, cognitive tasks alongside routine processes. Our 
        commitment to automation innovation drives us to explore emerging technologies such as 
        process mining, intelligent document processing, and conversational AI that complement 
        and enhance RPA capabilities. With a passionate team of automation specialists dedicated 
        to excellence, we aim to help organizations create a digital workforce that collaborates 
        seamlessly with human employees, driving operational excellence, enhancing customer 
        experiences, and creating competitive advantages in an increasingly digital business landscape.
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

export default RPA;