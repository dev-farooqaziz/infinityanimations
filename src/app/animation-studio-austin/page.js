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
import BannerImg from "media/location-page/austin.png"
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
        title: (<> Top <span className='text-primary-100'>Animation <br /> Studio </span> in Austin </>),
        para: (<> IInfinity Animations - Animation Studio In Austin, is one of the leading animation studios in Austin Texas, we understand customer demands of the Austin market. We thrive to empower brands to reach their full potential and cater a larger audience. <span className="block mt-2">Elevate your business so that captivates your audience with our Austin animation studio.</span> </>),
        btnBg: "bg-prime",
        BannerImg: BannerImg,
    };

    //=====Ribon Form Fold=====//
    const paraArrayBanner = [
        "Infinity Animations is a 360 animation company in Austin that stands out among other animation studios in Austin Texas. Even if you are a new startup business or a renowned brand that is looking for solutions of growth, you are in the right place.",

        "A 3D animation Studio Austin company that challenges its competitors with a team of creative animators and designers who are experts in creating the most dynamic and visually appealing graphics and 3D characters. We take pride in ourselves as we are the largest among 2D animation studios Austin, our animators and experts strive on delivering realistic visual effects that ensure audience attention and interest.",
    ];

    const bannerContact = {
        title: (<>Best Animation Company In Austin <br /> With Diverse Services</>),
        para: { paraArrayBanner },
    };

    //=====Services Fold=====//
    const services = {
        subtitle: "Partner with Austin's Leading Animation Experts",
        title: "Our Services",
    };

    //=====Description Fold=====//
    const Desc1 = {
        title: (<>Animation Studio In Austin Offering <br /> <span className='text-[#FF2D4A]'> Advance Animation and Visual Effects</span></>),
        para: "When you choose our animation services Austin, you are partnering with an Austin animation studio that will help you in crafting an unforgettable presence in your customer’s minds. Unlike all animation studios in Austin, we focus on pushing the limits of visual experience to create masterpieces that are universally attractive and loved by all audiences; Share your vision and leave the rest to us.",
        bannerRight: "https://player.vimeo.com/progressive_redirect/playback/950045792/rendition/720p/file.mp4?loc=external&log_user=0&signature=90534b4f57b71c13daff5f699a603dc446447c8fb24cf92bcb089adaedf0ad88",
        thumbnail: body1,
        downArrow: 'start'
    };
    const Desc2 = {
        title: (<>Austin Animation Studio <br /> <span className='text-[#FF2D4A]'> with Professional Animation Production</span></>),
        para: (<> When you are looking to create animations that effectively communicate your brand’s value you must choose wisely, as there is a wide variety of Austin based animation studios who might not meet your desires. <span className="block mt-2">We stand out among other animation production companies in Austin. We prioritize partnerships and our collaboration ensures to meet your expectations as we stay in the forefront of innovation.</span></>),
        bannerLeft: "https://player.vimeo.com/progressive_redirect/playback/950015817/rendition/720p/file.mp4?loc=external&log_user=0&signature=c60df41646f601d81fa4c987188c8e103f416d393f8ec1f9270e7114e4f0b3ed",
        thumbnail: body2,
        downArrow: 'end'
    };
    const Desc3 = {
        title: (<>Austin Premier Animation Studio
            <br /><span className='text-[#FF2D4A]'> With Custom Animation Services</span></>),
        para: (<> Infinity Animations is recognized among Austin top animation studios, we are equipped with highly experienced and value oriented professionals who can craft both 2D animation Austin, and 3D animation Austin. <span className="block mt-2">At Infinity Animations, we create eye-catching video motion graphics and captivating gaming animations that offer versatility with artistic innovations which transcends industry benchmarks.</span></>),
        bannerRight: "https://player.vimeo.com/progressive_redirect/playback/950014379/rendition/720p/file.mp4?loc=external&log_user=0&signature=e8531345e63363850629261ac3d75f8bd50a9f7f735af57b7fa62aeaa973e202",
        thumbnail: body3,
    };

    //=====Portfolio Fold=====//
    const portfolio = {
        title: "Our Exceptional Portfolio Of Video Animations",
        para: "Why we are a Top Animation studio in Austin, we take pride in creating stunning 2D Animations, 3D Animations, Whiteboard Animations, Motion Graphics Animations, Hybrid Animations, and more videos for our Valued Clientele.",
    };

    //=====Want Fold=====//
    const want = {
        title: "Want to Talk ?",
        wantDesc: "Have questions? We have answers, Call Now!",
        bgPrime: true,
    }

    //=====Concept Fold=====//
    const concept = {
        title: (<> Design Process at Infinity Animations </>),
        para: (<>  At Infinity Animations, we follow a comprehensive and detailed process to ensure the highest quality of work. Here’s how we bring your ideas to life as one of the leading animation studios in Austin. </>),
        text1: "We begin by brainstorming and refining your ideas into a solid concept, ensuring a strong narrative foundation. Our team of experts works closely with you to understand your vision and objectives. This stage sets the groundwork for the entire project, distinguishing us as a premier animation studio in Austin.",
        text2: "Next, we create storyboards that visually map out your video, displaying the sequence of animation events. This step is crucial for planning and visualizing the project before moving into production. Our meticulous storyboarding process ensures that every detail is considered, showcasing why we are a top choice among Austin animation studios.",
        text3: "Using the storyboard as our guide, our animators bring your story to life with engaging visuals. Whether it’s 2D Animation, 3D Animation, or Motion Graphics, our creative team employs the latest techniques and tools to produce stunning animations. Our expertise in various animation styles makes us one of the best animation companies in Austin.",
        text4: "Lastly, we perfect and polish the animation through editing and deliver you the best result on time. Our commitment to quality and punctuality has earned us a reputation as one of the most reliable animation studios in Austin and Brooklyn. We ensure that your project not only meets but exceeds your expectations.",
        btnBg: "bg-prime",
        BannerImg: BannerImg,
    };

    //=====Testimonial Fold=====//
    const testimonialNew = {
        title: (<> The Ultimate Collection of Our <br /> Incredible Customer Experience </>),
        para: (<> Achieved 1000+ Impactful Results That Speak our Credibility</>),
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
