"use client"
//========== Imports
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
//========== Import Fancybox
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
//========== Import Css
import styles from "./Casestudies.module.css"
//========== Import Components
import CTA from "../cta/CTA";
import { AutoPlay } from '@/components/sliders';
//========= Import Images 
import casestudy1 from "media/healthcare/casestudy1.png";
import casestudy2 from "media/healthcare/casestudy2.png";
import PlayIcon from "media/healthcare/icons/play.png"

//=====Casestudies Data=====// 
const caseStudies = [
    {
        video: "https://player.vimeo.com/progressive_redirect/playback/911720231/rendition/1080p/file.mp4?loc=external&signature=d9b02a0f53aa8784b0e3ed063720d29b1970b3e3b399f1d34316482874fdaa86",
        thumbnail: casestudy1,
        title: "Our Healthcare Animation Casestudies",
        para: "We specialize in creating high-quality animated healthcare videos that enhance patient education and engagement. Our expert team delivers compelling visuals to make complex medical information easily understandable.",
    },
    {
        video: "https://player.vimeo.com/progressive_redirect/playback/911726090/rendition/1080p/file.mp4?loc=external&signature=9e89bcc5fc0c0794397cf4af48ddf2c08a91de61f1595d2508f39fb7db153987",
        thumbnail: casestudy2,
        title: "Our Healthcare Animation Casestudies",
        para: "We specialize in creating high-quality animated healthcare videos that enhance patient education and engagement. Our expert team delivers compelling visuals to make complex medical information easily understandable.",
    },
];

const Casestudies = () => {
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
                            <h2 className='text-[25px] lg:text-[30px] xl:text-[40px] leading-[35px] lg:leading-[40px] xl:leading-[50px] font-extrabold poppins mb-4 text-black text-center'>Our Healthcare <span className='text-[#F5090B]'>Animation</span> Casestudies</h2>
                            <p className='text-[16px] poppins leading-normal font-normal text-black text-center w-full lg:w-8/12 mx-auto'>We specialize in creating high-quality animated healthcare videos that enhance patient education and engagement. Our expert team delivers compelling visuals to make complex medical</p>
                        </div>
                    </div>
                    <AutoPlay arrowPosition="">
                        {caseStudies.map((item, index) => (
                            <div key={index} className="grow-0 shrink-0 basis-[100%] lg:basis-6/12 pl-5">
                                <div className="flex flex-col bg-white">
                                    <Fancybox options={{
                                        Carousel: {
                                            infinite: false,
                                        },
                                    }}>
                                        <Link key={index} href={item.video} datafancybox="gallery" className="w-full h-full group">
                                            <div className="overlay relative cursor-pointer">
                                                <Image src={item.thumbnail} alt="Infinity Animations" />
                                                <div className="h-full w-full absolute left-[50%] top-[50%] lg:top-[132px] translate-x-[-50%] translate-y-[-80px] md:translate-y-[-140px] lg:translate-y-[-132px] flex items-center justify-center ">
                                                    <Image src={PlayIcon} alt='Play-icon' className={`${styles.animi} w-[65px]`} />
                                                </div>
                                            </div>
                                        </Link>
                                    </Fancybox>
                                    <div className="px-5 py-6 lg:py-10">
                                        <h4 className='text-[20px] tracking-wide poppins font-bold text-black'>
                                            {item.title}
                                        </h4>
                                        <p className='text-[16px] poppins leading-relaxed font-normal text-black mt-4 mb-6'>{item.para}</p>
                                        <div className="w-max">
                                            <CTA
                                                text="View Casestudy"
                                                bg="bg-prime"
                                                color={`text-white`}
                                                href="javascript:$zopim.livechat.window.show();"
                                            />
                                        </div>
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

export default Casestudies
