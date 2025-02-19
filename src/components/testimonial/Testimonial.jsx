"use client"
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Fancybox
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
// Icon
import playMini from "media/icons/playMini.png"
import quote from "media/icons/quote.png"

const Testimonial = ({ content }) => {
    const { title, para, testiContent } = content;
    const testiSlider = {
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
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
        });
        return <div ref={containerRef}>{props.children}</div>;
    }

    return (
        <>
            <section className={`w-full flex py-8 md:py-12 lg:py-16`}>
                <div className="container">
                    <div className='flex items-start justify-between'>
                        <div className='w-full text-center'>
                            <h1 className="text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans leading-none mb-3">
                                {title}
                            </h1>
                            <p className="text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5">
                                {para}
                            </p>
                        </div>
                    </div>
                    <div className={`lg:w-[55%] mx-auto mt-8 py-[40px] pr-[30px] pl-[8px] rounded-3xl slideBg videoSlide`}>
                        <Image src={quote} className="quote hidden lg:block" alt='Infinity Animation' />
                        <Slider {...testiSlider} className="testiSlider">
                            {testiContent.map((testimonial, index) => (
                                <div key={index} className="h-full overflow-hidden">
                                    {testimonial.video ? (
                                        <div className="flex justify-between items-end lg:w-[755px] xl:w-[800px] lg:ml-[35px] xl:ml-[50px] fancy">
                                            <div>
                                                <Fancybox options={{
                                                    Carousel: {
                                                        infinite: false,
                                                    },
                                                }}>
                                                    <Link key={index} href={testimonial.video} datafancybox="gallery" className={` w-full h-full group`}>
                                                        <Image src={testimonial.thumbnail} alt="Infinity Animations" width={468} height={263} className='min-h-[230px] xl:min-h-[263px]' />
                                                    </Link>
                                                </Fancybox>
                                            </div>
                                            <div className="w-full lg:w-auto flex flex-row justify-between lg:flex-col items-start">
                                                <div>
                                                    <Image src={testimonial.stars} className="w-[40%]" alt='Infinity Animation' />
                                                    <h3 className="text-[20px] font-semibold font-sans leading-tight mt-2 mb-5 lg:my-3">
                                                        {testimonial.name}
                                                    </h3>
                                                </div>
                                                <Fancybox options={{
                                                    Carousel: {
                                                        infinite: false,
                                                    },
                                                }}>
                                                    <Link href={testimonial.video} datafancybox="gallery" className="w-[115px] md:w-auto h-[40px] xl:h-[45px] px-3 2xl:px-6 rounded-md text-[16px] xl:text-[18px] font-normal font-sans bg-prime text-white flex items-center gap-x-2">
                                                        <span className="text-[16px] font-normal font-sans">Play Now</span>
                                                        <Image className="w-[12px] h-[12px] object-contain" src={playMini} alt="Infinity Animations" />
                                                    </Link>
                                                </Fancybox>
                                            </div>
                                        </div>
                                    ) : (
                                        <div key={index} className="h-full w-[90%] mx-auto">
                                            <div className="flex flex-col items-center">
                                                <Image src={testimonial.stars} className="w-[30%] md:w-[15%] mb-2" alt='Infinity Animation' />
                                                <h3 className="text-[24px] font-semibold font-sans leading-tight mb-2">
                                                    {testimonial.name}
                                                </h3>
                                                <h3 className="text-[16px] font-semibold font-sans leading-tight mb-3">
                                                    {testimonial.position}
                                                </h3>
                                                <p className="text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5">
                                                    {testimonial.message}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial
