import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Website/Header";
import Footer from "../../components/Footer";
import SolveITNeeds from "../../components/Website/SolveITNeeds";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { companyDetails } from "../../data/constant";
import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
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
} from "react-icons/fa";
import { MdClose, MdLocationOn, MdWorkOutline, MdSchool } from "react-icons/md";
import { BsClockHistory, BsLightbulb } from "react-icons/bs";
import AIFloatingElements from "../../components/AIFloatingElements";

// Using an existing banner image
import bannerImg from "../../assets/images/blogs-banner.webp";
import { SpinnerContext } from "../../components/SpinnerContext";

// Internship listings data
const internshipListings = [
  {
    id: 1,
    title: "Logo Design Intern",
    location: "Bangalore, India",
    duration: "3 months",
    stipend: "Competitive",
    description:
      "Learn brand identity design and create compelling logos while working with experienced designers.",
    requirements: [
      "Currently pursuing a degree in Graphic Design, Visual Arts, or related field",
      "Basic knowledge of Adobe Creative Suite (Illustrator, Photoshop)",
      "Creative mindset and attention to visual details",
      "Portfolio showcasing design projects (academic or personal)",
      "Understanding of color theory and typography basics",
    ],
    icon: <FaPalette className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 2,
    title: "UI/UX Design Intern",
    location: "Remote",
    duration: "3-4 months",
    stipend: "Competitive",
    description:
      "Learn user experience design principles and create intuitive interfaces for web and mobile applications.",
    requirements: [
      "Basic knowledge of design tools like Figma, Adobe XD, or Sketch",
      "Understanding of UI/UX design principles",
      "Currently pursuing a degree in Design, HCI, or related field",
      "Strong communication and collaboration skills",
      "Eagerness to learn user research and testing methodologies",
    ],
    icon: <FaLaptopCode className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 3,
    title: "Web Development Intern",
    location: "Remote",
    duration: "3-4 months",
    stipend: "Competitive",
    description:
      "Gain hands-on experience in modern web development using React.js, Node.js, and other cutting-edge technologies.",
    requirements: [
      "Knowledge of HTML5, CSS3, and JavaScript fundamentals",
      "Basic understanding of React.js or similar frameworks",
      "Familiarity with version control systems (Git)",
      "Currently pursuing a degree in Computer Science or related field",
      "Strong problem-solving skills and attention to detail",
    ],
    icon: <FaCode className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 4,
    title: "Mobile App Development Intern",
    location: "Bangalore, India",
    duration: "4 months",
    stipend: "Competitive",
    description:
      "Learn mobile app development for iOS and Android platforms using React Native or Flutter.",
    requirements: [
      "Basic programming knowledge in JavaScript or Dart",
      "Understanding of mobile app development concepts",
      "Currently pursuing a degree in Computer Science or related field",
      "Interest in mobile technologies and user experience",
      "Ability to learn quickly and adapt to new technologies",
    ],
    icon: <FaMobile className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 5,
    title: "Software Development Intern",
    location: "Remote",
    duration: "4-6 months",
    stipend: "Competitive",
    description:
      "Work on custom software projects and learn enterprise-level software development practices.",
    requirements: [
      "Strong programming skills in Java, Python, or C#",
      "Understanding of object-oriented programming concepts",
      "Currently pursuing a degree in Computer Science or Software Engineering",
      "Knowledge of software development lifecycle",
      "Excellent problem-solving and analytical skills",
    ],
    icon: <FaCogs className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 6,
    title: "Data Science Intern",
    location: "Remote",
    duration: "4-6 months",
    stipend: "Competitive",
    description:
      "Work with data scientists to analyze complex datasets and build predictive models using machine learning.",
    requirements: [
      "Currently pursuing a degree in Data Science, Statistics, or related field",
      "Experience with Python and data analysis libraries (Pandas, NumPy)",
      "Basic understanding of statistical concepts and machine learning",
      "Knowledge of data visualization tools (Matplotlib, Seaborn)",
      "Strong analytical and mathematical skills",
    ],
    icon: <FaChartLine className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 7,
    title: "Cloud Computing Intern",
    location: "Bangalore, India",
    duration: "3-4 months",
    stipend: "Competitive",
    description:
      "Learn cloud technologies and assist in implementing cloud solutions using AWS, Azure, or Google Cloud.",
    requirements: [
      "Basic understanding of cloud computing concepts",
      "Currently pursuing a degree in Computer Science or IT",
      "Interest in learning cloud platforms and services",
      "Knowledge of Linux/Unix systems is a plus",
      "Strong willingness to learn and adapt to new technologies",
    ],
    icon: <FaCloud className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 8,
    title: "IoT Development Intern",
    location: "Bangalore, India",
    duration: "4 months",
    stipend: "Competitive",
    description:
      "Learn Internet of Things development and work on smart device integration projects.",
    requirements: [
      "Basic programming knowledge in C/C++ or Python",
      "Understanding of electronics and sensor technologies",
      "Currently pursuing a degree in Electronics, Computer Science, or related field",
      "Interest in embedded systems and hardware-software integration",
      "Problem-solving mindset and hands-on approach",
    ],
    icon: <FaNetworkWired className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 9,
    title: "AR/VR Development Intern",
    location: "Remote",
    duration: "4-5 months",
    stipend: "Competitive",
    description:
      "Explore augmented and virtual reality development using Unity 3D and create immersive experiences.",
    requirements: [
      "Basic programming knowledge in C# or JavaScript",
      "Interest in 3D graphics and immersive technologies",
      "Currently pursuing a degree in Computer Science, Game Development, or related field",
      "Creative mindset and spatial thinking abilities",
      "Willingness to learn Unity 3D and AR/VR SDKs",
    ],
    icon: <FaVrCardboard className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 10,
    title: "Game Development Intern",
    location: "Bangalore, India",
    duration: "4-6 months",
    stipend: "Competitive",
    description:
      "Learn game development using Unity 3D or Unreal Engine and contribute to exciting gaming projects.",
    requirements: [
      "Basic programming skills in C# or C++",
      "Interest in game design and development",
      "Currently pursuing a degree in Computer Science, Game Development, or related field",
      "Creative thinking and problem-solving abilities",
      "Understanding of game mechanics and player experience",
    ],
    icon: <FaGamepad className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 11,
    title: "AI Chatbot Development Intern",
    location: "Remote",
    duration: "3-4 months",
    stipend: "Competitive",
    description:
      "Learn to develop intelligent chatbots and conversational AI systems for various business applications.",
    requirements: [
      "Basic programming knowledge in Python or JavaScript",
      "Interest in natural language processing and AI",
      "Currently pursuing a degree in Computer Science, AI, or related field",
      "Good communication skills and understanding of user interactions",
      "Eagerness to learn about machine learning and NLP frameworks",
    ],
    icon: <FaComments className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 12,
    title: "AI Research Intern",
    location: "Bangalore, India",
    duration: "4-6 months",
    stipend: "Competitive",
    description:
      "Join our AI research team to work on cutting-edge machine learning and deep learning projects.",
    requirements: [
      "Currently pursuing a degree in Computer Science, AI, or related field",
      "Strong programming skills in Python",
      "Knowledge of machine learning concepts and frameworks",
      "Understanding of mathematics and statistics",
      "Research mindset and passion for AI technologies",
    ],
    icon: <FaRobot className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 13,
    title: "Generative AI Intern",
    location: "Remote",
    duration: "4-5 months",
    stipend: "Competitive",
    description:
      "Explore generative AI technologies and work on innovative content generation projects.",
    requirements: [
      "Basic understanding of machine learning and neural networks",
      "Programming skills in Python",
      "Currently pursuing a degree in Computer Science, AI, or related field",
      "Interest in creative AI applications and content generation",
      "Willingness to learn about transformer models and prompt engineering",
    ],
    icon: <FaBrain className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 14,
    title: "Blockchain Development Intern",
    location: "Bangalore, India",
    duration: "4 months",
    stipend: "Competitive",
    description:
      "Learn blockchain technology and smart contract development while working on decentralized applications.",
    requirements: [
      "Basic programming knowledge in JavaScript or Python",
      "Interest in blockchain technology and cryptocurrencies",
      "Currently pursuing a degree in Computer Science or related field",
      "Understanding of cryptography concepts is a plus",
      "Analytical mindset and attention to security details",
    ],
    icon: <FaLink className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 15,
    title: "IT Consulting Intern",
    location: "Bangalore, India",
    duration: "3-4 months",
    stipend: "Competitive",
    description:
      "Learn IT consulting practices and assist in technology strategy development for various clients.",
    requirements: [
      "Currently pursuing a degree in Business, IT, or related field",
      "Strong communication and presentation skills",
      "Interest in technology trends and business strategy",
      "Analytical thinking and problem-solving abilities",
      "Eagerness to learn about enterprise technologies and digital transformation",
    ],
    icon: <FaLightbulb className="text-3xl text-[#C7AC5F]" />,
  },
];

const Internship = () => {
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showCustomModal, setShowCustomModal] = useState(false);
  const { setSpinner } = useContext(SpinnerContext);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      education: "",
      institution: "",
      resume: null,
      coverLetter: "",
      role: "",
    },
  });

  const handleInternshipSelect = (internship) => {
    setSelectedInternship(internship);
    setShowModal(true);
    setValue("role", internship.title);
  };

  const openCustomModal = () => {
    setShowCustomModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowCustomModal(false);
  };

  const handleFormSubmit = async (values) => {
    setSpinner(true);
    try {
      const formData = new FormData();

      const reqBody = `
      Name: ${values.name} \n
      Email: ${values.email} \n
      Phone: ${values.phone} \n
      Education: ${values.education} \n
      Institution: ${values.institution} \n
      Role: ${values.role} \n
      Cover Letter: ${values.coverLetter} \n
      `;

      formData.append("body", reqBody);

      // Append the resume file
      if (values.resume && values.resume[0]) {
        formData.append("attachments", values.resume[0]);
      }

      formData.append("to", companyDetails.email);
      formData.append("subject", `Internship Application - ${values.name}`);
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
        toast.success("Application submitted successfully!");
        reset();
        closeModal();
      } else {
        toast.error(res.message || "Failed to submit application");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSpinner(false);
    }
  };

  return (
    <div className="bg-[#fafafa] relative">
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
          alt="Internship Opportunities at TrinetraKrti"
        />
        <div className="absolute h-full w-full bg-black/40"></div>
        <div className="absolute z-10 py-2 top-[50%] left-1/2 -translate-x-1/2 w-full flex flex-col items-center px-3">
          <h1 data-aos="fade-up" className="heading text-white text-center">
            Internship Opportunities
          </h1>
          <div
            data-aos="fade-up"
            className="mt-3 text-base sm:text-xl font-medium px-3 py-2 w-fit flex flex-wrap justify-center text-white items-center gap-1 sm:gap-2"
          >
            <Link to="/">Home</Link>/<Link to="/internship">Internship</Link>
          </div>
        </div>
      </div>

      {/* Internship Introduction Section */}
      <section className="wrapper py-16 relative">
        {/* Background patterns */}
        <div className="absolute inset-0 ai-dots-bg opacity-10"></div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex justify-center">
            <div data-aos="fade-up" className="ai-decorative-line">
              <h2 className="font-medium text-secondary ai-gradient-text">
                Internship Program
              </h2>
            </div>
          </div>
          <h2 data-aos="fade-up" className="heading-2 mt-4">
            Launch Your Career with Us
          </h2>
          <p data-aos="fade-up" className="mt-6 text-gray-700">
            Our internship program offers students and recent graduates the
            opportunity to gain hands-on experience in a dynamic, innovative
            environment. Work alongside industry experts, contribute to real
            projects, and develop the skills you need to succeed in the tech
            industry.
          </p>
        </div>

        {/* Why Join Our Internship Program Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div
            data-aos="fade-up"
            className="bg-white p-8 rounded-lg shadow-md ai-card relative overflow-hidden group"
          >
            <div className="absolute inset-0 circuit-bg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-[#C7AC5F10] rounded-full flex items-center justify-center mb-6">
              <FaGraduationCap className="text-3xl text-[#C7AC5F]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Practical Experience</h3>
            <p className="text-gray-700">
              Work on real-world projects that make a difference, applying your
              academic knowledge to solve practical challenges.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-white p-8 rounded-lg shadow-md ai-card relative overflow-hidden group"
          >
            <div className="absolute inset-0 circuit-bg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-[#C7AC5F10] rounded-full flex items-center justify-center mb-6">
              <MdSchool className="text-3xl text-[#C7AC5F]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Mentorship</h3>
            <p className="text-gray-700">
              Receive guidance and support from experienced professionals who
              are committed to helping you learn and grow.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-white p-8 rounded-lg shadow-md ai-card relative overflow-hidden group"
          >
            <div className="absolute inset-0 circuit-bg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-[#C7AC5F10] rounded-full flex items-center justify-center mb-6">
              <BsLightbulb className="text-3xl text-[#C7AC5F]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
            <p className="text-gray-700">
              Be part of a culture that values creativity, fresh perspectives,
              and innovative thinking to solve complex problems.
            </p>
          </div>
        </div>

        {/* Current Openings Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="flex justify-center">
              <div data-aos="fade-up" className="ai-decorative-line">
                <h2 className="font-medium text-secondary ai-gradient-text">
                  Available Positions
                </h2>
              </div>
            </div>
            <h2 data-aos="fade-up" className="heading-2 mt-4">
              Current Internship Opportunities
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {internshipListings.map((internship) => (
              <div
                key={internship.id}
                data-aos="fade-up"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ai-card relative overflow-hidden group"
              >
                <div className="absolute inset-0 circuit-bg opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-[#C7AC5F10] rounded-full flex items-center justify-center flex-shrink-0">
                      {internship.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        {internship.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MdLocationOn />
                          <span>{internship.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BsClockHistory />
                          <span>{internship.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MdWorkOutline />
                          <span>Stipend: {internship.stipend}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleInternshipSelect(internship)}
                    className="ai-button px-6 py-2 whitespace-nowrap"
                  >
                    <span className="relative z-10">Apply Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Role Application */}
          <div
            data-aos="fade-up"
            className="mt-8 bg-gradient-to-r from-[#C7AC5F20] to-[#C7AC5F10] p-8 rounded-lg shadow-md relative overflow-hidden"
          >
            <div className="absolute inset-0 ai-circuit-bg opacity-5"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-2">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold mb-2">
                  Don't see a role that fits your skills?
                </h3>
                <p className="text-gray-700">
                  We're always looking for talented individuals. Tell us about
                  your interests and how you can contribute to our team.
                </p>
              </div>
              <button
                onClick={openCustomModal}
                className="ai-button px-6 py-3 whitespace-nowrap"
              >
                <span className="relative z-10">Apply for Any Other Role</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal for Specific Internship */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative">
            <div className="sticky top-0 bg-white z-10 p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-2xl font-semibold">
                Apply for {selectedInternship.title}
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
                <h4 className="text-lg font-medium mb-2">
                  Internship Description
                </h4>
                <p className="text-gray-700 mb-4">
                  {selectedInternship.description}
                </p>

                <h4 className="text-lg font-medium mb-2">Requirements</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {selectedInternship.requirements.map((req, index) => (
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
                      htmlFor="education"
                      className="text-sm font-medium mb-1"
                    >
                      Education Level *
                    </label>
                    <select
                      id="education"
                      className="border outline-none border-gray-300 focus:border-[#C7AC5F] rounded-sm p-2"
                      {...register("education", {
                        required: "Education level is required",
                      })}
                    >
                      <option value="">Select your education level</option>
                      <option value="High School">High School</option>
                      <option value="Bachelor's Degree">
                        Bachelor's Degree (Pursuing)
                      </option>
                      <option value="Bachelor's Degree Completed">
                        Bachelor's Degree (Completed)
                      </option>
                      <option value="Master's Degree">
                        Master's Degree (Pursuing)
                      </option>
                      <option value="Master's Degree Completed">
                        Master's Degree (Completed)
                      </option>
                      <option value="PhD">PhD</option>
                    </select>
                    {errors.education && (
                      <small className="text-red-500 mt-1">
                        {errors.education.message}
                      </small>
                    )}
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="institution"
                    className="text-sm font-medium mb-1"
                  >
                    Institution/University *
                  </label>
                  <input
                    type="text"
                    id="institution"
                    className="border outline-none border-gray-300 focus:border-[#C7AC5F] rounded-sm p-2"
                    placeholder="Your institution or university"
                    {...register("institution", {
                      required: "Institution is required",
                    })}
                  />
                  {errors.institution && (
                    <small className="text-red-500 mt-1">
                      {errors.institution.message}
                    </small>
                  )}
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
                    placeholder="Tell us why you're interested in this internship and what you hope to learn"
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

      {/* Application Modal for Custom Role */}
      {showCustomModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative">
            <div className="sticky top-0 bg-white z-10 p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-2xl font-semibold">
                Apply for Custom Internship Role
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
                <p className="text-gray-700">
                  Don't see a role that matches your skills and interests? Tell
                  us about the type of internship you're looking for, and we'll
                  consider your application for current or future opportunities.
                </p>
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
                      htmlFor="education"
                      className="text-sm font-medium mb-1"
                    >
                      Education Level *
                    </label>
                    <select
                      id="education"
                      className="border outline-none border-gray-300 focus:border-[#C7AC5F] rounded-sm p-2"
                      {...register("education", {
                        required: "Education level is required",
                      })}
                    >
                      <option value="">Select your education level</option>
                      <option value="High School">High School</option>
                      <option value="Bachelor's Degree">
                        Bachelor's Degree (Pursuing)
                      </option>
                      <option value="Bachelor's Degree Completed">
                        Bachelor's Degree (Completed)
                      </option>
                      <option value="Master's Degree">
                        Master's Degree (Pursuing)
                      </option>
                      <option value="Master's Degree Completed">
                        Master's Degree (Completed)
                      </option>
                      <option value="PhD">PhD</option>
                    </select>
                    {errors.education && (
                      <small className="text-red-500 mt-1">
                        {errors.education.message}
                      </small>
                    )}
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="institution"
                    className="text-sm font-medium mb-1"
                  >
                    Institution/University *
                  </label>
                  <input
                    type="text"
                    id="institution"
                    className="border outline-none border-gray-300 focus:border-[#C7AC5F] rounded-sm p-2"
                    placeholder="Your institution or university"
                    {...register("institution", {
                      required: "Institution is required",
                    })}
                  />
                  {errors.institution && (
                    <small className="text-red-500 mt-1">
                      {errors.institution.message}
                    </small>
                  )}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="role" className="text-sm font-medium mb-1">
                    Desired Role/Area of Interest *
                  </label>
                  <input
                    type="text"
                    id="role"
                    className="border outline-none border-gray-300 focus:border-[#C7AC5F] rounded-sm p-2"
                    placeholder="E.g., Mobile App Development, Digital Marketing, etc."
                    {...register("role", {
                      required: "Desired role is required",
                    })}
                  />
                  {errors.role && (
                    <small className="text-red-500 mt-1">
                      {errors.role.message}
                    </small>
                  )}
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
                    Why are you interested in this role? *
                  </label>
                  <textarea
                    id="coverLetter"
                    className="border outline-none border-gray-300 focus:border-[#C7AC5F] rounded-sm p-2"
                    placeholder="Tell us about your skills, experience, and why you're interested in this role"
                    rows="4"
                    {...register("coverLetter", {
                      required: "This field is required",
                    })}
                  ></textarea>
                  {errors.coverLetter && (
                    <small className="text-red-500 mt-1">
                      {errors.coverLetter.message}
                    </small>
                  )}
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

export default Internship;
