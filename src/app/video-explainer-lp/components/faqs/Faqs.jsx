"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { HiChevronUp } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
// Images 
import Faq from "media/video-explainer/faq-side-img.png"
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
            <section className='py-[50px] bg-cover bg-center bg-[url("../../public/video-explainer/faq-bg.jpg")]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-6">
                            <h2 className='text-[#231f20] font-[700] montserrat text-[20px] md:text-[25px] lg:text-[30px]'>FAQS</h2>
                            <p className='text-[#231f20] text-[16px] lg:text-[18px] montserrat font-[400] py-[17px] leading-[22px] pb-[30px] md:pb-[60px]'>We have piled up a list of common questions that are usually asked by new clients who show their interest in hiring our services. You may get your answer to the following questions if you have any in your mind.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-6">
                            {accordionData.map((item, index) => (
                                <div key={index} className={`py-1 ${activeIndex === index ? 'border-white' : ' border-white'} border-b-2`}>
                                    <div className={`flex space-x-3 items-center cursor-pointer p-[15px] rounded-[10px] h-[65px] ${activeIndex === index ? 'bg-[#003466] text-white' : 'text-black bg-[#e6e7e8]'}`} onClick={() => handleClick(index)}>
                                        <span>{activeIndex === index ?
                                            <HiChevronUp className='text-[20px] font-[900]' /> :
                                            <HiChevronDown className='text-[20px] font-[900]' />}
                                        </span>
                                        <h3 className={`text-[12px] md:text-[16px] font-[500] capitalize montserrat`}>{item.question}</h3>
                                    </div>
                                    {activeIndex === index && (
                                        <div className='pt-5'>
                                            <div className={` text-[14px] sm:text-[16px] font-normal montserrat text-black pb-1 ${styles.ani}`}>{item.answer}</div>
                                            <ul>
                                                {item.items.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <div className={`block text-[14px] font-normal montserrat text-black pb-1`}>{subItem}</div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="col-span-12 lg:col-span-5 lg:block hidden">
                            <Image src={Faq} alt='Faqs' className='w-full' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqs
