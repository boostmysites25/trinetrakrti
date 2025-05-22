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
import { serviceDetailPages } from "./data/constant";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const Home = React.lazy(() => import("./pages/Website/Home"));
const ThankYou = React.lazy(() => import("./pages/Website/ThankYou"));
const AboutUs = React.lazy(() => import("./pages/Website/AboutUs"));
const OurServices = React.lazy(() => import("./pages/Website/OurServices"));
const Blogs = React.lazy(() => import("./pages/Website/Blogs"));
const BlogDetails = React.lazy(() => import("./pages/Website/BlogDetails"));
const ServicePageLayout = React.lazy(() =>
  import("./components/Website/ServicePageLayout")
);
const Careers = React.lazy(() => import("./pages/Website/Careers"));
const Internship = React.lazy(() => import("./pages/Website/Internship"));
const ContactUs = React.lazy(() => import("./pages/Website/ContactUs"));
const LandingPage = React.lazy(() => import("./pages/LandingPage/LandingPage"));
const Leadership = React.lazy(() => import("./pages/Website/Leadership"));
const Investors = React.lazy(() => import("./pages/Website/Investors"));

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
      const scrollElements = document.querySelectorAll(".ai-reveal");

      scrollElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
            <TawkMessengerReact
              propertyId="682dabd54f8d3219091cea9c"
              widgetId="1irp6eejm"
            />
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
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/services" element={<OurServices />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:title" element={<BlogDetails />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/internship" element={<Internship />} />
              <Route path="/thank-you" element={<ThankYou />} />
              {/* Services Detail Routes with Layout */}
              <Route path="/services" element={<ServicePageLayout />}>
                {serviceDetailPages.map(({ component, link }) => (
                  <Route path={link} element={component} />
                ))}
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
