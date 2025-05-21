import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Website/Header";
import Footer from "../../components/Footer";
import SolveITNeeds from "../../components/Website/SolveITNeeds";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { companyDetails } from "../../data/constant";
import {
  FaBriefcase,
  FaCode,
  FaLaptopCode,
  FaUserTie,
  FaChartLine,
  FaRobot,
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
    title: "AI Engineer",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "We're looking for an AI Engineer with experience in machine learning, deep learning, and natural language processing to join our innovative team.",
    requirements: [
      "Bachelor's or Master's degree in Computer Science, AI, or related field",
      "Experience with Python, TensorFlow, PyTorch, or similar frameworks",
      "Strong understanding of machine learning algorithms and techniques",
      "Experience with NLP and computer vision is a plus",
      "Excellent problem-solving skills and attention to detail",
    ],
    icon: <FaRobot className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 2,
    title: "Full Stack Developer",
    location: "Remote",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "Join our development team to build cutting-edge web applications using modern technologies and frameworks.",
    requirements: [
      "Strong proficiency in JavaScript, HTML, CSS",
      "Experience with React.js and Node.js",
      "Familiarity with database technologies (SQL, NoSQL)",
      "Understanding of server-side rendering and state management",
      "Knowledge of RESTful APIs and microservices architecture",
    ],
    icon: <FaCode className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "2+ years",
    description:
      "We're seeking a creative UI/UX Designer to create beautiful, intuitive interfaces for our web and mobile applications.",
    requirements: [
      "Portfolio demonstrating strong UI/UX design skills",
      "Proficiency in design tools like Figma, Adobe XD, or Sketch",
      "Understanding of user-centered design principles",
      "Experience with responsive design and accessibility",
      "Ability to translate business requirements into design solutions",
    ],
    icon: <FaLaptopCode className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 4,
    title: "Project Manager",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "5+ years",
    description:
      "Lead our project teams to deliver high-quality software solutions on time and within budget.",
    requirements: [
      "Experience managing software development projects",
      "Strong leadership and communication skills",
      "Knowledge of agile methodologies",
      "Ability to manage multiple projects simultaneously",
      "Technical background in software development is a plus",
    ],
    icon: <FaUserTie className="text-3xl text-[#C7AC5F]" />,
  },
  {
    id: 5,
    title: "Data Scientist",
    location: "Remote",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "Help us extract valuable insights from data and develop predictive models to drive business decisions.",
    requirements: [
      "Strong background in statistics and mathematics",
      "Experience with data analysis tools and languages (Python, R)",
      "Knowledge of machine learning algorithms",
      "Experience with data visualization tools",
      "Excellent problem-solving and analytical skills",
    ],
    icon: <FaChartLine className="text-3xl text-[#C7AC5F]" />,
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
