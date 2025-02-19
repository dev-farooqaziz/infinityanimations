"use client"
import React, { useState, useEffect } from "react";
import Script from 'next/script';
// Import Components
const HeaderLP = React.lazy(() => import('./components/Header/Header'));
const Banner = React.lazy(() => import('./components/banner/Banner'));
const Partners = React.lazy(() => import('./components/partners/partners'));
const Explainer = React.lazy(() => import('./components/explainer/Explainer'));
const BadgeSlider = React.lazy(() => import('@/components/badgeSlider2/BadgeSlider2'));
const Streamed = React.lazy(() => import('./components/streamed/Streamed'));
const Brands = React.lazy(() => import('./components/brands/Brands'));
const ExplainerType = React.lazy(() => import('./components/type-explainer/ExplainerType'));
const Packages = React.lazy(() => import('./components/packages/Packages'));
const Animations = React.lazy(() => import('./components/infinity-animation/Animations'));
const Work = React.lazy(() => import('./components/work/Work'));
const Faqs = React.lazy(() => import('./components/faqs/Faqs'));
const ClientThinking = React.lazy(() => import('./components/client/ClientThinking'));
const Clients = React.lazy(() => import('./components/OurClients/Clients'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));

const Video = () => {
  const [showDesktopComponents, setShowDesktopComponents] = useState(true);
  const [showMobileComponents, setShowMobileComponents] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Show desktop components after 1 second
    const desktopTimer = setTimeout(() => {
      setShowDesktopComponents(true);
    }, 500);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(desktopTimer);
    };
  }, []);

  useEffect(() => {
    const handleTouchOrScroll = () => {
      setShowMobileComponents(true);
      // Remove event listeners after mobile components are shown
      window.removeEventListener("scroll", handleTouchOrScroll);
      window.removeEventListener("touchstart", handleTouchOrScroll);
    };

    // Add event listeners for touch and scroll events
    window.addEventListener("scroll", handleTouchOrScroll);
    window.addEventListener("touchstart", handleTouchOrScroll);

    return () => {
      window.removeEventListener("scroll", handleTouchOrScroll);
      window.removeEventListener("touchstart", handleTouchOrScroll);
    };
  }, []);
  // ===== Brands Content ===== //
  const brands = {
    title: "Ready For the Spotlight? Supercharge Your Brand's Story!",
    desc: "Illuminate your message with our tactfully and tastefully done explainer video services.",
    isBtn: true,
  }
  //===== FAQS =====//
  const accordionData = [
    {
      question: 'How Do Explainer Videos Benefit My Business Beyond Just Explaining A Product?',
      answer: "Explainer videos not only demystify your product but also create a memorable brand narrative, increasing engagement, and fostering a stronger emotional connection with your audience.",
    },
    {
      question: 'Can I Include Humor In My Explainer Video, Or Should It Strictly Be Professional?',
      answer: "Absolutely! Injecting humor into your explainer video can make it more relatable and shareable. Striking the right balance between professionalism and humor can leave a lasting impression on your audience",
    },
    {
      question: 'ow Long Should An Ideal Explainer Video Be, And Does Length Affect Its Effectiveness?',
      answer: "Aim for a sweet spot between 60 to 90 seconds. Keeping it concise ensures viewer engagement, but it's crucial to prioritize impactful content over strict time constraints. Quality storytelling matters most.",
    },
    {
      question: 'Are Explainer Videos Suitable For All Industries, Or Are They More Effective For Certain Types Of Businesses?',
      answer: "Explainer videos are versatile and can benefit businesses across industries. From tech startups to healthcare services, adapting the content to suit the specific needs and tone of your industry is key to their effectiveness.",
    }
  ];
  const faqs = {
    accordionData: accordionData,
  }
  // ===== Brands Content ===== //
  const brandsTwo = {
    title: "Ready to Transform Your Brand Story?",
    desc: "Let's create an explainer video that turns heads and drives results.",
    isBtn: true,
  }
  return (
    <>
      <div className='bg-white'>
        <HeaderLP />
        <Banner />
        {
          isMobile ? (
            showMobileComponents && (
              <>
                <Partners />
                <Explainer />
                <BadgeSlider />
                <Streamed />
                <Brands content={brands} />
                <ExplainerType />
                <Packages />
                <Animations />
                <Work />
                <Faqs content={faqs} />
                <ClientThinking />
                <Clients />
                <Brands content={brandsTwo} />
                <Contact />
              </>
            )
          ) : (
            showDesktopComponents && (
              <>
                <Partners />
                <Explainer />
                <BadgeSlider />
                <Streamed />
                <Brands content={brands} />
                <ExplainerType />
                <Packages />
                <Animations />
                <Work />
                <Faqs content={faqs} />
                <ClientThinking />
                <Clients />
                <Brands content={brandsTwo} />
                <Contact />
              </>
            )
          )
        }

        <Script id="websiteSchema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Explainer Video Animation Services | Infinity Animations",
              "url": "https://infinityanimations.com/video-explainer-lp-new",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "{search_term_string}",
                "query-input": "required name=search_term_string"
              }                    
            }
          `}
        </Script>
        <Script id="organizationSchema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Corporation",
              "name": "Explainer Video Animation Services | Infinity Animations",
              "url": "https://infinityanimations.com/video-explainer-lp-new",
              "logo": "https://infinityanimations.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.957f7aac.gif&w=256&q=75"
            }
          `}
        </Script>
        <Script id="localBusinessSchema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Explainer Video Animation Services | Infinity Animations",
              "image": "https://infinityanimations.com/_next/static/media/banner.26074fa5.png",
              "@id": "",
              "url": "https://infinityanimations.com/video-explainer-lp-new",
              "telephone": "012-345-6789",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "One World Trade Center, Suite 8500",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "postalCode": "10007",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.7130082,
                "longitude": -74.0131689
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "21:00"
              },
              "sameAs": [
                "https://www.facebook.com/infinityanimationsofficial",
                "https://www.instagram.com/infinityanimationsofficials"
              ]                       
            }
          `}
        </Script>
        <Script id="productSchema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/", 
              "@type": "Product", 
              "name": "Explainer Video Animation Services | Infinity Animations",
              "image": "https://infinityanimations.com/_next/static/media/banner.26074fa5.png",
              "description": "Explainer Video Animation Services, Contact us to discover how our expert team can bring your ideas to life with engaging explainer videos.",
              "brand": {
                "@type": "Brand",
                "name": "Infinity Animations"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1087"
              }                    
            }
          `}
        </Script>
      </div>
    </>
  )
}

export default Video
