/**
 * This script is a template for implementing SEO on all service pages.
 * 
 * For each service page, you need to:
 * 
 * 1. Add imports:
 *    import SEOMetaTags from "../../../components/SEOMetaTags";
 *    import { seoData } from "../../../data/seoData";
 * 
 * 2. Wrap the component return with a fragment and add SEOMetaTags:
 *    return (
 *      <>
 *        <SEOMetaTags 
 *          title={seoData.serviceName.title}
 *          description={seoData.serviceName.description}
 *          keywords={seoData.serviceName.keywords}
 *          canonicalUrl={seoData.serviceName.canonicalUrl}
 *        />
 *        <div className="flex flex-col gap-10">
 *          ...
 *        </div>
 *      </>
 *    );
 * 
 * 3. Make sure to close the fragment at the end:
 *    </div>
 *    </>
 *    );
 * 
 * Here's the mapping of service pages to their seoData keys:
 * 
 * - BlockchainSolutions.jsx: seoData.blockchainSolutions
 * - CloudComputingServices.jsx: seoData.cloudComputingServices
 * - CloudMigration.jsx: seoData.cloudMigration
 * - Consulting.jsx: seoData.consulting
 * - CustomLogoDesign.jsx: seoData.customLogoDesign
 * - CustomSoftwareDevelopment.jsx: seoData.customSoftwareDevelopment
 * - DataScience.jsx: seoData.dataScience
 * - GameDevelopment.jsx: seoData.gameDevelopment
 * - GenerativeAISolutions.jsx: seoData.generativeAi
 * - IOT.jsx: seoData.iot
 * - MachineLearning.jsx: seoData.machineLearning
 * - NLP.jsx: seoData.nlp
 * - RPA.jsx: seoData.rpa
 * - UIUXDesign.jsx: seoData.uiuxDesign
 * - ARVR.jsx: seoData.arVr
 * - AIBotSubscription.jsx: seoData.aiBotSubscription
 */

// Example implementation for BlockchainSolutions.jsx:

/*
import React from "react";
import img1 from "../../../assets/images/services-details/blockchain1.webp";
import img2 from "../../../assets/images/services-details/blockchain2.jpg";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../../data/constant";
import SEOMetaTags from "../../../components/SEOMetaTags";
import { seoData } from "../../../data/seoData";

const BlockchainSolutions = () => {
  const next = services[4];
  return (
    <>
      <SEOMetaTags 
        title={seoData.blockchainSolutions.title}
        description={seoData.blockchainSolutions.description}
        keywords={seoData.blockchainSolutions.keywords}
        canonicalUrl={seoData.blockchainSolutions.canonicalUrl}
      />
      <div className="flex flex-col gap-10">
        ...
      </div>
    </>
  );
};

export default BlockchainSolutions;
*/