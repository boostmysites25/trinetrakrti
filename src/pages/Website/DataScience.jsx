import React from "react";
import img1 from "../../assets/images/services-details/data1.webp";
import img2 from "../../assets/images/services-details/data2.webp";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../data/constant";

const DataScience = () => {
  const next = services[9];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="data science services"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Data Science Services
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, we understand that Data Science is the key to
          unlocking the value hidden in the vast amounts of data organizations
          collect every day. Our Data Science services help businesses transform
          raw data into meaningful insights and actionable intelligence. As
          experts in data analytics and statistical modeling, we combine
          advanced mathematical techniques with domain expertise to solve
          complex business problems and drive data-informed decision making
          across your organization.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Understanding Our Approach to Data Science
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, our Data Science services encompass a comprehensive
          methodology, ensuring a strategic approach to each project. Our team
          specializes in extracting valuable insights from complex,
          multi-dimensional datasets through sophisticated analytical
          techniques. From exploratory data analysis and statistical modeling to
          advanced machine learning and deep learning applications, we employ a
          diverse toolkit to address your specific business challenges. We work
          across the entire data science lifecycle, from data collection,
          cleaning, and preprocessing to model development, validation, and
          deployment, ensuring rigorous, reproducible results that you can
          trust.
          <br />
          <br />
          On the implementation side, our data scientists follow a structured
          yet flexible approach that emphasizes both technical excellence and
          business relevance. We prioritize clear communication of complex
          findings through intuitive visualizations and interactive dashboards,
          making sophisticated analyses accessible to stakeholders across your
          organization. By combining technical expertise with business acumen,
          we help organizations implement data science solutions that not only
          uncover interesting patterns but also drive tangible business
          outcomes, whether that's increasing revenue, reducing costs,
          mitigating risks, or enhancing customer experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="data science services"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Advanced Analytics & Modeling
              </h3>
            </div>
            <p>
              We apply sophisticated statistical and machine learning techniques
              to analyze complex datasets, uncover hidden patterns, and develop
              predictive models that drive business value.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Data Visualization & Dashboarding
              </h3>
            </div>
            <p>
              Our team creates intuitive, interactive visualizations and
              dashboards that transform complex data into clear, actionable
              insights accessible to stakeholders at all levels.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Big Data Analytics</h3>
            </div>
            <p>
              We implement scalable solutions for processing and analyzing
              massive datasets, leveraging distributed computing frameworks to
              extract insights from data of unprecedented volume, variety, and
              velocity.
            </p>
          </div>
        </div>
      </div>
      <p>
        At TrinetraKrti, we envision a future where data-driven decision making
        becomes the norm across all business functions and industries. Our
        commitment to data science innovation drives us to explore emerging
        techniques such as automated feature engineering, explainable AI, and
        causal inference that enhance the power and accessibility of advanced
        analytics. With a passionate team of data scientists, statisticians, and
        domain experts dedicated to excellence, we aim to help organizations
        build a strong data culture and develop the analytical capabilities
        needed to thrive in an increasingly data-rich business environment,
        turning information into insight and insight into competitive advantage.
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

export default DataScience;
