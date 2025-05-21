import React from "react";
import img1 from "../../../assets/images/services-details/blockchain1.webp";
import img2 from "../../../assets/images/services-details/blockchain2.webp";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../../data/constant";

const BlockchainSolutions = () => {
  const next = services[4];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="blockchain solutions"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Blockchain Solutions
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, we understand that blockchain technology is revolutionizing how businesses 
          establish trust, transparency, and security in their operations. Our blockchain solutions 
          help organizations leverage this transformative technology to create decentralized systems, 
          streamline processes, and develop innovative business models that were previously impossible. 
          As pioneers in blockchain implementation, we guide our clients through the complexities of 
          distributed ledger technology to unlock its full potential.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Understanding Our Approach to Blockchain Solutions
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, our blockchain services encompass a comprehensive range of solutions, 
          ensuring a tailored approach to each project. Our team specializes in developing custom 
          blockchain applications that address specific business challenges and opportunities. 
          From private enterprise blockchains to public network integrations, we design secure, 
          scalable, and efficient distributed systems. We work with leading blockchain platforms 
          including Ethereum, Hyperledger, and Binance Smart Chain to implement solutions that 
          align perfectly with our clients' requirements and industry standards.
          <br />
          <br />
          On the implementation side, our blockchain engineers follow a methodical development 
          process that emphasizes security, scalability, and interoperability. We prioritize 
          robust consensus mechanisms and cryptographic protocols, ensuring that the solutions 
          we deliver are not only innovative but also resilient against vulnerabilities. By 
          combining deep blockchain expertise with strategic business understanding, we help 
          organizations implement distributed ledger technologies that transform operations, 
          reduce costs, and create new opportunities for growth and innovation.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="blockchain solutions"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Smart Contract Development
              </h3>
            </div>
            <p>
              We design and implement secure, efficient smart contracts that automate business 
              processes, enforce agreements, and eliminate intermediaries, reducing costs and 
              increasing operational efficiency.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Enterprise Blockchain Applications
              </h3>
            </div>
            <p>
              Our team develops private blockchain solutions for enterprises that enhance 
              security, streamline operations, and create transparent, immutable records 
              for critical business processes.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Decentralized Applications (DApps)</h3>
            </div>
            <p>
              We build innovative decentralized applications that operate on blockchain networks, 
              providing enhanced security, transparency, and user control while eliminating 
              single points of failure.
            </p>
          </div>
        </div>
      </div>
      <p>
        At TrinetraKrti, we envision a future where blockchain technology transforms traditional 
        business models and creates new paradigms of trust and collaboration. Our commitment to 
        blockchain innovation drives us to stay at the forefront of this rapidly evolving field, 
        exploring new consensus mechanisms, scaling solutions, and integration approaches. With a 
        passionate team of blockchain specialists dedicated to excellence, we aim to help organizations 
        navigate the complexities of distributed ledger technology and harness its transformative 
        potential to create sustainable competitive advantages in an increasingly decentralized world.
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

export default BlockchainSolutions;