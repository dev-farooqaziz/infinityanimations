"use client"
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Import Css
import styles from "./PortFolio.module.css"

import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"

// icons
import PlayIcon from "media/icons/play.png"

const Portfolio = ({ content }) => {
    const { title, para, tabInfo, tabContents, bg } = content;
    console.log(tabContents)
    //Tabs
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    // fancy box 
    function Fancybox(props) {
        const containerRef = useRef(null);

        useEffect(() => {
            const container = containerRef.current;

            const delegate = props.delegate || "[datafancybox]";
            const options = props.options || {};

            NativeFancybox.bind(container, delegate, options);

            return () => {
                NativeFancybox.unbind(container);
                NativeFancybox.close();
            };
        });

        return <div ref={containerRef}>{props.children}</div>;
    }
    return (
        <>
            <section className={`w-full flex items-center justify-start py-6 md:py-8 lg:py-16 ${bg}`} id='portfolio'>
                <div className="container">
                    <div className='flex items-center justify-around'>
                        <div className='w-full text-center'>
                            <h2 className="text-[20px] md:text-[25px] lg:text-[28px] xl:text-[36px] font-bold font-sans leading-tight text-black my-2">
                                {title}
                            </h2>
                            <p className="text-black w-full md:w-[80%] mx-auto text-[14px] sm:text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5">
                                {para}
                            </p>
                        </div>
                    </div>
                    <div className={`"mt-8 md:mt-12`}>
                        <ul className="flex flex-wrap justify-center text-sm font-medium text-center gap-3 md:gap-5 lg:w-11/12 mx-auto">
                            {tabInfo.map((tab, index) => (
                                <li key={index}
                                    className={`inline-block w-[160px] md:w-[180px] xl:w-[220px] py-3 text-[16px] lg:text-[20px] font-normal font-sans text-black border rounded-[27px] cursor-pointer hover:border-primary-100 ${activeTab === index ? 'border-primary-100' : 'border-[#646464]'}`}
                                    onClick={() => handleTabClick(index)}>
                                    {tab.label}
                                </li>
                            ))}
                        </ul>
                        <div className="tabs-content pt-7 md:pt-12">
                            {tabContents[activeTab] && (
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8'>
                                        {tabContents[activeTab].map((item, index) => (
                                            <Link key={index} href={item.video} datafancybox="gallery" className={`${styles.shadow} w-full h-full group`}>
                                                <div className="overlay relative">
                                                    <Image src={item.thumbnail} alt="Animation Studios" width={468} height={263} className='min-h-[263px]' />
                                                    <div className="bg-secondary-100/70 h-full w-full absolute left-[50%] top-[50%] translate-x-[-50%] group-hover:translate-y-[-132px] translate-y-[132px] flex items-center justify-center ">
                                                        <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </Fancybox>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
