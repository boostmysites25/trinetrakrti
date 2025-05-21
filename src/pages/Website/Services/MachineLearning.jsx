import React from "react";
import img1 from "../../../assets/images/services-details/ai1.jpg";
import img2 from "../../../assets/images/services-details/ai2.jpg";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../../data/constant";

const MachineLearning = () => {
  const next = services[8];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="machine learning services"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Machine Learning Services
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, we understand that Machine Learning is revolutionizing how businesses 
          extract value from data, enabling systems that can learn, adapt, and improve without 
          explicit programming. Our Machine Learning services help organizations harness the power 
          of advanced algorithms to uncover patterns, make predictions, and automate complex 
          decision-making processes. As specialists in data-driven technologies, we develop custom 
          ML solutions that transform raw information into actionable intelligence and competitive advantage.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Understanding Our Approach to Machine Learning
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, our Machine Learning services encompass a comprehensive methodology, 
          ensuring a strategic approach to each project. Our team specializes in developing ML 
          solutions that address specific business challenges and opportunities. From data collection 
          and preparation to model selection, training, and deployment, we handle every stage of the 
          ML lifecycle with meticulous attention to detail. We work with a diverse range of algorithms 
          and techniques, including supervised learning, unsupervised learning, deep learning, and 
          reinforcement learning, selecting the most appropriate approach based on your specific use 
          case and data characteristics.
          <br />
          <br />
          On the implementation side, our ML engineers follow a rigorous development process that 
          emphasizes model accuracy, interpretability, and scalability. We prioritize robust validation 
          and testing methodologies to ensure that our models generalize well to new, unseen data. 
          By combining technical expertise with domain knowledge, we help organizations implement 
          ML solutions that not only perform well technically but also deliver meaningful business 
          outcomes, whether that's improving operational efficiency, enhancing customer experiences, 
          or enabling entirely new products and services.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="machine learning services"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Predictive Analytics
              </h3>
            </div>
            <p>
              We develop ML models that analyze historical data to forecast future outcomes, 
              enabling proactive decision-making in areas such as demand forecasting, resource 
              planning, and risk management.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Computer Vision Solutions
              </h3>
            </div>
            <p>
              Our team creates ML systems that can analyze and interpret visual information from 
              images and videos, enabling applications such as object detection, facial recognition, 
              and automated quality inspection.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Recommendation Systems</h3>
            </div>
            <p>
              We build intelligent recommendation engines that analyze user behavior and preferences 
              to suggest relevant products, content, or actions, enhancing customer engagement and 
              driving business growth.
            </p>
          </div>
        </div>
      </div>
      <p>
        At TrinetraKrti, we envision a future where Machine Learning becomes increasingly accessible 
        and integrated into everyday business operations. Our commitment to ML innovation drives us 
        to explore emerging techniques such as federated learning, transfer learning, and automated 
        machine learning (AutoML) that make these technologies more efficient and accessible. With a 
        passionate team of data scientists and ML engineers dedicated to excellence, we aim to help 
        organizations navigate the complexities of machine learning implementation and harness its 
        transformative potential to create data-driven solutions that deliver sustainable competitive 
        advantages in an increasingly AI-powered business landscape.
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

export default MachineLearning;