"use client"
//========== Imports
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
//========== Import Components
import CTA from "../cta/CTA";
//========== Import Css
import styles from "./PortFolio.module.css"
//======Thumbnails Images 
import PlayIcon from "media/healthcare/icons/play.png"
import portfolio1 from "media/healthcare/portfolio1.png";
import portfolio2 from "media/healthcare/portfolio2.png";
import portfolio3 from "media/healthcare/portfolio3.png";
import portfolio4 from "media/healthcare/portfolio4.png";
import portfolio5 from "media/healthcare/portfolio5.png";
import portfolio6 from "media/healthcare/portfolio6.png";
import portfolio7 from "media/healthcare/portfolio7.png";
import portfolio8 from "media/healthcare/portfolio8.png";
import portfolio9 from "media/healthcare/portfolio9.png";

//=====Portfilio Data=====// 
const portfolio = [
    {
        video: "https://player.vimeo.com/progressive_redirect/playback/911720231/rendition/1080p/file.mp4?loc=external&signature=d9b02a0f53aa8784b0e3ed063720d29b1970b3e3b399f1d34316482874fdaa86",
        thumbnail: portfolio1,
    },
    {
        video: "https://player.vimeo.com/progressive_redirect/playback/911726090/rendition/1080p/file.mp4?loc=external&signature=9e89bcc5fc0c0794397cf4af48ddf2c08a91de61f1595d2508f39fb7db153987",
        thumbnail: portfolio2,
    },
    {
        video: "https://player.vimeo.com/progressive_redirect/playback/911729442/rendition/1080p/file.mp4?loc=external&signature=e16f08c552d3f87499d9225879c3819c9a220295567b993dfe101e7a1e2089c3",
        thumbnail: portfolio3,
    },
    {
        video: "https://player.vimeo.com/progressive_redirect/playback/911724561/rendition/1080p/file.mp4?loc=external&signature=efccabbedd550a6e10912f062b329c284dd086ef4babfb053151a34ea77e6466",
        thumbnail: portfolio4,
    },
    {
        video: "https://player.vimeo.com/progressive_redirect/playback/911728642/rendition/1080p/file.mp4?loc=external&signature=44469d3d3ef50562def357cdf05ef68b8d9eb1f6c874c98d4b7a6772c4b7f173",
        thumbnail: portfolio5,
    },
    {
        video: "https://player.vimeo.com/progressive_redirect/playback/911724677/rendition/1080p/file.mp4?loc=external&signature=32ea21fdd1dded95912051ee5fefdc0deefb2e26b2598ae835cf57397b1a87e6",
        thumbnail: portfolio6,
    },
    {
        video: "https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12",
        thumbnail: portfolio7,
    },
    {
        video: "https://player.vimeo.com/progressive_redirect/playback/907825999/rendition/1080p/file.mp4?loc=external&signature=a043a1cc2b10aa769f8e7b926feccfe1b1f67af69dc5676d5cd8ae0f116850e5",
        thumbnail: portfolio8,
    },
    {
        video: "https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969",
        thumbnail: portfolio9,
    }
];

const Portfolio = () => {
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

    return (
        <>
           <section className="py-10 lg:py-16 bg-white w-full flex items-center justify-start" id='Portfolio'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className='flex items-center justify-around'>
                        <div className='w-full text-center'>
                            <h2 className='text-[25px] lg:text-[30px] xl:text-[40px] leading-[35px] lg:leading-[40px] xl:leading-[50px] font-extrabold poppins mb-4 text-black text-center'>Our Healthcare <span className='text-[#F5090B]'>Animation</span> Portfolio</h2>
                            <p className='text-[16px] poppins leading-normal font-normal text-black text-center w-full lg:w-8/12 mx-auto'>We specialize in creating high-quality animated healthcare videos that enhance patient education and engagement. Our expert team delivers compelling visuals to make complex medical</p>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-14">
                        <Fancybox options={{
                            Carousel: {
                                infinite: false,
                            },
                        }}>
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                                {portfolio.map((item, index) => (
                                    <Link key={index} href={item.video} datafancybox="gallery" className={`${styles.shadow} w-full h-full group`}>
                                        <div className="overlay relative ">
                                            <Image src={item.thumbnail} alt="Infinity Animations" />
                                            <div className="h-full w-full absolute left-[50%] top-[50%] lg:top-[132px] translate-x-[-50%] translate-y-[-115px] md:translate-y-[-105px] lg:translate-y-[-132px] flex items-center justify-center ">
                                                <Image src={PlayIcon} alt='Play-icon' className={`${styles.animi} w-[65px]`} />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </Fancybox>
                    </div>
                    <div className="flex items-center justify-center gap-4 lg:gap-8 mt-10">
                        <CTA
                            text="Contact Us"
                            bg="bg-prime"
                            color={`text-white`}
                            href="tel:012-345-6789"
                            icon="/healthcare/icons/call.png"
                            iconCss="flex items-center justify-center w-[20px] h-[20px]"
                        />
                        <CTA
                            text="Get A Quote"
                            bg="bg-transparent"
                            color={`text-black`}
                            border={`border-2 border-[#000000]`}
                            href="javascript:$zopim.livechat.window.show();"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio