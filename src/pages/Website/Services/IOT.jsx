import img1 from "../../../assets/images/services-details/iot1.webp";
import img2 from "../../../assets/images/services-details/iot2.webp";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../../data/constant";

const IOT = () => {
  const next = services[9];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="Internet of Things (IoT)"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Internet of Things (IoT)
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, we understand that the Internet of Things (IoT) is revolutionizing 
          how businesses operate and interact with their environment. Our IoT solutions connect 
          devices, sensors, and systems to create intelligent networks that provide real-time 
          insights, automate processes, and enhance operational efficiency across various industries.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Our Comprehensive IoT Solutions
        </h2>
        <p data-aos="fade-up" className="description">
          Our IoT development services encompass the entire ecosystem from device connectivity 
          to data analytics. We design and implement custom IoT solutions that integrate seamlessly 
          with your existing infrastructure. Our team specializes in sensor integration, edge 
          computing, cloud connectivity, and real-time data processing to deliver actionable 
          insights that drive business growth.
          <br />
          <br />
          We leverage cutting-edge technologies including MQTT protocols, edge computing frameworks, 
          and cloud platforms like AWS IoT, Azure IoT, and Google Cloud IoT to ensure scalable, 
          secure, and reliable IoT implementations. Our solutions are designed to handle massive 
          data volumes while maintaining low latency and high availability.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="IoT solutions"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Smart Device Integration
              </h3>
            </div>
            <p>
              Connect and manage diverse IoT devices, sensors, and actuators to create 
              intelligent systems that respond to real-world conditions and user needs.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Real-time Data Analytics
              </h3>
            </div>
            <p>
              Process and analyze IoT data streams in real-time to provide immediate 
              insights, predictive maintenance alerts, and automated decision-making capabilities.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Industrial IoT Solutions</h3>
            </div>
            <p>
              Implement Industry 4.0 solutions with smart manufacturing, predictive 
              maintenance, and automated quality control systems that optimize production efficiency.
            </p>
          </div>
        </div>
      </div>
      <p>
        At TrinetraKrti, we envision a connected future where IoT technology seamlessly 
        integrates into every aspect of business operations. Our commitment to innovation 
        drives us to develop IoT solutions that not only meet current needs but also 
        adapt to future technological advancements, ensuring our clients stay ahead in 
        the rapidly evolving digital landscape.
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

export default IOT;