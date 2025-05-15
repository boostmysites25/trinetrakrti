import React from "react";
import img1 from "../../assets/images/services-details/chatbot1.webp";
import img2 from "../../assets/images/services-details/chatbot2.webp";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../data/constant";

const AIBotSubscription = () => {
  const next = services[13];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="AI bot subscription"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          AI Bot Subscription
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, we understand that AI-powered chatbots and virtual
          assistants have become essential tools for businesses looking to
          enhance customer service, streamline operations, and provide 24/7
          support. Our AI Bot Subscription service offers a flexible,
          cost-effective way to deploy intelligent conversational agents across
          your digital channels without the complexity and expense of building
          custom solutions from scratch. As specialists in conversational AI, we
          provide ready-to-use, customizable bots that deliver immediate value
          while continuously improving through machine learning.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Understanding Our Approach to AI Bot Subscription
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, our AI Bot Subscription service encompasses a
          comprehensive solution, ensuring a strategic approach to implementing
          conversational AI in your business. Our team specializes in
          configuring and customizing AI bots that align with your brand voice,
          business processes, and customer needs. From initial setup and
          knowledge base development to integration with your existing systems
          and ongoing optimization, we handle every aspect of your bot
          deployment. Our subscription model provides access to sophisticated
          conversational AI capabilities without large upfront investments,
          allowing you to scale your usage based on business needs while
          benefiting from continuous improvements and updates.
          <br />
          <br />
          On the technical side, our AI bots leverage advanced natural language
          understanding (NLU) and natural language generation (NLG) capabilities
          to deliver human-like conversations that accurately interpret user
          intent and provide helpful, contextually relevant responses. We
          prioritize seamless integration with your existing channels and
          systems, including websites, mobile apps, messaging platforms, and CRM
          systems. By combining technical sophistication with ease of use, we
          help organizations implement conversational AI solutions that not only
          automate routine interactions but also enhance customer experiences,
          gather valuable insights, and free up human agents to focus on more
          complex, high-value tasks.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="AI bot subscription"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Customer Service Bots</h3>
            </div>
            <p>
              We provide intelligent virtual assistants that handle customer
              inquiries, troubleshoot common issues, and provide information
              24/7, improving response times and customer satisfaction.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Lead Generation & Sales Bots
              </h3>
            </div>
            <p>
              Our AI bots engage website visitors, qualify leads, and guide
              prospects through the sales funnel, collecting valuable
              information and scheduling appointments with human sales
              representatives.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Internal Process Automation Bots
              </h3>
            </div>
            <p>
              We deploy AI assistants that help employees access information,
              complete routine tasks, and navigate internal systems more
              efficiently, boosting productivity and reducing operational
              friction.
            </p>
          </div>
        </div>
      </div>
      <p>
        At TrinetraKrti, we envision a future where conversational AI becomes an
        integral part of business operations, providing more natural and
        efficient ways for customers and employees to access information and
        services. Our commitment to AI innovation drives us to continuously
        enhance our bot capabilities, incorporating advances in natural language
        processing, contextual understanding, and personalization. With a
        passionate team of AI specialists dedicated to excellence, we aim to
        help organizations leverage the power of conversational AI through our
        subscription service, making sophisticated technology accessible and
        delivering measurable business value through improved customer
        experiences, operational efficiency, and data-driven insights.
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

export default AIBotSubscription;
