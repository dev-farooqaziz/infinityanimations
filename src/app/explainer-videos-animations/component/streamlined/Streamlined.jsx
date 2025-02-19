"use client"
import { useEffect, useRef, useState } from 'react';
// Import Css
import styles from "./streamlined.module.css"
import Link from 'next/link';
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
import Image from 'next/image';
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// icons
import PlayIcon from "media/icons/play.png"

const Portfolio = ({ content }) => {
    const { title, para, tabInfo, tabContents } = content;
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

    // ====== Responsive Slider 
    const testiSlider = {
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };
    return (
        <>
            <section className={`w-full flex items-center justify-start py-6 md:py-8 lg:py-16 ${styles.display}`}>
                <div className="container">
                    <div className='flex items-center justify-around'>
                        <div className='w-full text-center'>
                            <h1 className="text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans leading-tight my-2 text-white">
                                {title}
                            </h1>
                            <p className="w-full md:w-[80%] mx-auto text-[14px] sm:text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5">
                                {para}
                            </p>
                        </div>
                    </div>
                    <div className={`"mt-8 md:mt-12`}>
                        <ul className="flex flex-wrap justify-center text-sm font-medium text-center gap-3 md:gap-5 lg:w-11/12 mx-auto">
                            {tabInfo.map((tab, index) => (
                                <li key={index}
                                    className={`inline-block w-[180px] xl:w-[220px] py-3 text-[16px] lg:text-[20px] font-normal font-sans text-white border rounded-[27px] cursor-pointer hover:border-primary-100 ${activeTab === index ? 'border-primary-100' : 'border-[#646464]'}`}
                                    onClick={() => handleTabClick(index)}>
                                    {tab.label}
                                </li>
                            ))}
                        </ul>
                        <div className="tabs-content pt-7 md:pt-12 hidden md:block">
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
                                                    <Image src={item.thumbnail} alt="Infinity Animations" width={468} height={263} className='min-h-[263px]' />
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
                        <div className="block md:hidden">
                            {tabContents[activeTab] && (
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>
                                    <Slider {...testiSlider} className="testiSlider">
                                        {tabContents[activeTab].map((item, index) => (
                                            <Link key={index} href={item.video} datafancybox="gallery" className={`${styles.shadow} w-full h-full group`}>
                                                <div className="overlay relative">
                                                    <Image src={item.thumbnail} alt="Infinity Animations" width={468} height={263} className='min-h-[263px]' />
                                                    <div className="bg-secondary-100/70 h-full w-full absolute left-[50%] top-[50%] translate-x-[-50%] group-hover:translate-y-[-132px] translate-y-[132px] flex items-center justify-center ">
                                                        <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </Slider>
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
