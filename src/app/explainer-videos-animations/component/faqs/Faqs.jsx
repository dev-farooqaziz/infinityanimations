"use client"
import Image from "next/image";
// Import Components
import styles from '@/app/explainer-videos-animations/component/faqs/faqs.module.css';
import close from "media/banner/close.png"
import open from "media/banner/open.png"
import { useState } from 'react';

const Video = ({ content }) => {
    const { accordionData1, accordionData2 } = content;
    // Accordions
    const [activeIndex1, setActiveIndex1] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(false);
    const handleClick1 = (index) => {
        setActiveIndex1((prevIndex) => (prevIndex === index ? null : index));
        if (activeIndex2 !== null) {
            setActiveIndex2(null);
        }
    };

    const handleClick2 = (index) => {
        setActiveIndex2((prevIndex) => (prevIndex === index ? null : index));
        if (activeIndex1 !== null) {
            setActiveIndex1(null);
        }
    };

    return (
        <>
            <section className={`newcon ${styles.display}`}>
                <div class={`container mx-auto ${styles.pointer} `}>
                    <div class={`md:grid md:grid-cols-1`}>
                        <div className={styles.element}>
                            <h3 className={`fontsfpro mb-0 ${styles.heading}`}>FAQS</h3>
                            <p className={styles.wordsmost4}> For our customers, we
                                create meaningful and entertaining videos at Explain Art Animation. The entire video content is
                                produced and tailored to our client's requirements. Our team excels at creating high-quality
                                videos, whether you need a corporate video to boost your brand awareness or a product demo to
                                promote your services.Our process entails a series of meticulous animation and development
                                steps, from brainstorming various concepts to the final delivery. </p>
                        </div>
                    </div>
                </div>
                <div class={`container mx-auto ${styles.pointer} `}>
                    <div class={`md:grid md:grid-cols-2 gap-5`}>
                        <div>
                            {accordionData1.map((item, index) => (
                                <div key={index} className={`py-1 ${activeIndex1 === index ? 'border-white' : ' border-white'} border-b-2`}>
                                    <div className={`flex space-x-3 items-center justify-between cursor-pointer p-[15px] rounded-[10px] h-[65px] bg-gradient-to-r from-[#000] to-[#596062] ${activeIndex1 === index ? '' : ''}`}
                                        onClick={() => handleClick1(index)}>
                                        <h3 className={`text-[12px] w-[98%] pr-[20%] font-[600] capitalize montserrat text-white`}>{item.question}</h3>
                                        <span>{activeIndex1 === index ? <Image src={open} /> : <Image src={close} />}</span>
                                    </div>
                                    {activeIndex1 === index && (
                                        <div className='mt-2 pt-5 px-4 pb-5 bg-gradient-to-r from-[#d50d12] to-[#9c1418] rounded-[8px]'>
                                            <p className={`text-[14px] list-disc montserrat text-white ${styles.ani}`}>
                                                {item.ans}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div>
                            {accordionData2.map((item, index) => (
                                <div key={index} className={`py-1 ${activeIndex2 === index ? 'border-white' : ' border-white'} border-b-2`}>
                                    <div className={`flex space-x-3 items-center justify-between cursor-pointer p-[15px] rounded-[10px] h-[65px] bg-gradient-to-r from-[#000] to-[#596062] ${activeIndex2 === index ? '' : ''}`}
                                        onClick={() => handleClick2(index)}>
                                        <h3 className={`text-[12px] w-[98%] pr-[20%] font-[600] capitalize montserrat text-white`}>{item.question}</h3>
                                        <span>{activeIndex2 === index ? <Image src={open} /> : <Image src={close} />}</span>
                                    </div>
                                    {activeIndex2 === index && (
                                        <div className='mt-2 pt-5 px-4 pb-5 bg-gradient-to-r from-[#d50d12] to-[#9c1418] rounded-[8px]'>
                                            <p className={`text-[14px] list-disc montserrat text-white ${styles.ani}`}>
                                                {item.ans}
                                            </p>
                                        </div>
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

export default Video
