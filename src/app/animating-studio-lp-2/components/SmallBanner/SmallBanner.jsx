"use client"
import React from 'react'
import Image from 'next/image'
import { FaPhoneAlt } from 'react-icons/fa';
// Images
import BannerBg from "media/infinity-studio-lp-2/small-bannerbg.png";
import Chats from "media/infinity-studio-lp-new/chat-icon.svg";
import Prtcle1 from "media/infinity-studio-lp-2/banner-prtcl1.png"
import Prtcle2 from "media/infinity-studio-lp-2/banner-prtcl2.png"

const SmallBanner = () => {
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <section className='pt-[50px] pb-[50px] lg:pt-[130px] lg:pb-[20px]  bg-[#EE8526] sm:bg-white'>
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="relative">
                            <Image src={BannerBg} alt='Infinity Animation' fill={true} className='z-0 object-cover object-center sm:block hidden' />
                            <div className='lg:block hidden'>
                                <Image src={Prtcle1} alt='Infinity Animation' className='absolute left-[-21px] top-[-55px] 5xl:top-[-75px] w-[23%] 5xl:w-[22%]' />
                            </div>
                            <div className='lg:block hidden'>
                                <Image src={Prtcle2} alt='Infinity Animation' className='absolute right-[-30px] top-[4px] 5xl:top-[-7px] w-[21%]' />
                            </div>
                            <div className='relative z-30 md:py-7 xl:py-10'>
                                <h2 className='text-white poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[50px] mb-3 md:w-10/12 lg:w-8/12 5xl:w-6/12 mx-auto text-center'>Start Displaying Your Brand With
                                    Amazing Animated Videos </h2>
                                <p className='text-white text-[13px] lg:text-[14px] xl:text-[16px] text-center poppins mb-6 md:w-10/12 lg:w-8/12 5xl:w-7/12 mx-auto'>We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach via fascinating explainer videos.</p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                                    <div className='w-full sm:w-auto'>
                                        <a href="tel:012-345-6789" className='flex items-center justify-center gap-x-2 text-[14px] xl:text-[14px] md:text-[16px] text-black font-semibold poppins h-[45px] w-full sm:w-[165px] tracking-[.3px] rounded-[5px] leading-[20px] duration-700 transition-all bg-white hover:duration-700 hover:transition-all'>
                                            <FaPhoneAlt className='text-black' />
                                            Call Now
                                        </a>
                                    </div>
                                    <div className='w-full sm:w-auto'>
                                        <a href="javascript:$zopim.livechat.window.show();" className='flex items-center justify-center gap-x-2 text-[14px] xl:text-[14px] md:text-[16px] text-white font-semibold poppins h-[45px] w-full sm:w-[165px] tracking-[.3px] rounded-[5px] leading-[20px] duration-700 transition-all bg-black hover:duration-700 hover:transition-all'>
                                            <Image src={Chats} alt='Infinity Animation' className='brightness-200 invert-0' />
                                            Live Chat
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SmallBanner
