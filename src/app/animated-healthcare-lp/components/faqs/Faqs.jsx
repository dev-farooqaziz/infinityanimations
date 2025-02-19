"use client"
//========== Imports
import React, { useState } from 'react'
//========== Import Icons
import { HiChevronUp } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
//========== Import CSS
import styles from "./faqs.module.css"
//========== Import Components
import CTA from "../cta/CTA";

//========== Accordion Data
const accordionData = [
    {
        question: 'What Types Of Healthcare Animations Do You Offer?',
        answer: "PPC is an online advertising model where advertisers pay a fee each time their ad is clicked. It's a way to buy visits to your site rather than earning them organically.",
    },
    {
        question: 'How Can Healthcare Animation Improve Patient Education?',
        answer: "PPC is an online advertising model where advertisers pay a fee each time their ad is clicked. It's a way to buy visits to your site rather than earning them organically.",
    },
    {
        question: 'What Is The Process For Creating A Healthcare Animation?',
        answer: "PPC is an online advertising model where advertisers pay a fee each time their ad is clicked. It's a way to buy visits to your site rather than earning them organically.",
    },
    {
        question: 'How Long Does It Take To Complete A Healthcare Animation Project?',
        answer: "PPC is an online advertising model where advertisers pay a fee each time their ad is clicked. It's a way to buy visits to your site rather than earning them organically.",
    }
];
//========== Accordion Data2
const accordionData2 = [
    {
        question: 'Can Healthcare Animations Be Customized For Specific Medical Fields?',
        answer: "PPC is an online advertising model where advertisers pay a fee each time their ad is clicked. It's a way to buy visits to your site rather than earning them organically.",
    },
    {
        question: 'What Is The Cost Of Creating A Healthcare Animation?',
        answer: "PPC is an online advertising model where advertisers pay a fee each time their ad is clicked. It's a way to buy visits to your site rather than earning them organically.",
    },
    {
        question: 'How Can Animations Be Used For Medical Training And Simulations?',
        answer: "PPC is an online advertising model where advertisers pay a fee each time their ad is clicked. It's a way to buy visits to your site rather than earning them organically.",
    },
    {
        question: 'Are Your Healthcare Animations Compliant With Medical Regulations?',
        answer: "PPC is an online advertising model where advertisers pay a fee each time their ad is clicked. It's a way to buy visits to your site rather than earning them organically.",
    },
    {
        question: 'Can We Use Your Animations For Marketing Our Healthcare Services?',
        answer: "PPC is an online advertising model where advertisers pay a fee each time their ad is clicked. It's a way to buy visits to your site rather than earning them organically.",
    },
];

const Faqs = () => {
    //========== Accordions
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(null);

    const handleClick = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
            setActiveIndex2(null);
        }
    };

    const handleClick2 = (index) => {
        if (activeIndex2 === index) {
            setActiveIndex2(null);
        } else {
            setActiveIndex2(index);
            setActiveIndex(null);
        }
    };

    return (
        <section className="py-10 lg:py-16 bg-white">
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center mb-8 lg:mb-10'>
                    <div className='w-full mb-5 lg:mb-0'>
                        <h2 className='text-[25px] lg:text-[30px] xl:text-[40px] leading-[35px] lg:leading-[40px] xl:leading-[50px] font-extrabold poppins mb-4 text-black'>Frequently <span className='text-[#F5090B]'> Asked</span> Questions</h2>
                        <p className='text-[16px] poppins leading-normal font-normal text-black'>We specialize in creating high-quality animated healthcare videos that enhance patient education and engagement.</p>
                    </div>
                    <div className="w-full flex items-center justify-start lg:justify-end">
                        <div className="w-max">
                            <CTA
                                text="Contact Us"
                                bg="bg-prime"
                                color={`text-white`}
                                href="tel:012-345-6789"
                                icon="/healthcare/icons/call.png"
                                iconCss="flex items-center justify-center w-[20px] h-[20px]"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10">
                    <div>
                        {accordionData.map((item, index) => (
                            <div key={index} className={`pt-5 border-b border-[#D4D4D4]`}>
                                <div className={`flex space-x-3 items-center justify-between cursor-pointer pb-[15px] rounded-[10px] h-[65px] ${activeIndex === index ? 'text-black' : 'text-black'}`} onClick={() => handleClick(index)}>
                                    <h3 className={`${activeIndex === index ? 'text-[18px]' : 'text-[16px]'} font-semibold capitalize poppins`}>{item.question}</h3>
                                    <span>
                                        {activeIndex === index ? (
                                            <div className="w-[20px] h-[20px] bg-[#F5090B] rounded-full flex items-center justify-center">
                                                <HiChevronUp className='text-[20px] font-[900] text-white' />
                                            </div>
                                        ) : (
                                            <div className="w-[20px] h-[20px] bg-[#D9D9D9] rounded-full flex items-center justify-center">
                                                <HiChevronDown className='text-[20px] font-[900] text-white' />
                                            </div>
                                        )}
                                    </span>
                                </div>
                                {activeIndex === index && (
                                    <div className={`text-[15px] poppins text-[#6B6B6B] pb-4 ${styles.ani}`}>{item.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div>
                        {accordionData2.map((item, index) => (
                            <div key={index} className={`pt-5 border-b border-[#D4D4D4]`}>
                                <div className={`flex space-x-3 items-center justify-between cursor-pointer pb-[15px] rounded-[10px] h-[65px] ${activeIndex2 === index ? 'text-black' : 'text-black'}`} onClick={() => handleClick2(index)}>
                                    <h3 className={`${activeIndex2 === index ? 'text-[18px]' : 'text-[16px]'} font-semibold capitalize poppins`}>{item.question}</h3>
                                    <span>
                                        {activeIndex2 === index ? (
                                            <div className="w-[20px] h-[20px] bg-[#F5090B] rounded-full flex items-center justify-center">
                                                <HiChevronUp className='text-[20px] font-[900] text-white' />
                                            </div>
                                        ) : (
                                            <div className="w-[20px] h-[20px] bg-[#D9D9D9] rounded-full flex items-center justify-center">
                                                <HiChevronDown className='text-[20px] font-[900] text-white' />
                                            </div>
                                        )}
                                    </span>
                                </div>
                                {activeIndex2 === index && (
                                    <div className={`text-[15px] poppins text-[#6B6B6B] pb-4 ${styles.ani}`}>{item.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faqs;
