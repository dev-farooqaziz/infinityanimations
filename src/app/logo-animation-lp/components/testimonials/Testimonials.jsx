import React from 'react'
import Image from 'next/image';
import { FaStar } from 'react-icons/fa'
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Images
import SlideOne from "media/logo-animation-lp/testiOne.png"
import SlideTwo from "media/logo-animation-lp/testiTwo.png"
import SlideThree from "media/logo-animation-lp/testiThree.png"

const Testimonials = () => {
    const Testinomials = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: false,
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
                    arrows: true,
                }
            }
        ]
    };
    return (
        <>
            <section className='py-[30px] md:py-[60px]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto overflow-hidden">
                    <div className="grid grid-cols-1">
                        <div className="txt pt-[3px]">
                            <h2 className="text-[#00ce7d] text-[25px] md:text-[45px] font-[700] mb-[10px] sm:mb-[17px] text-center leading-[30px] font-sans relative before:absolute before:content-[''] before:top-[-20px] before:left-0 before:right-[35px] before:mx-auto before:h-[7px] before:w-[60px] before:bg-[#00ce7d] uppercase">
                                Testimonials
                            </h2>
                            <div className="reviews flex items-center justify-center gap-2">
                                <FaStar className="text-[#00ce7d] text-[24px]" />
                                <FaStar className="text-[#00ce7d] text-[24px]" />
                                <FaStar className="text-[#00ce7d] text-[24px]" />
                                <FaStar className="text-[#00ce7d] text-[24px]" />
                                <FaStar className="text-[#00ce7d] text-[24px]" />
                            </div>
                            <p className='text-[#2d2d2d] text-[20px] sm:text-[25px] lg:text-[32px] font-sans text-center uppercase leading-[25px] sm:leading-[30px] mt-[2%]'>...RATED 4.5 BY 8503 CUSTOMERS GLOBALLY</p>
                        </div>
                        <div className='hidden md:block'>
                            <div className="grid grid-cols-3 mt-3 pt-12 md:pt-10 lg:pt-16">
                                <div className='px-2 lg:px-5'>
                                    <div className="card bg-[#f2f4b6] min-h-[250px] pt-[50px] pb-[20px] px-[20px] relative border-t-4 border-[#217a23]">
                                        <Image src={SlideOne} alt='Infinity Animations' className='mb-4 mx-auto block mt-[-85px]' />
                                        <div className="txt">
                                            <p className='text-[#2d2d2d] text-[14px] xl:text-[16px] poppins mb-[20px] text-justify'>"Logo Orbit's book writing services have been a game-changer for our marketing strategy. The content is not only engaging but also aligned perfectly with our brand message. Highly recommend their expertise!"</p>
                                        </div>
                                        <div className="card_bottom">
                                            <p className='text-[#217a23] text-[17px] leading-[20px] xl:leading-[23px] xl:text-[20px] font-sans text-center'><strong>John Andrew</strong> - Marketing Manager</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2 lg:px-5'>
                                    <div className="card bg-[#f2f4b6] min-h-[250px] pt-[50px] pb-[20px] px-[20px] relative border-t-4 border-[#ca4949]">
                                        <Image src={SlideTwo} alt='Infinity Animations' className='mb-4 mx-auto block mt-[-85px]' />
                                        <div className="txt">
                                            <p className='text-[#2d2d2d] text-[14px] xl:text-[16px] poppins mb-[20px] text-justify'>"Working with Logo Orbit on my book was a delight. Their team's creativity and attention to detail brought my ideas to life in a way that exceeded my expectations. The final product is a true asset to my business."</p>
                                        </div>
                                        <div className="card_bottom">
                                            <p className='text-[#ca4949] text-[17px] leading-[20px] xl:leading-[23px] xl:text-[20px] font-sans text-center'><strong>
                                                Ema Watson</strong> - Entrepreneur</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2 lg:px-5'>
                                    <div className="card bg-[#f2f4b6] min-h-[250px] pt-[50px] pb-[20px] px-[20px] relative border-t-4 border-[#470887]">
                                        <Image src={SlideThree} alt='Infinity Animations' className='mb-4 mx-auto block mt-[-85px]' />
                                        <div className="txt">
                                            <p className='text-[#2d2d2d] text-[14px] xl:text-[16px] poppins mb-[20px] text-justify'>"Logo Orbit's book writing team demonstrated exceptional skill in crafting a compelling narrative for my book. Their commitment to quality and timely delivery made the entire process seamless. Thrilled with the results!"</p>
                                        </div>
                                        <div className="card_bottom">
                                            <p className='text-[#470887] text-[17px] leading-[20px] xl:leading-[23px] xl:text-[20px] font-sans text-center'><strong>Alexandra Jhon</strong> - Author</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='block md:hidden'>
                            <Slider {...Testinomials} className='mt-3 pt-8 lg:pt-12 logoTestimonials'>
                                <div className='px-5'>
                                    <div className="card bg-[#f2f4b6] min-h-[250px] pt-[50px] pb-[20px] px-[20px] relative border-t-4 border-[#217a23]">
                                        <Image src={SlideOne} alt='Infinity Animations' className='mb-4 mx-auto block mt-[-85px]' />
                                        <div className="txt">
                                            <p className='text-[#2d2d2d] text-[14px] poppins mb-[20px] text-justify'>"Logo Orbit's book writing services have been a game-changer for our marketing strategy. The content is not only engaging but also aligned perfectly with our brand message. Highly recommend their expertise!"</p>
                                        </div>
                                        <div className="card_bottom">
                                            <p className='text-[#217a23] text-[17px] font-sans text-center'><strong>John Andrew</strong> - Marketing Manager</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-5'>
                                    <div className="card bg-[#f2f4b6] min-h-[250px] pt-[50px] pb-[20px] px-[20px] relative border-t-4 border-[#ca4949]">
                                        <Image src={SlideTwo} alt='Infinity Animations' className='mb-4 mx-auto block mt-[-85px]' />
                                        <div className="txt">
                                            <p className='text-[#2d2d2d] text-[14px] poppins mb-[20px] text-justify'>"Working with Logo Orbit on my book was a delight. Their team's creativity and attention to detail brought my ideas to life in a way that exceeded my expectations. The final product is a true asset to my business."</p>
                                        </div>
                                        <div className="card_bottom">
                                            <p className='text-[#ca4949] text-[17px] font-sans text-center'><strong>
                                                Ema Watson</strong> - Entrepreneur</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-5'>
                                    <div className="card bg-[#f2f4b6] min-h-[250px] pt-[50px] pb-[20px] px-[20px] relative border-t-4 border-[#470887]">
                                        <Image src={SlideThree} alt='Infinity Animations' className='mb-4 mx-auto block mt-[-85px]' />
                                        <div className="txt">
                                            <p className='text-[#2d2d2d] text-[14px] poppins mb-[20px] text-justify'>"Logo Orbit's book writing team demonstrated exceptional skill in crafting a compelling narrative for my book. Their commitment to quality and timely delivery made the entire process seamless. Thrilled with the results!"</p>
                                        </div>
                                        <div className="card_bottom">
                                            <p className='text-[#470887] text-[17px] font-sans text-center'><strong>Alexandra Jhon</strong> - Author</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials
