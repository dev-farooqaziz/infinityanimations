"use client"
import React, { useState, useEffect } from "react";
// Import Page Components
const HeaderLP = React.lazy(() => import('./components/header/Header'));
const Banner = React.lazy(() => import('./components/banner/Banner'));
const BadgeSlider = React.lazy(() => import('@/components/badgeSlider2/BadgeSlider2'));
const LogoAnimation = React.lazy(() => import('./components/logoAnimartion/LogoAnimation'));
const Startups = React.lazy(() => import('./components/startups/Startups'));
const Streamed = React.lazy(() => import('./components/streamed/Streamed'));
const AnimatedLogo = React.lazy(() => import('./components/animatedLogo/AnimatedLogo'));
const SmallBanner = React.lazy(() => import('./components/smallBanner/SmallBanner'));
const Testimonials = React.lazy(() => import('./components/testimonials/Testimonials'));
const Footer = React.lazy(() => import('./components/footer/Footer'));
// Images
import ImageOne from "media/logo-animation-lp/3d.gif"
import ImageTwo from "media/logo-animation-lp/templatebased.gif"
import ImageThree from "media/logo-animation-lp/Intro.gif"

const LogoAnimations = () => {
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
  //=====Startups Fold=====// 
  const tabInfo = [
    { label: "2D LOGO ANIMATION", index: 0 },
    { label: "3D LOGO ANIMATION", index: 1 },
    { label: "Template-Based Logo Animation", index: 2 },
    { label: "Intro/Outro Animation Voiceover", index: 3 },
    { label: "Mascot Logo Animation", index: 4 },
  ];
  const tabContents = [
    [
      {
        tabTxt: "2d Logo Animation",
        tabDesc: "A 2D logo animation is a technique that adds motion, transitions, and effects to a static logo, making it more engaging and memorable in digital media. It involves elements like movement, visual transitions, special effects, timing, and sometimes sound, enhancing a brand's identity and creating eye-catching visuals for various applications.",
        tabVideo: "https://www.logoorbit.com/frontend/assets/images/video/2d-logo-animation.mp4",
        tabImage: "",
        isVideo: true,
      }
    ],
    [
      {
        tabTxt: "3d Logo Animation",
        tabDesc: "A 3D logo animation brings a static 3D logo to life with depth, movement, and visual effects. It adds realism, depth, and dynamism to the logo, making it visually appealing and suitable for various digital media like videos and presentations. This technique uses elements like motion, effects, transitions, timing, and sound to create a memorable brand identity.",
        tabVideo: "",
        tabImage: ImageOne,
        isVideo: false,
      }
    ],
    [
      {
        tabTxt: "Template-Based Logo Animation",
        tabDesc: "Template-based logo animation uses pre-designed templates to quickly and efficiently create animated logos. These templates are customized with a brand's logo and style preferences, offering a cost-effective way to add dynamic visual elements to logos for various digital applications.",
        tabVideo: "",
        tabImage: ImageTwo,
        isVideo: false,
      }
    ],
    [
      {
        tabTxt: "Intro/Outro Animation Voiceover",
        tabDesc: "Intro and outro animations, coupled with voiceovers, play vital roles in multimedia presentations. Intro animations serve as captivating introductions to videos or presentations, incorporating branding or thematic elements. They generate anticipation and set the tone for the upcoming content. On the other hand, outro animations are used to conclude content effectively, often including closing credits, contact information, or calls to action, encouraging viewer engagement.",
        tabVideo: "",
        tabImage: ImageThree,
        isVideo: false,
      }
    ],
    [
      {
        tabTxt: "Mascot Logo Animation",
        tabDesc: "Mascot logo animations are a creative way to make a brand's character stand out and connect with viewers. By animating the mascot with movements, expressions, and interactions, these animations add depth and emotion to the character, making it more appealing and relatable. Whether it's for marketing videos, social media content, or website headers, mascot logo animations help brands convey their identity and message in a fun and memorable manner, leaving a lasting impression on the audience.",
        tabVideo: "https://www.logoorbit.com/frontend/assets/images/video/Mascot-Logo-Animation.mp4",
        tabImage: "",
        isVideo: true,
      }
    ],
  ];

  const startups = {
    tabContents: tabContents,
    tabInfo: tabInfo
  }
  return (
    <>
      <div>
        <Banner />
        {
          isMobile ? (
            showMobileComponents && (
              <>
                <BadgeSlider />
                <LogoAnimation />
                <Startups content={startups} />
                <Streamed />
                <AnimatedLogo />
                <SmallBanner />
                <Testimonials />
                <Footer />
              </>
            )
          ) : (
            showDesktopComponents && (
              <>
                <BadgeSlider />
                <LogoAnimation />
                <Startups content={startups} />
                <Streamed />
                <AnimatedLogo />
                <SmallBanner />
                <Testimonials />
                <Footer />
              </>
            )
          )
        }
      </div>
    </>
  )
}

export default LogoAnimations
