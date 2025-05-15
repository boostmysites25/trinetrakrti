import { Navigate, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import NormalizeSlash from "./components/NormalizeSlash";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppIcon from "./components/WhatsAppIcon";
import { Toaster } from "react-hot-toast";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/SpinnerContext";
import React, { Suspense, useEffect } from "react";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { initAllAnimations } from "./utils/scrollAnimations";
import AIGradientBackground from "./components/AIGradientBackground";
import "./styles/ai-theme.css";
import "./styles/responsive.css";

const Home = React.lazy(() => import("./pages/Website/Home"));
const AboutUs = React.lazy(() => import("./pages/Website/AboutUs"));
const OurServices = React.lazy(() => import("./pages/Website/OurServices"));
const Blogs = React.lazy(() => import("./pages/Website/Blogs"));
const BlogDetails = React.lazy(() => import("./pages/Website/BlogDetails"));
const ServicePageLayout = React.lazy(() =>
  import("./components/Website/ServicePageLayout")
);

// Service Detail Pages
const WebDevelopment = React.lazy(() => import("./pages/Website/WebDevelopment"));
const AppDevelopment = React.lazy(() => import("./pages/Website/AppDevelopment"));
const AIDevelopment = React.lazy(() => import("./pages/Website/AIDevelopment"));
const BlockchainSolutions = React.lazy(() => import("./pages/Website/BlockchainSolutions"));
const CloudComputingServices = React.lazy(() => import("./pages/Website/CloudComputingServices"));
const GameDevelopment = React.lazy(() => import("./pages/Website/GameDevelopment"));
const RPA = React.lazy(() => import("./pages/Website/RPA"));
const MachineLearning = React.lazy(() => import("./pages/Website/MachineLearning"));
const DataScience = React.lazy(() => import("./pages/Website/DataScience"));
const NLP = React.lazy(() => import("./pages/Website/NLP"));
const CloudMigration = React.lazy(() => import("./pages/Website/CloudMigration"));
const UIUXDesign = React.lazy(() => import("./pages/Website/UIUXDesign"));
const AIBotSubscription = React.lazy(() => import("./pages/Website/AIBotSubscription"));
const CustomSoftwareDevelopment = React.lazy(() => import("./pages/Website/CustomSoftwareDevelopment"));
const CustomLogoDesign = React.lazy(() => import("./pages/Website/CustomLogoDesign"));

const ContactUs = React.lazy(() => import("./pages/Website/ContactUs"));
const LandingPage = React.lazy(() => import("./pages/LandingPage/LandingPage"));

AOS.init({
  once: true,
  duration: 500,
  offset: -50,
});

function App() {
  useEffect(() => {
    // Initialize scroll animations
    const cleanup = initAllAnimations();
    
    // Add scroll-triggered animation class
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.ai-reveal');
      
      scrollElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (cleanup) cleanup();
    };
  }, []);
  
  return (
    <SpinnerContextProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <AIGradientBackground className="min-h-screen">
          <NormalizeSlash>
            <ScrollToTop />
            <LoadingSpinnerContext />
            <WhatsAppIcon />
          <Toaster
            position="top-bottom"
            toastOptions={{
              style: {
                background: "#010C2A",
                color: "#ffffff",
              },
            }}
          />
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<OurServices />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:title" element={<BlogDetails />} />

            {/* Services Detail Routes with Layout */}
            <Route path="/services" element={<ServicePageLayout />}>
              <Route path="web-development" element={<WebDevelopment />} />
              <Route path="app-development" element={<AppDevelopment />} />
              <Route path="ai-ml-development" element={<AIDevelopment />} />
              <Route path="blockchain-solutions" element={<BlockchainSolutions />} />
              <Route path="cloud-computing-services" element={<CloudComputingServices />} />
              <Route path="game-development" element={<GameDevelopment />} />
              <Route path="rpa" element={<RPA />} />
              <Route path="machine-learning" element={<MachineLearning />} />
              <Route path="data-science" element={<DataScience />} />
              <Route path="nlp" element={<NLP />} />
              <Route path="cloud-migration" element={<CloudMigration />} />
              <Route path="uiux-design" element={<UIUXDesign />} />
              <Route path="ai-bot-subscription" element={<AIBotSubscription />} />
              <Route path="custom-software-development" element={<CustomSoftwareDevelopment />} />
              <Route path="custom-logo-design" element={<CustomLogoDesign />} />
            </Route>

            {/* Landing Pages */}
            <Route
              path="/web-development"
              element={<LandingPage page={"web-development"} />}
            />
            <Route
              path="/app-development"
              element={<LandingPage page={"app-development"} />}
            />
          </Routes>
        </NormalizeSlash>
        </AIGradientBackground>
      </Suspense>
    </SpinnerContextProvider>
  );
}

export default App;
