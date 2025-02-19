"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
// ===== Images ===== // 
import Logos from "media/infinity-studio-lp-new/animations-logos.png"
import AnimationBg from "media/infinity-studio-lp-new/animation-bg.png"
import Chat from "media/infinity-studio-lp-new/chat-icon.svg"

const Animations = ({ content }) => {
    const { title, para, subtitleOne, subtitleTwo, subpara, AnimationVideo } = content;
    // fancy box 
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
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <section className='pt-[50px] lg:pt-[70px] relative bg-white'>
            <Image src={AnimationBg} alt='Infinity Animation' fill={true} className='z-0 object-cover object-center' />
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="grid grid-cols-12 relative z-10">
                    <div className="col-span-12 ">
                        <h2 className='text-white poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[50px] text-center mb-2 md:mb-4'>{title}</h2>
                        <p className='text-white text-[13px] lg:text-[16px] poppins text-center mb-6 lg:mb-12'>{para}</p>
                    </div>
                </div>
                <div className="relative z-10 pb-[30px]">
                    <div className="grid grid-cols-12 items-center gap-y-6">
                        <div className="col-span-12 lg:col-span-6">
                            <h3 className='text-white poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] mb-3'>{subtitleOne}</h3>
                            <h5 className='text-[15px] lg:text-[18px] text-white leading-[24px] lg:leading-[28px] font-semibold poppins mb-4'>{subtitleTwo}</h5>
                            <p className='text-white text-[13px] lg:text-[14px] xxl:text-[15px] pr-[10px] poppins'>{subpara}</p>
                            <div className='flex items-center gap-4'>
                                <div className="btn mt-6 w-[250px]">
                                    <a href='tel:012-345-6789' className="text-[13px] md:text-[16px] font-bold leading-[25px] text-white bg-[#FF2D4B] rounded-[5px] max-width h-[44px] px-[10px] md:px-[20px] poppins flex items-center justify-center">Make an Animation</a>
                                </div>
                                <div className="btn mt-6 w-[180px]">
                                    <a className="text-[13px] md:text-[16px] font-bold leading-[25px] text-white bg-black rounded-[5px] max-width h-[44px] px-[10px] md:px-[20px] poppins flex items-center justify-center" href="javascript:$zopim.livechat.window.show();">
                                        <Image src={Chat} alt='UK' className='object-contain grayscale-[1] brightness-[100] xl:block hidden' />
                                        <span className='text-[14px] xl:text-[16px] text-white px-[8px] fontbold poppins'>
                                            Live Chat
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <Link href={AnimationVideo} datafancybox="gallery">
                                    <video src={AnimationVideo} autoPlay={true} loop={true} muted={true} className='shadow-md w-full'>
                                        Your Browser doesn't support video
                                    </video>
                                </Link>
                            </Fancybox>
                        </div>
                        <div className="col-span-12">
                            <div className="logos mt-6 lg:mt-12">
                                <Image src={Logos} alt='Animating Studios' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Animations
