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
import BannerImg from "media/location-page/chicago.png"
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
        title: (<> Top <span className='text-primary-100'>Animation <br /> Studio </span> in Chicago </>),
        para: (<> Infinity Animations - Animation Studio In Chicago, Bring your vision to life with Infinity Animations, a Chicago animation studio, where every project is dealt with utmost commitment and resilience; we help you drive audience engagement and attention. <span className="block mt-2">As a well-known agency among the top animation studios in Chicago, we have a passion for excellence in crafting your desired animation.</span> </>),
        btnBg: "bg-prime",
        BannerImg: BannerImg,
    };

    //=====Services Fold=====//
    const services = {
        subtitle: "Partner with Chicago's Leading Animation Experts",
        title: "Our Services",
    };

    //=====Description Fold=====//
    const Desc1 = {
        title: (<>Chicago Animation Studio <br /> <span className='text-[#FF2D4A]'> With Expert Animation and Visual Effects</span></>),
        para: "Infinity Animations offers all types of animation services to its clients from exceptional 2D video animation Chicago to advanced 3D video animation Chicago. At our Chicago animation studio, your animation is crafted using a process where we start with brainstorming of ideas, then we make sure the designing of characters are perfectly aligned  and finally our professionals produce realistic animations.",
        bannerRight: "https://player.vimeo.com/progressive_redirect/playback/950045792/rendition/720p/file.mp4?loc=external&log_user=0&signature=90534b4f57b71c13daff5f699a603dc446447c8fb24cf92bcb089adaedf0ad88",
        thumbnail: body1,
        downArrow: 'start'
    };
    const Desc2 = {
        title: (<>Your Perfect Partner <br /> <span className='text-[#FF2D4A]'> Animation Company Chicago</span></>),
        para: "A company becomes great with years of experience and expertise, our Chicago based animation studio has worked with a decent number of global brands and helped them drive growth by generating high quality animations. We take pride in being recognized among the top animation production companies Chicago. Over the years our experienced creative artists have crafted entertaining and emotionally engaging animations for our clients.",
        bannerLeft: "https://player.vimeo.com/progressive_redirect/playback/950015817/rendition/720p/file.mp4?loc=external&log_user=0&signature=c60df41646f601d81fa4c987188c8e103f416d393f8ec1f9270e7114e4f0b3ed",
        thumbnail: body2,
        downArrow: 'end'
    };
    const Desc3 = {
        title: (<>Redefine Your Brand With
            <br /><span className='text-[#FF2D4A]'> The Best Animation Studio in Chicago </span></>),
        para: (<> There are several animation companies in Chicago, but Infinity Animations stands out due to its client centric approach and delivering of quality results. <span className="block mt-2">From scriptwriting and storyboarding, to designing 3D environments and objects and finally animating and aligning each element. Each step of the animation process is dealt with dedication by a team of professionals at our animation studio in Chicago.</span></>),
        bannerRight: "https://player.vimeo.com/progressive_redirect/playback/950014379/rendition/720p/file.mp4?loc=external&log_user=0&signature=e8531345e63363850629261ac3d75f8bd50a9f7f735af57b7fa62aeaa973e202",
        thumbnail: body3,
    };

    //=====Portfolio Fold=====//
    const portfolio = {
        title: "Our Exceptional Portfolio Of Video Animations",
        para: "Why we are a Top Animation studio in Chicago, we take pride in creating stunning 2D Animations, 3D Animations, Whiteboard Animations, Motion Graphics Animations, Hybrid Animations, and more videos for our Valued Clientele.",
    };

    //=====Ribon Form Fold=====//
    const paraArrayBanner = [
        "Our animation team ensures complete responsibility of each and every small aspect in crafting your animation masterpiece, whether you need animation video for marketing campaigns on social media or engaging corporate animation video, whether you require 2d animation studios Chicago or 3d animation studio Chicago, our professionals specialize in crafting all sorts of animation.",

        "We’re an animation company in Chicago that focuses on producing content which is highly realistic and detailed, because our primary goal is to create an element of connectivity of your brand with the audience. As you know that content is king, and your brand deserves the right animation content to move your audience.",
    ];

    const bannerContact = {
        title: (<>Best Animation Company in Chicago <br /> With Diverse Services</>),
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
        para: (<>  At Infinity Animations, we follow a comprehensive and detailed process to ensure the highest quality of work. Here’s how we bring your ideas to life as one of the leading animation studios in Chicago. </>),
        text1: "We begin by brainstorming and refining your ideas into a solid concept, ensuring a strong narrative foundation. Our team of experts works closely with you to understand your vision and objectives. This stage sets the groundwork for the entire project, distinguishing us as a premier animation studio in Chicago.",
        text2: "Next, we create storyboards that visually map out your video, displaying the sequence of animation events. This step is crucial for planning and visualizing the project before moving into production. Our meticulous storyboarding process ensures that every detail is considered, showcasing why we are a top choice among Chicago animation studios.",
        text3: "Using the storyboard as our guide, our animators bring your story to life with engaging visuals. Whether it’s 2D Animation, 3D Animation, or Motion Graphics, our creative team employs the latest techniques and tools to produce stunning animations. Our expertise in various animation styles makes us one of the best animation companies in Chicago.",
        text4: "Lastly, we perfect and polish the animation through editing and deliver you the best result on time. Our commitment to quality and punctuality has earned us a reputation as one of the most reliable animation studios in Chicago and Brooklyn. We ensure that your project not only meets but exceeds your expectations.",
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
