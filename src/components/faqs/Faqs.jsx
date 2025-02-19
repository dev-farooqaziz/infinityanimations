"use client"
import { useState } from "react";
import Image from "next/image";
// Import Images
import arrowDown from "media/icons/arrow-down.png";
import arrowUp from "media/icons/arrow-up.png";
// Import CSS
import styles from "./faqs.module.css"

const faqs = ({ content }) => {
    const { title, accordionData } = content;
    // Accordions
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <>
            <section className={`w-full flex items-center justify-start py-6 md:py-12 lg:py-16`}>
                <div className="container">
                    <div className={`flex items-center justify-around`}>
                        <div className='w-full text-center'>
                            <h1 className="text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans leading-tight my-2">
                                {title}
                            </h1>
                        </div>
                    </div>
                    <div className={`px-4 sm:px-8 lg:max-w-7xl mx-auto mt-7 sm:mt-12`}>
                        <div className="grid">
                            {accordionData.map((item, index) => (
                                <div key={index} className={`py-1 ${activeIndex === index ? 'border-primary-100' : ' border-white'} border-b-2`}>
                                    <div className="flex justify-between items-center cursor-pointer"
                                        onClick={() => handleClick(index)}>
                                        <h3 className={`text-[18px] sm:text-[20px] font-bold font-sans`}>{item.question}</h3>
                                        <span>{activeIndex === index ? <Image src={arrowUp} alt="Infinity Animation" /> : <Image src={arrowDown} alt="Infinity Animation" />}</span>
                                    </div>
                                    {activeIndex === index && (
                                        <div className={`text-[14px] sm:text-[16px] font-normal font-sans pb-1 ${styles.ani}`}>{item.answer}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default faqs