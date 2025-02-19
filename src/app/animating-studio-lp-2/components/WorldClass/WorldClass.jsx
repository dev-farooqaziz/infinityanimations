"use client"
import React from 'react'
import Image from 'next/image'
import { FaPhoneAlt } from 'react-icons/fa'
// Import Slider
import { AutoScroll } from '@/components/sliders';
//===== Images
import Award1 from "media/infinity-studio-lp-2/world-1.png"
import Award2 from "media/infinity-studio-lp-2/world-2.png"
import Award3 from "media/infinity-studio-lp-2/world-3.png"
import Award4 from "media/infinity-studio-lp-2/world-4.png"
import Award5 from "media/infinity-studio-lp-2/world-5.png"
import Chats from "media/infinity-studio-lp-new/chat-icon.svg"

const WorldClass = () => {
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <section className='bg-white py-[50px] md:py-[90px]'>
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h2 className='text-black poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[60px] text-center mb-3'>
                            Trusted By <span className='text-[#F5090B]'>450+ World-Class</span> Startups And Established <span className='text-[#F5090B]'>Enterprises!</span>
                        </h2>
                        <p className='text-[14px] md:text-[16px] poppins text-normal text-black text-center xl:w-10/12 mx-auto'>
                            We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach via fascinating explainer videos.We are a leading video
                        </p>
                    </div>
                </div>
            </div>
            <AutoScroll wrapperClass="mt-10" options={{ loop: true, align: "start" }}>
                {
                    [Award1, Award2, Award3, Award4, Award5, Award1, Award2, Award3, Award4, Award5].map((e, i) => (
                        <div key={i} className="group shrink-0 grow-0 basis-1/3 md:basis-1/4 lg:basis-1/6 mr-10 sm:mr-5 flex items-center justify-center">
                            <div>
                                <Image src={e} alt='Inifnity Animation' width={140} height={45} key={i} tabIndex={0} className='opacity-50 hover:opacity-100 group-hover:duration-700 duration-700 ease-in-out' />
                            </div>
                        </div>
                    ))
                }
            </AutoScroll>
            <div className="flex items-center justify-center gap-3 pt-16">
                <div>
                    <a href="tel:012-345-6789" className='flex items-center justify-center gap-x-2 text-[14px] xl:text-[14px] md:text-[16px] text-white font-semibold poppins ml-[10px] h-[45px] w-[165px] tracking-[.3px] rounded-[5px] leading-[20px] duration-700 transition-all bg-[#FF2D4B] hover:duration-700 hover:transition-all'>
                        <FaPhoneAlt />
                        Call Now
                    </a>
                </div>
                <div>
                    <a href="javascript:$zopim.livechat.window.show();" className='flex items-center justify-center gap-x-2 text-[14px] xl:text-[14px] md:text-[16px] text-white font-semibold poppins h-[45px] w-[165px] tracking-[.3px] rounded-[5px] leading-[20px] duration-700 transition-all bg-black hover:duration-700 hover:transition-all'>
                        <Image src={Chats} alt='Infinity Animation' />
                        Live Chat
                    </a>
                </div>
            </div>
        </section>
    )
}

export default WorldClass
