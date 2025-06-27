import React from "react";
import Header from "../../components/Website/Header";
import banner from "../../assets/images/about-us-page-banner.webp";
import bgShape from "../../assets/images/bg-shape.png";
import InquiryForm from "../../components/InquiryForm";
import Footer from "../../components/Footer";
import SEOMetaTags from "../../components/SEOMetaTags";
import { seoData } from "../../data/seoData";

const Investors = () => {
  return (
    <div className="landing-bg">
      <SEOMetaTags 
        title={seoData.investors.title}
        description={seoData.investors.description}
        keywords={seoData.investors.keywords}
        canonicalUrl={seoData.investors.canonicalUrl}
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

      {/* Investors Introduction Section */}
      <section className="wrapper py-[5rem]">
        <div className="text-center mb-12">
          <div data-aos="fade-up" className="ai-decorative-line !w-fit mx-auto">
            <h6 className="font-medium text-secondary capitalize">
              Investment Opportunity
            </h6>
          </div>
          <h2 className="heading capitalize mt-5">For Investors</h2>
          <p className="mt-6 max-w-3xl mx-auto">
            Join us in shaping the future of AI and share in its profits. TOT (Trinetrakrti) offers a compelling 
            investment opportunity in the rapidly growing Generative AI market.
          </p>
        </div>
      </section>

      {/* Investment Opportunity Content */}
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

        <div className="wrapper relative z-10">
          {/* Executive Summary */}
          <div data-aos="fade-up" className="bg-primary/5 p-1 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm mb-12">
            <div className="border border-gray-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Executive Summary</h3>
              <p className="text-lg leading-relaxed">
                TOT (Trinetrakrti) stands at the vanguard of the burgeoning Generative AI and Prompt Engineering landscape, 
                offering a compelling investment opportunity. Led by a seasoned founder with deep technical expertise, our 
                strategic focus on scalable SaaS solutions and high-value custom AI projects is engineered for rapid Annual 
                Recurring Revenue (ARR) and Monthly Recurring Revenue (MRR) growth. We are poised to deliver not just innovative 
                AI solutions but also a targeted 15-20% annual profit margin on investor capital, positioning TOT as a highly 
                attractive venture for partners seeking significant returns in the AI revolution.
              </p>
            </div>
          </div>

          {/* Market Opportunity */}
          <div data-aos="fade-up" className="bg-white/90 p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">The Market Opportunity: The Generative AI Explosion & The Urgency of Prompt Engineering</h3>
            <p className="mb-4">
              The global Generative AI market is expanding at an exponential rate, projected to reach hundreds of billions of dollars. 
              Enterprises across all sectors are scrambling to harness AI for unparalleled content creation, automation, and intelligent 
              decision-making. Crucially, Prompt Engineering – the expertise in optimizing AI model outputs – has emerged as the bottleneck 
              and key differentiator for AI success. TOT addresses this critical need head-on, providing both cutting-edge technology and 
              the specialized human intelligence required to unlock AI's true potential.
            </p>
          </div>

          {/* Core Value Proposition */}
          <div data-aos="fade-up" className="bg-white/90 p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Core Value Proposition & Path to Traction</h3>
            <p className="mb-4">
              TOT empowers businesses to achieve superior outcomes from Generative AI through:
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li className="pl-2">
                <span className="font-semibold">Proprietary Prompt Optimization Platform (SaaS):</span> A cloud-native solution for advanced prompt generation, 
                testing, versioning, and performance monitoring across various Large Language Models (LLMs). This is our primary engine for scalable ARR and MRR.
              </li>
              <li className="pl-2">
                <span className="font-semibold">Custom Generative AI Solution Development:</span> Bespoke AI applications tailored to specific industry needs, 
                delivering high-value, project-based revenue with strong potential for long-term support contracts contributing to recurring revenue.
              </li>
              <li className="pl-2">
                <span className="font-semibold">Expert AI Consulting & Prompt Engineering Enablement:</span> Specialized services and workshops that position 
                TOT as a thought leader and generate immediate revenue, while also serving as a funnel for our platform and custom solutions.
              </li>
            </ul>

            <h4 className="text-xl font-semibold text-primary mb-3">Achieving Traction & Accelerating Revenue:</h4>
            <p className="mb-4">
              Our strategy for rapid market penetration and client acquisition is multi-pronged:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li className="pl-2">
                <span className="font-semibold">Targeted Outreach:</span> Focusing on industries with high Generative AI demand 
                (e.g., marketing, content creation, software development, customer service).
              </li>
              <li className="pl-2">
                <span className="font-semibold">Strategic Partnerships:</span> Collaborating with cloud providers, data consultancies, 
                and system integrators to leverage their existing client networks.
              </li>
              <li className="pl-2">
                <span className="font-semibold">Thought Leadership & Proof of Concept:</span> Showcasing our expertise through industry events, 
                webinars, and initial pilot projects that demonstrate tangible ROI for clients, converting early adopters into long-term ARR contributors.
              </li>
              <li className="pl-2">
                <span className="font-semibold">Product-Led Growth (for SaaS):</span> Offering freemium models or trial periods for our platform 
                to drive initial adoption and rapid conversion to paid subscriptions.
              </li>
            </ul>
          </div>

          {/* Projected Financials */}
          <div data-aos="fade-up" className="bg-primary/5 p-1 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm mb-12">
            <div className="border border-gray-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Projected Financials: Driving Strong ARR & MRR Growth</h3>
              <p className="mb-6">
                Our business model is built to generate robust recurring revenue streams. While specific historical figures are under wraps 
                for private discussion, our illustrative projections for ARR and MRR demonstrate aggressive growth:
              </p>
              
              <div className="space-y-6">
                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <h4 className="text-xl font-semibold mb-2 text-primary">Year 1 (Foundational Traction)</h4>
                  <p>
                    Focus on securing initial high-value custom projects and launching the pilot version of our SaaS platform.
                  </p>
                  <p className="mt-2 font-medium">
                    Illustrative MRR Target: Establishing a baseline of $15K - $25K MRR by year-end, primarily from initial SaaS subscriptions and recurring retainers.
                  </p>
                </div>
                
                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <h4 className="text-xl font-semibold mb-2 text-primary">Year 2 (Scalable Growth)</h4>
                  <p>
                    Significant expansion of the SaaS platform user base and securing repeat custom solution clients.
                  </p>
                  <p className="mt-2 font-medium">
                    Illustrative MRR Target: Rapid escalation to $100K - $150K MRR, pushing towards $1.2M - $1.8M ARR. This represents a projected 300-500% 
                    year-over-year growth in MRR, driven by strong product-market fit and expanding sales channels.
                  </p>
                </div>
                
                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <h4 className="text-xl font-semibold mb-2 text-primary">Year 3 (Market Dominance & Diversification)</h4>
                  <p>
                    Solidifying market position for our SaaS platform, scaling API access, and undertaking larger, more complex AI integrations.
                  </p>
                  <p className="mt-2 font-medium">
                    Illustrative MRR Target: Achieving $300K - $500K+ MRR, translating to $3.6M - $6M+ ARR. This sustained growth (projected ~200-250% YoY MRR growth) 
                    is fueled by enterprise adoption and increasing customer lifetime value.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Proposition */}
          <div data-aos="fade-up" className="bg-white/90 p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">The Investment Proposition: Your Partner in AI Profitability</h3>
            <p className="mb-6">
              Investing in TOT is an unparalleled opportunity to capitalize on the explosive growth of Generative AI with a clear path to exceptional returns:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary/10 p-5 rounded-lg border-t-4 border-primary">
                <h4 className="text-lg font-semibold mb-3 text-primary">Targeted Annual Profit Margin</h4>
                <p>
                  We are committed to achieving and distributing a 15-20% annual profit margin on your investment. This signifies our confidence in our 
                  profitability model and our dedication to providing substantial, consistent returns to our strategic partners.
                </p>
              </div>
              
              <div className="bg-primary/10 p-5 rounded-lg border-t-4 border-primary">
                <h4 className="text-lg font-semibold mb-3 text-primary">High-Growth Market Exposure</h4>
                <p>
                  Gain a significant foothold in one of the most transformative technological shifts of our time.
                </p>
              </div>
              
              <div className="bg-primary/10 p-5 rounded-lg border-t-4 border-primary">
                <h4 className="text-lg font-semibold mb-3 text-primary">Expert Leadership & Innovation</h4>
                <p>
                  Partner with a visionary founder, Vinayak R. Tirlapur, whose deep expertise and ongoing research ensure cutting-edge solutions, backed by 
                  stable, diverse governance.
                </p>
              </div>
              
              <div className="bg-primary/10 p-5 rounded-lg border-t-4 border-primary">
                <h4 className="text-lg font-semibold mb-3 text-primary">Scalable & Defensible Business Model</h4>
                <p>
                  Our emphasis on SaaS and proprietary Prompt Engineering solutions ensures high scalability, strong margins, and a competitive moat.
                </p>
              </div>
              
              <div className="bg-primary/10 p-5 rounded-lg border-t-4 border-primary">
                <h4 className="text-lg font-semibold mb-3 text-primary">Tangible Impact</h4>
                <p>
                  Contribute to shaping the future of AI for businesses globally, driving efficiency, creativity, and innovation.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-3">Join Us in Shaping the Future of AI – and Share in Its Profits</h3>
              <p className="max-w-3xl mx-auto">
                TOT is actively seeking strategic investors who recognize the immense potential of Generative AI and are eager to participate in its lucrative future. 
                We invite you to partner with us to accelerate our growth, expand our market leadership, and collectively realize the substantial returns that await 
                in this exciting domain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Inquiry Form */}
      <section className="mb-[5rem]">
        <div className="text-center mb-8">
          <div data-aos="fade-up" className="ai-decorative-line !w-fit mx-auto">
            <h6 className="font-medium text-secondary capitalize">
              Connect With Us
            </h6>
          </div>
          <h2 className="heading capitalize mt-5">Investor Inquiry</h2>
          <p className="mt-4 max-w-3xl mx-auto">
            Interested in learning more about investment opportunities with TOT? Fill out the form below and our team will get in touch with you.
          </p>
        </div>
        
        <InquiryForm />
      </section>

      <Footer />
    </div>
  );
};

export default Investors;