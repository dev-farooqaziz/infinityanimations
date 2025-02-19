"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { HiChevronUp } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
// Images 
import Faq from "media/video-explainer2/faqs.png"
// Import CSS
import styles from "./faqs.module.css"

const Faqs = ({ content }) => {
    const { accordionData } = content;
    // Accordions
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? true : index));
    };

    return (
        <>
            <section className='py-[50px] bg-cover bg-center bg-[#091416]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-6">
                            <h2 className='text-white font-[700] montserrat text-[20px] md:text-[25px] lg:text-[30px]'>FAQS</h2>
                            <p className='text-white text-[16px] montserrat font-[400] py-[17px] leading-[22px] pb-[30px] md:pb-[30px]'>Step into the realm of visual enchantment with our video animation services. We breathe life into your ideas, utilizing a diverse palette ranging from dynamic 2D animations to immersive 3D experiences. Whether you're seeking the whimsy of character animations, the sleekness of motion graphics, or the depth of 3D worlds, our team of creatives is here to turn your vision into a captivating visual masterpiece</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-12 lg:col-span-6">
                            {accordionData.map((item, index) => (
                                <div key={index} className={`py-2 ${activeIndex === index ? 'border-white' : ' border-white'}`}>
                                    <div className={`flex space-x-1 items-start cursor-pointer p-[15px] rounded-[10px] h-[65px] ${activeIndex === index ? 'bg-[#A70A0E] text-white' : 'text-black bg-[#e6e7e8]'}`}
                                        onClick={() => handleClick(index)}>
                                        <span>{activeIndex === index ? <HiChevronUp className='text-[20px] font-[900]' /> : <HiChevronDown className='text-[20px] font-[900]' />}</span>
                                        <h3 className={`text-[12px] md:text-[14px] tracking-wide font-[500] capitalize montserrat`}>{item.question}</h3>
                                    </div>
                                    {activeIndex === index && (
                                        <div className='pt-3'>
                                            <div className={` text-[14px] sm:text-[16px] font-normal montserrat text-white pb-3 ${styles.ani}`}>{item.answer}</div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="col-span-12 lg:col-span-5 lg:block hidden">
                            <Image src={Faq} alt='Faqs' className='w-11/12 relative top-[-120px] left-[15%]' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqs
