"use client"
import React, { useState, useEffect } from "react";
// Import Page Components
const HeaderLP = React.lazy(() => import('./components/Header/Header'));
const Banner = React.lazy(() => import('./components/banner/Banner'));
const Partners = React.lazy(() => import('./components/partners/partners'));
const Portfolio = React.lazy(() => import('./components/portfolio/Portfolio'));
const BrandsOne = React.lazy(() => import('./components/brands1/brands1'));
const ExplainerType = React.lazy(() => import('./components/type-explainer/ExplainerType'));
const Packages = React.lazy(() => import('./components/packages/Packages'));
const BadgeSlider = React.lazy(() => import('./components/badgeSlider/BadgeSlider'));
const Work = React.lazy(() => import('./components/work/work'));
const BrandsTwo = React.lazy(() => import('./components/brands2/brands2'));
const Animations = React.lazy(() => import('./components/animations/Animations'));
const Testimonial = React.lazy(() => import('./components/testimonial/Testimonial'));
const Faqs = React.lazy(() => import('./components/faqs/Faqs'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));
const SidebarCTA = React.lazy(() => import('./components/sidebarcat/SidebarCta'));

// ==== Thumnail Image
import Thumnail1 from "media/thumbnails/2d-animation/1.png"
import Thumnail2 from "media/thumbnails/2d-animation/2.png"
import Thumnail3 from "media/thumbnails/2d-animation/3.png"
import Thumnail4 from "media/thumbnails/2d-animation/4.png"
import Thumnail5 from "media/thumbnails/2d-animation/5.png"
import Thumnail6 from "media/thumbnails/2d-animation/6.png"
import Thumnail7 from "media/thumbnails/3d-animation/1.png"
import Thumnail8 from "media/thumbnails/3d-animation/2.png"
import Thumnail9 from "media/thumbnails/3d-animation/3.png"
import Thumnail10 from "media/thumbnails/3d-animation/4.png"
import Thumnail11 from "media/thumbnails/3d-animation/5.png"
import Thumnail12 from "media/thumbnails/3d-animation/6.png"
import Thumnail13 from "media/thumbnails/whiteboard/1.png"
import Thumnail14 from "media/thumbnails/whiteboard/2.png"
import Thumnail15 from "media/thumbnails/whiteboard/3.png"
import Thumnail16 from "media/thumbnails/whiteboard/4.png"
import Thumnail17 from "media/thumbnails/whiteboard/5.png"
import Thumnail18 from "media/thumbnails/whiteboard/6.png"
import Thumnail19 from "media/thumbnails/motion-graphics/1.png"
import Thumnail20 from "media/thumbnails/motion-graphics/2.png"
import Thumnail21 from "media/thumbnails/motion-graphics/3.png"
import Thumnail22 from "media/thumbnails/motion-graphics/4.png"
import Thumnail23 from "media/thumbnails/motion-graphics/5.png"
import Thumnail24 from "media/thumbnails/motion-graphics/6.png"
import Thumnail25 from "media/thumbnails/hybrid/1.png"
import Thumnail26 from "media/thumbnails/hybrid/2.png"
import Thumnail27 from "media/thumbnails/hybrid/3.png"
import Thumnail28 from "media/thumbnails/hybrid/4.png"
import Thumnail29 from "media/thumbnails/hybrid/5.png"
import Thumnail30 from "media/thumbnails/hybrid/6.png"
// ==== work Image
import WorkImg1 from 'media/animating-studio/workImg1.png';
import WorkImg2 from 'media/animating-studio/workImg2.png';
import WorkImg3 from 'media/animating-studio/workImg3.png';
import WorkImg4 from 'media/animating-studio/workImg4.png';
import WorkImg5 from 'media/animating-studio/workImg5.png';
import WorkImg6 from 'media/animating-studio/workImg6.png';
import WorkImg7 from 'media/animating-studio/workImg7.png';



const Studio = () => {
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
    const brandsOne = {
        title: (<>
            Explain Your Complex Product with <br className='hidden xl:block' />   <span className="text-[#FFCC00]"> Amazing Animated Videos</span>
        </>),
        desc: (<>Spread profound message and scale up your business with our <br className='hidden xl:block' />  animated video services today!</>),
        isBtn: false
    }
    const brandsTwo = {
        title: (<>
            Animated Video Content That Boosts Your Brand,
            Maximizes Prospect   <span className="text-[#FFCC00]"> Engagement and Drives ROI </span>
        </>),
        desc: (<>Spread profound message and scale up your business <br className='hidden lg:block' /> with our animated video services today!</>),
        isBtn: false
    }

    const brandsFour = {
        title: (<>
            Transform Your Ideas into <br className='hidden xl:block' />  <span className="text-[#FFCC00]"> Engaging Animations!</span>
        </>),
        desc: (<>At Infinity Animations, we craft tailor-made solutions that align with your goals and resonate with your audience. </>),
        isBtn: false
    }

    //=====Portfilio Fold=====// 
    const videoItems = [
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/911720231/rendition/1080p/file.mp4?loc=external&signature=d9b02a0f53aa8784b0e3ed063720d29b1970b3e3b399f1d34316482874fdaa86",
            thumbnail: Thumnail25,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/911726090/rendition/1080p/file.mp4?loc=external&signature=9e89bcc5fc0c0794397cf4af48ddf2c08a91de61f1595d2508f39fb7db153987",
            thumbnail: Thumnail26,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/911729442/rendition/1080p/file.mp4?loc=external&signature=e16f08c552d3f87499d9225879c3819c9a220295567b993dfe101e7a1e2089c3",
            thumbnail: Thumnail27,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/911724561/rendition/1080p/file.mp4?loc=external&signature=efccabbedd550a6e10912f062b329c284dd086ef4babfb053151a34ea77e6466",
            thumbnail: Thumnail28,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/911728642/rendition/1080p/file.mp4?loc=external&signature=44469d3d3ef50562def357cdf05ef68b8d9eb1f6c874c98d4b7a6772c4b7f173",
            thumbnail: Thumnail29,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/911724677/rendition/1080p/file.mp4?loc=external&signature=32ea21fdd1dded95912051ee5fefdc0deefb2e26b2598ae835cf57397b1a87e6",
            thumbnail: Thumnail30,
        },

        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e",
            thumbnail: Thumnail7,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12",
            thumbnail: Thumnail8,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907825999/rendition/1080p/file.mp4?loc=external&signature=a043a1cc2b10aa769f8e7b926feccfe1b1f67af69dc5676d5cd8ae0f116850e5",
            thumbnail: Thumnail9,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969",
            thumbnail: Thumnail10,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907826670/rendition/1080p/file.mp4?loc=external&signature=f74dcc4a39df10abe19a05be96cc65177c5db653bc09f47a37e1d33ebbd4cc67",
            thumbnail: Thumnail11,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907827073/rendition/1080p/file.mp4?loc=external&signature=ea8148af25f94ab0324027eb511fcac7a08d64da2fde9e2f4a27689b175a885c",
            thumbnail: Thumnail12,
        },

        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907828567/rendition/1080p/file.mp4?loc=external&signature=2cb0c1bd0ce7278cfcc88931f949d2a4df4a28555c8e3a5dd73de49eeb9934e9",
            thumbnail: Thumnail1,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907828734/rendition/1080p/file.mp4?loc=external&signature=c6da013ddb686dfc7be1b15b94eda413bc5fa963be1fd91775347155025326ee",
            thumbnail: Thumnail2,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907828816/rendition/1080p/file.mp4?loc=external&signature=0c96783fc0283d20b714fec19c63f4565bf6618cfe19a581a25783cb5f6005e1",
            thumbnail: Thumnail3,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907829018/rendition/1080p/file.mp4?loc=external&signature=19f1bda07f4caacaccc0fdcf5567fb848096a95289bb8bc5310b0bb801c74380",
            thumbnail: Thumnail4,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907829180/rendition/1080p/file.mp4?loc=external&signature=e2c22685eafa8501d4efe1007026a663eee3d5cac85dc8007e6c9afcfc4a9e59",
            thumbnail: Thumnail5,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907829397/rendition/1080p/file.mp4?loc=external&signature=90d3e6d4b05f56ed61129b5031be09b724259666750b41882f54bf99b3e2314e",
            thumbnail: Thumnail6,
        },

        {
            video: "https://player.vimeo.com/progressive_redirect/playback/906229275/rendition/1080p/file.mp4?loc=external&signature=6cce77a47f5927d9a30e5a8c79efd00b539f963952705e6d3ee7565e9c1ccd7e",
            thumbnail: Thumnail13,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/906228502/rendition/1080p/file.mp4?loc=external&signature=9bb2e9d30cb5ac4a19db0fe2e2f9d9c249e7bd369a56e789a22b1760c8934256",
            thumbnail: Thumnail14,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/906229355/rendition/1080p/file.mp4?loc=external&signature=cbc8679851a9657f782a5977b337843cdbd26c923a700441363b1dc4b1aeeb14",
            thumbnail: Thumnail15,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907665845/rendition/1080p/file.mp4?loc=external&signature=2650974cdc4c9f42c2ac20e3e66899d70a45f8c1230011eafc13907cf917d5f3",
            thumbnail: Thumnail16,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907665670/rendition/1080p/file.mp4?loc=external&signature=5728c74e8fb3073310fcf805a1a60b32b571c441ae437e4424e8fd9c504f6f02",
            thumbnail: Thumnail17,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907665545/rendition/1080p/file.mp4?loc=external&signature=f81498bfcf59e3783476c220552b5729fb7771036ea9666550fd770ac3f2dbbc",
            thumbnail: Thumnail18,
        },

        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907667394/rendition/1080p/file.mp4?loc=external&signature=34f7fe39024c0b9ce15188e07fb6d4a90238c7b9cfcddb2b7688d8541b55c1a4",
            thumbnail: Thumnail19,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907667503/rendition/1080p/file.mp4?loc=external&signature=79bff3a91abee33d8e6071d0e4c642d6a6061992b1077cb006f5ca32ab5b1c51",
            thumbnail: Thumnail20,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907667817/rendition/1080p/file.mp4?loc=external&signature=62f4e51f50389dad04d8d6658c50e99198503d3ca6d458ef27bac708f6bb7feb",
            thumbnail: Thumnail21,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907667958/rendition/1080p/file.mp4?loc=external&signature=a3502c5e8ab318001eebdb072c17871dd6d561ebb9f922a08ef03dc6ffd35fe4",
            thumbnail: Thumnail22,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907667998/rendition/1080p/file.mp4?loc=external&signature=9547d186557ae1c6f51a43880464ed876c4bab48fca0ef0950f36b5c77079872",
            thumbnail: Thumnail23,
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907668204/rendition/1080p/file.mp4?loc=external&signature=a51872dd125be907894841af68d8262c46f584ab3dbcfad7c0f068e9556b98c8",
            thumbnail: Thumnail24,
        }
    ];
    const portfolio = {
        title: (<>Our <span className="text-[#A70A0E]">Animated Videos </span> that Deliver Results</>),
        para: (<> Unlock your brand’s potential with our video animation services! Engage your audience with dynamic animations <br className="hidden lg:block" /> that convert viewers into loyal customers. Let’s make your idea come alive! </>),
        videoItems: videoItems,
        bg: "bg-[#FFFFFF]"
    };

    //===== FAQS =====//

    const accordionData = [
        {
            question: 'How long should an explainer video be?',
            answer: 'Typically, explainer videos are between 60 to 90 seconds long. This length is ideal for capturing attention and delivering key messages effectively.',
        },
        {
            question: 'What information do I need to provide?',
            answer: "You should provide details about your product or service, target audience, key messages, and branding guidelines. The more information you provide, the better the video will align with your vision",
        },
        {
            question: 'Can I use my voiceover, or do you provide one?',
            answer: "You can use your voiceover, or we can provide professional voiceover services. Just let us know your preference.",
        },
        {
            question: 'What is the turnaround time for an explainer video?',
            answer: "The typical turnaround time is 4 to 6 weeks, depending on the complexity of the video and feedback response times.",
        },
        {
            question: 'Can I use the video for multiple platforms?',
            answer: "Yes, the video can be optimized for various platforms such as websites, social media, and presentations. Just specify where you plan to use it.",
        },
        {
            question: 'What are the benefits of using an explainer video?',
            answer: "Explainer videos simplify complex information, increase viewer engagement, boost conversion rates, and enhance brand recognition. They provide a compelling and memorable way to communicate your message to your audience.",
        },
    ];
    const faqs = {
        accordionData: accordionData,
    }

    //======== work
    const workListContent = {
        workList: [
            { listTitle: "Discussion", listImage: WorkImg1 },
            { listTitle: "Concept & Script", listImage: WorkImg2 },
            { listTitle: "Voiceover", listImage: WorkImg3 },
            { listTitle: "Illustration", listImage: WorkImg4 },
            { listTitle: "Animation", listImage: WorkImg5, },
            { listTitle: "Music", listImage: WorkImg6, },
            { listTitle: "Video Publish", listImage: WorkImg7, },
        ]
    }

    return (
        <>
            <HeaderLP />
            <Banner />
            {
                isMobile ? (
                    showMobileComponents && (
                        <>
                            <Partners />
                            <Portfolio content={portfolio} />
                            <ExplainerType />
                            <BrandsOne content={brandsOne} />
                            <BadgeSlider />
                            <Work content={workListContent} />
                            <Animations />
                            <BrandsTwo content={brandsTwo} />
                            <Testimonial />
                            <Faqs content={faqs} />
                            <SidebarCTA />
                            <Footer />
                        </>
                    )
                ) : (
                    showDesktopComponents && (
                        <>
                            <Partners />
                            <Portfolio content={portfolio} />
                            <ExplainerType />
                            <BrandsOne content={brandsOne} />
                            <BadgeSlider />
                            <Work content={workListContent} />
                            <Animations />
                            <BrandsTwo content={brandsTwo} />
                            <Testimonial />
                            <Faqs content={faqs} />
                            <Footer />
                        </>
                    )
                )
            }
        </>
    )
}

export default Studio
