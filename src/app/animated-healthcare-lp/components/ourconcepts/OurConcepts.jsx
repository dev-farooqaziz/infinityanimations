"use client"
//========== Imports
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
//========== Import Fancybox
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
//========== Import Css
import styles from "./OurConcepts.module.css"
//========== Import Components
import CTA from "../cta/CTA";
//========= Import Images 
import concept1 from "media/healthcare/concept1.png";
import concept2 from "media/healthcare/concept2.png";
import PlayIcon from "media/healthcare/icons/play.png"

const OurConcepts = () => {
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
            <section className="py-10 lg:py-16 bg-white">
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className='flex items-center justify-around mb-10 lg:mb-14'>
                        <div className='w-full text-center'>
                            <h2 className='text-[25px] lg:text-[30px] xl:text-[40px] leading-[35px] lg:leading-[40px] xl:leading-[50px] font-extrabold poppins mb-4 text-black text-center'>Our Healthcare <span className='text-[#F5090B]'>Animation</span> Services</h2>
                            <p className='text-[16px] poppins leading-normal font-normal text-black text-center w-full lg:w-8/12 mx-auto'>We specialize in creating high-quality animated healthcare videos that enhance patient education and engagement. Our expert team delivers compelling visuals to make complex medical</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-8 lg:gap-y-0">
                        <div className="w-full lg:w-11/12 5xl:w-10/12">
                            <h4 className='text-[24px] 5xl:text-[28px] tracking-wide poppins font-bold text-black'>
                                Simplifying Complex Concepts
                            </h4>
                            <p className='text-[16px] poppins leading-relaxed font-normal text-black mt-4 mb-6'>Our animations break down intricate medical procedures, conditions, and treatments into simple, easy-to-understand visuals, helping patients grasp difficult concepts with ease.</p>
                            <div className="w-max">
                                <CTA
                                    text="Get A Quote"
                                    bg="bg-prime"
                                    color={`text-white`}
                                    href="javascript:$zopim.livechat.window.show();"
                                />
                            </div>
                        </div>
                        <Fancybox options={{
                            Carousel: {
                                infinite: false,
                            },
                        }}>
                            <Link href="https://player.vimeo.com/progressive_redirect/playback/911720231/rendition/1080p/file.mp4?loc=external&signature=d9b02a0f53aa8784b0e3ed063720d29b1970b3e3b399f1d34316482874fdaa86" datafancybox="gallery" className="w-full h-full group">
                                <div className="overlay relative cursor-pointer">
                                    <Image src={concept1} alt="Infinity Animations" />
                                    <div className="h-full w-full absolute left-[50%] top-[50%] lg:top-[132px] translate-x-[-50%] translate-y-[-115px] md:translate-y-[-210px] lg:translate-y-[-132px] flex items-center justify-center ">
                                        <Image src={PlayIcon} alt='Play-icon' className={`${styles.animi} w-[65px]`} />
                                    </div>
                                </div>
                            </Link>
                        </Fancybox>

                        <Fancybox options={{
                            Carousel: {
                                infinite: false,
                            },
                        }}>
                            <Link href="https://player.vimeo.com/progressive_redirect/playback/911720231/rendition/1080p/file.mp4?loc=external&signature=d9b02a0f53aa8784b0e3ed063720d29b1970b3e3b399f1d34316482874fdaa86" datafancybox="gallery" className="w-full h-full group">
                                <div className="overlay relative cursor-pointer">
                                    <Image src={concept2} alt="Infinity Animations" />
                                    <div className="h-full w-full absolute left-[50%] top-[50%] lg:top-[132px] translate-x-[-50%] translate-y-[-115px] md:translate-y-[-210px] lg:translate-y-[-132px] flex items-center justify-center ">
                                        <Image src={PlayIcon} alt='Play-icon' className={`${styles.animi} w-[65px]`} />
                                    </div>
                                </div>
                            </Link>
                        </Fancybox>
                        <div className="w-full lg:w-11/12 5xl:w-10/12 md:ml-auto">
                            <h4 className='text-[24px] 5xl:text-[28px] tracking-wide poppins font-bold text-black'>
                                Engaging Patient Education
                            </h4>
                            <p className='text-[16px] poppins leading-relaxed font-normal text-black mt-4 mb-6'>Our animations break down intricate medical procedures, conditions, and treatments into simple, easy-to-understand visuals, helping patients grasp difficult concepts with ease.</p>
                            <div className="w-max">
                                <CTA
                                    text="Get A Quote"
                                    bg="bg-prime"
                                    color={`text-white`}
                                    href="javascript:$zopim.livechat.window.show();"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurConcepts
