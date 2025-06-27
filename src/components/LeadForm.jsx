import React, { useContext } from "react";
import img from "../assets/images/contact.webp";
import { useForm } from "react-hook-form";
import { companyDetails } from "../data/constant";
import toast from "react-hot-toast";
import { SpinnerContext } from "./SpinnerContext";
import { useNavigate } from "react-router-dom";

const LeadForm = () => {
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
      subject: "",
      message: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
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
      var confirmationBody = `Dear ${values.name},\n\n`;
      confirmationBody += "Thank you for contacting TrinetraKrti. We have received your inquiry and will get back to you shortly.\n\n";
      confirmationBody += "Here's a summary of your message:\n\n";
      confirmationBody += `Subject: ${values.subject}\n`;
      confirmationBody += `Message: ${values.message}\n\n`;
      confirmationBody += "Best Regards,\nTeam TrinetraKrti";
      
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
    <div id="contact" className="w-full py-[5rem] relative">
      <div
        data-aos="fade-up"
        className="wrapper grid md:grid-cols-2 items-center gap-10"
      >
        <div className="">
          <h2 className="text-[2rem] md:text-4xl font-semibold mb-3">
            Get in touch with us
          </h2>
          <p className="text-gray-700 text-sm mb-5">
            We are always open to discuss your project, improve your online
            presence
          </p>
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="flex flex-col gap-1"
          >
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm ml-1">
                Name
              </label>
              <input
                type="text"
                className="border outline-none border-primary rounded-sm p-2"
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
                className="border outline-none border-primary rounded-sm p-2"
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
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm ml-1">
                Subject
              </label>
              <input
                type="text"
                className="border outline-none border-primary rounded-sm p-2"
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
              <small className="error-message">{errors.subject?.message}</small>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm ml-1">
                Message
              </label>
              <textarea
                type="text"
                className="border outline-none border-primary rounded-sm p-2"
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
              className="primary-btn mt-3"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="hidden md:block h-full">
          <img
            loading="lazy"
            src={img}
            width="600"
            height="600"
            alt="contact-us"
            className="h-full rounded-lg object-cover object-center w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
