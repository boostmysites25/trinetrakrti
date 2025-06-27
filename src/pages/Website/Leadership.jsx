
import React from "react";
import Header from "../../components/Website/Header";
import banner from "../../assets/images/about-us-page-banner.webp";
import bgShape from "../../assets/images/bg-shape.png";
import SolveITNeeds from "../../components/Website/SolveITNeeds";
import Footer from "../../components/Footer";
import SEOMetaTags from "../../components/SEOMetaTags";
import { seoData } from "../../data/seoData";

const Leadership = () => {
  return (
    <div className="landing-bg">
      <SEOMetaTags 
        title={seoData.leadership.title}
        description={seoData.leadership.description}
        keywords={seoData.leadership.keywords}
        canonicalUrl={seoData.leadership.canonicalUrl}
      />
      <Header />
      <div data-aos="fade-down" className="h-[50vh] md:h-[60vh]">
        <img
          loading="lazy"
          src={banner}
          width="800"
          height="600"
          className="h-full object-cover w-full object-left md:object-top"
          alt="banner"
        />
      </div>

      {/* Leadership Introduction Section */}
      <section className="wrapper py-[5rem]">
        <div className="text-center mb-12">
          <div data-aos="fade-up" className="ai-decorative-line !w-fit mx-auto">
            <h6 className="font-medium text-secondary capitalize">
              Our Leadership
            </h6>
          </div>
          <h2 className="heading capitalize mt-5">Meet Our Team</h2>
          <p className="mt-6 max-w-3xl mx-auto">
            The leadership at TOT (Trinetrakrti) combines visionary expertise with deep industry knowledge. 
            Our team is committed to driving innovation and delivering exceptional value to our clients.
          </p>
        </div>
      </section>

      {/* Leadership Profiles Section */}
      <section className="relative mb-[5rem]">
        <img
          loading="lazy"
          src={bgShape}
          className="w-[37%] absolute left-3 top-0 object-contain opacity-50"
          alt=""
        />
        <img
          loading="lazy"
          src={bgShape}
          className="w-[37%] absolute right-3 rotate-[125deg] top-0 object-contain opacity-50"
          alt=""
        />

        <div className="wrapper">
          {/* Vinayak Profile */}
          <div data-aos="fade-up" className="mb-20 relative z-10">
            <div className="bg-primary/5 p-1 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm">
              <div className="border border-primary/5 rounded-lg p-8">
                <div className="mb-6 border-b border-primary/5 pb-6">
                  <h3 className="text-3xl font-bold text-primary">Vinayak R Tirlapur</h3>
                  <p className="text-black/60 font-medium text-xl mt-1">Founder & CEO, TOT (Trinetrakrti)</p>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    Vinayak R. Tirlapur is the visionary Founder and CEO of TOT (Trinetrakrti), an AI company at the forefront of innovation. 
                    He brings a robust background of over 9 years of experience in the IT industry, primarily as a Data Engineer, to his leadership role. 
                    His deep expertise and entrepreneurial drive are key to TOT's mission.
                  </p>
                  
                  <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                    <h4 className="text-xl font-semibold mb-3 text-primary">Professional Journey and Expertise</h4>
                    <p className="mb-4">
                      Vinayak's extensive career in the IT sector has seen him contribute to prominent organizations including TCS, HCL, Mphasis, Pitney Bowes, and Fusion Software Solutions. 
                      This diverse experience has equipped him with a comprehensive understanding of various facets of data and technology.
                    </p>
                    <p className="mb-3">
                      He possesses a formidable skill set in cutting-edge technologies crucial for the AI landscape, including:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white/70 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2 text-primary">AI & Machine Learning</h5>
                        <p className="text-sm">Prompt Engineering, Generative AI, AI tools like ChatGPT, Blackbox, Gemini, and Claude</p>
                      </div>
                      <div className="bg-white/70 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2 text-primary">Big Data</h5>
                        <p className="text-sm">Big Data & Hadoop, Spark & Scala, Kafka, Airflow, Data Warehousing, Data Lake Processing, ETL/ELT</p>
                      </div>
                      <div className="bg-white/70 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2 text-primary">Cloud Computing</h5>
                        <p className="text-sm">AWS and Azure Services, Snowflake</p>
                      </div>
                      <div className="bg-white/70 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2 text-primary">Programming & Analytics</h5>
                        <p className="text-sm">Python, Data Analytics & Visualization, Business Intelligence (BI)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                    <h4 className="text-xl font-semibold mb-3 text-primary">Educational Background</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white/70 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2 text-primary">MBA</h5>
                        <p className="text-sm">Business Analytics, Alliance School of Business</p>
                      </div>
                      <div className="bg-white/70 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2 text-primary">Bachelor's Degree</h5>
                        <p className="text-sm">Electronics and Communication, SDM College of Engineering and Technology</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                    <h4 className="text-xl font-semibold mb-3 text-primary">Current Pursuits & Vision</h4>
                    <p>
                      Vinayak is currently pursuing his PhD. Driven by an unwavering passion for Generative AI and Prompt Engineering, 
                      this ongoing academic endeavor reflects his commitment to pushing the boundaries of AI research and development, 
                      directly influencing TOT's innovative direction. His vision for TOT is rooted in leveraging advanced AI to create 
                      impactful solutions and contribute significantly to the evolving technological landscape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Directors Section */}
          <div className="grid md:grid-cols-2 gap-10 relative z-10">
            {/* Rajkumar Profile */}
            <div data-aos="fade-right" className="bg-gradient-to-br from-white/90 to-white/80 p-1 rounded-xl overflow-hidden shadow-xl backdrop-blur-sm">
              <div className="border border-primary/30 rounded-lg p-6">
                <div className="mb-4 border-b border-primary/30 pb-4">
                  <h3 className="text-2xl font-bold text-primary">Rajkumar B Tirlapur</h3>
                  <p className="text-secondary font-medium">Director, TOT (Trinetrakrti)</p>
                </div>
                
                <div className="space-y-4">
                  <p>
                    Rajkumar B. Tirlapur serves as a Director at TOT (Trinetrakrti), bringing a wealth of diverse business experience to the company's strategic oversight. 
                    As the father of Founder & CEO Vinayak R. Tirlapur, his involvement represents a cornerstone of support and seasoned wisdom.
                  </p>
                  
                  <div className="bg-white/50 p-5 rounded-lg border-l-4 border-primary">
                    <h4 className="text-lg font-semibold mb-2 text-primary">Areas of Expertise</h4>
                    <p className="mb-3">
                      With a distinguished career as a businessman, Rajkumar's expertise spans multiple critical sectors:
                    </p>
                    <div className="space-y-3">
                      <div className="bg-white/70 p-3 rounded-lg">
                        <h5 className="font-semibold text-primary">Finance</h5>
                        <p className="text-sm">His acumen in financial matters provides valuable guidance for TOT's fiscal strategies and sustainable growth.</p>
                      </div>
                      <div className="bg-white/70 p-3 rounded-lg">
                        <h5 className="font-semibold text-primary">Real Estate</h5>
                        <p className="text-sm">Experience in real estate offers a pragmatic perspective on asset management and long-term planning, crucial for a growing enterprise.</p>
                      </div>
                      <div className="bg-white/70 p-3 rounded-lg">
                        <h5 className="font-semibold text-primary">Agriculture</h5>
                        <p className="text-sm">His background in agriculture demonstrates adaptability and a deep understanding of varied industries, contributing to a holistic business outlook.</p>
                      </div>
                    </div>
                  </div>
                  
                  <p>
                    Rajkumar's multi-faceted business background offers a unique perspective to TOT, providing stability and a broad understanding of market dynamics, 
                    which are invaluable as the company navigates the rapidly evolving AI industry.
                  </p>
                </div>
              </div>
            </div>

            {/* Chandrakala Profile */}
            <div data-aos="fade-left" className="bg-gradient-to-bl from-white/90 to-white/80 p-1 rounded-xl overflow-hidden shadow-xl backdrop-blur-sm">
              <div className="border border-primary/30 rounded-lg p-6">
                <div className="mb-4 border-b border-primary/30 pb-4">
                  <h3 className="text-2xl font-bold text-primary">Chandrakala R Tirlapur</h3>
                  <p className="text-secondary font-medium">Director, TOT (Trinetrakrti)</p>
                </div>
                
                <div className="space-y-4">
                  <p>
                    Chandrakala R. Tirlapur is a respected Director at TOT (Trinetrakrti), bringing a unique blend of dedication and foundational support to the company. 
                    As the mother of Founder & CEO Vinayak R. Tirlapur, her presence on the board symbolizes the deep-rooted values and nurturing environment from which TOT has emerged.
                  </p>
                  
                  <div className="bg-white/50 p-5 rounded-lg border-l-4 border-primary">
                    <h4 className="text-lg font-semibold mb-2 text-primary">Background & Contribution</h4>
                    <div className="space-y-3">
                      <div className="bg-white/70 p-3 rounded-lg">
                        <h5 className="font-semibold text-primary">Educational Experience</h5>
                        <p className="text-sm">A retired teacher, Chandrakala's previous profession instilled in her principles of clarity, structured thinking, and a commitment to nurturing growth – 
                        qualities that, while seemingly distinct from the tech world, are profoundly valuable in governance.</p>
                      </div>
                      <div className="bg-white/70 p-3 rounded-lg">
                        <h5 className="font-semibold text-primary">Values & Vision</h5>
                        <p className="text-sm">Her experience in education emphasizes patience, attention to detail, and a focus on long-term development. Now dedicated to managing her home, 
                        Chandrakala contributes to TOT's leadership with a perspective that prioritizes stability, ethical operations, and the well-being of the organization.</p>
                      </div>
                    </div>
                  </div>
                  
                  <p>
                    Her involvement underscores the belief in strong foundational principles and the importance of a supportive ecosystem for innovation to thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="wrapper pb-[5rem]">
        <div data-aos="fade-up" className="text-center mb-10">
          <div className="ai-decorative-line w-fit mx-auto">
            <h6 className="font-medium text-secondary capitalize">
              Our Philosophy
            </h6>
          </div>
          <h2 className="heading capitalize mt-5">Leadership Values</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div data-aos="fade-up" data-aos-delay="100" className="bg-white/90 p-6 rounded-lg shadow-lg border-t-4 border-primary text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary">Innovation</h3>
            <p>We constantly push boundaries and explore new possibilities in AI and technology to create solutions that make a difference.</p>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="200" className="bg-white/90 p-6 rounded-lg shadow-lg border-t-4 border-primary text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary">Collaboration</h3>
            <p>We believe in the power of diverse perspectives and collaborative efforts to solve complex challenges and deliver exceptional results.</p>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="300" className="bg-white/90 p-6 rounded-lg shadow-lg border-t-4 border-primary text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary">Integrity</h3>
            <p>We uphold the highest standards of ethics and transparency in all our operations, building trust with our clients and partners.</p>
          </div>
        </div>
      </section>

      <SolveITNeeds />
      <Footer />
    </div>
  );
};

export default Leadership;