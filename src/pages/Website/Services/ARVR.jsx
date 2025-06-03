import img1 from "../../../assets/images/services-details/arvr1.webp";
import img2 from "../../../assets/images/services-details/arvr2.webp";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../../data/constant";

const ARVR = () => {
  const next = services[5]; // Next service after AR/VR
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="Augmented Reality and Virtual Reality"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Augmented Reality & Virtual Reality (AR/VR)
        </h2>
        <p data-aos="fade-up" className="description">
          At TrinetraKrti, we harness the transformative power of Augmented Reality (AR) 
          and Virtual Reality (VR) to create immersive experiences that bridge the gap 
          between digital and physical worlds. Our AR/VR solutions revolutionize how 
          businesses engage with customers, train employees, and visualize complex data 
          and processes.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Immersive Technology Solutions
        </h2>
        <p data-aos="fade-up" className="description">
          Our AR/VR development services span across multiple platforms and devices, 
          from mobile AR applications to high-end VR experiences. We utilize cutting-edge 
          technologies including Unity 3D, Unreal Engine, ARKit, ARCore, and WebXR to 
          create compelling experiences that captivate users and deliver measurable 
          business results.
          <br />
          <br />
          Whether you need interactive product visualizations, virtual training simulations, 
          or immersive marketing experiences, our team combines technical expertise with 
          creative vision to deliver solutions that push the boundaries of what's possible 
          in mixed reality environments.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="AR/VR development"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Interactive AR Applications
              </h3>
            </div>
            <p>
              Develop mobile and web-based AR applications that overlay digital content 
              onto the real world, enhancing user engagement and providing innovative 
              ways to interact with products and services.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Immersive VR Experiences
              </h3>
            </div>
            <p>
              Create fully immersive virtual environments for training, education, 
              entertainment, and simulation purposes, providing safe and cost-effective 
              alternatives to real-world scenarios.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Mixed Reality Solutions</h3>
            </div>
            <p>
              Combine AR and VR technologies to create mixed reality experiences that 
              seamlessly blend digital and physical elements, opening new possibilities 
              for collaboration and interaction.
            </p>
          </div>
        </div>
      </div>
      <p>
        At TrinetraKrti, we believe that AR/VR technology represents the future of 
        human-computer interaction. Our commitment to pushing the boundaries of immersive 
        technology ensures that our clients can leverage these powerful tools to create 
        unforgettable experiences, improve operational efficiency, and gain competitive 
        advantages in their respective markets.
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

export default ARVR;