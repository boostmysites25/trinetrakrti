import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { SpinnerContext } from "../components/SpinnerContext";
import { companyDetails } from "../data/constant";
import { useNavigate } from "react-router-dom";

const InquiryForm = () => {
  const { setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload for company notification
    var companyPayload = {
      to: companyDetails.email,
      subject: values.subject,
      body: emailBody,
      name: "TrinetraKrti",
    };

    try {
      // Send email to company
      const companyResponse = await fetch(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(companyPayload),
        }
      );
      
      const companyResult = await companyResponse.json();
      
      if (companyResult.error) {
        toast.error(companyResult.error);
        setSpinner(false);
        return;
      }
      
      // Construct confirmation email to the user
      var confirmationBody = `Dear ${values.name},\n`;
      confirmationBody += "Thank you sincerely for reaching out to us. Your message has been successfully received by the TrinetraKrti team, and we genuinely appreciate you taking the time to connect with us.\n\n";
      confirmationBody += "Our team is currently reviewing your inquiry with care, and we will be pleased to get in touch with you very soon. We are truly looking forward to understanding your specific needs and exploring how our expertise can help transform your vision into a remarkable digital reality.\n\n";
      confirmationBody += "While you await our response, please feel free to explore our website at your convenience for a more detailed overview of our comprehensive services and how we can assist you.\n\n";
      confirmationBody += "Here's a a summary of your \n";
      confirmationBody += `Subject: ${values.subject}\n`;
      confirmationBody += `Message: ${values.message}\n\n`;
      confirmationBody += "You are always welcome to connect with us directly:\n";
      confirmationBody += "Website: www.trinetrakrti.com\n";
      confirmationBody += "Email: contact@trinetrakrti.com\n";
      confirmationBody += "Call Us: +91 8006 8005 94\n";
      confirmationBody += "Our Locations:  Gadag  & Bangalore, India\n\n";
      confirmationBody += "We eagerly anticipate the opportunity to connect with you further.\n\n";
      confirmationBody += "Warmest regards,\n";
      confirmationBody += "The TrinetraKrti Team\n";
      confirmationBody += "[www.trinetrakrti.com]";
      
      var userPayload = {
        to: values.email,
        subject: "Thank you for contacting TrinetraKrti",
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
      
      // Reset form and navigate to thank you page
      reset();
      navigate("/thank-you");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSpinner(false);
    }
  };
  return (
    <div className="wrapper">
      <div
        data-aos="fade-up"
        className="max-w-5xl mx-auto bg-white p-5 sm:p-8 shadow-large shadow-black/10 rounded-lg relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-5">
          <div className="flex flex-col gap-3">
            <div
              data-aos="fade-up"
              className="ai-decorative-line relative z-10"
            >
              <h2 className="font-medium text-secondary ai-gradient-text">
                Get in touch with us
              </h2>
            </div>
            <h2 data-aos="fade-up" className="heading-2 capitalize">
              Let’s Talk Possibilities
            </h2>
            <p data-aos="fade-up" className="max-w-[35rem] lg:max-w-max">
              Not sure where to begin? That’s what we’re here for. Let’s connect
              and explore how we can turn your ideas into scalable, impactful
              solutions.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            data-aos="fade-up"
            className="flex flex-col gap-1"
          >
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm ml-1">
                  Name
                </label>
                <input
                  type="text"
                  className="border outline-none border-secondary bg-black/5 rounded-sm p-2"
                  placeholder="Full Name"
                  {...register("name", {
                    required: "Full name is required",
                    validate: (val) => {
                      if (val.trim() !== "") {
                        return true;
                      } else {
                        return "Full name is required";
                      }
                    },
                  })}
                />
                <small className="error-message">{errors.name?.message}</small>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm ml-1">
                  Email
                </label>
                <input
                  type="email"
                  className="border outline-none border-secondary bg-black/5 rounded-sm p-2"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Entered email is invalid",
                    },
                  })}
                />
                <small className="error-message">{errors.email?.message}</small>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm ml-1">
                  Phone
                </label>
                <input
                  type="tel"
                  className="border outline-none border-secondary bg-black/5 rounded-sm p-2"
                  placeholder="Phone Number"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\+?[\d\s\-()]{6,14}\d$/,
                      message: "Entered phone number is invalid",
                    },
                  })}
                />
                <small className="error-message">{errors.phone?.message}</small>
              </div>

              <div className="flex flex-col">
                <label htmlFor="" className="text-sm ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  className="border outline-none border-secondary bg-black/5 rounded-sm p-2"
                  placeholder="Enter Subject"
                  {...register("subject", {
                    required: "Subject is required",
                    validate: (val) => {
                      if (val.trim() !== "") {
                        return true;
                      } else {
                        return "Subject is required";
                      }
                    },
                  })}
                />
                <small className="error-message">
                  {errors.subject?.message}
                </small>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm ml-1">
                Message
              </label>
              <textarea
                type="text"
                className="border outline-none border-secondary bg-black/5 rounded-sm p-2"
                placeholder="Enter Message"
                rows="4"
                {...register("message", {
                  required: "Message is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Message is required";
                    }
                  },
                })}
              />
              <small className="error-message">{errors.message?.message}</small>
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="px-4 py-3 text-white bg-secondary rounded-sm w-full flex justify-center sm:max-w-[50%]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
