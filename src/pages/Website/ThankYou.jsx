import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Website/Header";
import Footer from "../../components/Footer";
import AIFloatingElements from "../../components/AIFloatingElements";
import SEOMetaTags from "../../components/SEOMetaTags";
import { seoData } from "../../data/seoData";

const ThankYou = () => {
  return (
    <div className="bg-[#fafafa] relative">
      <SEOMetaTags 
        title={seoData.thankYou.title}
        description={seoData.thankYou.description}
        keywords={seoData.thankYou.keywords}
        canonicalUrl={seoData.thankYou.canonicalUrl}
      />
      <Header />
      <AIFloatingElements count={15} />

      <div className="wrapper pt-48 pb-36 flex flex-col items-center justify-center">
        <h1 className="heading-2 text-center mb-4">Thank You!</h1>
        <p className="text-gray-700 text-lg text-center mb-8 max-w-4xl">
          Your message has been submitted successfully. We have sent you a confirmation email.
          Our team will review your inquiry and get back to you soon.
        </p>
        <Link to="/" className="ai-button px-6 py-3 whitespace-nowrap">
          <span className="relative z-10">Back to Home</span>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;
