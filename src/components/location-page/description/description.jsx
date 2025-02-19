import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
// Import Images
import DescDot from "media/location-page/desc-dot.png"
import PlayIcon from "media/icons/play.png"
//
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"


function Description({ content }) {
    const { title, para, bannerLeft, bannerRight, thumbnail, downArrow } = content;

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
        <section className={`w-full flex items-center justify-start py-6 md:py-12 lg:py-16 bg-none  bg-no-repeat bg-center bg-cover relative `}>
            <div className="container">
                <div className='grid grid-cols-12 w-full'>
                    {bannerLeft && <div className={`order-last lg:order-first mt-[25px] lg:mt-0  col-span-12 lg:col-span-6 lg:w-[80%]`} >
                        <Fancybox options={{
                            Carousel: {
                                infinite: false,
                            },
                        }}>
                            <Link className="w-full h-full" href={bannerLeft} datafancybox="gallery">
                                <div className={`w-full h-full overlay relative group overflow-hidden rounded-lg`}>
                                    <div className='w-full h-full flex justify-center items-center  overlay-div-testi '>
                                        <Image src={thumbnail} alt="Infinity Animations" width={468} height={263} className='h-full w-full' />
                                        <div className=" bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0 mx-auto' />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Fancybox>
                    </div>
                    }

                    <div className={`col-span-12 lg:col-span-6 ms-auto pe-0 md:pe-5 flex flex-col justify-center relative`}>
                        <h2 className={`text-[#fff] text-[30px] sm:text-[40px] font-semibold font-sans leading-tight mb-5 text-start`}>
                            {title}
                        </h2>
                        <p className="text-[15px] lg:text-[16px] text-[#fff] font-[300] font-sans leading-[1.52857143] tracking-wider text-start ">
                            {para}
                        </p>
                        {downArrow &&
                            <div className={`flex items-center w-[98%] md:w-full h-[70px] mt-[35px] ${downArrow === 'start' && 'justify-start border-l-2 '} ${downArrow === 'end' && 'justify-end border-r-2'}  border-gray-500`}>
                                <Image src={DescDot} width='25px' height='25px' className={`${downArrow === 'start' && 'ms-[-18px]'} ${downArrow === 'end' && 'me-[-18px]'}`} />
                            </div>
                        }
                    </div>
                    {bannerRight && <div className={`col-span-12 lg:col-span-6 lg:ms-auto my-auto mt-[25px] lg:mt-0 lg:w-[80%]`}>
                        <Fancybox options={{
                            Carousel: {
                                infinite: false,
                            },
                        }}>
                            <Link className="w-full h-full" href={bannerRight} datafancybox="gallery">
                                <div className={`w-full h-full overlay relative group overflow-hidden rounded-lg`}>
                                    <div className='w-full h-full flex justify-center items-center  overlay-div-testi '>
                                        <Image src={thumbnail} alt="Infinity Animations" width={468} height={263} className='h-full w-full' />
                                        <div className=" bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0 mx-auto' />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Fancybox>
                    </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Description