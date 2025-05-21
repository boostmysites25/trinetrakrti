import React from "react";
import img1 from "../../../assets/images/services-details/game1.webp";
import img2 from "../../../assets/images/services-details/game2.webp";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../../data/constant";

const GameDevelopment = () => {
  const next = services[6];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="game development"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Game Development
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, we understand that game development is more than just creating entertainment; 
          it's about crafting immersive, engaging experiences that captivate audiences and create lasting 
          impressions. Our game development services combine technical expertise with creative storytelling 
          to bring innovative gaming concepts to life across multiple platforms. As passionate gamers 
          ourselves, we're committed to pushing the boundaries of interactive entertainment and helping 
          our clients succeed in this dynamic and competitive industry.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Understanding Our Approach to Game Development
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, our game development services encompass the entire production pipeline, 
          ensuring a comprehensive approach to each project. Our team specializes in creating games 
          that balance engaging gameplay, compelling narratives, and stunning visuals. From concept 
          development and game design to programming, asset creation, and quality assurance, we handle 
          every aspect of the development process with meticulous attention to detail. We work with 
          leading game engines including Unity and Unreal Engine to create experiences that perform 
          flawlessly across platforms, from mobile devices to high-end PCs and consoles.
          <br />
          <br />
          On the technical side, our game developers implement sophisticated systems for physics, 
          AI, networking, and user interfaces, ensuring smooth, responsive gameplay experiences. 
          We prioritize optimization and performance, creating games that run efficiently even on 
          less powerful devices. By combining technical excellence with creative vision, we help 
          our clients develop games that not only entertain but also achieve their business objectives, 
          whether that's generating revenue, building brand awareness, or engaging users in new and 
          meaningful ways.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="game development"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Mobile Game Development
              </h3>
            </div>
            <p>
              We create engaging, high-performance games for iOS and Android platforms, 
              optimized for touch controls and designed to captivate players on the go.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                PC & Console Game Development
              </h3>
            </div>
            <p>
              Our team develops immersive, visually stunning games for PC and console platforms, 
              leveraging the full capabilities of modern hardware to create unforgettable gaming experiences.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">AR/VR Game Development</h3>
            </div>
            <p>
              We pioneer innovative gaming experiences in augmented and virtual reality, 
              creating immersive worlds that blend digital content with the physical environment 
              or transport players to entirely new realities.
            </p>
          </div>
        </div>
      </div>
      <p>
        At TrinetraKrti, we envision a future where games continue to evolve as a powerful medium 
        for storytelling, education, and social connection. Our commitment to game development 
        innovation drives us to explore emerging technologies such as cloud gaming, procedural 
        generation, and AI-driven gameplay. With a passionate team of developers, designers, and 
        artists dedicated to excellence, we aim to create gaming experiences that not only entertain 
        but also inspire, challenge, and connect players in meaningful ways, pushing the boundaries 
        of what's possible in interactive entertainment.
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

export default GameDevelopment;