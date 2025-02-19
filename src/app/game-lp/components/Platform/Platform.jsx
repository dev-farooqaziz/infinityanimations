"use client"
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
// Images
import HeadingParticle from "media/game-lp/heading-particle.png"
import tab1 from "media/game-lp/tab1.png"
import BtnBg1 from "media/game-lp/btn-bg1.png"
import BtnBg2 from "media/game-lp/btn-bg2.png"

//=====Portfilio Fold=====// 
const tabInfo = [
    { label: "Mobile", index: 0 },
    { label: "Desktop", index: 1 },
    { label: "Console", index: 2 },
    { label: "AR/VR", index: 3 },
    { label: "Web", index: 4 },
];

const tabContents = [
    {
        title: "Mobile",
        desc: "Our mobile games deliver immersive experiences with intuitive controls and engaging gameplay. Designed for all devices, they offer seamless performance and stunning visuals. Experience fun and adventure anytime, anywhere.",
        image: tab1
    },
    {
        title: "Desktop",
        desc: "Our desktop games deliver immersive experiences with intuitive controls and engaging gameplay. Designed for all devices, they offer seamless performance and stunning visuals. Experience fun and adventure anytime, anywhere.",
        image: tab1
    },
    {
        title: "Console",
        desc: "Our console games deliver immersive experiences with intuitive controls and engaging gameplay. Designed for all devices, they offer seamless performance and stunning visuals. Experience fun and adventure anytime, anywhere.",
        image: tab1
    },
    {
        title: "AR/VR",
        desc: "Our AR/VR games deliver immersive experiences with intuitive controls and engaging gameplay. Designed for all devices, they offer seamless performance and stunning visuals. Experience fun and adventure anytime, anywhere.",
        image: tab1
    },
    {
        title: "Web",
        desc: "Our Web games deliver immersive experiences with intuitive controls and engaging gameplay. Designed for all devices, they offer seamless performance and stunning visuals. Experience fun and adventure anytime, anywhere.",
        image: tab1
    },
]

const Platform = () => {
    //========= tabs =========
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <section className='pb-[50px] pt-[30px] lg:py-[60px] xl:py-[90px]'>
            <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-0">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="txt text-center">
                            <h2 className='text-[30px] sm:text-[40px] lg:text-[50px] 5xl:text-[60px] leading-[50px] sm:leading-[50px] lg:leading-[60px] 5xl:leading-[90px] font-semibold text-white poppins md:mb-3 relative w-full md:w-6/12 lg:w-6/12 5xl:w-5/12 mx-auto'>
                                <Image src={HeadingParticle} alt='Heading' className='sm:block hidden absolute left-[20px] lg:left-0 top-[50%] translate-y-[-50%]' />
                                Platforms
                                <Image src={HeadingParticle} alt='Heading' className='sm:block hidden absolute right-[20px] lg:right-0 top-[50%] translate-y-[-50%] rotate-180' />
                            </h2>
                            <p className='text-[13px] sm:text-[15px] xl:text-[18px] leading-[25px] sm:leading-[30px] xl:leading-[33px] text-white poppins md:w-9/12 mx-auto xl:px-4 mb-7 xl:mb-10'>At the heart of every great game lies captivating art that immerses players in unique, vibrant worlds. We craft visuals that not only enhance gameplay but also evoke emotion,</p>
                        </div>
                        <div className="mt-8 xl:mt-14">
                            <ul className="flex flex-wrap justify-center text-sm font-medium text-center gap-3 md:gap-5 xl:gap-14 mx-auto border-b border-[#707070] pt-[25px] ">
                                {tabInfo.map((tab, index) => (
                                    <li key={index}
                                        className={`inline-block px-5 md:px-8 lg:px-14 py-3 text-[14px] lg:text-[17px] font-normal poppins cursor-pointer text-white duration-1000 ease-in-out  ${activeTab === index ? "bg-[#FB1E30] duration-1000 ease-in-out" : ""}`}
                                        onClick={() => handleTabClick(index)}>
                                        {tab.label}
                                    </li>
                                ))}
                            </ul>
                            <div className="tabs-content pt-7 md:pt-12">
                                {tabContents[activeTab] && (
                                    <div className="grid grid-cols-12 items-center">
                                        <div className="col-span-12 lg:col-span-6">
                                            <h3 className='text-[30px] xl:text-[40px] leading-[45px] xl:leading-[55px] font-semibold poppins mb-1 xl:mb-3 lg:text-start text-center'>{tabContents[activeTab].title}</h3>
                                            <p className='text-[15px] xl:text-[17px] leading-[29px] xl:leading-[33px] font-normal poppins mb-5 lg:mb-8 xl:pr-4 lg:text-left text-center'>{tabContents[activeTab].desc}</p>
                                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                                <div className="btn">
                                                    <a href="tel:012-345-6789" className=' text-white text-[16px] font-medium poppins w-[190px] h-[50px] flex items-center justify-center relative z-10'>
                                                        <Image src={BtnBg1} alt='Btn Background' fill={true} className='z-[-1] object-cover object-center' />
                                                        Contact Us Now
                                                    </a>
                                                </div>
                                                <div className="btn">
                                                    <a href="javascript:$zopim.livechat.window.show();" className=' text-black text-[16px] font-medium poppins w-[190px] h-[50px] flex items-center justify-center relative z-10'>
                                                        <Image src={BtnBg2} alt='Btn Background' fill={true} className='z-[-1] object-cover object-center' />
                                                        Get A Quote
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-6 lg:block hidden">
                                            <Image src={tabContents[activeTab].image} alt={tabContents[activeTab].title} className="w-7/12 mx-auto" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Platform
