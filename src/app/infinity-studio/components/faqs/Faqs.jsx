"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
// Images 
import Faq from "media/infinity-studio/faqs.png"
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
            <section className='pt-[40px] md:pt-[80px] '>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="mb-[10px] md:mb-[50px]">
                        <h3 className='text-[#003262] text-center font-[600] poppins text-[20px] md:text-[30px] lg:text-[36px]'>FAQS</h3>
                        <p className='text-[#231F20] text-[16px] poppins font-[400] py-[17px] text-center lg:w-[90%] mx-auto leading-[20px] md:leading-[22px] mb-0'>For our customers, we create meaningful and entertaining videos at Explain Art Animation. The entire video content is produced and tailored to our client's requirements. Our team excels at creating high-quality videos, whether you need a corporate video to boost your brand awareness or a product demo to promoteyour services. Our process entails a series of meticulous animation and development steps, from brainstorming various concepts to the final delivery.</p>
                    </div>
                    <div className="grid grid-cols-12 ">
                        <div className="col-span-12 lg:col-span-6">
                            {accordionData.map((item, index) => (
                                <div key={index} className={`py-1 ${activeIndex === index ? 'border-white' : ' border-white'} border-b-2`}>
                                    <div className={`flex space-x-3 items-center cursor-pointer p-[15px] rounded-[10px] h-[65px] ${activeIndex === index ? 'bg-[#003466] text-white' : 'text-black bg-[#e6e7e8]'}`}
                                        onClick={() => handleClick(index)}>
                                        <h3 className={`text-[12px] md:text-[16px] font-[500] capitalize poppins me-auto`}>{item.question}</h3>
                                        <span>{activeIndex === index ? <TiArrowSortedUp className='text-[20px] font-[900]' /> : <TiArrowSortedDown className='text-[20px] font-[900]' />}</span>
                                    </div>
                                    {activeIndex === index && (
                                        <div className='pt-5'>
                                            <div className={`text-[16px] font-normal poppins text-black pb-1 ${styles.ani}`}>
                                                {item.answer}
                                            </div>
                                            {item.list && (
                                                <ul className='ps-4 pb-2'>
                                                    {item.list.map((listItem, listIndex) => (
                                                        <li key={listIndex} className={`${styles.list} sm:h-[20px]`}>
                                                            <div className={`block text-[14px] font-normal poppins text-black pb-1`}>
                                                                {listItem}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="col-span-12 lg:col-span-6 lg:block hidden ">
                            <div className='w-[75%] mx-auto'>
                                <Image src={Faq} alt='Faqs' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqs
