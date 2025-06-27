import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Website/Header";
import Footer from "../../components/Footer";
import SolveITNeeds from "../../components/Website/SolveITNeeds";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { companyDetails } from "../../data/constant";
import SEOMetaTags from "../../components/SEOMetaTags";
import { seoData } from "../../data/seoData";
import {
  FaBriefcase,
  FaCode,
  FaLaptopCode,
  FaUserTie,
  FaChartLine,
  FaRobot,
  FaPalette,
  FaMobile,
  FaCogs,
  FaDatabase,
  FaCloud,
  FaNetworkWired,
  FaVrCardboard,
  FaGamepad,
  FaComments,
  FaBrain,
  FaLink,
  FaLightbulb,
  FaDollarSign,
} from "react-icons/fa";
import { MdClose, MdLocationOn, MdWorkOutline } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import AIFloatingElements from "../../components/AIFloatingElements";

// Using an existing banner image
import bannerImg from "../../assets/images/about-us-page-banner.webp";
import { SpinnerContext } from "../../components/SpinnerContext";

// Job listings data
const jobListings = [
  {
    id: 1,
    title: "Logo Design Specialist",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "2-4 years",
    salary: "Competitive",
    description:
      "Create compelling brand identities and custom logos that resonate with target audiences and reflect brand essence.",
    requirements: [
      "Bachelor's degree in Graphic Design, Visual Arts, or related field",
      "Proficiency in Adobe Creative Suite (Illustrator, Photoshop, InDesign)",
      "Strong portfolio showcasing logo and brand identity work",
      "Understanding of brand strategy and visual communication",
      "Experience with vector graphics and scalable design principles",
    ],
    icon: <FaPalette className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 2,
    title: "UI/UX Designer",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "3-5 years",
    salary: "Competitive",
    description:
      "Design intuitive and engaging user experiences for web and mobile applications, focusing on user-centered design principles.",
    requirements: [
      "Portfolio demonstrating strong UI/UX design skills",
      "Proficiency in design tools like Figma, Adobe XD, or Sketch",
      "Understanding of user research and usability testing",
      "Experience with responsive design and accessibility standards",
      "Knowledge of design systems and component libraries",
    ],
    icon: <FaLaptopCode className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 3,
    title: "Full Stack Web Developer",
    location: "Remote",
    type: "Full-time",
    experience: "3-5 years",
    salary: "Competitive",
    description:
      "Develop responsive and scalable web applications using modern frameworks and technologies.",
    requirements: [
      "Strong proficiency in JavaScript, HTML5, CSS3",
      "Experience with React.js, Node.js, and Express.js",
      "Knowledge of database technologies (MongoDB, PostgreSQL)",
      "Understanding of RESTful APIs and GraphQL",
      "Experience with cloud platforms and deployment strategies",
    ],
    icon: <FaCode className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 4,
    title: "Mobile App Developer",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "3-5 years",
    salary: "Competitive",
    description:
      "Build native and cross-platform mobile applications for iOS and Android platforms.",
    requirements: [
      "Experience with React Native, Flutter, or native development",
      "Knowledge of mobile app architecture and design patterns",
      "Understanding of mobile UI/UX best practices",
      "Experience with app store deployment and optimization",
      "Familiarity with mobile testing frameworks and tools",
    ],
    icon: <FaMobile className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 5,
    title: "Custom Software Developer",
    location: "Remote",
    type: "Full-time",
    experience: "4-6 years",
    salary: "Competitive",
    description:
      "Design and develop custom software solutions tailored to specific business requirements and industry needs.",
    requirements: [
      "Strong programming skills in multiple languages (Java, Python, C#)",
      "Experience with software architecture and design patterns",
      "Knowledge of enterprise software development practices",
      "Understanding of system integration and API development",
      "Experience with agile development methodologies",
    ],
    icon: <FaCogs className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 6,
    title: "Data Scientist",
    location: "Remote",
    type: "Full-time",
    experience: "3-5 years",
    salary: "Competitive",
    description:
      "Extract valuable insights from complex datasets and develop predictive models to drive business decisions.",
    requirements: [
      "Strong background in statistics, mathematics, and data analysis",
      "Proficiency in Python, R, and data science libraries",
      "Experience with machine learning algorithms and frameworks",
      "Knowledge of data visualization tools (Tableau, Power BI)",
      "Understanding of big data technologies and cloud platforms",
    ],
    icon: <FaChartLine className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 7,
    title: "Cloud Solutions Architect",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "4-7 years",
    salary: "Competitive",
    description:
      "Design and implement scalable cloud infrastructure solutions using AWS, Azure, or Google Cloud platforms.",
    requirements: [
      "Experience with cloud platforms (AWS, Azure, Google Cloud)",
      "Knowledge of containerization and orchestration (Docker, Kubernetes)",
      "Understanding of microservices architecture and serverless computing",
      "Experience with infrastructure as code (Terraform, CloudFormation)",
      "Strong knowledge of cloud security and compliance practices",
    ],
    icon: <FaCloud className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 8,
    title: "IoT Solutions Engineer",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "3-5 years",
    salary: "Competitive",
    description:
      "Develop and implement Internet of Things solutions, connecting devices and systems for smart automation.",
    requirements: [
      "Experience with IoT protocols (MQTT, CoAP, HTTP/HTTPS)",
      "Knowledge of embedded systems and sensor technologies",
      "Understanding of edge computing and real-time data processing",
      "Experience with IoT platforms (AWS IoT, Azure IoT, Google Cloud IoT)",
      "Programming skills in C/C++, Python, and JavaScript",
    ],
    icon: <FaNetworkWired className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 9,
    title: "AR/VR Developer",
    location: "Remote",
    type: "Full-time",
    experience: "3-5 years",
    salary: "Competitive",
    description:
      "Create immersive augmented and virtual reality experiences using cutting-edge technologies and frameworks.",
    requirements: [
      "Experience with Unity 3D, Unreal Engine, or similar platforms",
      "Knowledge of AR/VR SDKs (ARKit, ARCore, Oculus SDK)",
      "Understanding of 3D graphics, animation, and spatial computing",
      "Experience with C# or C++ programming",
      "Familiarity with WebXR and cross-platform development",
    ],
    icon: <FaVrCardboard className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 10,
    title: "Game Developer",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "3-5 years",
    salary: "Competitive",
    description:
      "Design and develop engaging games for multiple platforms, from concept to deployment.",
    requirements: [
      "Proficiency in Unity 3D or Unreal Engine",
      "Strong programming skills in C# or C++",
      "Understanding of game design principles and mechanics",
      "Experience with 2D/3D graphics and animation",
      "Knowledge of game optimization and performance tuning",
    ],
    icon: <FaGamepad className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 11,
    title: "AI Bot Developer",
    location: "Remote",
    type: "Full-time",
    experience: "3-5 years",
    salary: "Competitive",
    description:
      "Develop intelligent chatbots and conversational AI systems for various business applications.",
    requirements: [
      "Experience with NLP frameworks and libraries",
      "Knowledge of chatbot platforms (Dialogflow, Microsoft Bot Framework)",
      "Understanding of machine learning and deep learning concepts",
      "Programming skills in Python and JavaScript",
      "Experience with API integration and webhook development",
    ],
    icon: <FaComments className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 12,
    title: "AI Engineer",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "4-6 years",
    salary: "Competitive",
    description:
      "Develop and deploy artificial intelligence solutions including machine learning models and neural networks.",
    requirements: [
      "Strong background in machine learning and deep learning",
      "Experience with TensorFlow, PyTorch, or similar frameworks",
      "Knowledge of computer vision and natural language processing",
      "Programming proficiency in Python and R",
      "Understanding of MLOps and model deployment practices",
    ],
    icon: <FaRobot className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 13,
    title: "Generative AI Specialist",
    location: "Remote",
    type: "Full-time",
    experience: "3-5 years",
    salary: "Competitive",
    description:
      "Work with cutting-edge generative AI technologies to create innovative content generation solutions.",
    requirements: [
      "Experience with generative AI models (GPT, DALL-E, Stable Diffusion)",
      "Knowledge of prompt engineering and fine-tuning techniques",
      "Understanding of transformer architectures and attention mechanisms",
      "Programming skills in Python and familiarity with AI frameworks",
      "Experience with API integration and model deployment",
    ],
    icon: <FaBrain className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 14,
    title: "Blockchain Developer",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "3-5 years",
    salary: "Competitive",
    description:
      "Develop secure and scalable blockchain solutions and smart contracts for various applications.",
    requirements: [
      "Experience with blockchain platforms (Ethereum, Hyperledger, Solana)",
      "Knowledge of smart contract development (Solidity, Rust)",
      "Understanding of cryptography and consensus mechanisms",
      "Experience with Web3 technologies and DeFi protocols",
      "Familiarity with blockchain security best practices",
    ],
    icon: <FaLink className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 15,
    title: "IT Consultant",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "5-8 years",
    salary: "Competitive",
    description:
      "Provide strategic technology guidance to help organizations leverage technology for growth and innovation.",
    requirements: [
      "Extensive experience in IT strategy and digital transformation",
      "Strong understanding of enterprise technologies and architectures",
      "Excellent communication and presentation skills",
      "Experience with project management and stakeholder engagement",
      "Knowledge of industry best practices and emerging technologies",
    ],
    icon: <FaLightbulb className="text-3xl text-[#C7AC5F]" />,
  },
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { setSpinner } = useContext(SpinnerContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      resume: null,
      coverLetter: "",
    },
  });

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFormSubmit = async (values) => {
    try {
      const formData = new FormData();

      const reqBody = `
      Name: ${values.name} \n
      Email: ${values.email} \n
      Phone: ${values.phone} \n
      Position: ${selectedJob.title} \n
      Experience: ${values.experience} \n
      Cover Letter: ${values.coverLetter}
      `;

      formData.append("body", reqBody);

      // Append the resume file
      if (values.resume && values.resume[0]) {
        formData.append("attachments", values.resume[0]);
      }

      formData.append("to", companyDetails.email);
      formData.append("subject", `Career Application - ${values.name}`);
      formData.append("name", "TrinetraKrti");

      const response = await fetch(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        {
          method: "POST",
          body: formData,
        }
      );

      const res = await response.json();
      if (res.success) {
        // Send confirmation email to the applicant
        let confirmationBody = `Dear ${values.name},\n`;
        confirmationBody += "Thank you sincerely for reaching out to us. Your message has been successfully received by the TrinetraKrti team, and we genuinely appreciate you taking the time to connect with us.\n\n";
        confirmationBody += "Our team is currently reviewing your inquiry with care, and we will be pleased to get in touch with you very soon. We are truly looking forward to understanding your specific needs and exploring how our expertise can help transform your vision into a remarkable digital reality.\n\n";
        confirmationBody += "While you await our response, please feel free to explore our website at your convenience for a more detailed overview of our comprehensive services and how we can assist you.\n\n";
        confirmationBody += "Here's your reason to contact us \n";
        confirmationBody += `Position: ${selectedJob.title}\n`;
        confirmationBody += `Experience: ${values.experience}\n\n`;
        confirmationBody += "You are always welcome to connect with us directly:\n";
        confirmationBody += "Website: www.trinetrakrti.com\n";
        confirmationBody += "Email: contact@trinetrakrti.com\n";
        confirmationBody += "Call Us: +91 8006 8005 94\n";
        confirmationBody += "Our Locations:  Gadag  & Bangalore, India\n\n";
        confirmationBody += "We eagerly anticipate the opportunity to connect with you further.\n\n";
        confirmationBody += "Warmest regards,\n";
        confirmationBody += "The TrinetraKrti Team\n";
        confirmationBody += "[www.trinetrakrti.com]";
        
        const userPayload = {
          to: values.email,
          subject: "Thank you for applying to TrinetraKrti",
          body: confirmationBody,
          name: "TrinetraKrti",
        };
        
        // Send confirmation email to user
        await fetch(
          "https://send-mail-redirect-boostmysites.vercel.app/send-email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userPayload),
          }
        );
        
        toast.success("Application submitted successfully!");
        reset();
        closeModal();
      } else {
        toast.error(res.message || "Failed to submit application");
      }
    } catch (error) {
      toast.error("An error occurred while submitting the application");
    } finally {
      setSpinner(false);
    }
  };

  return (
    <div className="bg-[#fafafa] relative">
      <SEOMetaTags 
        title={seoData.careers.title}
        description={seoData.careers.description}
        keywords={seoData.careers.keywords}
        canonicalUrl={seoData.careers.canonicalUrl}
      />
      <Header />

      {/* Floating AI elements for visual enhancement */}
      <AIFloatingElements count={15} />

      {/* Banner Section */}
      <div className="min-h-[45vh] md:min-h-[70vh] w-full page-banner relative">
        <img
          loading="lazy"
          src={bannerImg}
          width="800"
          height="600"
          className="absolute h-full w-full object-cover object-center z-0"
          alt="Careers at TrinetraKrti"
        />
        <div className="absolute h-full w-full bg-black/40"></div>
        <div className="absolute z-10 py-2 top-[50%] left-1/2 -translate-x-1/2 w-full flex flex-col items-center px-3">
          <h1 data-aos="fade-up" className="heading text-white text-center">
            Join Our Team
          </h1>
          <div
            data-aos="fade-up"
            className="mt-3 text-base sm:text-xl font-medium px-3 py-2 w-fit flex flex-wrap justify-center text-white items-center gap-1 sm:gap-2"
          >
            <Link to="/">Home</Link>/<Link to="/careers">Careers</Link>
          </div>
        </div>
      </div>

      {/* Careers Introduction Section */}
      <section className="wrapper py-16 relative">
        {/* Background patterns */}
        <div className="absolute inset-0 ai-dots-bg opacity-10"></div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex justify-center">
            <div data-aos="fade-up" className="ai-decorative-line">
              <h2 className="font-medium text-secondary ai-gradient-text">
                Careers at TrinetraKrti
              </h2>
            </div>
          </div>
          <h2 data-aos="fade-up" className="heading-2 mt-4">
            Build the Future with Us
          </h2>
          <p data-aos="fade-up" className="mt-6 text-gray-700">
            At TrinetraKrti, we're passionate about creating innovative
            solutions that transform businesses through the power of AI and
            technology. We're looking for talented individuals who share our
            vision and want to be part of a dynamic, forward-thinking team.
          </p>
        </div>

        {/* Why Join Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div
            data-aos="fade-up"
            className="bg-white p-8 rounded-lg shadow-md ai-card relative overflow-hidden group"
          >
            <div className="absolute inset-0 circuit-bg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-[#C7AC5F10] rounded-full flex items-center justify-center mb-6">
              <FaBriefcase className="text-3xl text-[#C7AC5F]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Innovative Work</h3>
            <p className="text-gray-700">
              Work on cutting-edge projects that push the boundaries of
              technology and make a real impact on businesses and society.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-white p-8 rounded-lg shadow-md ai-card relative overflow-hidden group"
          >
            <div className="absolute inset-0 circuit-bg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-[#C7AC5F10] rounded-full flex items-center justify-center mb-6">
              <FaLaptopCode className="text-3xl text-[#C7AC5F]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Growth Opportunities</h3>
            <p className="text-gray-700">
              Continuous learning and development opportunities to enhance your
              skills and advance your career in a supportive environment.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-white p-8 rounded-lg shadow-md ai-card relative overflow-hidden group"
          >
            <div className="absolute inset-0 circuit-bg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-[#C7AC5F10] rounded-full flex items-center justify-center mb-6">
              <FaUserTie className="text-3xl text-[#C7AC5F]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Collaborative Culture
            </h3>
            <p className="text-gray-700">
              Join a diverse team of talented professionals who collaborate,
              share ideas, and work together to solve complex challenges.
            </p>
          </div>
        </div>

        {/* Current Openings Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="flex justify-center">
              <div data-aos="fade-up" className="ai-decorative-line">
                <h2 className="font-medium text-secondary ai-gradient-text">
                  Open Positions
                </h2>
              </div>
            </div>
            <h2 data-aos="fade-up" className="heading-2 mt-4">
              Current Opportunities
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {jobListings.map((job) => (
              <div
                key={job.id}
                data-aos="fade-up"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ai-card relative overflow-hidden group"
              >
                <div className="absolute inset-0 circuit-bg opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-[#C7AC5F10] rounded-full flex items-center justify-center flex-shrink-0">
                      {job.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MdLocationOn />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MdWorkOutline />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BsClockHistory />
                          <span>{job.experience}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaDollarSign />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleJobSelect(job)}
                    className="ai-button px-6 py-2 whitespace-nowrap"
                  >
                    <span className="relative z-10">Apply Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative">
            <div className="sticky top-0 bg-white z-10 p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-2xl font-semibold">
                Apply for {selectedJob.title}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                <MdClose />
              </button>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2">Job Description</h4>
                <p className="text-gray-700 mb-4">{selectedJob.description}</p>

                <h4 className="text-lg font-medium mb-2">Requirements</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <form
                onSubmit={handleSubmit(handleFormSubmit)}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-medium mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="border outline-none border-gray-300 focus:border-[#C7AC5F] rounded-sm p-2"
                      placeholder="Your full name"
                      {...register("name", {
                        required: "Full name is required",
                      })}
                    />
                    {errors.name && (
                      <small className="text-red-500 mt-1">
                        {errors.name.message}
                      </small>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-medium mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="border outline-none border-gray-300 focus:border-[#C7AC5F] rounded-sm p-2"
                      placeholder="Your email address"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                          message: "Please enter a valid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <small className="text-red-500 mt-1">
                        {errors.email.message}
                      </small>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-sm font-medium mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="border outline-none border-gray-300 focus:border-[#C7AC5F] rounded-sm p-2"
                      placeholder="Your phone number"
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                    />
                    {errors.phone && (
                      <small className="text-red-500 mt-1">
                        {errors.phone.message}
                      </small>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="experience"
                      className="text-sm font-medium mb-1"
                    >
                      Years of Experience *
                    </label>
                    <input
                      type="text"
                      id="experience"
                      className="border outline-none border-gray-300 focus:border-[#C7AC5F] rounded-sm p-2"
                      placeholder="Your experience"
                      {...register("experience", {
                        required: "Experience is required",
                      })}
                    />
                    {errors.experience && (
                      <small className="text-red-500 mt-1">
                        {errors.experience.message}
                      </small>
                    )}
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="resume" className="text-sm font-medium mb-1">
                    Resume/CV *
                  </label>
                  <input
                    type="file"
                    id="resume"
                    className="border outline-none border-gray-300 focus:border-[#C7AC5F] rounded-sm p-2"
                    accept=".pdf,.doc,.docx"
                    {...register("resume", {
                      required: "Resume is required",
                    })}
                  />
                  <small className="text-gray-500 mt-1">
                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                  </small>
                  {errors.resume && (
                    <small className="text-red-500 mt-1">
                      {errors.resume.message}
                    </small>
                  )}
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="coverLetter"
                    className="text-sm font-medium mb-1"
                  >
                    Cover Letter
                  </label>
                  <textarea
                    id="coverLetter"
                    className="border outline-none border-gray-300 focus:border-[#C7AC5F] rounded-sm p-2"
                    placeholder="Tell us why you're interested in this position and what makes you a good fit"
                    rows="4"
                    {...register("coverLetter")}
                  ></textarea>
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 border border-gray-300 rounded-sm mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#C7AC5F] text-white rounded-sm"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <SolveITNeeds />
      <Footer />
    </div>
  );
};

export default Careers;
