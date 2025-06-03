import img1 from "../../../assets/images/services-details/generativeai1.webp";
import img2 from "../../../assets/images/services-details/generativeai2.webp";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../../data/constant";

const GenerativeAISolutions = () => {
  const next = services[0];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="Generative AI Solutions"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Generative AI Solutions
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, we are at the forefront of the Generative AI revolution, 
          developing cutting-edge solutions that harness the power of artificial intelligence 
          to create, innovate, and transform business processes. Our Generative AI services 
          enable organizations to automate content creation, enhance creativity, and unlock 
          new possibilities across various domains.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Advanced Generative AI Capabilities
        </h2>
        <p data-aos="fade-up" className="description">
          Our Generative AI solutions leverage state-of-the-art models including GPT, 
          DALL-E, Stable Diffusion, and custom-trained models to deliver unprecedented 
          capabilities in text generation, image synthesis, code generation, and creative 
          content production. We specialize in fine-tuning these models for specific 
          business use cases and integrating them seamlessly into existing workflows.
          <br />
          <br />
          From automated content creation and personalized marketing materials to 
          intelligent code generation and creative design assistance, our Generative AI 
          solutions empower businesses to scale their creative and analytical capabilities 
          while maintaining quality and consistency across all outputs.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="Generative AI development"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Custom AI Model Development
              </h3>
            </div>
            <p>
              Develop and fine-tune custom generative AI models tailored to your specific 
              industry needs, ensuring optimal performance and relevance for your business 
              applications.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Automated Content Generation
              </h3>
            </div>
            <p>
              Implement AI-powered content creation systems that generate high-quality 
              text, images, videos, and multimedia content at scale, reducing production 
              time and costs significantly.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Intelligent Code Generation</h3>
            </div>
            <p>
              Accelerate software development with AI-powered code generation tools that 
              understand requirements and generate optimized, maintainable code across 
              multiple programming languages and frameworks.
            </p>
          </div>
        </div>
      </div>
      <p>
        At TrinetraKrti, we recognize that Generative AI represents a paradigm shift 
        in how businesses approach creativity, productivity, and innovation. Our expertise 
        in this rapidly evolving field positions us to help organizations harness the 
        full potential of generative technologies, driving unprecedented growth and 
        competitive advantage in the AI-powered future.
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

export default GenerativeAISolutions;