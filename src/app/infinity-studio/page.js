"use client"
import React, { useState, useEffect } from "react";
// Import Page Components
const HeaderLP = React.lazy(() => import('./components/Header/Header'));
const Banner = React.lazy(() => import('./components/banner/Banner'));
const Partners = React.lazy(() => import('./components/partners/partners'));
const Explainer = React.lazy(() => import('./components/explainer/Explainer'));
const Streamed = React.lazy(() => import('./components/streamed/Streamed'));
const Brands = React.lazy(() => import('./components/brands/Brands'));
const ExplainerType = React.lazy(() => import('./components/type-explainer/ExplainerType'));
const Packages = React.lazy(() => import('./components/packages/Packages'));
const BadgeSlider = React.lazy(() => import('@/components/badgeSlider1/BadgeSlider1'));
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
    title: <> Start Displaying Your Brand with <span className='text-[#FFCC00]'>Amazing Animated Videos</span> </>,
    desc: "Spread profound message and scale up your business with our animated video services today!",
  }
  //===== FAQS =====//

  const accordionData = [
    {
      question: 'How Many People Will Work On My Video?',
      list: [
        "Understanding your business and marketing objectives",
        "Story and script development",
        "Storyboard",
        "Voiceover",
        "Illustration",
        "Animation",
        "Delivery/publication",
      ]
    },
    {
      question: 'How Many People Will Work On My Video?',
      answer: "Step into a realm of immersive storytelling with our cutting-edge 3D animations. Elevate your visual narratives, whether for product showcases, virtual tours, or cinematic experiences.",
    },
    {
      question: 'Do I Get Full Copyrights To The Video?',
      answer: "Simplify the complex and engage your audience with our whiteboard animations. Each stroke unfolds a nuanced narrative, turning ideas into visually compelling stories.",
    },
    {
      question: 'Do You Produce All Types Of Animation Videos And Provide Video Concept Too, If I Have No Concept Idea?',
      answer: "Simplify the complex and engage your audience with our whiteboard animations. Each stroke unfolds a nuanced narrative, turning ideas into visually compelling stories.",
    }
  ];
  const faqs = {
    accordionData: accordionData,
  }
  // ===== Brands Content ===== //
  const brandsTwo = {
    title: "Start Displaying Your Brand with Amazing Animated Videos",
    subTitle: "Spread Profound Message and Scale Up Your Business",
    desc: "Spread profound message and scale up your business with our animated video services today!",
    isBtn: false,
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
                <Streamed />
                <ExplainerType />
                <Brands content={brands} />
                <Packages />
                <div className='mb-12 md:mb-20'>
                  <BadgeSlider />
                </div>
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
                <Streamed />
                <ExplainerType />
                <Brands content={brands} />
                <Packages />
                <div className='mb-12 md:mb-20'>
                  <BadgeSlider />
                </div>
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
      </div>
    </>
  )
}

export default Video
