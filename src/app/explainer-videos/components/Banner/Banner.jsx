import React, { useEffect, useRef } from 'react'
import { Star } from 'heroicons-react'
import Link from 'next/link';
import Image from 'next/image';

import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
// ====== Images 
import PartiOne from "media/explainer-videos/banner1.png"
import PartiTwo from "media/explainer-videos/banner2.png"
import PartiThree from "media/explainer-videos/banner-3.png"
import PartiFour from "media/explainer-videos/banner-4.png"
import chatIcon from "media/video-explainer/chat-icon.png"
import googleReview from "media/explainer-videos/googleReview.PNG"
import clutchReview from "media/explainer-videos/clutchReview.PNG"
import review from "media/explainer-videos/review.png"

const Banner = ({ content }) => {
    const { bannerVideo } = content
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
        <>
            <section className='pt-[120px] md:pt-[150px] pb-[50px] md:pb-[100px] relative' id='banner'>
                <Image src={PartiTwo} alt='Particle' height={625} width={517} className='animation absolute 3xl:right-[137px] right-0 bottom-[-38px] 3xl:bottom-[-20px] 3xl:w-3/12 w-4/12 lg:block hidden' />
                <Image src={PartiFour} alt='Particle' className=' absolute right-0 bottom-[-45%] lg:bottom-0 w-[9%] lg:block hidden' />
                <div className="px-5 lg:max-w-7xl mx-auto relative">
                    <Image src={PartiOne} alt='Particle One' className='animationUpDown absolute left-[40px] bottom-[-70px] w-[23%] z-20 lg:block hidden' />
                    <div className="flex items-center justify-center gap-x-5 lg:gap-x-10 mb-6" data-aos="zoom-in" data-wow-duration="3s">
                        <div className='w-[12%]'>
                            <a href='https://g.page/r/CdxfyZwVv9naEBM/'>
                                <Image src={googleReview} alt='Infinity Animations' />
                            </a>
                        </div>
                        <div className='w-[12%]'>
                            <a href='https://clutch.co/profile/infinity-animations#highlights'>
                                <Image src={clutchReview} alt='Infinity Animations' />
                            </a>
                        </div>
                        <div className='w-[12%]'>
                            <a href='https://www.goodfirms.co/company/infinity-animations'>
                                <Image src={review} alt='Infinity Animations' />
                            </a>
                        </div>
                    </div>
                    <h1 className='text-[20px] md:text-[25px] lg:text-[28px] xl:text-[36px] font-bold font-sans leading-[35px] sm:leading-[45px] text-center text-black pt-2 md:pt-4 pb-2 md:pb-5' data-aos="fade-up" data-wow-duration="3s">Boost Sales with Animation Services. <br className='md:block hidden' />
                        Instantaneously Forge Animated Explainer Videos!</h1>
                    <p className='text-center text-[13px] sm:text-[16px] font-sans text-black leading-[19px] pb-6' data-aos="fade-up" data-wow-duration="3s">Transform Your Ideas into Visually Engaging Animated Stories, Tailored to Resonate with Your Audience & <br /> Elevate your Brand.</p>
                    <div className="video w-full lg:w-6/12 mx-auto">
                        <Fancybox options={{
                            Carousel: {
                                infinite: false,
                            },
                        }}>
                            <Link href={bannerVideo} datafancybox="gallery">
                                <video className={`rounded-2xl shadow-2xl w-full h-full`} loop={true} muted="muted" autoPlay={true} src={bannerVideo}></video>
                            </Link>
                        </Fancybox>
                    </div>
                </div>
                <Image src={PartiThree} alt='Particle' className='absolute left-0 bottom-[-28%] lg:bottom-[-11%] w-[7%] lg:block hidden' />
            </section>
            <section className='relative z-[9] mb-12 md:mb-16 md:mt-[-60px]'>
                <div className='flex flex-col items-center content-center'>
                    <div className="flex gap-4 md:gap-2">
                        <div className="btn">
                            <a href='tel:012-345-6789' className='flex items-center text-[16px] text-white font-[600] montserrat bg-[#FF2D4B] py-[12px] px-[20px] md:px-[35px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                Call Now
                            </a>
                        </div>
                        <div className="chat flex items-center gap-2">
                            <Image src={chatIcon} alt='chat-icon' className='w-[25px] ml-[10px]' />
                            <div className="text">
                                <span className='block montserrat text-[14px] font-[600] text-[#FF2D4B] leading-[14px]'>Chat Now to Avail 50% OFF</span>
                                <a href="javascript:$zopim.livechat.window.show();" className='text-black text-[16px] montserrat font-[600]'>Live Chat</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
