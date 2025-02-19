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
    const { title, para, videoItems, bg } = content;
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
            <section className={`w-full flex items-center justify-start pt-[40px] pb-0 md:py-[40px] lg:py-[60px] ${bg}`} id='portfolio'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-6 lg:max-w-7xl mx-auto">
                        <div className="col-span-12 md:mt-4">
                            <h2 className='text-[#000000] text-center font-[600] poppins text-[32px] md:text-[42px] lg:text-[48px]'>{title}</h2>
                            <p className='text-[#231F20] text-[16px] poppins font-[400] py-[17px] text-center lg:w-[90%] mx-auto leading-[20px] md:leading-[22px] mb-0'>{para}</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="tabs-content">
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8'>
                                    {videoItems.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.video}
                                            passHref
                                            datafancybox="gallery"
                                            className={`${styles.shadow} w-full h-full group`}
                                        >
                                            <div className="overlay relative">
                                                <Image
                                                    src={item.thumbnail}
                                                    alt={`Infinity Animations ${index + 1}`}
                                                    className='h-[263px] min-w-[468px]'
                                                    width={468}
                                                    height={263}
                                                />
                                                <div
                                                    className="bg-slate-700/75 h-full w-full absolute left-[0%] top-[0%] flex items-center justify-center"
                                                >
                                                    <Image
                                                        src={PlayIcon}
                                                        alt='Play-icon'
                                                        className={`${styles.animi} brightness-200 invert-0 w-[75px]`}
                                                        width={75}
                                                        height={75}
                                                    />
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </Fancybox>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
