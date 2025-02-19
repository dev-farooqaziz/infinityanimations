"use client"
import Image from 'next/image';
// Import Images
import DescDot from "media/location-page/desc-dot.png"
import BlogImg1 from "media/inner-blogs/image-1.svg"
import BlogImg2 from "media/inner-blogs/image-2.svg"
import style from "./BlogDescription.module.css"
import CTA from '../cta/CTA';
import { useState } from 'react';

function BlogDescription({ content }) {
    const { DescArray } = content;
    const [activeIndex, setActiveIndex] = useState(0);

    const handleCardHover = (index) => {
        setActiveIndex(index);
    };

    const Divider = [
        {
            content: `Elevating Your Project's Visuals Partner With Houston Animation`,
            href: '#content-1'
        },
        {
            content: `Discover Unparalleled Creativity At Infinity Animations`,
            href: '#content-2'
        },
        {
            content: `Elevating Your Project's Visuals`,
            href: '#content-3'
        },
        {
            content: `Security Measurements`,
            href: '#content-4'
        },
        {
            content: `Discover Unparalleled Creativity At Infinity Animations, Your Gateway To Transformative Visual Storytelling.`,
            href: '#content-5'
        },
        {
            content: `Discover Unparalleled Creativity At Infinity Animations,`,
            href: '#content-6'
        },
        {
            content: `Elevating Your Project's Visuals`,
            href: '#content-7'
        },
    ];
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <section className={`w-full flex items-center justify-start py-6 md:py-8 lg:py-12 bg-none  bg-no-repeat bg-center bg-cover relative `}>
            <div className="container">
                <div className='grid grid-cols-12 w-full '>
                    <div className={`col-span-12 lg:col-span-8 xl:col-span-9 ms-auto pe-5 xl:pe-[95px] h-auto`}>
                        {DescArray?.map((item, index) => (
                            <div className='pb-[25px] md:pb-[45px]' id={item.contentId}>
                                <h2 className={`text-[25px] sm:text-[30px] lg:text-[40px] xl:text-[50px] font-bold font-sans leading-tight capitalize pb-2`}>
                                    {item.title}
                                </h2>
                                {item.paraArray?.map((para, index) => (
                                    <p key={index} className="text-[15px] sm:text-[17px] text-white text-opacity-90 font-[300] font-sans leading-[1.52857143] tracking-wider text-start pb-[10px] pt-[15px]">
                                        {para}
                                    </p>
                                ))}
                                {item.DescParaArray?.map((array, index) => (
                                    <div key={index}>
                                        <h4 className={`text-[20px] xl:text-[30px] font-bold font-sans leading-tight my-4 capitalize`} id={item.contentDescId}>
                                            {array?.title}
                                        </h4>
                                        <p className="text-[15px] sm:text-[17px] text-white text-opacity-90 font-[300] font-sans leading-[1.52857143] tracking-wider text-start pb-5">
                                            {array?.para}
                                        </p>
                                    </div>
                                ))}
                                {item.ImageDesc ? <div className="w-full h-full py-[45px]" >
                                    <div className="flex md:h-[450px] w-full rounded-[25px]">
                                        <Image src={item.ImageDesc} className='  rounded-[15px]' />
                                    </div>
                                </div>
                                    :
                                    <div className="grid grid-cols-12 px-[25px] py-[35px] md:px-[45px] md:py-[55px] border rounded-[25px] bg-[#fff] mt-[35px]" >
                                        <div className="col-span-12 xl:col-span-9 xl:pe-[50px]">
                                            <h4 className={`text-[20px] xl:text-[30px] font-bold font-sans leading-tight mb-4 capitalize text-[#000]`}>
                                                Hire Expert Architectural Animation From Infinity Animation In Just 24 Hours
                                            </h4>
                                            <p className="text-[20px] sm:text-[22px] text-[#000] text-opacity-90 font-[300] font-sans leading-[1.52857143] tracking-wider text-start pb-3">
                                                Discover Unparalleled Creativity At Infinity Animations, Your Gateway To Transformative Visual Storytelling.
                                            </p>
                                        </div>
                                        <div className={`col-span-12 xl:col-span-3 ${style.circle} flex flex-col justify-center items-end xl:items-start pe-[85px] xl:pe-0`}>
                                            <CTA
                                                text="Hire Now"
                                                icon="/icons/arrow-red.png"
                                                iconCss="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full p-2 ms-2 drop-shadow-xl"
                                                bg="bg-prime"
                                                color={`text-white flex justify-between w-full px-[25px]`}
                                                border={`border-2 border-[#fff]`}
                                                hover="hover:bg-prime"
                                                href="javascript:$zopim.livechat.window.show();"
                                            />
                                        </div>
                                    </div>
                                }
                                <h4 className={`text-[20px] xl:text-[30px] font-bold font-sans leading-tight my-4 capitalize`} id={item.contentSubId}>
                                    {item.subTitle}
                                </h4>
                                {item.subPara &&
                                    <p className="text-[15px] sm:text-[17px] text-white text-opacity-90 font-[300] font-sans leading-[1.52857143] tracking-wider text-start ">
                                        {item.subPara}
                                    </p>

                                }
                            </div>
                        ))}
                    </div>
                    <div className={`col-span-12 lg:col-span-4 xl:col-span-3 relative`}>
                        <div className='grid grid-cols-12 content-start  sticky top-[15%]'>
                            <div className='col-span-12 w-full bg-[#4A4A4A] flex flex-col text-center rounded-[10px] '>
                                <h5 className={`text-[22px] xl:text-[32px] font-normal font-sans leading-tight my-4 capitalize`}>
                                    Quick Links
                                </h5>

                                <div className="grid grid-cols-1 divide-y-2 divide-gray-500 pb-[10px] ">
                                    {Divider.map((items, index) => (
                                        <div key={index} className={`${style.Diver} ${index === activeIndex ? style.DiverActive : style.DiverHover} `} onClick={() => handleCardHover(index)}>
                                            <a className="text-[14px] sm:text-[16px] px-[25px] py-[12px] text-white text-opacity-90 font-[300] font-sans leading-[1.52857143] tracking-wider text-start " href={items.href}>
                                                {items.content}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='col-span-12  md:col-span-6 lg:col-span-12 flex flex-col pt-[35px] '>
                                <h5 className={`text-[22px] xl:text-[32px] font-normal font-sans leading-tight lg:my-4 capitalize text-start pb-[25px] pt-[15px] lg:py-[25px]`}>
                                    Relevant Articles
                                </h5>
                                <div className="grid grid-cols-12 mb-5 py-1">
                                    <div className="col-span-3 ">
                                        <Image src={BlogImg1} alt='Blog Image' width={70} />
                                    </div>
                                    <div className="col-span-9 flex flex-col justify-center md:justify-end text-start ps-2">
                                        <span className='text-white text-opacity-90 text-[17px] font-normal poppins '>Be the First to Hire Our <br /> Professional Animators</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 mb-5 py-1">
                                    <div className="col-span-3 ">
                                        <Image src={BlogImg2} alt='Blog Image' width={70} />
                                    </div>
                                    <div className="col-span-9 flex flex-col justify-center md:justify-end text-start ps-2">
                                        <span className='text-white text-opacity-90 text-[17px] font-normal poppins '>Be the First to Hire Our <br /> Professional Animators</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 mb-5 py-1">
                                    <div className="col-span-3 ">
                                        <Image src={BlogImg1} alt='Blog Image' width={70} />
                                    </div>
                                    <div className="col-span-9 flex flex-col justify-center md:justify-end text-start ps-2">
                                        <span className='text-white text-opacity-90 text-[17px] font-normal poppins '>Be the First to Hire Our <br /> Professional Animators</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 mb-5 py-1">
                                    <div className="col-span-3 ">
                                        <Image src={BlogImg2} alt='Blog Image' width={70} />
                                    </div>
                                    <div className="col-span-9 flex flex-col justify-center md:justify-end text-start ps-2 ">
                                        <span className='text-white text-opacity-90 text-[17px] font-normal poppins '>Be the First to Hire Our <br /> Professional Animators</span>
                                    </div>
                                </div>
                            </div>

                            <div className='col-span-12  md:col-span-6 lg:col-span-12 flex flex-col pt-[35px]'>
                                <h5 className={`text-[22px] xl:text-[32px] font-normal font-sans leading-tight lg:my-4 capitalize text-start pb-[25px] pt-[15px] lg:py-[25px]`}>
                                    See Our Related Services
                                </h5>
                                <div className='flex flex-col items-start'>
                                    <div className='inline-block px-[35px] py-[6px] mb-4 text-[16px] lg:text-[18px] font-lighter font-sans text-white rounded-[27px] cursor-pointer text-center bg-[#4A4A4A]'>
                                        Architectural Animation
                                    </div>
                                    <div className='inline-block px-[35px] py-[6px] mb-4 text-[16px] lg:text-[18px] font-lighter font-sans text-white rounded-[27px] cursor-pointer text-center bg-[#4A4A4A]'>
                                        2D Animation
                                    </div>
                                    <div className='inline-block px-[35px] py-[6px] mb-4 text-[16px] lg:text-[18px] font-lighter font-sans text-white rounded-[27px] cursor-pointer text-center bg-[#4A4A4A]'>
                                        3D Animation
                                    </div>
                                    <div className='inline-block px-[35px] py-[6px] mb-4 text-[16px] lg:text-[18px] font-lighter font-sans text-white rounded-[27px] cursor-pointer text-center bg-[#4A4A4A]'>
                                        CGI & VFX Animation
                                    </div>
                                    <div className='inline-block px-[35px] py-[6px] mb-4 text-[16px] lg:text-[18px] font-lighter font-sans text-white rounded-[27px] cursor-pointer text-center bg-[#4A4A4A]'>
                                        Motion Graphics Animation
                                    </div>
                                    <div className='inline-block px-[35px] py-[6px] mb-4 text-[16px] lg:text-[18px] font-lighter font-sans text-white rounded-[27px] cursor-pointer text-center bg-[#4A4A4A]'>
                                        Infographics Animation
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12  '>
                                <div className='flex flex-col justify-start mt-[35px] bg-[#FF2D4B] rounded-[15px] items-center py-[25px]'>
                                    <p className={`text-[20px] xl:text-[26px] font-normal font-sans leading-tight mb-4 capitalize text-center lg:w-[70%]`}>
                                        Hire A Animation Expert On This Topic.
                                    </p>
                                    <CTA
                                        text="Hire Now"
                                        icon="/icons/arrow-red.png"
                                        iconCss="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full p-2 ms-2 drop-shadow-xl"
                                        bg="bg-[#fff]"
                                        color={`text-black flex justify-center`}
                                        border={`border-2 border-[#fff]`}
                                        hover="hover:bg-prime"
                                        href="javascript:$zopim.livechat.window.show();"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogDescription
