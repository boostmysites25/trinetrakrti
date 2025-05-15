import React from "react";
import img1 from "../../assets/images/services-details/app-development1.jpeg";
import img2 from "../../assets/images/services-details/app-development2.jpg";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../data/constant";

const AppDevelopment = () => {
  const next = services[2];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="app development"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          App Development
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, we understand that in today's mobile-first world, having a powerful, 
          user-friendly app is essential for businesses looking to engage customers, streamline 
          operations, and drive growth. Our app development team specializes in creating custom 
          mobile solutions that deliver exceptional experiences across all platforms and devices, 
          helping our clients stay competitive in an increasingly digital marketplace.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Understanding Our Approach to App Development
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, our app development services encompass both native and cross-platform 
          solutions, ensuring a comprehensive approach to each project. Our mobile development team 
          specializes in creating intuitive and engaging user interfaces that drive user adoption and 
          retention. Utilizing technologies such as Swift and Kotlin for native apps, and React Native 
          and Flutter for cross-platform solutions, we design responsive applications that perform 
          flawlessly across devices. This focus on user experience and performance is essential in 
          today's competitive app marketplace, where quality directly impacts user engagement.
          <br />
          <br />
          On the technical side, our developers implement robust backend solutions that ensure 
          security, scalability, and seamless integration with existing systems. We prioritize 
          clean code architecture and follow industry best practices in mobile development, providing 
          a solid foundation for our clients' applications. By ensuring that our mobile solutions are 
          both technically sound and user-friendly, we empower businesses to connect with their 
          audiences effectively and achieve their strategic objectives through mobile technology.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="app development"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                iOS App Development
              </h3>
            </div>
            <p>
              We create native iOS applications with elegant interfaces and smooth performance, 
              taking full advantage of Apple's ecosystem to deliver exceptional user experiences.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Android App Development
              </h3>
            </div>
            <p>
              Our Android development team builds high-performance applications that work seamlessly 
              across the diverse ecosystem of Android devices, ensuring maximum reach and compatibility.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Cross-Platform Development</h3>
            </div>
            <p>
              We leverage frameworks like React Native and Flutter to develop cost-effective 
              cross-platform applications that maintain native-like performance and user experience.
            </p>
          </div>
        </div>
      </div>
      <p>
        At TrinetraKrti, we envision a future where mobile technology continues to transform how businesses 
        operate and connect with their audiences. Our commitment to innovation drives us to stay at the 
        forefront of mobile development trends and technologies. With a passionate team of developers 
        dedicated to excellence, we aim to deliver mobile solutions that not only meet our clients' 
        current needs but also position them for long-term success in an increasingly mobile-centric world.
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

export default AppDevelopment;