import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

/**
 * SEOMetaTags Component
 * 
 * This component manages dynamic meta tags for SEO optimization.
 * It updates the document title, meta description, and other SEO-related tags.
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Page title
 * @param {string} props.description - Meta description
 * @param {string} props.keywords - Meta keywords
 * @param {string} props.canonicalUrl - Canonical URL
 * @param {string} props.ogImage - Open Graph image URL
 */
const SEOMetaTags = ({ 
  title = "TrinetraKrti - Innovative IT Solutions & Services",
  description = "Transform your business with our cutting-edge technology solutions. Specializing in AI, Web & App Development, Blockchain, Cloud Computing, and more.",
  keywords = "TrinetraKrti, IT solutions, AI development, web development, app development, blockchain solutions, cloud computing",
  canonicalUrl = "",
  ogImage = "/logo1.png"
}) => {
  
  // Set the document title
  useEffect(() => {
    document.title = title;
  }, [title]);

  // Construct the canonical URL
  const fullCanonicalUrl = canonicalUrl 
    ? `https://trinetrakrti.com${canonicalUrl}` 
    : "https://trinetrakrti.com";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://trinetrakrti.com${ogImage}`} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`https://trinetrakrti.com${ogImage}`} />
    </Helmet>
  );
};

export default SEOMetaTags;