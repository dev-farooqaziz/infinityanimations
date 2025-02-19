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
            <section className='py-[50px] lg:py-[80px] bg-white'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="mb-[10px] md:mb-[50px]">
                        <h2 className='text-black poppins text-[25px] md:text-[30px] xl:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[50px] text-center mb-5'>Frequently <span className='text-[#F5090B]'>Asked</span> Question</h2>
                        <p className='text-[#231F20] text-[16px] poppins font-[400] pb-[17px] text-center lg:w-8/12 mx-auto leading-[25px] md:leading-[22px] mb-0'>At Infinity Animations our animators have magic in their hands with their perfect blend of creativity we create incredible visuals for your business. At every stage of the making, we ensure</p>
                    </div>
                    <div className="grid grid-cols-12 ">
                        <div className="col-span-12 lg:col-span-6">
                            {accordionData.map((item, index) => (
                                <div key={index} className={`py-1 ${activeIndex === index ? 'border-white' : ' border-white'} border-b-2`}>
                                    <div className={`flex space-x-3 items-center cursor-pointer p-[15px] h-[70px] text-black ${activeIndex === index ? 'border border-[#D2D2D2] rounded-t-[20px] !border-b-0' : ' bg-[#e6e7e8] rounded-[10px]'}`}
                                        onClick={() => handleClick(index)}>
                                        <h3 className={` capitalize poppins me-auto ${activeIndex === index ? 'text-[14px] lg:text-[18px] leading-[24px] lg:leading-[30px] font-semibold' : 'text-[12px] md:text-[16px] font-medium'}`}>{item.question}</h3>
                                        <span>{activeIndex === index ? <TiArrowSortedUp className='text-[20px] font-[900] bg-[#F5090B] text-white rounded-full' /> : <TiArrowSortedDown className='text-[20px] font-[900] text-white bg-black rounded-full' />}</span>
                                    </div>
                                    {activeIndex === index && (
                                        <div className={`pt-5 px-4 pb-4 ${activeIndex === index ? 'border border-[#D2D2D2] !border-t-0 rounded-b-[20px]' : 'border-0'}`}>
                                            <div className={`text-[16px] font-normal poppins text-black pb-1 ${styles.ani}`}>
                                                {item.answer}
                                            </div>
                                            {item.list && (
                                                <ul className='ps-4 pb-5'>
                                                    {item.list.map((listItem, listIndex) => (
                                                        <li key={listIndex} className={`${styles.list} sm:h-[30px]`}>
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
