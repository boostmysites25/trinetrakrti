# SEO Implementation Guide for TrinetraKrti Website

This guide explains how to implement SEO elements on all pages of the TrinetraKrti website.

## Overview of SEO Implementation

The following SEO elements have been implemented:

1. **Meta Tags**: Title, description, and keywords for all pages
2. **Sitemap.xml**: XML sitemap for search engines
3. **Robots.txt**: Updated to include sitemap reference
4. **Dynamic SEO Component**: `SEOMetaTags` component for consistent implementation

## How to Implement SEO on Each Page

### Step 1: Import Required Components

Add these imports to the top of your page component:

```jsx
import SEOMetaTags from "../../components/SEOMetaTags";
import { seoData } from "../../data/seoData";
```

### Step 2: Remove Existing Helmet Component (if any)

If the page already has a `<Helmet>` component, remove it.

### Step 3: Add SEOMetaTags Component

Add the SEOMetaTags component at the beginning of your page's JSX, inside the main wrapper:

```jsx
<SEOMetaTags 
  title={seoData.pageName.title}
  description={seoData.pageName.description}
  keywords={seoData.pageName.keywords}
  canonicalUrl={seoData.pageName.canonicalUrl}
/>
```

Replace `pageName` with the appropriate key from the `seoData.js` file.

## Example Implementation

Here's an example of how the SEO component is implemented on the Home page:

```jsx
import React from "react";
import SEOMetaTags from "../../components/SEOMetaTags";
import { seoData } from "../../data/seoData";

const Home = () => {
  return (
    <>
      <SEOMetaTags 
        title={seoData.home.title}
        description={seoData.home.description}
        keywords={seoData.home.keywords}
        canonicalUrl={seoData.home.canonicalUrl}
      />
      
      {/* Rest of the page content */}
    </>
  );
};

export default Home;
```

## Page Keys in seoData.js

Use the following keys from `seoData.js` for each page:

### Main Pages
- Home: `seoData.home`
- About Us: `seoData.aboutUs`
- Leadership: `seoData.leadership`
- Investors: `seoData.investors`
- Services: `seoData.services`
- Contact: `seoData.contact`
- Careers: `seoData.careers`
- Internship: `seoData.internship`
- Thank You: `seoData.thankYou`

### Landing Pages
- Web Development Landing: `seoData.webDevelopmentLanding`
- App Development Landing: `seoData.appDevelopmentLanding`

### Service Detail Pages
- Custom Logo Design: `seoData.customLogoDesign`
- UI/UX Design: `seoData.uiuxDesign`
- Web Development: `seoData.webDevelopment`
- App Development: `seoData.appDevelopment`
- Custom Software Development: `seoData.customSoftwareDevelopment`
- Data Science: `seoData.dataScience`
- Cloud Computing Services: `seoData.cloudComputingServices`
- IoT: `seoData.iot`
- AR/VR: `seoData.arVr`
- Game Development: `seoData.gameDevelopment`
- AI Bot Subscription: `seoData.aiBotSubscription`
- AI Development: `seoData.aiDevelopment`
- Generative AI: `seoData.generativeAi`
- Blockchain Solutions: `seoData.blockchainSolutions`
- Consulting: `seoData.consulting`
- RPA: `seoData.rpa`
- Machine Learning: `seoData.machineLearning`
- NLP: `seoData.nlp`
- Cloud Migration: `seoData.cloudMigration`

## Additional SEO Considerations

1. **Image Optimization**: Always include descriptive `alt` attributes for images
2. **Structured Data**: Consider adding more structured data for specific page types
3. **Internal Linking**: Maintain a good internal linking structure
4. **Page Speed**: Regularly check and optimize page loading speed
5. **Mobile Responsiveness**: Ensure all pages are mobile-friendly

## Updating SEO Data

If you need to update SEO information for any page, edit the corresponding entry in the `src/data/seoData.js` file.