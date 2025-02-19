"use client"
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
// Import Css
import styles from "./PortFolio.module.css"
// icons
import PlayIcon from "media/infinity-studio/play2.png"


const Portfolio = ({ content }) => {
    const { title, para, tabInfo, tabContents } = content;
    //========= tabs =========
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    //========= fancy box =========
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

    //========= video code start =========
    const handleVideoPlay = (e) => {
        const video = e.currentTarget.querySelector('video');
        video.play();
    };
    const handleVideoPause = (e) => {
        const video = e.currentTarget.querySelector('video');
        video.pause();
    };
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <>
            <section className={`w-full flex items-center justify-start pb-12 pt-6 py-[50px] lg:py-[90px] bg-[#F3F3F3]`}>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className='flex items-center justify-around'>
                        <div className='w-full text-center'>
                            <h2 className={`text-black poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[60px] text-center mb-2`}>{title}</h2>
                            <p className="text-[14px] md:text-[16px] poppins text-normal text-black text-center xl:w-7/12 mx-auto mb-5 md:mb-0">{para}</p>
                        </div>
                    </div>
                    <div className={`"mt-8 md:mt-8`}>
                        <ul className="flex flex-wrap justify-center text-sm font-medium text-center gap-3 md:gap-5 mx-auto">
                            {tabInfo.map((tab, index) => (
                                <li key={index}
                                    className={`w-max px-[10px] lg:px-[35px] h-[35px] lg:h-[55px] flex items-center justify-center text-[12px] lg:text-[18px] font-semibold poppins border rounded-[27px] cursor-pointer border-primary-100 hover:bg-[#ff2d4b] hover:text-white hover:duration-700 duration-700 ease-in-out ${activeTab === index ? 'bg-[#FF2D4B] text-white' : 'bg-transparent text-black'}`}
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
                                                <div className="overlay relative ">
                                                    <Image src={item.thumbnail} alt="Infinity Animations" className='h-[263px] min-w-[468px]' />
                                                    <div className="bg-slate-700/75 h-full w-full 
                                                   absolute left-[0%] top-[0%] 
                                                    flex items-center justify-center ">
                                                        <Image src={PlayIcon} alt='Play-icon' className={`${styles.animi} brightness-200 invert-0 w-[75px]`} />
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </Fancybox>
                            )}
                        </div>
                        <div className="mt-10 w-max mx-auto">
                            <a href="javascript:$zopim.livechat.window.show();" className='flex items-center text-[14px] xl:text-[16px] text-white font-semibold poppins ml-[10px] py-[12px] px-[10px] xl:px-[20px] tracking-[.3px] rounded-[5px] leading-[20px] duration-700 transition-all bg-[#FF2D4B] hover:duration-700 hover:transition-all'>
                                Make an Animation
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio