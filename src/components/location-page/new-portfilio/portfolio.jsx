"use client"
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Import Css
import styles from "./PortFolio.module.css"
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
// icons
import PlayIcon from "media/icons/play.png"
//==== Thumbnil Images
import Thumnail1 from "media/location-page/thumbnils/2d-animation/1.png";
import Thumnail2 from "media/location-page/thumbnils/2d-animation/2.png";
import Thumnail3 from "media/location-page/thumbnils/2d-animation/3.png";
import Thumnail4 from "media/location-page/thumbnils/2d-animation/4.png";
//
import Thumnail7 from "media/location-page/thumbnils/3d-animation/1.png";
import Thumnail8 from "media/location-page/thumbnils/3d-animation/2.png";
import Thumnail9 from "media/location-page/thumbnils/3d-animation/3.png";
import Thumnail10 from "media/location-page/thumbnils/3d-animation/4.png";
//
import Thumnail13 from "media/location-page/thumbnils/whiteboard/1.png";
import Thumnail14 from "media/location-page/thumbnils/whiteboard/2.png";
import Thumnail15 from "media/location-page/thumbnils/whiteboard/3.png";
import Thumnail16 from "media/location-page/thumbnils/whiteboard/4.png";
//
import Thumnail19 from "media/location-page/thumbnils/motion-graphics/1.png";
import Thumnail20 from "media/location-page/thumbnils/motion-graphics/2.png";
import Thumnail21 from "media/location-page/thumbnils/motion-graphics/3.png";
import Thumnail22 from "media/location-page/thumbnils/motion-graphics/4.png";
//
import Thumnail25 from "media/location-page/thumbnils/hybrid/1.png";
import Thumnail26 from "media/location-page/thumbnils/hybrid/2.png";
import Thumnail27 from "media/location-page/thumbnils/hybrid/3.png";
import Thumnail28 from "media/location-page/thumbnils/hybrid/4.png";
//==== Mobile Thumbnil Images
import MblThumnail1 from "media/thumbnails/2d-animation/1.png";
import MblThumnail2 from "media/thumbnails/2d-animation/2.png";
import MblThumnail3 from "media/thumbnails/2d-animation/3.png";
import MblThumnail4 from "media/thumbnails/2d-animation/4.png";
//
import MblThumnail7 from "media/thumbnails/3d-animation/1.png";
import MblThumnail8 from "media/thumbnails/3d-animation/2.png";
import MblThumnail9 from "media/thumbnails/3d-animation/3.png";
import MblThumnail10 from "media/thumbnails/3d-animation/4.png";
//
import MblThumnail13 from "media/thumbnails/whiteboard/1.png";
import MblThumnail14 from "media/thumbnails/whiteboard/2.png";
import MblThumnail15 from "media/thumbnails/whiteboard/3.png";
import MblThumnail16 from "media/thumbnails/whiteboard/4.png";
//
import MblThumnail19 from "media/thumbnails/motion-graphics/1.png";
import MblThumnail20 from "media/thumbnails/motion-graphics/2.png";
import MblThumnail21 from "media/thumbnails/motion-graphics/3.png";
import MblThumnail22 from "media/thumbnails/motion-graphics/4.png";
//
import MblThumnail25 from "media/thumbnails/hybrid/1.png";
import MblThumnail26 from "media/thumbnails/hybrid/2.png";
import MblThumnail27 from "media/thumbnails/hybrid/3.png";
import MblThumnail28 from "media/thumbnails/hybrid/4.png";

const tabs = ["2D Animations", "3D Animation", "Whiteboard", "Explainer Videos", "Typographic"];


const videoData = [
    [
        { href: "https://player.vimeo.com/progressive_redirect/playback/907828567/rendition/1080p/file.mp4?loc=external&signature=2cb0c1bd0ce7278cfcc88931f949d2a4df4a28555c8e3a5dd73de49eeb9934e9", image: MblThumnail1 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/907828734/rendition/1080p/file.mp4?loc=external&signature=c6da013ddb686dfc7be1b15b94eda413bc5fa963be1fd91775347155025326ee", image: MblThumnail2 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/907828816/rendition/1080p/file.mp4?loc=external&signature=0c96783fc0283d20b714fec19c63f4565bf6618cfe19a581a25783cb5f6005e1", image: MblThumnail3 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/907829018/rendition/1080p/file.mp4?loc=external&signature=19f1bda07f4caacaccc0fdcf5567fb848096a95289bb8bc5310b0bb801c74380", image: MblThumnail4 }
    ],
    [
        { href: "https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e", image: MblThumnail7 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12", image: MblThumnail8 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/907825999/rendition/1080p/file.mp4?loc=external&signature=a043a1cc2b10aa769f8e7b926feccfe1b1f67af69dc5676d5cd8ae0f116850e5", image: MblThumnail9 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969", image: MblThumnail10 }
    ],
    [
        { href: "https://player.vimeo.com/progressive_redirect/playback/906229275/rendition/1080p/file.mp4?loc=external&signature=6cce77a47f5927d9a30e5a8c79efd00b539f963952705e6d3ee7565e9c1ccd7e", image: MblThumnail13 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/906228502/rendition/1080p/file.mp4?loc=external&signature=9bb2e9d30cb5ac4a19db0fe2e2f9d9c249e7bd369a56e789a22b1760c8934256", image: MblThumnail14 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/906229355/rendition/1080p/file.mp4?loc=external&signature=cbc8679851a9657f782a5977b337843cdbd26c923a700441363b1dc4b1aeeb14", image: MblThumnail15 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/907665845/rendition/1080p/file.mp4?loc=external&signature=2650974cdc4c9f42c2ac20e3e66899d70a45f8c1230011eafc13907cf917d5f3", image: MblThumnail16 }
    ],
    [
        { href: "https://player.vimeo.com/progressive_redirect/playback/907667394/rendition/1080p/file.mp4?loc=external&signature=34f7fe39024c0b9ce15188e07fb6d4a90238c7b9cfcddb2b7688d8541b55c1a4", image: MblThumnail19 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/907667503/rendition/1080p/file.mp4?loc=external&signature=79bff3a91abee33d8e6071d0e4c642d6a6061992b1077cb006f5ca32ab5b1c51", image: MblThumnail20 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/907667817/rendition/1080p/file.mp4?loc=external&signature=62f4e51f50389dad04d8d6658c50e99198503d3ca6d458ef27bac708f6bb7feb", image: MblThumnail21 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/911724985/rendition/1080p/file.mp4?loc=external&signature=df10cc62ec59a62f54069b460626dcb1c6bdfa84519f840c75a06dba68ed5ba6", image: MblThumnail22 }
    ],
    [
        { href: "https://player.vimeo.com/progressive_redirect/playback/911720231/rendition/1080p/file.mp4?loc=external&signature=d9b02a0f53aa8784b0e3ed063720d29b1970b3e3b399f1d34316482874fdaa86", image: MblThumnail25 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/911726090/rendition/1080p/file.mp4?loc=external&signature=9e89bcc5fc0c0794397cf4af48ddf2c08a91de61f1595d2508f39fb7db153987", image: MblThumnail26 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/911729442/rendition/1080p/file.mp4?loc=external&signature=e16f08c552d3f87499d9225879c3819c9a220295567b993dfe101e7a1e2089c3", image: MblThumnail27 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/911724561/rendition/1080p/file.mp4?loc=external&signature=efccabbedd550a6e10912f062b329c284dd086ef4babfb053151a34ea77e6466", image: MblThumnail28 },
    ]
]

const Portfolio = ({ content }) => {
    const { title, para } = content;
    //========= tabs =========
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    //========= fancy box =========
    function Fancybox(props) {
        const containerRef = useRef(null);

        useEffect(() => {
            const container = containerRef.current;

            const delegate = props.delegate || "[datafancybox]";
            const options = props.options || {};

            NativeFancybox.bind(container, delegate, options);

            return () => {
                NativeFancybox.unbind(container);
                NativeFancybox.close();
            };
        });

        return <div ref={containerRef}>{props.children}</div>;
    }
    // ====== Responsive Slider 
    const testiSlider = {
        dots: true,
        arrows: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <>
            <section className={`w-full flex items-center justify-start pb-12 pt-6 md:py-12 lg:py-16`}>
                <div className="container">
                    <div className='flex items-center justify-around'>
                        <div className='w-full text-center'>
                            <h2 className={`text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans leading-tight mb-3 capitalize`}>{title}</h2>
                            <p className="w-full md:w-[70%] lg:w-[60%] mx-auto text-[15px] lg:text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5 md:mb-0 lg:mb-3">{para}</p>
                        </div>
                    </div>
                    <div className={`"mt-8 md:mt-12`}>
                        <ul className="flex flex-wrap justify-center text-sm font-medium text-center gap-3 md:gap-5 lg:w-11/12 mx-auto">
                            {tabs.map((tab, index) => (
                                <li key={index}
                                    className={`inline-block w-[155px] md:w-[180px] xl:w-[220px] py-3 text-[16px] lg:text-[20px] font-normal font-sans text-white border rounded-[27px] cursor-pointer hover:border-primary-100 ${activeTab === index ? 'border-primary-100' : 'border-[#646464]'}`}
                                    onClick={() => handleTabClick(index)}>
                                    {tab}
                                </li>
                            ))}
                        </ul>
                        <div className={`${styles.desktop} tabs-content pt-6`}>
                            {activeTab === 0 && (
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>
                                    <div className='grid grid-cols-12 justify-center items-center gap-10'>
                                        <div className='col-span-3 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907828567/rendition/1080p/file.mp4?loc=external&signature=2cb0c1bd0ce7278cfcc88931f949d2a4df4a28555c8e3a5dd73de49eeb9934e9" datafancybox="gallery">
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center  overlay-div-testi '>
                                                        <Image src={Thumnail1} alt="Infinity Animations" width={468} height={263} className='h-full w-full' />
                                                        <div className=" bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente text-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0 mx-auto' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-4 w-[100%] h-[100%] flex flex-col justify-between'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907828734/rendition/1080p/file.mp4?loc=external&signature=c6da013ddb686dfc7be1b15b94eda413bc5fa963be1fd91775347155025326ee" datafancybox="gallery">
                                                <div className={`w-full h-[323px] overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center  overlay-div-testi '>
                                                        <Image src={Thumnail2} alt="Infinity Animations" width={468} height={263} className='h-full w-full' />
                                                        <div className=" bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0 mx-auto' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907828816/rendition/1080p/file.mp4?loc=external&signature=0c96783fc0283d20b714fec19c63f4565bf6618cfe19a581a25783cb5f6005e1" datafancybox="gallery">
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center  overlay-div-testi '>
                                                        <Image src={Thumnail3} alt="Infinity Animations" width={468} height={263} className='h-full w-full' />
                                                        <div className="bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0 mx-auto' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-5 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907829018/rendition/1080p/file.mp4?loc=external&signature=19f1bda07f4caacaccc0fdcf5567fb848096a95289bb8bc5310b0bb801c74380" datafancybox="gallery">
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center  overlay-div-testi '>
                                                        <Image src={Thumnail4} alt="Infinity Animations" width={468} height={263} className='h-full w-full' />
                                                        <div className=" bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0 mx-auto' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Fancybox>
                            )}
                            {activeTab === 1 && (
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>
                                    <div className='grid grid-cols-12 justify-center items-center gap-10'>
                                        <div className='col-span-3 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" datafancybox="gallery">
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <Image src={Thumnail7} alt="Infinity Animations" width={468} height={263} className='h-full w-full' />
                                                        <div className="bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0 mx-auto' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-4 w-[100%] h-[100%] flex flex-col justify-between'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12" datafancybox="gallery">
                                                <div className={`w-full h-[323px] overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <Image src={Thumnail8} alt="Infinity Animations" width={468} height={263} className='h-full w-full' />
                                                        <div className="bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0 mx-auto' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907825999/rendition/1080p/file.mp4?loc=external&signature=a043a1cc2b10aa769f8e7b926feccfe1b1f67af69dc5676d5cd8ae0f116850e5" datafancybox="gallery">
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <Image src={Thumnail9} alt="Infinity Animations" width={468} height={263} className='h-full w-full' />
                                                        <div className="bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0 mx-auto' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-5 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969" datafancybox="gallery">
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <Image src={Thumnail10} alt="Infinity Animations" width={468} height={263} className='h-full w-full' />
                                                        <div className="bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0 mx-auto' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Fancybox>
                            )}
                            {activeTab === 2 && (
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>
                                    <div className='grid grid-cols-12 justify-center items-center gap-10'>
                                        <div className='col-span-3 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/906229275/rendition/1080p/file.mp4?loc=external&signature=6cce77a47f5927d9a30e5a8c79efd00b539f963952705e6d3ee7565e9c1ccd7e" datafancybox="gallery">
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <Image src={Thumnail13} alt="Infinity Animations" width={468} height={263} className='h-full w-full' />
                                                        <div className="bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0 mx-auto' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-4 w-[100%] h-[100%] flex flex-col justify-between'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/906228502/rendition/1080p/file.mp4?loc=external&signature=9bb2e9d30cb5ac4a19db0fe2e2f9d9c249e7bd369a56e789a22b1760c8934256" datafancybox="gallery">
                                                <div className={`w-full h-[323px] overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <Image src={Thumnail14} alt="Infinity Animations" width={468} height={263} className='h-full w-full' />
                                                        <div className="bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0 mx-auto' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/906229355/rendition/1080p/file.mp4?loc=external&signature=cbc8679851a9657f782a5977b337843cdbd26c923a700441363b1dc4b1aeeb14" datafancybox="gallery">
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <Image src={Thumnail15} alt="Infinity Animations" width={468} height={263} className='h-full w-full' />
                                                        <div className="bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0 mx-auto' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-5 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907665845/rendition/1080p/file.mp4?loc=external&signature=2650974cdc4c9f42c2ac20e3e66899d70a45f8c1230011eafc13907cf917d5f3" datafancybox="gallery">
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <Image src={Thumnail16} alt="Infinity Animations" width={468} height={263} className='h-full w-full' />
                                                        <div className="bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0 mx-auto' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Fancybox>
                            )}
                            {activeTab === 3 && (
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>
                                    <div className='grid grid-cols-12 justify-center items-center gap-10'>
                                        <div className='col-span-3 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907667394/rendition/1080p/file.mp4?loc=external&signature=34f7fe39024c0b9ce15188e07fb6d4a90238c7b9cfcddb2b7688d8541b55c1a4" datafancybox="gallery">
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <Image src={Thumnail19} alt="Infinity Animations" width={468} height={263} className='h-full w-full' />
                                                        <div className="bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0 mx-auto' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-4 w-[100%] h-[100%] flex flex-col justify-between'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907667503/rendition/1080p/file.mp4?loc=external&signature=79bff3a91abee33d8e6071d0e4c642d6a6061992b1077cb006f5ca32ab5b1c51" datafancybox="gallery">
                                                <div className={`w-full h-[323px] overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <Image src={Thumnail20} alt="Infinity Animations" width={468} height={263} className='h-full w-full' />
                                                        <div className="bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0 mx-auto' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907667817/rendition/1080p/file.mp4?loc=external&signature=62f4e51f50389dad04d8d6658c50e99198503d3ca6d458ef27bac708f6bb7feb" datafancybox="gallery">
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <Image src={Thumnail21} alt="Infinity Animations" width={468} height={263} className='h-full w-full' />
                                                        <div className="bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0 mx-auto' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-5 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/911724985/rendition/1080p/file.mp4?loc=external&signature=df10cc62ec59a62f54069b460626dcb1c6bdfa84519f840c75a06dba68ed5ba6" datafancybox="gallery">
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <Image src={Thumnail22} alt="Infinity Animations" width={468} height={263} className='h-full w-full' />
                                                        <div className="bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0 mx-auto' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Fancybox>
                            )}
                            {activeTab === 4 && (
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>
                                    <div className='grid grid-cols-12 justify-center items-center gap-10'>
                                        <div className='col-span-3 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/911720231/rendition/1080p/file.mp4?loc=external&signature=d9b02a0f53aa8784b0e3ed063720d29b1970b3e3b399f1d34316482874fdaa86" datafancybox="gallery">
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <Image src={Thumnail25} alt="Infinity Animations" width={468} height={263} className='h-full w-full' />
                                                        <div className="bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0 mx-auto' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-4 w-[100%] h-[100%] flex flex-col justify-between'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/911726090/rendition/1080p/file.mp4?loc=external&signature=9e89bcc5fc0c0794397cf4af48ddf2c08a91de61f1595d2508f39fb7db153987" datafancybox="gallery">
                                                <div className={`w-full h-[323px] overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <Image src={Thumnail26} alt="Infinity Animations" width={468} height={263} className='h-full w-full' />
                                                        <div className="bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0 mx-auto' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/911729442/rendition/1080p/file.mp4?loc=external&signature=e16f08c552d3f87499d9225879c3819c9a220295567b993dfe101e7a1e2089c3" datafancybox="gallery">
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <Image src={Thumnail27} alt="Infinity Animations" width={468} height={263} className='h-full w-full' />
                                                        <div className="bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0 mx-auto' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-5 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/911724561/rendition/1080p/file.mp4?loc=external&signature=efccabbedd550a6e10912f062b329c284dd086ef4babfb053151a34ea77e6466" datafancybox="gallery">
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <Image src={Thumnail28} alt="Infinity Animations" width={468} height={263} className='h-full w-full' />
                                                        <div className="bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0 mx-auto' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Fancybox>
                            )}
                        </div>
                        {/* =============== */}
                        <div className={`${styles.mobile} mt-6 md:mt-10`}>
                            {videoData.map((tabData, index) => (
                                activeTab === index && (
                                    <Fancybox options={{ Carousel: { infinite: false } }} key={index}>
                                        <Slider {...testiSlider} className="testiSlider portfolio">
                                            {tabData.map((video, videoIndex) => (
                                                <div key={videoIndex} className='w-full h-full'>
                                                    <Link href={video.href} datafancybox="gallery">
                                                        <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                            <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                                <Image src={video.image} alt="Infinity Animations" width={468} height={263} className='h-full w-full' />
                                                                <div className="bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                                                                    <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0 mx-auto' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                        </Slider>
                                    </Fancybox>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio