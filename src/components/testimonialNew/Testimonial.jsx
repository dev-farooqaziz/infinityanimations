"use client"
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import quote from "media/location-page/testi-colon.png";
// Fancybox
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"

function TestimonialNew({ content }) {
    const { title, para, testiContentNew2 } = content;
    const testiSlider = {
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 3000,
        slidesToShow: 2,
        rows: 1,
        slidesPerRow: 2,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    // ======== FancyBox
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
        }, [props.delegate, props.options]);
        return <div ref={containerRef}>{props.children}</div>;
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
        <section className="w-full mb-10 md:mb-0 py-6 md:py-12 lg:py-16 justify-center relative">
            <div className="container">
                <div className="relative z-50">
                    <div className='flex items-center justify-center py-0 md:py-[25px]'>
                        <div className='w-full text-center'>
                            <h2 className={`text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans leading-tight mb-5 capitalize`}>
                                {title}
                            </h2>
                            <p className="text-[15px] lg:text-[16px] font-sans font-normal tracking-wider line-clamp-3 text-center mb-0">
                                {para}
                            </p>
                        </div>
                    </div>

                    <div className="mt-[25px] md:mx-[25px]">
                        <Slider {...testiSlider} className="newvideoSlider">
                            {testiContentNew2.map((testimonial, index) => (
                                <Fancybox options={{ Carousel: { infinite: false } }} key={index}>
                                    <div className=" h-full group mb-8 mx-2">
                                        <div className='flex bg-[#D60925]  rounded-[25px] mx-4 ps-[15px] pe-[10px] pt-[15px] md:px-[25px] md:py-[35px]'>
                                            {testimonial.video ? (
                                                <Link href={testimonial.video} datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                    <div className='w-[100px] sm:w-[155px] h-[155px] md:w-[180px] md:h-[184px] box-testi '>
                                                        <div className='w-[100px] sm:w-[145px] h-[150px] md:w-[175px] md:h-[180px]  flex justify-center items-center  overlay-div-testi '>
                                                            <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-[150px] h-full object-cover " >
                                                                <source src={testimonial.video} type="video/mp4" />
                                                            </video>
                                                            <div className="overlay-testi rounded-[12px] w-[100px] sm:w-[150px] h-full">
                                                            </div>
                                                        </div>

                                                    </div>
                                                </Link>
                                            ) : (
                                                <div className='w-[145px] h-[150px] md:w-[175px] md:h-[180px]  flex justify-center items-center  overlay-div-testi'>
                                                    <Image
                                                        src={testimonial.thumbnail}
                                                        alt="Infinity Animations"
                                                        className='rounded-[12px] h-full w-[150px]' />
                                                    <div className="overlay-testi rounded-[12px] w-[100px] md:w-[150px] h-full ">
                                                    </div>
                                                </div>
                                            )}
                                            <div className='w-full lg:w-[90%] ps-2 md:ps-4 pe-[15px] flex flex-col justify-between py-3'>
                                                <div className='flex mb-1'>
                                                    <Image
                                                        src={quote}
                                                        alt="Infinity Animations"
                                                        className='w-[35px] h-[30px]' />
                                                    <div>
                                                        <h3 className=" text-[18px] md:text-[20px] leading-[24px] font-semibold font-sans ps-3 text-[#fff]">
                                                            {testimonial.name}
                                                        </h3>
                                                        <h3 className=" text-[13px] italic  font-semibold font-sans ps-3 text-white-600/[.06]">
                                                            {testimonial.company}
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className='my-3'>
                                                    <p className="text-[11px] xl:text-[14px] font-sans font-light text-white testmonial-location">
                                                        {testimonial.para}
                                                    </p>
                                                </div>
                                                <div className=''>
                                                    <Image
                                                        src={testimonial.stars}
                                                        className="w-[30%]" alt='Infinity Animation' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Fancybox>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialNew;
