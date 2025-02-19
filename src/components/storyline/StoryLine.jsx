"use client"
import { useState } from "react";
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Images
import arrow from "media/icons/arrow.png";
import PlayIcon from "media/icons/play.png"
// Import CSS
import styles from "./StoryLine.module.css"

const StoryLine = ({ content }) => {
    const { subtitle, title, para, accordionData } = content;
    // Accordions
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    // Set styling
    const router = usePathname();
    let main;
    let headings;
    let row;
    let text;
    let padding;
    let accImg;
    switch (router) {
        case "video-animation-process":
            main = 'pt-0'
            headings = 'hidden'
            row = 'items-start'
            text = 'text-[34px]'
            padding = 'py-8'
            accImg = 'border rounded-3xl'
            break;
        default:
            break;
    }

    // video code start
    const handleVideoPlay = (e) => {
        const video = e.currentTarget.querySelector('video');
        video.play();
    };
    const handleVideoPause = (e) => {
        const video = e.currentTarget.querySelector('video');
        video.pause();
    };

    return (
        <>
            <section className={`w-full flex items-center justify-start py-6 md:py-12 lg:py-16 ${main}`}>
                <div className="container">
                    <div className={`flex items-center justify-around ${headings}`}>
                        <div className='w-full text-center'>
                            <h3 className="text-[20px] sm:text-[30px] font-semibold font-sans text-secondary-100 leading-tight">
                                {subtitle}
                            </h3>
                            <h2 className="text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans leading-tight my-2">
                                {title}
                            </h2>
                            <p className="sm:w-[80%] mx-auto text-[14px] sm:text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5">
                                {para}
                            </p>
                        </div>
                    </div>
                    <div className={`flex flex-col lg:flex-row items-center gap-y-8 justify-between mt-7 sm:mt-12 ${row}`}>
                        <div className="w-full md:w-[70%]">
                            <div className="grid">
                                {accordionData.map((item, index) => (
                                    <div key={index} className={`py-4 ${padding} ${activeIndex === index ? 'border-primary-100' : ' border-white'} border-b-2`}>
                                        <div className="flex justify-between items-center cursor-pointer"
                                            onClick={() => handleClick(index)}>
                                            <h3 className={`text-[18px] sm:text-[20px] font-normal font-sans ${text}`}>{item.question}</h3>
                                            <span>
                                                {activeIndex === index ?
                                                    <div className="flex items-center justify-center w-[30px] h-[30px] bg-prime rounded-full">
                                                        <Image src={arrow} className="w-[40%]" alt="Infinity Animation" />
                                                    </div>
                                                    :
                                                    <div className="flex items-center justify-center w-[30px] h-[30px] bg-white rounded-full">
                                                        <Image src={arrow} className="w-[40%] rotate-180 invert" alt="Infinity Animation" />
                                                    </div>
                                                }
                                            </span>
                                        </div>
                                        {activeIndex === index && (
                                            <div className={`text-[14px] sm:text-[16px] font-normal font-sans pb-1 ${styles.ani}`}>{item.answer}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-[70%] 220px sm:h-[740px]">
                            {activeIndex !== null && (
                                <figure className="relative h-full overlay group overflow-hidden" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                    <video src={accordionData[activeIndex].StoryLineImg} loop={true} muted={true} className='relative w-full lg:w-[95%] lg:ml-auto md:h-full object-cover'></video>
                                    <div className=" bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center ">
                                        <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                    </div>
                                </figure>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StoryLine