import React from 'react'
import Image from 'next/image'
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Images
import Design from "media/logo-animation-lp/design.svg"
import Industry from "media/logo-animation-lp/industry.svg"
import Rivisions from "media/logo-animation-lp/rivisions.svg"

const LogoAnimation = () => {
    const logoTestimonials = {
        dots: false,
        arrows: false,
        infinite: true,
        loop: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <>
            <section className='py-[30px] md:py-[60px]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="txt">
                            <h2 className="text-primary-100 text-[25px] md:text-[40px] font-[600] mb-0 text-center leading-[30px] font-sans relative before:absolute before:content-[''] before:top-[-20px] before:left-0 before:right-[35px] before:mx-auto before:h-[8px] before:w-[70px] before:bg-[#f5090b]">WHY LOGO ANIMATION?</h2>
                        </div>
                    </div>
                    <div className="lg:block hidden">
                        <div className="grid grid-cols-3 gap-7 mt-[40px]">
                            <div>
                                <div className="card_1 flex gap-x-2 group">
                                    <div className='w-9/12'>
                                        <Image src={Design} alt='Infinity Animations' className='grayscale-[1] duration-700 group-hover:duration-700 ease-in-out group-hover:grayscale-0' />
                                    </div>
                                    <div>
                                        <h4 className='text-[17px] font-[500] poppins pb-[15px] text-[#676a6b] duration-700 group-hover:duration-700 ease-in-out group-hover:text-primary-100'>Unique Design Guarantee</h4>
                                        <p className='mb-0 leading-[22px] text-[15px] text-[#676a6b] poppins text-justify'>We undergo the creative mindset with our creative graphic designers to produce dynamic animated logos. We create logo animations from the sketch that always revolves around customer-centric value.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_2 flex gap-x-2 group">
                                    <div className='w-8/12'>
                                        <Image src={Industry} alt='Infinity Animations' className='grayscale-[1] duration-700 group-hover:duration-700 ease-in-out group-hover:grayscale-0' />
                                    </div>
                                    <div>
                                        <h4 className='text-[17px] font-[500] poppins pb-[15px] text-[#676a6b] duration-700 group-hover:duration-700 ease-in-out group-hover:text-primary-100'>
                                            Industry Specific Designers
                                        </h4>
                                        <p className='mb-0 leading-[22px] text-[15px] text-[#676a6b] poppins text-justify'>We have a team of Industry-specific designers and logo animators with rich field experience that voice out the brand’s core values smartly in one go.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_3 flex gap-x-2 group">
                                    <div className='w-8/12'>
                                        <Image src={Rivisions} alt='Infinity Animations' className='grayscale-[1] duration-700 group-hover:duration-700 ease-in-out group-hover:grayscale-0' />
                                    </div>
                                    <div>
                                        <h4 className='text-[17px] font-[500] poppins pb-[15px] text-[#676a6b] duration-700 group-hover:duration-700 ease-in-out group-hover:text-primary-100'>
                                            Unlimited Revisions
                                        </h4>
                                        <p className='mb-0 leading-[22px] text-[15px] text-[#676a6b] poppins text-justify'>
                                            We are always eager to provide unlimited revisions containing more creative sides, even if you have changed your mind regarding the designs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden block mt-[40px]">
                        <Slider {...logoTestimonials}>
                            <div className='px-5'>
                                <div className="card_1 flex gap-x-2 group">
                                    <div className='w-5/12 sm:w-9/12'>
                                        <Image src={Design} alt='Infinity Animations' className='grayscale-[1] duration-700 group-hover:duration-700 ease-in-out group-hover:grayscale-0' />
                                    </div>
                                    <div>
                                        <h4 className='text-[17px] font-[500] poppins pb-[15px] text-[#676a6b] duration-700 group-hover:duration-700 ease-in-out group-hover:text-primary-100'>Unique Design Guarantee</h4>
                                        <p className='mb-0 leading-[22px] text-[15px] text-[#676a6b] poppins text-justify'>We undergo the creative mindset with our creative graphic designers to produce dynamic animated logos. We create logo animations from the sketch that always revolves around customer-centric value.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='px-5'>
                                <div className="card_2 flex gap-x-2 group">
                                    <div className='w-5/12 sm:w-8/12'>
                                        <Image src={Industry} alt='Infinity Animations' className='grayscale-[1] duration-700 group-hover:duration-700 ease-in-out group-hover:grayscale-0' />
                                    </div>
                                    <div>
                                        <h4 className='text-[17px] font-[500] poppins pb-[15px] text-[#676a6b] duration-700 group-hover:duration-700 ease-in-out group-hover:text-primary-100'>
                                            Industry Specific Designers
                                        </h4>
                                        <p className='mb-0 leading-[22px] text-[15px] text-[#676a6b] poppins text-justify'>We have a team of Industry-specific designers and logo animators with rich field experience that voice out the brand’s core values smartly in one go.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='px-5'>
                                <div className="card_3 flex gap-x-2 group">
                                    <div className='w-5/12 sm:w-8/12'>
                                        <Image src={Rivisions} alt='Infinity Animations' className='grayscale-[1] duration-700 group-hover:duration-700 ease-in-out group-hover:grayscale-0' />
                                    </div>
                                    <div>
                                        <h4 className='text-[17px] font-[500] poppins pb-[15px] text-[#676a6b] duration-700 group-hover:duration-700 ease-in-out group-hover:text-primary-100'>
                                            Unlimited Revisions
                                        </h4>
                                        <p className='mb-0 leading-[22px] text-[15px] text-[#676a6b] poppins text-justify'>
                                            We are always eager to provide unlimited revisions containing more creative sides, even if you have changed your mind regarding the designs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LogoAnimation
