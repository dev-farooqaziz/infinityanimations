"use client"
import React from 'react'
import Image from 'next/image'
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Servicesconcept = ({ content }) => {
    const { title, para, conceptContent, Servicesconcept, ConceptParticle, foldBg } = content;
    // Slider Setting
    const testiSlider = {
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <>
            <section className='xl:pt-36 lg:pb-16 md:pb-12 pb-8 relative'>
                <Image src={foldBg} alt='Infinity Animation' className='absolute top-[-125px] right-0 w-full' />
                <div className="container">
                    <div className="grid grid-cols-12 gap-y-7 md:gap-y-0">
                        <div className="col-span-12 md:col-span-4">
                            <div className='relative -ml-6'>
                                <Image src={Servicesconcept} alt='Infinity Animation' quality={85} className='lg:w-10/12' />
                                <div className='absolute bottom-[-80%] lg:bottom-[-100%] left-[12%] lg:left-[6%]'>
                                    <Image src={ConceptParticle} alt='Infinity Animation' quality={85} className='w-full' />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-8 relative">
                            <h2 className='text-white text-[30px] md:text-[50px] font-sans font-bold'>{title}</h2>
                            <p className='text-white font-sans font-light text-[16px] lg:w-11/12'>{para}</p>

                            <Slider {...testiSlider} className="servicesConcept mt-12">
                                {conceptContent.map((concept, index) => (
                                    <div key={index}>
                                        <div className="p-4">
                                            <div className="flex flex-wrap items-start justify-between mb-3">
                                                <Image src={concept.ImageOne} className="w-[20%] xl:w-auto" alt='Infinity Animation' />
                                                <div className="border-[1.5px] xl:border-2 rounded-full p-0.5 xl:p-1 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex items-center justify-center">
                                                    <span className="w-full h-full flex items-center justify-center bg-primary-100 rounded-full text-md xl:text-[14px] font-sans font-normal">{concept.sliderNumber}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-[24px] xl:text-[30px] xl:leading-[35px] font-sans font-bold tracking-wide mb-2">{concept.slideTitle}</h3>
                                                <p className="text-[12px] xl:text-[16px] font-sans font-normal tracking-wider line-clamp-3">{concept.sliderDesc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <hr className='border-[#707070] border mt-[40px] w-[68%] md:w-[75%] 2xl:w-[81%] ml-[16%] md:ml-[13%] lg:ml-[9%] 2xl:ml-[6%]' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Servicesconcept
