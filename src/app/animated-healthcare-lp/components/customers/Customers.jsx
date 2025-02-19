"use client"
//========== Imports
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
//========== Import Fancybox
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
//========== Import Css
import styles from "./Customers.module.css"
//========== Import Components
import { AutoPlay } from '@/components/sliders';
//========= Import Icons 
import { FaStar } from 'react-icons/fa';
//========= Import Images 
import client from "media/healthcare/client.png";
import clutch from "media/healthcare/icons/clutch.png"
import google from "media/healthcare/icons/google.png"
import PlayIcon from "media/healthcare/icons/play.png"

//=====Customers Data=====// 
const customers = [
    {
        para: "We specialize in creating high-quality animated healthcare videos that enhance patient education and engagement. Our expert team delivers compelling visuals to make complex medical.",
        name: "Ernest L. Wynn",
        designation: "Video Production Company",
        icon: clutch,
        video: "https://player.vimeo.com/progressive_redirect/playback/911720231/rendition/1080p/file.mp4?loc=external&signature=d9b02a0f53aa8784b0e3ed063720d29b1970b3e3b399f1d34316482874fdaa86",
        thumbnail: client,
    },
    {
        para: "We specialize in creating high-quality animated healthcare videos that enhance patient education and engagement. Our expert team delivers compelling visuals to make complex medical.",
        name: "Ernest L. Wynn",
        designation: "Video Production Company",
        icon: google,
        video: "https://player.vimeo.com/progressive_redirect/playback/911726090/rendition/1080p/file.mp4?loc=external&signature=9e89bcc5fc0c0794397cf4af48ddf2c08a91de61f1595d2508f39fb7db153987",
        thumbnail: client,
    },
];

const Customers = () => {
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
            <section className="py-10 lg:py-16 bg-[#F3F3F3] relative">
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className='flex items-center justify-around mb-8 lg:mb-14'>
                        <div className='w-full text-center'>
                            <h2 className='text-[25px] lg:text-[30px] xl:text-[40px] leading-[35px] lg:leading-[40px] xl:leading-[50px] font-extrabold poppins mb-4 text-black text-center'>What Our <span className='text-[#F5090B]'>Customers</span> Are Saying</h2>
                        </div>
                    </div>
                    <AutoPlay arrowPosition="">
                        {customers.map((item, index) => (
                            <div className="grow-0 shrink-0 basis-[100%] lg:basis-6/12 pl-5 md:pl-10">
                                <div className="grid grid-cols-12 items-center gap-y-6 md:gap-10">
                                    <div className="col-span-12 md:col-span-8 flex flex-col">
                                        <div className="flex items-center gap-1">
                                            <FaStar className="text-[#FFBB00]" />
                                            <FaStar className="text-[#FFBB00]" />
                                            <FaStar className="text-[#FFBB00]" />
                                            <FaStar className="text-[#FFBB00]" />
                                            <FaStar className="text-[#FFBB00]" />
                                        </div>
                                        <p className='text-[16px] italic poppins leading-relaxed font-normal text-black mt-4 mb-6'>{item.para}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col">
                                                <h5 className='text-[18px] italic poppins font-bold text-black'>{item.name}</h5>
                                                <h6 className="text-[12px] italic poppins text-[#BBBBBB]">{item.designation}</h6>
                                            </div>
                                            <div className="w-[8%] mr-5 md:mr-0">
                                                <Image src={item.icon} alt="Infinity Animations" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-4 overlay relative cursor-pointer">
                                        <Fancybox options={{
                                            Carousel: {
                                                infinite: false,
                                            },
                                        }}>
                                            <Link key={index} href={item.video} datafancybox="gallery" className="w-full h-full group">
                                                <div className="overlay relative cursor-pointer">
                                                    <Image src={item.thumbnail} alt="Infinity Animations" />
                                                    <div className="h-full w-full absolute left-[50%] top-[50%] lg:top-[132px] translate-x-[-50%] translate-y-[-250px] md:translate-y-[-140px] lg:translate-y-[-132px] flex items-center justify-center">
                                                        <Image src={PlayIcon} alt='Play-icon' className={`${styles.animi} w-[50px]`} />
                                                    </div>
                                                </div>
                                            </Link>
                                        </Fancybox>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </AutoPlay>
                </div>
            </section>
        </>
    )
}

export default Customers
