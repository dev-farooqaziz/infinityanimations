"use client"
import React, { useState, useEffect } from "react";
// Import Page Components
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import Looking from '@/components/looking/Looking';
import Company from '@/components/company/Company';
import Portfolio from '@/components/portfolio/Portfolio';
import Tech from "@/components/tech-type/Tech";
import Production from "@/components/productionprocess/Production";
import Brand from "@/components/branding/Brand";
import Want from "@/components/want/Want";
import TestimonialNew from '@/components/testimonialNew/Testimonial';
import Faqs from "@/components/faqs/Faqs";
import Contact from '@/components/contact/Contact';
// Import Images
import LookingFlodImg from "media/images/boost-img.png";
//==== Boost Images
import BoostFlodImg from "media/corporate-video/company-Image.png";
//===== Tech Type Images
import TechImage1 from "media/tech-type/techtype4.png"
import TechImage2 from "media/tech-type/techtype5.png"
import TechImage3 from "media/tech-type/techtype6.png"
//==== Testimonial Images
import icon2 from "media/icons/stars.png";
import Grace from "media/thumbnails/grace.png";
import Alex from "media/thumbnails/alex.png";
import Olivia from "media/thumbnails/olivia.png";
import David from "media/thumbnails/david.jpg";
import Emma from "media/thumbnails/emma.jpg";
import Michael from "media/thumbnails/michael.jpg";
import Sarah from "media/thumbnails/sarah.png";
// ==== Thumnail Image
import Thumnail1 from "media/thumbnails/2d-animation/1.png";
import Thumnail2 from "media/thumbnails/2d-animation/2.png";
import Thumnail3 from "media/thumbnails/2d-animation/3.png";
import Thumnail4 from "media/thumbnails/2d-animation/4.png";
import Thumnail5 from "media/thumbnails/2d-animation/5.png";
import Thumnail6 from "media/thumbnails/2d-animation/6.png";
import Thumnail7 from "media/thumbnails/3d-animation/1.png";
import Thumnail8 from "media/thumbnails/3d-animation/2.png";
import Thumnail9 from "media/thumbnails/3d-animation/3.png";
import Thumnail10 from "media/thumbnails/3d-animation/4.png";
import Thumnail11 from "media/thumbnails/3d-animation/5.png";
import Thumnail12 from "media/thumbnails/3d-animation/6.png";
import Thumnail13 from "media/thumbnails/whiteboard/1.png";
import Thumnail14 from "media/thumbnails/whiteboard/2.png";
import Thumnail15 from "media/thumbnails/whiteboard/3.png";
import Thumnail16 from "media/thumbnails/whiteboard/4.png";
import Thumnail17 from "media/thumbnails/whiteboard/5.png";
import Thumnail18 from "media/thumbnails/whiteboard/6.png";
import Thumnail19 from "media/thumbnails/motion-graphics/1.png";
import Thumnail20 from "media/thumbnails/motion-graphics/2.png";
import Thumnail21 from "media/thumbnails/motion-graphics/3.png";
import Thumnail22 from "media/thumbnails/motion-graphics/4.png";
import Thumnail23 from "media/thumbnails/motion-graphics/5.png";
import Thumnail24 from "media/thumbnails/motion-graphics/6.png";
import Thumnail25 from "media/thumbnails/hybrid/1.png";
import Thumnail26 from "media/thumbnails/hybrid/2.png";
import Thumnail27 from "media/thumbnails/hybrid/3.png";
import Thumnail28 from "media/thumbnails/hybrid/4.png";
import Thumnail29 from "media/thumbnails/hybrid/5.png";
import Thumnail30 from "media/thumbnails/hybrid/6.png";
import checkIcon from 'media/icons/check-img.png'
//==== Brands Images ===== //
import Slide1 from "media/corporate-video/brand1.png"
import Slide2 from "media/corporate-video/brand2.png"
import Slide3 from "media/corporate-video/brand3.png"
import Slide4 from "media/corporate-video/brand4.png"
import Slide5 from "media/corporate-video/brand5.png"


export default function Page() {
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
        title: (<> <span className='text-primary-100'> Corporate</span> Video Production Services Company </>),
        para: "Build trust, influence customers, and train employees with our corporate video production services.",
        btnBg: "bg-prime",
    };
    //=====Looking Fold=====//
    const paraArray = [
        "BuzzFlick is an award-winning, USA-based corporate video production agency with hundreds of projects completed successfully. We have worked with an internationally renowned clientele of many Fortune 500, 100 and even fortune 50 companies.",

        "The team at BuzzFlick devote themselves wholeheartedly to create visuals that communicate your audience your business objectives and goals. Our meticulous process ensures every video is a masterpiece, from understanding your vision, writing the perfect script to engaging visuals and fluid animation. We strive only for perfection, satisfaction and an incredible solution.",

        "With our professionally created corporate videos, we let your customers, clients, and employees educate about your company, business, services, products engagingly. Our corporate videos are more about talking about your company, helping Human Resource department hire more & train your employees, increase brand recognition, and deliver your vision evidently to your prospects. So, if you are looking for professional corporate video production services, we are for sure your safe haven.",
    ];
    const looking = {
        title: (<> Why Choose BuzzFlick’s Corporate Video Production Services? </>),
        para: { paraArray },
        isCTA: false,
        isBtns: false,
        css: "rotateY",
        flodImg: LookingFlodImg
    };
    //=====Company=====//
    const componyArray = [
        "If you want to increase your reach to a wider audience to attract new visitors to your website, use corporate videos and acquire best of the best corporate video production services. Even they are great for social media content, and apps. In fact, corporate videos should be used for your audience's entertainment and to establish emotional connectivity with your target audience. Here are some important benefits of opting for corporate videos in your marketing strategy:.",
    ];
    const listArray = [
        " They significantly decrease your website’s bounce rate.",
        " A corporate video can convey your company’s vision with the correct analytics.They are a big contributor to your content strategy.",
        "You can use corporate videos to achieve specific objectives like brand enhancement, marketing,",
        "training, etc.",
        "If you opt for a well-crafted, well executed corporate video, it for sure has an inspiring brand story that engages your audience and persuade them to take the action or actions you desire.",
    ]
    const companies = {
        title: (<> Why Use Corporate Video Production Services To Boost Your Brand?</>),
        para: { componyArray },
        subtitle: "",
        subPara: "",
        flodImg: BoostFlodImg,
        list: { listArray },
        btn: false,
        lists: true,
        checkImg: checkIcon,
    };
    //=====Portfilio Fold=====//
    const tabInfo = [
        { label: "All", index: 0 },
        { label: "Explainer Videos", index: 1 },
        { label: "3D Animation", index: 2 },
        { label: "Whiteboard Animation", index: 3 },
        { label: "Demo Video", index: 4 },
        { label: "Motion Graphics", index: 5 },
        { label: "Video Editing", index: 6 },
        { label: "Digital Illustration", index: 7 },
        { label: "3D Modeling", index: 8 },
        { label: "Music Video", index: 9 },
    ];
    const tabContents = [
        [
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
            }
        ],
        [
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
            }
        ],
        [
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
            }
        ],
        [
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
                video: "https://player.vimeo.com/progressive_redirect/playback/911724985/rendition/1080p/file.mp4?loc=external&signature=df10cc62ec59a62f54069b460626dcb1c6bdfa84519f840c75a06dba68ed5ba6",
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
        ],
        [
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
            }
        ],
    ];
    const portfolio = {
        title: (<> Corporate Video Production Company That Buzz </>),
        para: (<> We are corporate video production company with a diverse portfolio. From corporate and business explainer videos to corporate demo videos we have done it all. Go through our splendid work here: </>),
        tabContents: tabContents,
        tabsInfo: true,
        tabInfo: tabInfo
    };
    //======Tech Type Fold======//
    const techCard = [
        {
            CardOne: TechImage1,
            CardTitle: "Internal Video",
            CardPara: <>Corporate videos can be used effectively for internal communication and marketing drives. Our internal corporate video production at BuzzFlick specializes in creating such videos that can be used to provide things like important policy messages, courses related to new tech implementation, and more. <br />

                As a corporate video production company, we make sure your internal videos are engaging and sensitive to your company culture.
            </>
        },
        {
            CardOne: TechImage2,
            CardTitle: "Brand Corporate Videos",
            CardPara: <>Brand corporate videos are really compelling. They are simple and not so marketing-oriented so they engage audiences effectively. YouTube shorts are best when it comes to corporate branding.
                <br />
                While creating corporate brand videos, we sketch the simple storyboard that is well-aligned with your ideas and concepts to make perfect story for your brand. You can enhance your website, social media profiles, and even your work portfolio through these engaging videos.
            </>
        },
        {
            CardOne: TechImage3,
            CardTitle: "Trade Show Video",
            CardPara: <>Does your brand maintain a consistent presence at industry trade shows and conferences? Then our corporate video production services with our trade show videos are the perfect fit for you! <br />
                Without a trade show video, your presence at any industry trade show or conference won't be as impactful, so it is best to get one started right away. <br />
                These videos can help attract people, which can help you to generate more connections and bring better leads that can
            </>
        },
    ]
    const techType = {
        title: <>What Types of Corporate Videos <br /> We Produce?</>,
        desc: <>BuzzFlick usually works around 3 types of corporate videos that you can use to communicate your business or brand. <br /> Our corporate video production services include:</>,
        card: techCard,
        isBtn: false,
    }
    //===== Production Fold ====== //
    const otherCards = [
        {
            cardTitle: <>Identifying Your Goals <br /> & Vision</>,
            cardDesc: 'We’ll first set your goals and discuss your vision. At this stage, we decide the most evocative performance metrics along with the incredible content to be produced. Regardless of your budget and time constraints, our corporate video production services will come up with the most possible plan to help you achieve optimized results through your corporate video.',
            cardNum: "01",
        },
        {
            cardTitle: <>Video Project Budget<br /> Estimation</>,
            cardDesc: 'From the very beginning, our team will always be there to discuss your project. It also involves budget estimation for your video project. We work around your budget to deliver the best possible solution for your video production at a minimal cost. Our expert team always guides you whether you have a small or big budget and allocate your resources efficiently.',
            cardNum: "02",
        },
        {
            cardTitle: <>Conceptualization &<br /> Script Writing</>,
            cardDesc: 'A great video relies on a creative concept and compelling script, and what’s better than BuzzFlick to get the job done? Our creative team and writers know really well how to write captivating scripts that glue the audience to the video and attain business goals.',
            cardNum: "03",
        },
        {
            cardTitle: <>The Pre-Production<br /> Phase</>,
            cardDesc: 'The pre-production phase takes off with the development of storyboard. It provides you with a central layout to conceptualize, visualize, direct, and implement the scenes.',
            cardNum: "04",
        },
        {
            cardTitle: <>The Production Phase</>,
            cardDesc: 'After storyboarding, production defines the video style—commonly Live Action or Animation. Live Action entails necessary equipment, a chosen location, and actors delivering the message. Animation, in 2D or 3D, requires creating graphic assets based on the storyboard and using an animation tool for video realization.',
            cardNum: "05",
        },
        {
            cardTitle: <>Post-Production<br /> Stage</>,
            cardDesc: 'As a corporate video production company, we have all the resources for post production process. This is the last stage and is all about smoothing, editing, and polishing off the rough edges of your corporate video in order to make it more appealing.',
            cardNum: "06",
        },
    ]

    const production = {
        title: "What Is Our Corporate Video Production Process?",
        desc: "Our corporate video production process is simple and seamless. Whether you are a startup or a group of companies corporate, BuzzFlick will convey your business story through incredible corporate videos effectively like no other corporate video production company does. Here is our professionally optimized video production process:",
        firstTwoCards: false,
        otherCards: otherCards,
    }
    //===== Branding Fold ====== //
    const branding = [
        {
            slide1: Slide1,
            title: "Testimonial Video Production",
            desc: "Client or customer testimonial videos are used often to build a brand's authenticity and win consumer’s trust. Our corporate testimonial videos allow your customers to talk behind the scenes, about the services."
        },
        {
            slide1: Slide2,
            title: "Animated Corporate Video Production",
            desc: "It is a myth that only kids, or some growing teenagers watch animated videos. Gone are the days now as animated corporate videos are great tools for brands and businesses in this digital era. Our animated corporate video."
        },
        {
            slide1: Slide3,
            title: "Corporate Live Action Video Production",
            desc: "Live-action videos are best when it comes to launching tangible products. Live-action corporate videos can be demonstrative or a fictional story established around the product to explain it. They are crisp and are not fluffy at all."
        },
        {
            slide1: Slide4,
            title: "Corporate Video Production For Internal Communication",
            desc: "Large corporates opt for corporate video production services for internal communications fashioned with the intent to communicate or train employees or contractual resources of your business. "
        },
        {
            slide1: Slide5,
            title: "Corporate Branding Videos",
            desc: "Corporate branding videos are the next big thing. Businesses and brands use these videos to promote the work environment of their company, showcase the culture of their company, and encourage valuable resources to "
        },
        {
            slide1: Slide1,
            title: "Testimonial Video Production",
            desc: "Client or customer testimonial videos are used often to build a brand's authenticity and win consumer’s trust. Our corporate testimonial videos allow your customers to talk behind the scenes, about the services."
        }
    ]
    //=====Want Fold=====//
    const want = {
        title: "Want to Talk ?",
        wantDesc: "Have questions? We have answers, Call Now!"
    }
    //=====Testimonial Fold=====//
    const testiContentNew2 = [
        {
            stars: icon2,
            name: 'Anthony Viggiano',
            para: `I needed an animated video of our product and found Infinity Animation online. Chris Grayson had great reviews, so I hired them. They did a terrific job. Phil Johnson, the efficient team leader, promptly made all requested changes. I highly recommend this reasonably priced, excellent company. Good luck!`,
            video: "https://player.vimeo.com/progressive_redirect/playback/1002970096/rendition/1080p/file.mp4?loc=external&signature=fc8f804a99088eb6b9a5013b0b479804010f4ae592a1cb98f78c74548ef4207a",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/1002970096/rendition/1080p/file.mp4?loc=external&signature=fc8f804a99088eb6b9a5013b0b479804010f4ae592a1cb98f78c74548ef4207a",
        },
        {
            stars: icon2,
            name: 'Pat',
            para: `Hi, my name is Pat from Phoenix, Arizona. We recently completed a project with Nathan at Infinity Animation, and we couldn't be happier with the final product. Nathan was great to work with, provided clear directions, and we are really pleased with the outcome of our project. We give them five stars and hope you'll check them out.`,
            video: "https://player.vimeo.com/progressive_redirect/playback/1004689419/rendition/1080p/file.mp4?loc=external&signature=aa0ecc4bb6f6ef34a7b5db3ae61b2417bf8b52c8b0529bad33d44a8c7ed1dfc1",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/1004689419/rendition/1080p/file.mp4?loc=external&signature=aa0ecc4bb6f6ef34a7b5db3ae61b2417bf8b52c8b0529bad33d44a8c7ed1dfc1",
        },
        {
            stars: icon2,
            name: 'Sylvia David',
            para: `I wanted to give a big shout-out to Infinity Animations, a top video animation company, for their outstanding work on our promotional video. Their team was easy to work with and delivered the project quickly and efficiently.`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045737/rendition/1080p/file.mp4?loc=external&log_user=0&signature=85c3341b0d68f65b218956e9081d46bef4408f2e74e83148f4d3a83e34b79daf",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/950045737/rendition/1080p/file.mp4?loc=external&log_user=0&signature=85c3341b0d68f65b218956e9081d46bef4408f2e74e83148f4d3a83e34b79daf",
        },
        {
            stars: icon2,
            name: 'Emily Margolis',
            para: `We approached Infinity Animations, a leading video animation agency, for a short explainer video. Their team provided exceptional video animation services and delivered a high-quality 2D animation right on time. Highly recommended!`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045464/rendition/720p/file.mp4?loc=external&log_user=0&signature=06fddc742a45b3eff983a4e5a207a5ff2d1ae71a328b1c14056b1bcc152a9800",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/950045464/rendition/720p/file.mp4?loc=external&log_user=0&signature=06fddc742a45b3eff983a4e5a207a5ff2d1ae71a328b1c14056b1bcc152a9800",
        },
        {
            stars: icon2,
            name: 'Helen Brooks',
            para: `Huge thanks to Infinity Animations for their incredible video production service. They made the entire process seamless and produced a visually stunning animation that perfectly matched our brand.`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045568/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6ed32074656bcaa25e810119398883ade800b3fd2c5eed96b1eff541e57f5bca",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/950045568/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6ed32074656bcaa25e810119398883ade800b3fd2c5eed96b1eff541e57f5bca",
        },
        {
            stars: icon2,
            name: 'Edd Lockwood',
            para: `Kudos to Infinity Animations, a fantastic video marketing agency, for creating an engaging and visually appealing animated video. Their team’s creativity and professionalism made our project a huge success.`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045397/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5eb15a8721a49d21ead978545b43276c59608470ad55c3677e62e1fe88d8edfc",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/950045397/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5eb15a8721a49d21ead978545b43276c59608470ad55c3677e62e1fe88d8edfc",
        },
        {
            stars: icon2,
            name: 'Matt Evans',
            para: `We needed a compelling video for our new product launch, and Infinity Animations, as a video animation agency, exceeded our expectations. Their video production service was exceptional, delivering a high-quality animation in a timely manner.`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045706/rendition/1080p/file.mp4?loc=external&log_user=0&signature=2b0144629d6bc9649580afa809527d09e6528f656a1c76a1b59408367879c24e",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/950045706/rendition/1080p/file.mp4?loc=external&log_user=0&signature=2b0144629d6bc9649580afa809527d09e6528f656a1c76a1b59408367879c24e",
        },
        {
            stars: icon2,
            name: 'Mathew',
            para: `A big thank you to Infinity Animations, a top-notch video animation company, for delivering an outstanding explainer video. The team was responsive, creative, and quick to complete the project.`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045615/rendition/720p/file.mp4?loc=external&log_user=0&signature=8256b0e38317771b8db2d8959dc6d54ee41dd6c7a847875437dde63ea45333f2",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/950045615/rendition/720p/file.mp4?loc=external&log_user=0&signature=8256b0e38317771b8db2d8959dc6d54ee41dd6c7a847875437dde63ea45333f2",
        },
        {
            stars: icon2,
            name: 'Gary Wilson',
            para: `I highly recommend Infinity Animations, a premier animation agency, for their excellent video animation services. They created a high-quality animation for our campaign and were a pleasure to work with throughout the process.`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045528/rendition/720p/file.mp4?loc=external&log_user=0&signature=88472fd594409a630523ae139ad0cb0c10556198290ca3f6e4e79c61eec6e8ff",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/950045528/rendition/720p/file.mp4?loc=external&log_user=0&signature=88472fd594409a630523ae139ad0cb0c10556198290ca3f6e4e79c61eec6e8ff",
        },
        {
            stars: icon2,
            name: 'Olivia Bennett',
            para: "The architectural visualization provided by this team surpassed our expectations. The animations brought our designs to life with incredible detail and realism. A fantastic experience from start to finish!",
            thumbnail: Olivia,
        },
        {
            stars: icon2,
            name: 'Grace Turner',
            para: 'Choosing this animation team was a game-changer for our marketing campaigns. Their creativity and attention to detail brought our brand stories to life in ways we never imagined. Exceptional work!',
            thumbnail: Grace,
        },
        {
            stars: icon2,
            name: 'Sarah L.',
            company: "Product Manager",
            para: "Infinity Animations transformed our vision into a stunning reality with their exceptional 3D animation skills. We needed a lifelike and immersive animation for our product launch, and their team delivered beyond our expectations. Their expertise and attention to detail were evident in every frame. The result was a dynamic and engaging animation that captivated our audience. Working with such a talented and dedicated team reaffirmed their position as a top animation studio in New York. I wouldn't hesitate to work with them again.",
            thumbnail: Sarah,
        },
        {
            stars: icon2,
            name: 'Emma R.',
            company: "Social Media Manager",
            para: "Our experience with Infinity Animations for our motion graphics project was nothing short of amazing. We needed high-quality promotional videos for our social media campaigns, and their team delivered spectacular results. The animations were visually striking and perfectly aligned with our brand's messaging. Their innovative techniques and creativity made our content stand out, significantly boosting our online engagement. Choosing Infinity Animations, a leading NYC animation studio, was one of the best decisions for our marketing efforts. Their professionalism and dedication are truly commendable.",
            thumbnail: Emma,
        },
        {
            stars: icon2,
            name: 'David H.',
            company: "Educational Coordinator",
            para: "Our experience with Infinity Animations for our motion graphics project was nothing short of amazing. We needed high-quality promotional videos for our social media campaigns, and their team delivered spectacular results. The animations were visually striking and perfectly aligned with our brand's messaging. Their innovative techniques and creativity made our content stand out, significantly boosting our online engagement. Choosing Infinity Animations, a leading NYC animation studio, was one of the best decisions for our marketing efforts. Their professionalism and dedication are truly commendable.",
            thumbnail: David,
        },
        {
            stars: icon2,
            name: 'Michael J.',
            company: "Marketing Director",
            para: "Infinity Animations transformed our vision into a stunning reality with their exceptional 3D animation skills. We needed a lifelike and immersive animation for our product launch, and their team delivered beyond our expectations. Their expertise and attention to detail were evident in every frame. The result was a dynamic and engaging animation that captivated our audience. Working with such a talented and dedicated team reaffirmed their position as a top animation studio in New York. I wouldn't hesitate to work with them again.",
            thumbnail: Michael,
        },
        {
            stars: icon2,
            name: 'Alex Mitchell',
            para: 'Working with this animation team elevated the educational content on my platform. The animations were not only visually engaging but also simplified complex concepts for my audience. Highly recommend for anyone in the education space.',
            thumbnail: Alex,
        },
    ]

    const testimonialNew = {
        title: (<> Our Animation Videos Made Their Product <br /> Look Easy & Exciting </>),
        para: (<> If you can’t trust us, try trusting them.</>),
        testiContentNew2: testiContentNew2
    };
    //===== FAQS =====//
    const accordionData = [
        {
            question: 'What Is The Cost Of Tech Video Production?',
            answer: "For our customers, we create meaningful and entertaining videos at Infinity Animations  . The entire video content is produced and tailored to our client's requirements. Our team excels at creating high-quality videos, whether you need a corporate video to boost your brand awareness or a product demo to promote your services. Our process entails a series of meticulous animation and development steps, from brainstorming various concepts to the final delivery.",
        },
        {
            question: 'What Is The Infinity Animations Video Delivery Timeframe?',
            answer: "Step into a realm of immersive storytelling with our cutting-edge 3D animations. Elevate your visual narratives, whether for product showcases, virtual tours, or cinematic experiences.",
        },
        {
            question: 'What Kind Of Videos Infinity Animations videos With Tech Video Production Services?',
            answer: "Simplify the complex and engage your audience with our whiteboard animations. Each stroke unfolds a nuanced narrative, turning ideas into visually compelling stories.",
        },
        {
            question: 'Do I get Full Copyrights to the videos?',
            answer: "Yes, You retain full copyrights to the videos you create. When we produce content, you automatically hold the copyright to that work, granting you exclusive rights to reproduce, distribute, perform, and display the work publicly.",
        }
    ];

    const faqs = {
        title: "Frequently Asked Questions",
        accordionData: accordionData,
    }

    return (
        <>
            <Hero content={hero} />
            {
                isMobile ? (
                    showMobileComponents && (
                        <>
                            <Review />
                            <Company content={companies} />
                            <Portfolio content={portfolio} />
                            <Production content={production} />
                            <Looking content={looking} />
                            <Tech content={techType} />
                            <Brand content={branding} />
                            <Want content={want} />
                            <TestimonialNew content={testimonialNew} />
                            <Faqs content={faqs} />
                            <Contact />
                        </>
                    )
                ) : (
                    showDesktopComponents && (
                        <>
                            <Review />
                            <Company content={companies} />
                            <Portfolio content={portfolio} />
                            <Production content={production} />
                            <Looking content={looking} />
                            <Tech content={techType} />
                            <Brand content={branding} />
                            <Want content={want} />
                            <TestimonialNew content={testimonialNew} />
                            <Faqs content={faqs} />
                            <Contact />
                        </>
                    )
                )
            }
        </>
    )
}