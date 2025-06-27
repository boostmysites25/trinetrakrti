import { lazy } from "react";
import logoImg from "../assets/images/logo/logo1.png";

// Service Detail Pages
const WebDevelopment = lazy(() =>
  import("../pages/Website/Services/WebDevelopment")
);
const AppDevelopment = lazy(() =>
  import("../pages/Website/Services/AppDevelopment")
);
const AIDevelopment = lazy(() =>
  import("../pages/Website/Services/AIDevelopment")
);
const BlockchainSolutions = lazy(() =>
  import("../pages/Website/Services/BlockchainSolutions")
);
const CloudComputingServices = lazy(() =>
  import("../pages/Website/Services/CloudComputingServices")
);
const GameDevelopment = lazy(() =>
  import("../pages/Website/Services/GameDevelopment")
);
const RPA = lazy(() => import("../pages/Website/Services/RPA"));
const MachineLearning = lazy(() =>
  import("../pages/Website/Services/MachineLearning")
);
const DataScience = lazy(() => import("../pages/Website/Services/DataScience"));
const NLP = lazy(() => import("../pages/Website/Services/NLP"));
const CloudMigration = lazy(() =>
  import("../pages/Website/Services/CloudMigration")
);
const UIUXDesign = lazy(() => import("../pages/Website/Services/UIUXDesign"));
const AIBotSubscription = lazy(() =>
  import("../pages/Website/Services/AIBotSubscription")
);
const CustomSoftwareDevelopment = lazy(() =>
  import("../pages/Website/Services/CustomSoftwareDevelopment")
);
const CustomLogoDesign = lazy(() =>
  import("../pages/Website/Services/CustomLogoDesign")
);
const Consulting = lazy(() => import("../pages/Website/Services/Consulting"));
const IOT = lazy(() => import("../pages/Website/Services/IOT"));
const ARVR = lazy(() => import("../pages/Website/Services/ARVR"));
const GenerativeAISolutions = lazy(() =>
  import("../pages/Website/Services/GenerativeAISolutions")
);

// details
export const companyDetails = {
  logo: logoImg,
  phone: "+918006800594",
  location: "HQ - Gadag, Karnataka \n Bangalore, India",
  email: "mpranavprem@gmail.com",
  // email: "contact@trinetrakrti.com",
  mapUrl: "https://maps.app.goo.gl/MHHMdGhxyhCdcnxE9",
  linkedin:"https://www.linkedin.com/company/trinetrakrti",
  instagram:"https://www.instagram.com/trinetrakrti/?hl=en",
  facebook:"https://business.facebook.com/latest/home?nav_ref=bm_home_redirect&business_id=1040057314739146&asset_id=630363506831675",
  whatsapp:"https://wa.me/918006800594",
  youtube:"https://www.youtube.com/channel/UCxPfKhWuAn2uPgn8oBYUQyw"
};

// Service Detail Pages
export const serviceDetailPages = [
  {
    link: "/services/custom-logo-design",
    label: "Custom Logo Design",
    component: <CustomLogoDesign />,
  },
  {
    link: "/services/uiux-design",
    label: "UI/UX Design",
    component: <UIUXDesign />,
  },
  {
    link: "/services/web-development",
    label: "Web Development",
    component: <WebDevelopment />,
  },
  {
    link: "/services/app-development",
    label: "App Development",
    component: <AppDevelopment />,
  },
  {
    link: "/services/custom-software-development",
    label: "Custom Software Development",
    component: <CustomSoftwareDevelopment />,
  },
  {
    link: "/services/data-science",
    label: "Data Science",
    component: <DataScience />,
  },
  {
    link: "/services/cloud-computing-services",
    label: "Cloud Computing Services",
    component: <CloudComputingServices />,
  },
  {
    link: "/services/iot",
    label: "Internet of Things (IoT)",
    component: <IOT />,
  },
  {
    link: "/services/ar-vr",
    label: "AR/VR",
    component: <ARVR />,
  },
  {
    link: "/services/game-development",
    label: "Game Development",
    component: <GameDevelopment />,
  },
  {
    link: "/services/ai-bot-subscription",
    label: "AI Bot Subscription",
    component: <AIBotSubscription />,
  },
  {
    link: "/services/ai-development",
    label: "AI Development",
    component: <AIDevelopment />,
  },
  {
    link: "/services/generative-ai",
    label: "Generative AI Solutions",
    component: <GenerativeAISolutions />,
  },
  {
    link: "/services/blockchain-solutions",
    label: "Blockchain Solutions",
    component: <BlockchainSolutions />,
  },
  {
    link: "/services/consulting",
    label: "IT Consulting",
    component: <Consulting />,
  },
];

// all services
export const services = [
  {
    id: 1,
    title: "Web Development",
    icon: require("../assets/images/icons/software-development.png"),
    image: require("../assets/images/services-details/web-development2.jpg"),
    description:
      "Establish a strong online presence with our web development services. We create responsive and visually appealing websites that are optimized for performance and user experience.",
    link: "/services/web-development",
  },
  {
    id: 2,
    title: "App Development",
    icon: require("../assets/images/icons/android-development.png"),
    image: require("../assets/images/services-details/app-development1.jpeg"),
    description:
      "Reach your audience on the go with our custom mobile app development services. We design intuitive and user-friendly applications for both iOS and Android platforms, ensuring seamless user experiences.",
    link: "/services/app-development",
  },
  {
    id: 3,
    title: "AI Development",
    icon: require("../assets/images/icons/ai.png"),
    image: require("../assets/images/services-details/ai1.jpg"),
    description:
      "Harness the power of AI to drive innovation in your business. Our AI development services include machine learning, natural language processing, and predictive analytics, enabling smarter decision-making.",
    link: "/services/ai-development",
  },
  {
    id: 4,
    title: "Blockchain Solutions",
    icon: require("../assets/images/icons/blockchain.png"),
    image: require("../assets/images/services-details/blockchain1.webp"),
    description:
      "Unlock the potential of decentralized technologies with our blockchain development services. We offer secure and scalable solutions tailored to your business needs, enhancing transparency and efficiency.",
    link: "/services/blockchain-solutions",
  },
  {
    id: 5,
    title: "Cloud Computing",
    icon: require("../assets/images/icons/cloudcomputing.png"),
    image: require("../assets/images/services-details/cloudcomputing1.jpg"),
    description:
      "Scale your infrastructure effortlessly with our cloud computing solutions. We offer secure and reliable cloud services, ensuring flexibility and cost-effectiveness for your business operations.",
    link: "/services/cloud-computing-services",
  },
  {
    id: 6,
    title: "Game Development",
    icon: require("../assets/images/icons/game-development.png"),
    image: require("../assets/images/services-details/game1.webp"),
    description:
      "Bring your gaming ideas to life with our immersive game development services. From concept to deployment, we create engaging and interactive experiences for players across platforms.",
    link: "/services/game-development",
  },
  {
    id: 7,
    title: "Robotic Process Automation",
    icon: require("../assets/images/icons/rpa.png"),
    image: require("../assets/images/services-details/rpa1.jpeg"),
    description:
      "Streamline your business operations with our RPA solutions. Automate repetitive tasks, reduce errors, and improve efficiency, allowing your team to focus on strategic initiatives.",
    link: "/services/rpa",
  },
  {
    id: 8,
    title: "Machine Learning Services",
    icon: require("../assets/images/icons/ml.png"),
    image: require("../assets/images/services-details/ai.jpg"),
    description:
      "Leverage data to gain insights and make informed decisions with our machine learning services. We build models that learn from your data, providing actionable intelligence for your business.",
    link: "/services/machine-learning",
  },
  {
    id: 9,
    title: "Data Science Services",
    icon: require("../assets/images/icons/data-science.png"),
    image: require("../assets/images/services-details/data1.webp"),
    description:
      "Transform raw data into valuable insights with our data science services. We analyze and interpret complex data sets, helping you make data-driven decisions that propel your business forward.",
    link: "/services/data-science",
  },
  {
    id: 10,
    title: "Natural Language Processing",
    icon: require("../assets/images/icons/nlp.png"),
    image: require("../assets/images/services-details/nlp2.webp"),
    description:
      "Enhance human-computer interactions with our NLP services. We develop solutions that understand, interpret, and generate human language, improving communication and user engagement.",
    link: "/services/nlp",
  },
  {
    id: 11,
    title: "Cloud Migration Services",
    icon: require("../assets/images/icons/cloud-migration.png"),
    image: require("../assets/images/services-details/cloudmigration1.webp"),
    description:
      "Seamlessly transition to the cloud with our migration services. We ensure minimal disruption and maximum efficiency, migrating your data and applications securely and effectively.",
    link: "/services/cloud-migration",
  },
  {
    id: 12,
    title: "UI/UX Design",
    icon: require("../assets/images/icons/uiux.png"),
    image: require("../assets/images/services-details/uiux2.webp"),
    description:
      "Deliver exceptional user experiences with our UI/UX design services. We focus on creating intuitive and aesthetically pleasing interfaces that engage users and drive satisfaction.",
    link: "/services/uiux-design",
  },
  {
    id: 13,
    title: "AI Bot Subscription",
    icon: require("../assets/images/icons/chatbot.png"),
    image: require("../assets/images/services-details/chatbot1.webp"),
    description:
      "Deliver exceptional user experiences with our UI/UX design services. We focus on creating intuitive and aesthetically pleasing interfaces that engage users and drive satisfaction.",
    link: "/services/ai-bot-subscription",
  },
  {
    id: 14,
    title: "Custom Software Development",
    icon: require("../assets/images/icons/custom-software.png"),
    image: require("../assets/images/services-details/custom-software.webp"),
    description:
      "Tailor solutions to your unique business requirements with our custom software development services. We build scalable and robust applications that align with your strategic goals.",
    link: "/services/custom-software-development",
  },
  {
    id: 15,
    title: "Custom Logo Design",
    icon: require("../assets/images/icons/logo-design.png"),
    image: require("../assets/images/services-details/logo-design1.webp"),
    description:
      "Craft a memorable brand identity with our custom logo design services. We design unique and impactful logos that resonate with your audience and reflect your brand's essence.",
    link: "/services/custom-logo-design",
  },
  {
    id: 16,
    title: "IT Consulting",
    icon: require("../assets/images/icons/planning.png"),
    image: require("../assets/images/services-details/consulting1.webp"),
    description:
      "Navigate the complex technology landscape with our expert IT consulting services. We provide strategic guidance to help you leverage technology for growth, innovation, and competitive advantage.",
    link: "/services/consulting",
  },
  {
    id: 17,
    title: "Internet of Things (IoT)",
    icon: require("../assets/images/icons/ai.png"), // Using AI icon as placeholder
    image: require("../assets/images/services-details/ai1.jpg"),
    description:
      "Connect and automate your business with our comprehensive IoT solutions. We develop smart systems that collect, analyze, and act on real-time data to optimize operations and enhance user experiences.",
    link: "/services/iot",
  },
  {
    id: 18,
    title: "AR/VR Solutions",
    icon: require("../assets/images/icons/arvr.png"),
    image: require("../assets/images/services-details/game1.webp"),
    description:
      "Immerse your audience in cutting-edge AR/VR experiences. We create interactive virtual environments and augmented reality applications that transform how users engage with your products and services.",
    link: "/services/ar-vr",
  },
  {
    id: 19,
    title: "Generative AI Solutions",
    icon: require("../assets/images/icons/ai.png"),
    image: require("../assets/images/services-details/ai1.jpg"),
    description:
      "Harness the power of generative AI to automate content creation, enhance creativity, and drive innovation. Our custom AI solutions generate text, images, code, and multimedia content at scale.",
    link: "/services/generative-ai",
  },
];

export const landingPageNavLinks = [
  {
    id: 1,
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    label: "Services",
    link: "services",
  },
  {
    id: 3,
    label: "Portfolio",
    link: "portfolio",
  },
  {
    id: 4,
    label: "Reviews",
    link: "reviews",
  },
  {
    id: 5,
    label: "Contact",
    link: "contact",
  },
];

// Career pages
export const careerPages = [
  {
    link: "/careers",
    label: "Join Us",
  },
  {
    link: "/internship",
    label: "Internship",
  },
];

// website pages links
export const websitePagesLinks = [
  {
    id: 1,
    link: "/",
    label: "Home",
  },
  {
    id: 2,
    link: "/about-us",
    label: "About Us",
    subLinks: [
      {
        link: "/about-us",
        label: "About Company",
      },
      {
        link: "/leadership",
        label: "About Leadership",
      },
    ],
  },
  {
    id: 3,
    link: "/services",
    label: "Services",
    subLinks: serviceDetailPages,
  },
  {
    id: 4,
    link: "/investors",
    label: "For Investors",
  },
  {
    id: 5,
    link: "/careers",
    label: "Careers",
    subLinks: careerPages,
  },
  {
    id: 6,
    link: "/contact",
    label: "Contact Us",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Website",
    icon: require("../assets/images/icons/online-shopping.png"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("../assets/images/icons/socialmedia.png"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("../assets/images/icons/landing-page.png"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("../assets/images/icons/ios-development.png"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("../assets/images/icons/android-development.png"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("../assets/images/icons/flutter-development.png"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("../assets/images/icons/hybrid-app-development.png"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// development workflow
export const webDevelopmentWorkflow = [
  {
    id: "01",
    title: "Strategic Discovery",
    icon: require("../assets/images/icons/requirement-analysis.png"),
    description:
      "We define your business goals, audience needs, and technical requirements through focused discovery sessions. Our approach captures essential functionalities and performance metrics for successful web projects.",
  },
  {
    id: "02",
    title: "UX/UI Design",
    icon: require("../assets/images/icons/planning.png"),
    description:
      "Our designers create conversion-optimized interfaces while planning your site's architecture and technology stack. We ensure scalable, user-friendly designs that drive engagement and results.",
  },
  {
    id: "03",
    title: "Agile Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "We build functional, responsive websites using modern technologies and agile methods. Regular client checkpoints ensure transparent development of SEO-friendly, secure, high-performance sites.",
  },
  {
    id: "04",
    title: "Quality Assurance",
    icon: require("../assets/images/icons/testing.png"),
    description:
      "We test across browsers and devices to validate functionality, performance, and security. Our QA team ensures speed optimization, accessibility compliance, and seamless user experiences.",
  },
  {
    id: "05",
    title: "Deployment & Support",
    icon: require("../assets/images/icons/support.png"),
    description:
      "We provide ongoing maintenance, performance monitoring, and strategic enhancements after launch. Our support ensures your website stays secure, optimized, and aligned with evolving needs.",
  },
];

export const appDevelopmentWorkflow = [
  {
    id: "01",
    title: "Mobile Strategy",
    icon: require("../assets/images/icons/requirement-analysis.png"),
    description:
      "We define your app strategy, target users, and core functionality through focused workshops. Our approach captures platform-specific needs and user stories to build a solid development foundation.",
  },
  {
    id: "02",
    title: "Mobile UX/UI Design",
    icon: require("../assets/images/icons/planning.png"),
    description:
      "Our designers create platform-optimized interfaces for iOS and Android while maintaining brand consistency. We develop scalable app structures with intuitive wireframes and interactive prototypes.",
  },
  {
    id: "03",
    title: "App Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "We build high-performance apps using native (Swift, Kotlin) or cross-platform frameworks (React Native, Flutter). Our clean code architecture optimizes performance, battery life, and offline functionality.",
  },
  {
    id: "04",
    title: "Multi-Device Testing",
    icon: require("../assets/images/icons/testing.png"),
    description:
      "We test across devices, OS versions, and network conditions to ensure flawless performance. Our QA team validates functionality, usability, and security before app store submission.",
  },
  {
    id: "05",
    title: "Deployment & Support",
    icon: require("../assets/images/icons/support.png"),
    description:
      "We handle app store submissions and provide analytics, monitoring, and regular updates. Our support ensures compatibility with new OS versions and incorporates user feedback.",
  },
];

// General Development Workflow
export const generalDevelopmentWorkflow = [
  {
    id: "01",
    title: "Requirements Analysis",
    icon: require("../assets/images/icons/requirement-analysis.png"),
    description:
      "We identify your business goals, technical needs, and success metrics through focused discovery. Our approach ensures stakeholder alignment with clear requirements and well-defined project scope.",
  },
  {
    id: "02",
    title: "Solution Architecture",
    icon: require("../assets/images/icons/planning.png"),
    description:
      "Our architects design scalable frameworks while creating detailed implementation roadmaps. We establish clear milestones and technology stacks tailored to your business needs and growth plans.",
  },
  {
    id: "03",
    title: "Agile Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "We build robust solutions using leading technologies and agile methods. Regular sprint reviews ensure your solution evolves with continuous feedback and adapts to changing requirements.",
  },
  {
    id: "04",
    title: "Quality Assurance",
    icon: require("../assets/images/icons/testing.png"),
    description:
      "We implement thorough testing including automated tests, performance checks, and security validation. Our QA team ensures your solution meets high quality standards before deployment.",
  },
  {
    id: "05",
    title: "Deployment & Support",
    icon: require("../assets/images/icons/support.png"),
    description:
      "We provide smooth deployment, knowledge transfer, and ongoing technical support. Our team monitors performance, implements updates, and recommends enhancements to keep your technology competitive.",
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Alex Peterson",
    img: require("../assets/images/testimonials/review-p1.png"),
    designation: "CTO, Healthcare Startup",
    review:
      "Our platform required unique workflows. Their team took the time to understand our business and delivered custom software that’s efficient, scalable, and future-ready.",
  },
  {
    id: 2,
    name: "Jasmine",
    img: require("../assets/images/testimonials/review-p2.png"),
    designation: "Product Lead, EdTech Company",
    review:
      "We came in needing just a visual refresh, but the insights their design team brought completely changed how we think about user journeys.",
  },
  {
    id: 3,
    name: "Erin",
    img: require("../assets/images/testimonials/review-p3.png"),
    designation: "CX Manager, SaaS Company",
    review:
      "We integrated their bot on our site to handle queries. Within the first month, we saw a 40% drop in support tickets.",
  },
  {
    id: 4,
    name: "Clara T",
    img: require("../assets/images/testimonials/review-p4.png"),
    designation: "CEO, FinTech Startup",
    review:
      "They clearly know blockchain. Smart contracts, wallet integration, you name it — all delivered securely and on time.",
  },
  {
    id: 5,
    name: "David",
    img: require("../assets/images/testimonials/review-p5.png"),
    designation: "Founder, Health & Wellness App",
    review:
      "From UX to deployment, their team nailed every milestone. It’s rare to find a partner this in sync with product vision.",
  },
];

// industry company serve
export const industriesCompanyServe = [
  {
    id: 1,
    title: "Healthcare Technology Solutions",
    img: require("../assets/images/industries/Healthcare.webp"),
    desc: "Revolutionizing healthcare delivery with advanced AI diagnostics, predictive analytics, and secure telemedicine platforms that enhance patient outcomes and streamline clinical workflows.",
  },
  {
    id: 2,
    title: "E-commerce & Retail Innovation",
    img: require("../assets/images/industries/E-commerce & Retail.webp"),
    desc: "Transforming digital shopping experiences with AI-powered recommendation engines, intelligent inventory systems, and frictionless payment solutions that drive conversion rates and customer loyalty.",
  },
  {
    id: 3,
    title: "FinTech & Banking Solutions",
    img: require("../assets/images/industries/Finance & Banking.webp"),
    desc: "Empowering financial institutions with cutting-edge AI algorithms, secure blockchain infrastructure, and machine learning models for fraud prevention, risk analysis, and automated trading systems.",
  },
  {
    id: 4,
    title: "Smart Energy Management",
    img: require("../assets/images/industries/Energy.webp"),
    desc: "Delivering next-generation energy solutions through IoT-enabled grid optimization, AI-driven consumption forecasting, and sustainable resource management platforms that reduce costs and environmental impact.",
  },
  {
    id: 5,
    title: "PropTech & Real Estate Analytics",
    img: require("../assets/images/industries/Real Estate.webp"),
    desc: "Elevating property management with AI-powered market analysis tools, predictive maintenance systems, and immersive virtual property experiences that transform decision-making and customer engagement.",
  },
  {
    id: 6,
    title: "Industry 4.0 Manufacturing",
    img: require("../assets/images/industries/Manufacturing.webp"),
    desc: "Accelerating manufacturing excellence through AI-optimized production lines, predictive maintenance algorithms, and IoT-connected factory systems that maximize efficiency and product quality.",
  },
  {
    id: 7,
    title: "Enterprise Data Intelligence",
    img: require("../assets/images/industries/Data Analytics & Business Intelligence.webp"),
    desc: "Unlocking business potential with comprehensive data analytics platforms, AI-driven business intelligence dashboards, and predictive modeling tools that convert raw data into strategic advantages.",
  },
  {
    id: 8,
    title: "IoT Ecosystem Development",
    img: require("../assets/images/industries/IoT Development.webp"),
    desc: "Building seamless connected environments with enterprise-grade IoT architecture, secure device networks, and intelligent automation systems that create smarter, more responsive operations.",
  },
  {
    id: 9,
    title: "Supply Chain Intelligence",
    img: require("../assets/images/industries/Logistics & Supply Chain.webp"),
    desc: "Optimizing logistics networks with AI-powered route optimization, real-time inventory tracking, and predictive supply chain analytics that enhance visibility, reduce costs, and improve delivery performance.",
  },
  {
    id: 10,
    title: "EdTech Innovations",
    img: require("../assets/images/industries/Education.webp"),
    desc: "Advancing education through AI-adaptive learning platforms, student success prediction models, and automated administrative systems that personalize learning journeys and improve educational outcomes.",
  },
  {
    id: 11,
    title: "Telecom Network Intelligence",
    img: require("../assets/images/industries/Telecom.webp"),
    desc: "Enhancing telecommunications infrastructure with AI-powered network optimization, predictive maintenance systems, and intelligent customer service solutions that improve reliability and user satisfaction.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("../assets/images/portfolio/web-development/5ghomes.webp"),
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: require("../assets/images/portfolio/web-development/cold-creekcap.webp"),
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 3,
    img: require("../assets/images/portfolio/web-development/think-reality.webp"),
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 4,
    img: require("../assets/images/portfolio/web-development/akash-mega-mart.webp"),
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 5,
    img: require("../assets/images/portfolio/web-development/midwam.webp"),
    title: "Midwam – Immersive Experience Design Company",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("../assets/images/portfolio/app-development/akash_mega_mart-app.webp"),
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: require("../assets/images/portfolio/app-development/feelit_app.webp"),
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: require("../assets/images/portfolio/app-development/klikomics.webp"),
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: require("../assets/images/portfolio/app-development/autosnap-app.webp"),
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 5,
    img: require("../assets/images/portfolio/app-development/rentop.webp"),
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
