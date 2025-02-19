"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
// swiper start
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// ===== Images Start
import Slide1 from "media/explainer-videos/animate1.png"
import Slide2 from "media/explainer-videos/animate2.png"
import Slide3 from "media/explainer-videos/animate3.png"
import Arrow from "media/explainer-videos/slide-arrow.png"
import VideoIco from "media/explainer-videos/play.png"
import { register } from "swiper/element/bundle";
import usePopup from '@/app/configs/store/Popup';

const Animation = () => {
    const swiperRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
            grabCursor: true,
            centeredSlides: true,
            loop: true,
            slidesPerView: typeof window !== 'undefined' && window.innerWidth >= 1200 ? 2 : 1,
            navigation: true,
            autoHeight: true,
            pagination: { clickable: true, dynamicBullets: true },
            coverflowEffect: {
                rotate: -20,      // Set the rotation angle
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            injectStyles: [
                `
                .swiper-3d .swiper-slide-shadow-left,
                .swiper-3d .swiper-slide-shadow-right {
                background-image: inherit !important;
                }

                .slider {
                position: relative;
                height: 100%;
                }

                .swiper-slide {
                overflow: hidden;
                }

                .swiper-slide img {
                object-fit: cover;
                }

                .arrow.arrow-left {
                left: 0;
                }

                .arrow.arrow-right {
                right: 0;
                }

                .swiper-pagination-bullets.swiper-pagination-horizontal {
                position: absolute !important;
                bottom: -60px !important;
                top: inherit !important;
                left: 50% !important;
                right: 50% !important;
                margin-left: 37px !important;
                width: 8% !important;
                /* background: black !important; */
                transform: translateX(-50%) !important;
                }

                .swiper {
                overflow: visible !important;
                }

                .swiper-pagination-bullet-active {
                background: #f5090b !important;
                width: 30px !important;
                border-radius: 30px !important;
                }

                .swiper-button-prev {
                left: 45% !important;
                right: inherit !important;
                }

                .swiper-button-next {
                left: inherit !important;
                right: 40% !important;
                }

                .swiper-button-prev,
                .swiper-button-next {
                top: inherit !important;
                bottom: -81px !important;
                }

                .swiper-button-prev:after {
                content: url(/explainer-videos/swiper-left-arr.png) !important;
                }

                .swiper-button-next:after {
                content: url(/explainer-videos/swiper-right-arrow.png) !important;
                }

                .swiper-slide{
                border-radius: 45px !important;
                }
              `,
            ],
        };
        // Assign it to swiper element
        Object.assign(swiperRef.current, params);
        // initialize swiper
        swiperRef.current.initialize();
    }, []);

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
    // PopUp Code
    const { popup, togglePopup } = usePopup();
    const popupHandle = () => {
        togglePopup(popup);
    }
    return (
        <>
            <section className='pt-[40px] md:pt-[70px] pb-[30px] lg:pb-[120px] relative'>
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="content">
                                <h2 className='text-[30px] lg:text-[50px] leading-tight font-sans font-bold text-black text-center'>Master the Art of Video Animation</h2>
                                <p className='text-black text-[13px] lg:text-[16px] font-sans text-center'>When it comes to 3D animation services, we are quite well-equipped and well-versed.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider mt-4 sm:mt-7 lg:mt-12 px-4 xl:px-0 h-[200%]">
                    <swiper-container ref={swiperRef} init={false}
                        effect={'coverflow'}
                        className="videoExplainerSlider"
                    >
                        <swiper-slide className='relative pt-4'>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/907828567/rendition/1080p/file.mp4?loc=external&signature=2cb0c1bd0ce7278cfcc88931f949d2a4df4a28555c8e3a5dd73de49eeb9934e9" datafancybox="gallery">
                                        <Image src={Slide1} alt='Slide' className='rounded-[50px] w-full relative top-0 left-0' />
                                        <div className="absolute bottom-[2px] left-0 w-full h-full flex items-start justify-end flex-col bg-black/40 rounded-[50px] px-[40px] pb-[40px]">
                                            <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Video Animation Services</h3>
                                            <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>We can add that vividness, vibrancy, and a strong taste of zestfulness to those mundane corporate videos, making your brand truly stand out.</p>

                                            <button onClick={popupHandle} className='text-white font-[600] text-[13px] md:text-[16px] poppins pt-4 flex items-center gap-x-3'>Make an Animation
                                                <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                            </button>
                                            <Image src={VideoIco} alt='video-icon' className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] md:block hidden' />
                                        </div>
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                        <swiper-slide className='relative pt-4'>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/907828734/rendition/1080p/file.mp4?loc=external&signature=c6da013ddb686dfc7be1b15b94eda413bc5fa963be1fd91775347155025326ee" datafancybox="gallery">
                                        <Image src={Slide2} alt='Slide' className='rounded-[50px] w-full relative top-0 left-0' />
                                        <div className="absolute bottom-[2px] left-0 w-full h-full flex items-start justify-end flex-col bg-black/40 rounded-[50px] px-[40px] pb-[40px]">
                                            <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Explainer Videos Services</h3>
                                            <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>We like to explain things, but it’s not just that…we want your audience to enjoy the seeing and listening experience as well with our explainer videos.</p>

                                            <button onClick={popupHandle} className='text-white font-[600] text-[13px] md:text-[16px] poppins pt-4 flex items-center gap-x-3'>Make an Animation
                                                <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                            </button>
                                            <Image src={VideoIco} alt='video-icon' className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] md:block hidden' />
                                        </div>
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                        <swiper-slide className='relative pt-4'>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/907828816/rendition/1080p/file.mp4?loc=external&signature=0c96783fc0283d20b714fec19c63f4565bf6618cfe19a581a25783cb5f6005e1" datafancybox="gallery">
                                        <Image src={Slide3} alt='Slide' className='rounded-[50px] w-full relative top-0 left-0' />
                                        <div className="absolute bottom-[2px] left-0 w-full h-full flex items-start justify-end flex-col bg-black/40 rounded-[50px] px-[40px] pb-[40px]">
                                            <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Whiteboard Animation Services</h3>
                                            <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>A whiteboard is a wonderful blank space to start or unleash creativity. Well, truth be told, we don’t view a whiteboard as a whiteboard, we view it as a canvas that can be splendidly colored.</p>
                                            <button onClick={popupHandle} className='text-white font-[600] text-[13px] md:text-[16px] poppins pt-4 flex items-center gap-x-3'>Make an Animation
                                                <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                            </button>
                                            <Image src={VideoIco} alt='video-icon' className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] md:block hidden' />
                                        </div>
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                        <swiper-slide className='relative pt-4'>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/907829018/rendition/1080p/file.mp4?loc=external&signature=19f1bda07f4caacaccc0fdcf5567fb848096a95289bb8bc5310b0bb801c74380" datafancybox="gallery">
                                        <Image src={Slide1} alt='Slide' className='rounded-[50px] w-full relative top-0 left-0' />
                                        <div className="absolute bottom-[2px] left-0 w-full h-full flex items-start justify-end flex-col bg-black/40 rounded-[50px] px-[40px] pb-[40px]">
                                            <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Video Animation Services</h3>
                                            <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>We can add that vividness, vibrancy, and a strong taste of zestfulness to those mundane corporate videos, making your brand truly stand out.</p>
                                            <button onClick={popupHandle} className='text-white font-[600] text-[13px] md:text-[16px] poppins pt-4 flex items-center gap-x-3'>Make an Animation
                                                <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                            </button>
                                            <Image src={VideoIco} alt='video-icon' className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] md:block hidden' />
                                        </div>
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                        <swiper-slide className='relative pt-4'>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/907828567/rendition/1080p/file.mp4?loc=external&signature=2cb0c1bd0ce7278cfcc88931f949d2a4df4a28555c8e3a5dd73de49eeb9934e9" datafancybox="gallery">
                                        <Image src={Slide2} alt='Slide' className='rounded-[50px] w-full relative top-0 left-0' />
                                        <div className="absolute bottom-[2px] left-0 w-full h-full flex items-start justify-end flex-col bg-black/40 rounded-[50px] px-[40px] pb-[40px]">
                                            <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Explainer Videos Services</h3>
                                            <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>We like to explain things, but it’s not just that…we want your audience to enjoy the seeing and listening experience as well with our explainer videos.</p>
                                            <button onClick={popupHandle} className='text-white font-[600] text-[13px] md:text-[16px] poppins pt-4 flex items-center gap-x-3'>Make an Animation
                                                <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                            </button>
                                            <Image src={VideoIco} alt='video-icon' className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] md:block hidden' />
                                        </div>
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                        <swiper-slide className='relative pt-4'>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/907829397/rendition/1080p/file.mp4?loc=external&signature=90d3e6d4b05f56ed61129b5031be09b724259666750b41882f54bf99b3e2314e" datafancybox="gallery">
                                        <Image src={Slide3} alt='Slide' className='rounded-[50px] w-full relative top-0 left-0' />
                                        <div className="absolute bottom-[2px] left-0 w-full h-full flex items-start justify-end flex-col bg-black/40 rounded-[50px] px-[40px] pb-[40px]">
                                            <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Whiteboard Animation Services</h3>
                                            <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>A whiteboard is a wonderful blank space to start or unleash creativity. Well, truth be told, we don’t view a whiteboard as a whiteboard, we view it as a canvas that can be splendidly colored.</p>
                                            <button onClick={popupHandle} className='text-white font-[600] text-[13px] md:text-[16px] poppins pt-4 flex items-center gap-x-3'>Make an Animation
                                                <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                            </button>
                                            <Image src={VideoIco} alt='video-icon' className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] md:block hidden' />
                                        </div>
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                    </swiper-container>
                </div >
            </section >
        </>
    )
}

export default Animation
