"use client"
import React from 'react'
import Image from 'next/image'
import { FaPhoneAlt } from 'react-icons/fa'
// Images
import CheckImage from "media/infinity-studio-lp-2/checkImage.svg"
import CheckImageTwo from "media/infinity-studio-lp-2/checkImage2.svg"
import BgImage from "media/infinity-studio-lp-2/animation-bg.png"
import Chats from "media/infinity-studio-lp-new/chat-icon.svg";

const AnimationProcess = () => {
    const data = [
        {
            title: "Creative Concept",
            desc: "We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach",
        },
        {
            title: "Script Writing",
            desc: "We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach",
        },
        {
            title: "Storyboarding",
            desc: "We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach",
        },
        {
            title: "Animatic",
            desc: "We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach",
        },
        {
            title: "Style Frames & Character Design",
            desc: "We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach",
        },
    ]

    const dataTwo = [
        {
            title: "Animation Setup",
            desc: "We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach",
        },
        {
            title: "Animation & Motion Graphics",
            desc: "We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach",
        },
        {
            title: "Rendering, Edit & Color Grade",
            desc: "We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach",
        },
        {
            title: "Voiceover, Music & Sound Design",
            desc: "We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach",
        },
        {
            title: "Export",
            desc: "We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach",
        },
    ]
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };

    return (
        <section className='bg-black relative'>
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-6">
                        <div className="txt pt-[50px] pb-[30px] lg:py-[90px]">
                            <h2 className='text-white poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] mb-3 lg:mb-8'>Animation Process</h2>
                            <h4 className='text-white text-[30px] leading-[45px] font-semibold poppins'>Creative</h4>
                            <ul className='pt-9 lg:pt-12'>
                                {data.map((content, i) => (
                                    <li className='flex gap-4 mb-5 md:mb-8 lg:mb-12' key={i}>
                                        <div>
                                            <Image src={CheckImage} width={30} height={30} alt='Infinity Animation' />
                                        </div>
                                        <div>
                                            <h5 className='text-[16px] sm:text-[20px] lg:text-[25px] font-semibold leading-[15px] sm:leading-[18px] lg:leading-[22px] text-white poppins mb-2 sm:mb-4'>{content.title}</h5>
                                            <p className='text-white text-[12px] leading-[20px] sm:text-[13px] 5xl:text-[16px] poppins 5xl:pr-6'>
                                                {content.desc}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="btn">
                                <a href="tel:012-345-6789" className='flex items-center justify-center gap-x-2 text-[14px] xl:text-[14px] md:text-[16px] text-white font-semibold poppins ml-[27px] h-[45px] w-[165px] tracking-[.3px] rounded-[5px] leading-[20px] duration-700 transition-all bg-[#FF2D4B] hover:duration-700 hover:transition-all'>
                                    <FaPhoneAlt />
                                    Call Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <div className=' h-full w-full lg:w-6/12 ml-auto lg:absolute right-0'>
                            <Image src={BgImage} alt='Infinity Animation' fill={true} className='z-[1] lg:h-full object-cover object-center lg:block hidden' />
                            <div className='relative z-10 px-0 lg:px-8 xl:px-12 pt-[20px] pb-[50px] sm:py-[50px] lg:py-[90px] flex flex-col justify-end lg:h-full'>
                                <h4 className='text-white text-[30px] leading-[45px] font-semibold poppins'>Creative</h4>
                                <ul className='pt-9 lg:pt-12'>
                                    {dataTwo.map((content, i) => (
                                        <li className='flex gap-4 mb-5 md:mb-8 lg:mb-12' key={i}>
                                            <div>
                                                <Image src={CheckImageTwo} width={30} height={30} alt='Infinity Animation' className='lg:block hidden' />
                                                <Image src={CheckImage} width={30} height={30} alt='Infinity Animation' className='lg:hidden block' />
                                            </div>
                                            <div>
                                                <h5 className='text-[16px] sm:text-[20px] lg:text-[25px] font-semibold leading-[25px] sm:leading-[18px] lg:leading-[22px] text-white poppins mb-2 sm:mb-4'>{content.title}</h5>
                                                <p className='text-white text-[12px] leading-[20px] sm:text-[13px] 5xl:text-[16px] poppins xl:w-10/12 xxl:w-8/12 4xl:w-7/12'>
                                                    {content.desc}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="btn">
                                    <a href="javascript:$zopim.livechat.window.show();" className='flex items-center justify-center gap-x-2 text-[14px] xl:text-[14px] md:text-[16px] text-white font-semibold poppins h-[45px] w-[165px] tracking-[.3px] rounded-[5px] leading-[20px] duration-700 transition-all bg-[#FF2D4B] lg:bg-black hover:duration-700 hover:transition-all'>
                                        <Image src={Chats} alt='Infinity Animation' className='brightness-200 invert-0' />
                                        Live Chat
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AnimationProcess
