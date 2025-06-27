import React from "react";
import img1 from "../../../assets/images/services-details/ai1.jpg";
import img2 from "../../../assets/images/services-details/ai2.jpg";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../../data/constant";
import SEOMetaTags from "../../../components/SEOMetaTags";
import { seoData } from "../../../data/seoData";

const AIDevelopment = () => {
  const next = services[3];
  return (
    <>
      <SEOMetaTags 
        title={seoData.aiDevelopment.title}
        description={seoData.aiDevelopment.description}
        keywords={seoData.aiDevelopment.keywords}
        canonicalUrl={seoData.aiDevelopment.canonicalUrl}
      />
      <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="AI development"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Artificial Intelligence Development
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, we recognize that Artificial Intelligence is revolutionizing how businesses 
          operate, make decisions, and engage with customers. Our AI development services help 
          organizations harness the transformative power of intelligent technologies to automate 
          processes, extract valuable insights from data, and create innovative solutions that drive 
          competitive advantage in an increasingly digital world.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Understanding Our Approach to AI Development
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, our AI development services encompass a wide range of technologies and 
          methodologies, ensuring a comprehensive approach to each project. Our team specializes in 
          developing custom AI solutions that address specific business challenges and opportunities. 
          From machine learning algorithms and natural language processing to computer vision and 
          predictive analytics, we leverage cutting-edge AI technologies to create intelligent systems 
          that learn, adapt, and improve over time. This focus on tailored solutions is essential in 
          maximizing the value of AI for our clients' unique contexts.
          <br />
          <br />
          On the implementation side, our AI engineers follow a rigorous development process that 
          emphasizes data quality, model accuracy, and ethical considerations. We prioritize 
          transparency and explainability in our AI systems, ensuring that the solutions we deliver 
          are not only powerful but also trustworthy and aligned with responsible AI principles. 
          By combining technical excellence with strategic business thinking, we help organizations 
          implement AI solutions that deliver measurable results and create sustainable competitive advantages.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="AI development"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Custom AI Solutions
              </h3>
            </div>
            <p>
              We develop tailored artificial intelligence solutions designed specifically for your 
              unique business challenges, ensuring optimal performance and maximum business value.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Machine Learning Models
              </h3>
            </div>
            <p>
              Our team builds sophisticated machine learning models that learn from your data to make 
              accurate predictions, identify patterns, and automate complex decision-making processes.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Natural Language Processing</h3>
            </div>
            <p>
              We create NLP solutions that enable computers to understand, interpret, and generate 
              human language, powering chatbots, sentiment analysis, and content generation.
            </p>
          </div>
        </div>
      </div>
      <p>
        At TrinetraKrti, we envision a future where AI technologies become seamlessly integrated into 
        business operations, augmenting human capabilities and enabling unprecedented levels of 
        efficiency and innovation. Our commitment to responsible AI development drives us to create 
        solutions that are not only technically advanced but also ethical, transparent, and aligned 
        with human values. With a passionate team of AI specialists dedicated to excellence, we aim 
        to help organizations navigate the AI revolution and harness its transformative potential to 
        create sustainable value and competitive advantage.
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
    </>
  );
};

export default AIDevelopment;