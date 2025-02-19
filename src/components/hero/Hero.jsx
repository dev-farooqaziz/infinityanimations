"use client"
import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Css
import styles from "./Hero.module.css"
// Import Components
import CTA from "@/components/cta/CTA";
// Import Images
import icon1 from "media/icons/banner-logo-1.png";
import icon2 from "media/icons/banner-logo-2.png";
import icon3 from "media/icons/banner-logo-3.png";
import icon4 from "media/icons/banner-logo-4.png";
import icon5 from "media/icons/banner-logo-5.png";
import icon6 from "media/icons/banner-logo-6.png";
import icon7 from "media/icons/banner-logo-7.png";
// Import Slider
import { AutoScroll } from '@/components/sliders';

const Hero = ({ content }) => {

    const { title, para, video, dynamic } = content;
    const swiperRef = useRef(null);
    const [videoReady, setVideoReady] = useState(false);
    const [playVideo, setPlayVideo] = useState(false);
    //======= Banner Video
    useEffect(() => {
        const handleWindowLoad = () => {
            setTimeout(() => {
                setVideoReady(true);
            }, 3000);
        };
        window.addEventListener('load', handleWindowLoad);
        return () => {
            window.removeEventListener('load', handleWindowLoad);
        };
    }, []);

    useEffect(() => {
        if (videoReady) {
            setPlayVideo(true);
        }
    }, [videoReady]);

    useEffect(() => {
        if (playVideo) {
            const video = document.getElementById('background-video');
            if (video) {
                video.play();
            }
        }
    }, [playVideo]);

    // Set Bg-Image
    const router = usePathname();
    let backgroundVideo;
    let margin;
    switch (router) {
        case "/":
            // if (playVideo) {
            //     backgroundVideo = 'https://player.vimeo.com/progressive_redirect/playback/950015917/rendition/720p/file.mp4?loc=external&log_user=0&signature=e0789e199bc0374e4971e5fc0b408a23ea883170eeb1fa2500dbaf2d0117d095';
            // } else {
            //     backgroundVideo = 'bg-cover bg-center lg:bg-[url("../../public/home/poster.png")]';
            // }
            backgroundVideo = 'bg-cover bg-center lg:bg-[url("../../public/home/banner-img.gif")]';
            margin = 'mt-0'
            break;
        case '/why-us':
            backgroundVideo = 'bg-[length:100%_100%] bg-bottom lg:bg-[url("../../public/why-us/banner-bg.png")]'
            break;
        case '/video-animation-portfolio':
            backgroundVideo = 'bg-cover bg-center lg:bg-[url("../../public/portfolio/banner-bg.png")]'
            break;
        case '/video-animation-process':
            backgroundVideo = 'bg-cover bg-center lg:bg-[url("../../public/process/banner-bg.gif")]'
            break;
        case '/video-animation-pricing':
            backgroundVideo = 'bg-[length:100%_140%] bg-center lg:bg-[url("../../public/pricing/banner-bg.gif")]'
            break;
        case '/blog':
            backgroundVideo = 'bg-cover bg-center lg:bg-[url("../../public/blogs/blog-bg.png")]'
            break;
        case '/contact-us':
            backgroundVideo = 'bg-cover bg-center lg:bg-[url("../../public/contact/banner-bg.gif")]'
            break;
        case '/custom-logo-animation':
            backgroundVideo = 'bg-cover bg-center lg:bg-[url("../../public/logo-animation/banner-bg.png")]'
            break;
        case '/architectural-visualization':
            backgroundVideo = 'bg-cover bg-center lg:bg-[url("../../public/architectural-services/banner-bg.gif")]'
            break;
        case '/cgi-and-vfx-services':
            backgroundVideo = 'bg-cover bg-center lg:bg-[url("../../public/cgi-and-vfx/banner-bg.png")]'
            break;
        case '/motion-graphics':
            backgroundVideo = 'bg-cover bg-center lg:bg-[url("../../public/motion-graphics/banner-bg.png")]'
            break;
        case '/video-editing':
            backgroundVideo = 'bg-cover bg-center lg:bg-[url("../../public/video-editing/banner-bg.png")]'
            break;
        case '/2d-animation':
            backgroundVideo = 'bg-cover bg-center lg:bg-[url("../../public/2d-animation/banner-bg.png")]'
            break;
        case '/3d-animation':
            backgroundVideo = 'bg-[length:100%_100%] bg-center lg:bg-[url("../../public/3d-animation/banner-bg.gif")]'
            break;
        case '/whiteboard-animation':
            backgroundVideo = 'bg-cover bg-center lg:bg-[url("../../public/whiteboard/banner-bg.png")]'
            break;
        case '/infographics-design':
            backgroundVideo = 'bg-cover bg-center lg:bg-[url("../../public/infographics/banner-bg.png")]'
            break;
        case '/hybrid-&-cel-animations':
            backgroundVideo = 'bg-cover bg-center lg:bg-[url("../../public/hybrid-cel/banner-bg.png")]'
            break;
        case '/tech-videos':
            backgroundVideo = 'bg-cover bg-center lg:bg-[url("../../public/tech-videos/banner-bg.png")]'
            break;
        case '/corporate-video':
            backgroundVideo = 'bg-cover bg-center lg:bg-[url("../../public/corporate-video/banner-bg.png")]'
            break;
        default:
            break;
    }
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <>
            <section className={`w-full h-[100vh] flex items-center justify-start sm:pb-5 bg-none bg-no-repeat relative overflow-hidden z-1 ${backgroundVideo} top-[97px] lg:top-auto`}>
                {video ?
                    <div className="video-div w-full h-[480px] md:h-auto absolute z-[-1] before:content-[''] before:bg-[#000] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[90] before:opacity-[0.7]">
                        <video id="background-video" src={backgroundVideo} autoPlay={false} loop={true} muted={true} className='relative h-full xl:left-0 w-full object-cover'>
                        </video>
                    </div> : null}
                <div className="container">
                    <div className='flex'>
                        <div className='w-full lg:w-[550px] xl:w-[650px]'>
                            {dynamic ?
                                <h1 className={`text-[40px] md:text-[45px] xl:text-[50px] font-semibold font-sans leading-none mb-5 mt-4 lg:mt-32 ${margin}`}>
                                    <div className={styles.sliderWrapper}>
                                        <div className={styles.slider}>
                                            <div className={styles.sliderText1}>
                                                Pitch Efficiently
                                            </div>
                                            <div className={styles.sliderText2}>
                                                Launch Successfully
                                            </div>
                                            <div className={styles.sliderText3}>
                                                Promote Better
                                            </div>
                                            <div className={styles.sliderText4}>
                                                Increase Sales
                                            </div>
                                        </div>
                                    </div>
                                    <span className="d-block">With Our Animated Videos</span>
                                </h1>
                                :
                                <h1 className={`text-[40px] md:text-[50px] xl:text-[60px] font-semibold font-sans leading-none mb-5 mt-4 lg:mt-32 ${margin}`}>
                                    {title}
                                </h1>
                            }
                            <p className="text-[14px] xl:text-[16px] font-normal font-sans leading-normal tracking-wider text-justify mb-5">
                                {para}
                            </p>
                            <div className="flex gap-6">
                                <CTA
                                    text="Get A Call"
                                    icon="/icons/arrow-red.png"
                                    iconCss="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full p-2 ms-2"
                                    bg="bg-prime"
                                    color={`text-white`}
                                    border={`border-2 border-[#f5090b]`}
                                    hover="hover:bg-transparent"
                                />
                                <CTA
                                    text="Live Chat"
                                    icon="/icons/chat.png"
                                    iconCss="w-[40px]"
                                    bg="bg-[#000]"
                                    color={`text-white`}
                                    border={`border-2 border-[#fff]`}
                                    hover="hover:bg-prime" href="javascript:$zopim.livechat.window.show();"
                                />
                            </div>
                            <AutoScroll wrapperClass="mt-10 lg:mt-10 mb-10 lg:mb-0" options={{ loop: true, align: "start" }}>
                                {
                                    [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon1, icon2, icon3, icon4, icon5, icon6, icon7].map((e, i) => (
                                        <div key={i} className="shrink-0 grow-0 basis-1/4 mr-5">
                                            <Image src={e} alt="logo" className='w-[60%]' />
                                        </div>
                                    ))
                                }
                            </AutoScroll>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
