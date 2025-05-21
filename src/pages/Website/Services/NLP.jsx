import React from "react";
import img1 from "../../../assets/images/services-details/nlp1.webp"
import img2 from "../../../assets/images/services-details/nlp2.webp"
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../../data/constant";

const NLP = () => {
  const next = services[10];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="aspect-video object-cover rounded-3xl object-center"
        alt="natural language processing"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Natural Language Processing (NLP)
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, we understand that Natural Language Processing (NLP) is transforming how 
          machines understand and interact with human language. Our NLP services help organizations 
          harness the power of language AI to extract insights from text data, automate communication 
          processes, and create more intuitive human-computer interactions. As specialists in language 
          technologies, we develop custom NLP solutions that bridge the gap between human communication 
          and machine understanding, enabling new capabilities and efficiencies across your business.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Understanding Our Approach to NLP
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, our NLP services encompass a comprehensive methodology, ensuring a strategic 
          approach to each project. Our team specializes in developing language processing solutions 
          that address specific business challenges and opportunities. From text preprocessing and 
          linguistic analysis to advanced deep learning models, we employ state-of-the-art techniques 
          to enable machines to understand, interpret, and generate human language with increasing 
          sophistication. We work with cutting-edge NLP frameworks and models, including transformer-based 
          architectures like BERT, GPT, and their derivatives, customizing and fine-tuning them to 
          your specific domain and use case.
          <br />
          <br />
          On the implementation side, our NLP engineers follow a structured development process that 
          emphasizes both technical performance and practical utility. We prioritize thorough evaluation 
          and testing across multiple dimensions, including accuracy, robustness, and computational 
          efficiency. By combining technical expertise with domain knowledge, we help organizations 
          implement NLP solutions that not only perform well on standard benchmarks but also deliver 
          meaningful business outcomes, whether that's improving customer service, streamlining document 
          processing, or gaining valuable insights from unstructured text data.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="natural language processing"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Conversational AI & Chatbots
              </h3>
            </div>
            <p>
              We develop intelligent virtual assistants and chatbots that understand natural language 
              queries and provide helpful, contextually relevant responses, enhancing customer service 
              and automating routine interactions.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Text Analytics & Sentiment Analysis
              </h3>
            </div>
            <p>
              Our team creates NLP systems that analyze large volumes of text data to extract key 
              information, identify trends, and determine sentiment, providing valuable insights 
              from customer feedback, social media, and other textual sources.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Document Processing & Summarization</h3>
            </div>
            <p>
              We implement NLP solutions that automatically extract information from documents, 
              classify content, and generate concise summaries, streamlining document-heavy 
              workflows and making information more accessible.
            </p>
          </div>
        </div>
      </div>
      <p>
        At TrinetraKrti, we envision a future where natural language interfaces become the primary 
        way humans interact with technology, making digital systems more accessible and intuitive 
        for everyone. Our commitment to NLP innovation drives us to explore emerging techniques such 
        as few-shot learning, multimodal language understanding, and more efficient language models 
        that expand the capabilities and applications of language AI. With a passionate team of NLP 
        specialists dedicated to excellence, we aim to help organizations harness the power of language 
        technology to enhance communication, automate processes, and gain deeper insights from textual 
        data, creating more intelligent and human-centered systems that drive business value.
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

export default NLP;