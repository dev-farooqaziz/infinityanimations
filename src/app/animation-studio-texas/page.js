"use client"
import React, { useState, useEffect } from "react";
// Import Components
import Hero from '@/components/location-page/hero/Hero';
import BannerContact from '@/components/location-page/contact-banner/bannercontact';
import Services from '@/components/location-page/services/services';
import Description from '@/components/location-page/description/description';
import Portfolio from '@/components/location-page/new-portfilio/portfolio';
import Want from '@/components/location-page/want/Want';
import Concept from '@/components/location-page/concept/Concept';
import TestimonialNew from '@/components/location-page/testimonialNew/Testimonial';
import Looking from '@/components/location-page/looking/Looking';
import Contact from '@/components/location-page/contact/Contact';
//==== Hero Images
import BannerImg from "media/location-page/texas.png"
//==== Looking Images
import LookingFlodImg from "media/home/looking-img.png";
//================
import body1 from "media/location-page/thumbnils/body1.jpg"
import body2 from "media/location-page/thumbnils/body2.jpg"
import body3 from "media/location-page/thumbnils/thumbnail6.jpg"

const LocationPage = () => {

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
    //=====Banner Fold=====//
    const hero = {
        title: (<> Top <span className='text-primary-100'>Animation <br /> Studio </span> in Texas </>),
        para: (<> Infinity Animations - Animation Studio In Texas, stands out among top-ranked animation studios Texas, offering highly delightful visual experiences with its range of animation services. From 2D to 3D animation, and motion graphics, adding a fresh perspective to every product and brand with fun-loving characters and heart-warming animation. </>),
        btnBg: "bg-prime",
        BannerImg: BannerImg,
    };

    //=====Services Fold=====//
    const services = {
        subtitle: "Partner with Texas's Leading Animation Experts",
        title: "Our Services",
    };

    //=====Description Fold=====//
    const Desc1 = {
        title: (<>Video Animation Studio In Texas <br /> <span className='text-[#FF2D4A]'> to Scale Your Content with Ease</span></>),
        para: "Infinity Animations is among the top-ranked animation studios Texas, helping brands produce stellar brand content with its one-of-a-kind animation services in Texas. Time to tune into a brand aura that’s going to give you for life with 2D video animation Texas. Give them the experience they’ve been craving for so long with 3D video animation Texas. Tread on a path of growth, and fame with Infinity Animations.",
        bannerRight: "https://player.vimeo.com/progressive_redirect/playback/950045792/rendition/720p/file.mp4?loc=external&log_user=0&signature=90534b4f57b71c13daff5f699a603dc446447c8fb24cf92bcb089adaedf0ad88",
        thumbnail: body1,
        downArrow: 'start'
    };
    const Desc2 = {
        title: (<>Animation Studio Company In Texas <span className='text-[#FF2D4A]'> Produce Lifelike Visuals with Animated Videos</span></>),
        para: "Time to abandon static graphics, and make the leap with Infinity Animations, the most sought-after company among Texas-based animation studios. What sets us apart from other animation production companies is our creative zeal, and animation prowess, making it possible for us produce lifelike visuals with our animation techniques. Want realistic CGI work for your next project? Sign up to Infinity Animations today.",
        bannerLeft: "https://player.vimeo.com/progressive_redirect/playback/950015817/rendition/720p/file.mp4?loc=external&log_user=0&signature=c60df41646f601d81fa4c987188c8e103f416d393f8ec1f9270e7114e4f0b3ed",
        thumbnail: body2,
        downArrow: 'end'
    };
    const Desc3 = {
        title: (<>Best Animation Studio in Texas
            <br /><span className='text-[#FF2D4A]'> Offers Game-changing Animations </span></>),
        para: (<> We’re the only animation studio in Texas, offering full-service creative video production, from explainers to editing, presentations to corporate event coverage, animated movies to custom logos and visuals, there’s everything you can ask of. We’re here to serve and solidify our place among the best animation companies in Texas. Time for you to engage, and make the leap with your brand! Sign up today.</>),
        bannerRight: "https://player.vimeo.com/progressive_redirect/playback/950014379/rendition/720p/file.mp4?loc=external&log_user=0&signature=e8531345e63363850629261ac3d75f8bd50a9f7f735af57b7fa62aeaa973e202",
        thumbnail: body3,
    };

    //=====Portfolio Fold=====//
    const portfolio = {
        title: "Our Exceptional Portfolio Of Video Animations",
        para: "Why we are a Top Animation studio in Texas, we take pride in creating stunning 2D Animations, 3D Animations, Whiteboard Animations, Motion Graphics Animations, Hybrid Animations, and more videos for our Valued Clientele.",
    };

    //=====Ribon Form Fold=====//
    const paraArrayBanner = [
        "It’s time to take your prospects by the hand, and make them sit, and enjoy the visual treat your brand has to offer with animation company Texas. Create mind-blowing games with 3D animation studio Texas. Whether it’s about building fantastical environments, or launching animations for characters, or smooth transitions to make the experience more immersive, we can do it all. Take gaming to the next level.",

        "Tell stories, and tease brand characters with magical animation. Whether it’s an explainer video, or a brand deck that sells like crazy with animated visuals, make it all happen with team Infinity. What’s even greater, you get to do it at an affordable price with 2D animation studios Texas.",
    ];

    const bannerContact = {
        title: (<>Best Animation Studio In Texas <br /> For Impactful Brand Videos</>),
        para: { paraArrayBanner },
    };

    //=====Looking Fold=====//
    const paraArray = [
        `Infinity Animations creates videos that bring your brand’s vision to life through research, strategy, copywriting, and custom visuals.`,
        `Our personalized and collaborative approach ensures that your video is truly one of a kind.
        As an end-to-end service solution, we’ll guide you through every step – from our streamlined discovery process, through key points in production, to final delivery.
        `,
        `As a leading animation studio, we pride ourselves on delivering high-quality, innovative animations that exceed our clients' expectations, making us the go-to choice for businesses seeking top-notch animation companies.`,
    ];

    const looking = {
        main: (<> Why <span className='text-[#FF2D4A]'>Choose </span> <br /> Infinity Animations  </>),
        title: (<> Our Mission is to help our clients uncover the essence of their brand story to drive sales, influence decisions and promote understanding.  </>),
        para: { paraArray },
        isCTA: true,
        isBtns: true,
        flodImg: LookingFlodImg
    };

    //=====Concept Fold=====//
    const concept = {
        title: (<> Design Process at Infinity Animations </>),
        para: (<>  At Infinity Animations, we follow a comprehensive and detailed process to ensure the highest quality of work. Here’s how we bring your ideas to life as one of the leading animation studios in Texas. </>),
        text1: "We begin by brainstorming and refining your ideas into a solid concept, ensuring a strong narrative foundation. Our team of experts works closely with you to understand your vision and objectives. This stage sets the groundwork for the entire project, distinguishing us as a premier animation studio in Texas.",
        text2: "Next, we create storyboards that visually map out your video, displaying the sequence of animation events. This step is crucial for planning and visualizing the project before moving into production. Our meticulous storyboarding process ensures that every detail is considered, showcasing why we are a top choice among Texas animation studios.",
        text3: "Using the storyboard as our guide, our animators bring your story to life with engaging visuals. Whether it’s 2D Animation, 3D Animation, or Motion Graphics, our creative team employs the latest techniques and tools to produce stunning animations. Our expertise in various animation styles makes us one of the best animation companies in Texas.",
        text4: "Lastly, we perfect and polish the animation through editing and deliver you the best result on time. Our commitment to quality and punctuality has earned us a reputation as one of the most reliable animation studios in Texas and Brooklyn. We ensure that your project not only meets but exceeds your expectations.",
        btnBg: "bg-prime",
        BannerImg: BannerImg,
    };

    //=====Want Fold=====//
    const want = {
        title: "Want to Talk ?",
        wantDesc: "Have questions? We have answers, Call Now!",
        bgPrime: true,
    }

    //=====Testimonial Fold=====//
    const testimonialNew = {
        title: (<> The Ultimate Collection of Our <br /> Incredible Customer Experience </>),
        para: (<> Achieved 1000+ Impactful Results That Speak our Credibility</>),
    };

    return (
        <>
            <div className='bg-black'>
                <Hero content={hero} />
                {
                    isMobile ? (
                        showMobileComponents && (
                            <>
                                <BannerContact content={bannerContact} />
                                <Services content={services} />
                                <Description content={Desc1} />
                                <Portfolio content={portfolio} />
                                <Description content={Desc2} />
                                <Description content={Desc3} />
                                <Want content={want} />
                                <Concept content={concept} />
                                <TestimonialNew content={testimonialNew} />
                                <Looking content={looking} />
                                <Contact />
                            </>
                        )
                    ) : (
                        showDesktopComponents && (
                            <>
                                <BannerContact content={bannerContact} />
                                <Services content={services} />
                                <Description content={Desc1} />
                                <Portfolio content={portfolio} />
                                <Description content={Desc2} />
                                <Description content={Desc3} />
                                <Want content={want} />
                                <Concept content={concept} />
                                <TestimonialNew content={testimonialNew} />
                                <Looking content={looking} />
                                <Contact />
                            </>
                        )
                    )
                }
            </div>
        </>
    )
}

export default LocationPage
