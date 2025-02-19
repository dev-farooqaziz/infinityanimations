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
const Looking = React.lazy(() => import('./components/looking/Looking'));
const ClientThinking = React.lazy(() => import('./components/client/ClientThinking'));
const Clients = React.lazy(() => import('./components/OurClients/Clients'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
//==== Looking Images
import LookingFlodImg from "media/home/looking-img.gif";

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
    title: <>Explain Your Complex Product with Amazing <br className='xl:hidden lg:block hidden' /> Animated Videos</>,
    subTitle: "",
    desc: "Spread profound message and scale up your business with our animated video services today!",
    isBtn: true,
  }
  //=====Looking Fold=====//
  const paraArray = [
    `Infinity Animations creates videos that bring your brand’s vision to life through research, strategy, copywriting, and custom visuals.`,
    `Our personalized and collaborative approach ensures that your video is truly one of a kind.
        As an end-to-end service solution, we’ll guide you through every step – from our streamlined discovery process, through key points in production, to final delivery.
        `,
    `As a leading animation studio, we pride ourselves on delivering high-quality, innovative animations that exceed our clients' expectations, making us the go-to choice for businesses seeking top-notch animation companies.`
  ];
  const looking = {
    main: (<> Why <span className='text-[#FF2D4A]'> Choose </span> Infinity Animations </>),
    title: (<> Our mission is to help our clients uncover the essence of their brand story to drive sales, influence decisions, and promote understanding.</>),
    para: { paraArray },
    flodImg: LookingFlodImg
  };
  //===== FAQS =====//
  const lists = [
    {
      item1: "Understanding your business and marketing objectives",
      item1: "Story and script development",
      item1: "Storyboard",
      item1: "Voiceover",
      item1: "Illustration",
      item1: "Animation",
      item1: "Delivery/publication",
    }
  ]
  const accordionData = [
    {
      question: 'What Is The Cost Of Tech Video Production?',
      answer: "For our customers, we create meaningful and entertaining videos at Explain Art Animation. The entire video content is produced and tailored to our client's requirements. Our team excels at creating high-quality videos, whether you need a corporate video to boost your brand awareness or a product demo to promote your services.Our process entails a series of meticulous animation and development steps, from brainstorming various concepts to the final delivery.",
      lists: lists,
    },
    {
      question: 'What Is The Infinity Animations Video Delivery Timeframe?',
      answer: "Step into a realm of immersive storytelling with our cutting-edge 3D animations. Elevate your visual narratives, whether for product showcases, virtual tours, or cinematic experiences.",
    },
    {
      question: 'How Do Explainer Videos Benefit My Business Beyond Just Explaining A Product?',
      answer: "Explainer videos not only demystify your product but also create a memorable brand narrative, increasing engagement, and fostering a stronger emotional connection with your audience.",
    },
    {
      question: 'Are Explainer Videos Suitable For All Industries, Or Are They More Effective For Certain Businesses?',
      answer: "Explainer videos are versatile and can benefit businesses across industries. From tech startups to healthcare services, adapting the content to suit your industry's specific needs to improve the effectiveness. ",
    }
  ];
  const faqs = {
    accordionData: accordionData,
  }
  // ===== Brands Content ===== //
  const brandsTwo = {
    title: <>Animated Video Content That Boosts Your Brand,<br className='lg:block hidden' />  Maximizes Prospect Engagement and Drives ROI</>,
    subTitle: "",
    desc: "Spread profound message and scale up your business with our animated video services today!",
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
                <Streamed />
                <BadgeSlider />
                <Explainer />
                <Brands content={brands} />
                <ExplainerType />
                <Packages />
                <Animations />
                <Work />
                <Looking content={looking} />
                <ClientThinking />
                <Clients />
                <Faqs content={faqs} />
                <Brands content={brandsTwo} />
                <Contact />
              </>
            )
          ) : (
            showDesktopComponents && (
              <>
                <Partners />
                <Streamed />
                <BadgeSlider />
                <Explainer />
                <Brands content={brands} />
                <ExplainerType />
                <Packages />
                <Animations />
                <Work />
                <Looking content={looking} />
                <ClientThinking />
                <Clients />
                <Faqs content={faqs} />
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
