"use client"

import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
// Images
import MaketBg from "media/infinity-studio-lp-new/marketing-bg.png";
import PlayIcon from "media/infinity-studio-lp-2/play.png";
import RightArrow from "media/infinity-studio-lp-2/right-arrow.png"
import chatIcon from "media/infinity-studio-lp-2/chat-icon.svg"
import MeetingImage from "media/infinity-studio-lp-2/book-marketing.svg"

const Services = () => {
    const cards = [
        {
            id: 1,
            title: 'Hybrid Animation',
            description: 'We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach',
            video: "https://player.vimeo.com/progressive_redirect/playback/911720231/rendition/1080p/file.mp4?loc=external&signature=d9b02a0f53aa8784b0e3ed063720d29b1970b3e3b399f1d34316482874fdaa86"
        },
        {
            id: 2,
            title: '3D Animation',
            description: 'We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach',
            video: "https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e"
        },
        {
            id: 3,
            title: '2D Animation',
            description: 'We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach',
            video: "https://player.vimeo.com/progressive_redirect/playback/907828567/rendition/1080p/file.mp4?loc=external&signature=2cb0c1bd0ce7278cfcc88931f949d2a4df4a28555c8e3a5dd73de49eeb9934e9"
        },
        {
            id: 4,
            title: 'Whiteboard Animation',
            description: 'We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach',
            video: "https://player.vimeo.com/progressive_redirect/playback/906229275/rendition/1080p/file.mp4?loc=external&signature=6cce77a47f5927d9a30e5a8c79efd00b539f963952705e6d3ee7565e9c1ccd7e"
        },
        {
            id: 5,
            title: 'Motion Graphics',
            description: 'We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach',
            video: "https://player.vimeo.com/progressive_redirect/playback/907667394/rendition/1080p/file.mp4?loc=external&signature=34f7fe39024c0b9ce15188e07fb6d4a90238c7b9cfcddb2b7688d8541b55c1a4"
        },
        {
            id: 6,
            title: 'Get A Quote',
            description: 'We are a leading video animation company in the USA that has helped thousands of brands.',
            isQuote: true
        }
    ];

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
        }, [props.delegate, props.options]);

        return <div ref={containerRef}>{props.children}</div>;
    }

    //========= video code start =========
    const handleVideoPlay = (e) => {
        const video = e.currentTarget.querySelector('video');
        video.play();
    };

    const handleVideoPause = (e) => {
        const video = e.currentTarget.querySelector('video');
        video.pause();
    };
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };

    return (
        <section className='relative py-[50px] lg:py-[90px]'>
            <Image src={MaketBg} alt='Infinity Animation' fill={true} className='z-[-1] object-cover object-center' />
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 sm:col-span-9">
                        <h2 className='text-white poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[50px] mb-3'>
                            Mastering The <span className='text-[#F5090B]'>Art</span> Of Video Animation <span className='text-[#F5090B]'>Services</span>
                        </h2>
                        <p className='text-white text-[13px] lg:text-[16px] poppins mb-7 md:mb-20'>
                            We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach via fascinating explainer videos.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-7 lg:gap-x-16 gap-y-14">
                    {cards.map((card, index) => (
                        card.isQuote ? (
                            <div key={card.id} className="col-span-12 md:col-span-6">
                                <div className="bg-[#F5090B] rounded-[15px] py-8 lg:py-10 px-6 lg:px-8 relative">
                                    <h3 className="text-white poppins text-[25px] lg:text-[35px] leading-[40px] lg:leading-[45px] font-semibold">Get A Quote</h3>
                                    <h3 className="text-[#FFCC00] text-[42px] lg:text-[62px] leading-[52px] lg:leading-[72px] font-semibold poppins mb-4 lg:mb-6">Today!</h3>
                                    <p className="text-white text-[13px] lg:text-[14px] poppins mb-4 lg:mb-6">We are a leading video animation company <br className="xl:block hidden" /> in the USA that has helped thousands of</p>
                                    <div>
                                        <div className="bg-white h-[65px] w-max px-4 rounded-[6px] flex items-center gap-x-4">
                                            <Image src={chatIcon} alt="Infinity Animation" />
                                            <div>
                                                <span className="text-black text-[10px] poppins font-semibold block">Chat Now to Avail 50% OFF</span>
                                                <a href="javascript:$zopim.livechat.window.show();" className="text-black text-[20px] leading-[30px] font-semibold poppins block text-center">Live Chat</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:block hidden absolute right-[-35px] top-[-35px]">
                                        <Image src={MeetingImage} alt="Infinity Animation" className="max-h-[380px]" />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div key={card.id} className="col-span-12 md:col-span-6">
                                <div className="group">
                                    <div className="border-2 rounded-[15px] group-hover:border-[#F5090B] group-hover:duration-700 duration-700 ease-in-out p-4 border-white h-full min-h-[258px] lg:min-h-[320px] xl:min-h-[315px]">
                                        <Fancybox options={{ Carousel: { infinite: false } }}>
                                            <Link href={card.video} data-fancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause} className="min-h-[350px]">
                                                <div className="w-full h-full overlay relative group overflow-hidden rounded-[10px]">
                                                    <div className="w-full h-full flex justify-center items-center overlay-div-testi">
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover min-h-[258px] lg:min-h-[320px] xl:min-h-[315px]">
                                                            <source src={card.video} type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt="Play-icon" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Fancybox>
                                    </div>
                                    <h3 className="poppins text-white text-[25px] leading-[38px] font-semibold pt-6 pb-2 md:pb-5">
                                        <span className="text-[#F5090B]">{card.title}</span>
                                    </h3>
                                    <p className="text-white text-[13px] lg:text-[15px] poppins mb-8">{card.description}</p>
                                    <a href="javascript:$zopim.livechat.window.show();" className="flex items-center justify-center gap-x-2 text-[14px] xl:text-[14px] md:text-[16px] text-white font-semibold poppins h-[45px] w-max px-5 tracking-[.3px] rounded-[5px] leading-[20px] duration-700 transition-all bg-[#FF2D4B] hover:duration-700 hover:transition-all">
                                        Make an Animation
                                        <Image src={RightArrow} alt="Infinity Animation" className="w-[8%]" />
                                    </a>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;
