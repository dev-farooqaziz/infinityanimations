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
import Slide3 from "media/explainer-videos/animate3.jpg"
import Slide4 from "media/explainer-videos/animate4.jpg"
import Slide5 from "media/explainer-videos/animate5.jpg"
import Arrow from "media/explainer-videos/slide-arrow.png"
import VideoIco from "media/explainer-videos/play.png"
import { register } from "swiper/element/bundle";

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
                    left: 47% !important;
                    right: inherit !important;
                }

                .swiper-button-next {
                left: inherit !important;
                right: 46% !important;
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
    // PopUp
    const { popup, togglePopup } = usePopup();
    const popupHandle = () => {
        togglePopup(popup);
    }
    return (
        <>
            <section className='pt-[40px] md:pt-[70px] pb-[30px] lg:pb-[175px] relative overflow-hidden bg-white'>
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="content">
                                <h2 className='text-black poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[50px] text-center mb-2'>Mastering The Art Of Video <span className='text-[#FF0000]'>Animation Services</span></h2>
                                <p className='text-black text-[13px] lg:text-[16px] font-sans text-center'>Unlocking a Diverse Range of Animation Services to Achieve Your Branding Goals with Success.</p>
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
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/947422905/rendition/1080p/file.mp4?loc=external&signature=f56596bad42e22dfbb5dcf417293fe4f92f3fc7e84a9464be5c8f07f903eaa05" datafancybox="gallery">
                                        <Image src={Slide1} alt='Slide' className='rounded-[20px] w-full relative top-0 left-0' />
                                        <div className="absolute bottom-[2px] left-0 w-full h-full flex items-start justify-end flex-col bg-black/40 rounded-[20px] px-[40px] pb-[40px]">
                                            <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">3D Animation Services</h3>
                                            <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>Our 3D animation services are not just visuals; they're an immersive experience that propels your brand into the future. Our skilled team of 3D artists and visionaries transform concepts into living, breathing narratives that captivate audiences.</p>
                                            <div className="btn w-full flex items-center justify-end">
                                                <button onClick={popupHandle} className='mt-4 text-[14px] xl:text-[16px] text-white font-semibold poppins ml-[10px] py-[12px] px-[10px] xl:px-[20px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-3xl duration-700 transition-all bg-[#FF2D4B] hover:duration-700 hover:transition-all flex items-center gap-x-3'>Make an Animation
                                                    <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                                </button>
                                            </div>
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
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/957421481/rendition/1080p/file.mp4?loc=external&signature=2200951cfd824565a3f569c81e997b1f7c5ad0a443debd2bc4d73ff7a3b0f27b" datafancybox="gallery">
                                        <Image src={Slide2} alt='Slide' className='rounded-[20px] w-full relative top-0 left-0' />
                                        <div className="absolute bottom-[2px] left-0 w-full h-full flex items-start justify-end flex-col bg-black/40 rounded-[20px] px-[40px] pb-[40px]">
                                            <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Cel Animation Services</h3>
                                            <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>With Cel Animation, we seamlessly merge traditional hand-drawn Cel animation techniques with cutting-edge digital elements. This dynamic fusion results in visuals that not only pay homage to the timeless charm of Cel animation but also push the boundaries of innovation.</p>
                                            <div className="btn w-full flex items-center justify-end">
                                                <button onClick={popupHandle} className='mt-4 text-[14px] xl:text-[16px] text-white font-semibold poppins ml-[10px] py-[12px] px-[10px] xl:px-[20px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-3xl duration-700 transition-all bg-[#FF2D4B] hover:duration-700 hover:transition-all flex items-center gap-x-3'>Make an Animation
                                                    <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                                </button>
                                            </div>
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
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/923043536/rendition/1080p/file.mp4?loc=external&signature=65ba4de21993e2ab518a0dbad0e015b2bd960e70967b63241c8509cc1f8c5390" datafancybox="gallery">
                                        <Image src={Slide3} alt='Slide' className='rounded-[20px] w-full relative top-0 left-0' />
                                        <div className="absolute bottom-[2px] left-0 w-full h-full flex items-start justify-end flex-col bg-black/40 rounded-[20px] px-[40px] pb-[40px]">
                                            <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Architectural Visualization Services</h3>
                                            <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>At the intersection of innovation and aesthetics, our Architectural Visualization Services go beyond rendering structures; they create visual stories that resonate. Whether it's a residential project, commercial space, or urban development.</p>
                                            <div className="btn w-full flex items-center justify-end">
                                                <button onClick={popupHandle} className='mt-4 text-[14px] xl:text-[16px] text-white font-semibold poppins ml-[10px] py-[12px] px-[10px] xl:px-[20px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-3xl duration-700 transition-all bg-[#FF2D4B] hover:duration-700 hover:transition-all flex items-center gap-x-3'>Make an Animation
                                                    <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                                </button>
                                            </div>
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
                                    <Link
                                        href="https://player.vimeo.com/progressive_redirect/playback/911728642/rendition/1080p/file.mp4?loc=external&signature=44469d3d3ef50562def357cdf05ef68b8d9eb1f6c874c98d4b7a6772c4b7f173" datafancybox="gallery">
                                        <Image src={Slide4} alt='Slide' className='rounded-[20px] w-full relative top-0 left-0' />
                                        <div className="absolute bottom-[2px] left-0 w-full h-full flex items-start justify-end flex-col bg-black/40 rounded-[20px] px-[40px] pb-[40px]">
                                            <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Hybrid Animation Service</h3>
                                            <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>Our 3D animation services are not just visuals; they're an immersive experience that propels your brand into the future. Our skilled team of 3D artists and visionaries transform concepts into living, breathing narratives that captivate audiences.</p>
                                            <div className="btn w-full flex items-center justify-end">
                                                <button onClick={popupHandle} className='mt-4 text-[14px] xl:text-[16px] text-white font-semibold poppins ml-[10px] py-[12px] px-[10px] xl:px-[20px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-3xl duration-700 transition-all bg-[#FF2D4B] hover:duration-700 hover:transition-all flex items-center gap-x-3'>Make an Animation
                                                    <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                                </button>
                                            </div>
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
                                        <Image src={Slide5} alt='Slide' className='rounded-[20px] w-full relative top-0 left-0' />
                                        <div className="absolute bottom-[2px] left-0 w-full h-full flex items-start justify-end flex-col bg-black/40 rounded-[20px] px-[40px] pb-[40px]">
                                            <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">2D Animation Service</h3>
                                            <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>2D animation involves creating movement in a two-dimensional space, offering a timeless and versatile visual experience. Our service leverages the simplicity and charm of hand-drawn elements to craft engaging and visually stunning animations. This approach allows for clear and effective communication, perfect for explainer videos, marketing campaigns, and educational content. By focusing on high-quality, captivating animations, we ensure that your message resonates with your audience and leaves a lasting impression.</p>
                                            <div className="btn w-full flex items-center justify-end">
                                                <button onClick={popupHandle} className='mt-4 text-[14px] xl:text-[16px] text-white font-semibold poppins ml-[10px] py-[12px] px-[10px] xl:px-[20px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-3xl duration-700 transition-all bg-[#FF2D4B] hover:duration-700 hover:transition-all flex items-center gap-x-3'>Make an Animation
                                                    <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                                </button>
                                            </div>
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
