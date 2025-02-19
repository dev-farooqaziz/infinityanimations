"use client"

import Image from 'next/image'
import React from 'react'
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 

const Remarkable = ({ content }) => {
    const { title, para, cardOne, cardTwo, cardThree, cardFour, cardTen, isHomePage, } = content;
    // Slider Setting
    const remarkSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <section className={isHomePage ? 'lg:pb-[20px]' : 'lg:pb-0'} id='services'>
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 mb-5">
                            <h2 className='text-[30px] sm:text-[40px] lg:text-[50px] leading-tight font-bold font-sans text-center text-black mb-3'>{title}</h2>
                            <p className='text-[13px] lg:text-[16px] leading-[21px] font-sans text-center text-black sm:w-10/12 mx-auto mb-4 md:mb-10'>{para}</p>
                        </div>
                    </div>
                    <div className="sm:block hidden">
                        <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-7">
                                <div className="card bg-[#F4F4F4] rounded-[15px] px-5 lg:px-7 py-10 h-full">
                                    <h4 className='text-[25px] font-bold font-sans text-black leading-[60px]'>{cardOne.cardtitle}</h4>
                                    <p className='text-[16px] text-black font-sans leading-[21px] mb-7'>{cardOne.cardpara}</p>
                                    <Image src={cardOne.cardImage} alt='remark' className={` mx-auto ${cardOne.css}`} />
                                </div>
                            </div>
                            <div className="col-span-5">
                                <div className={isHomePage ? 'card bg-[#0E80FC] rounded-[15px] px-5 lg:px-7 py-10 relative h-full' : `card bg-[#0E80FC] rounded-[15px] px-5 lg:px-7 py-10 relative h-full ${cardTwo.css} overflow-hidden`}>
                                    <h4 className='text-[25px] font-bold font-sans text-white leading-tight lg:leading-[60px]'>{cardTwo.cardtitle}</h4>
                                    <p className='text-[16px] text-white font-sans leading-[21px] mb-4'>{cardTwo.cardpara}</p>
                                    <Image src={cardTwo.cardImage} alt='remark' className={isHomePage ? 'w-full absolute right-[-15px]' : `object-contain mx-auto ${cardTwo.imageCss} mt-[65px]`} />
                                </div>
                            </div>
                            <div className="col-span-5">
                                <div className="card bg-gradient-to-t from-[#09B7E4] to-[#19EDDA] rounded-[15px] px-5 lg:px-7 py-10 relative h-full">
                                    <h4 className='text-[25px] font-bold font-sans text-white leading-tight lg:leading-[60px]'>{cardThree.cardtitle}</h4>
                                    <p className='text-[16px] text-white font-sans leading-[21px] mb-6'>{cardThree.cardpara}</p>
                                    <Image src={cardThree.cardImage} alt='remark' className={isHomePage ? 'w-full h-[54%] lg:h-[65%] object-contain absolute left-0 xl:left-[-65px]' : `mx-auto object-contain mt-0 lg:mt-[65px] ${cardThree.css}`} />
                                </div>
                            </div>
                            <div className="col-span-7">
                                <div className={`card bg-gradient-to-t from-[#AA00FE] to-[#6B00FE] rounded-[15px] px-5 lg:px-7 py-10 h-full relative ${cardFour.cardCss}`}>
                                    <h4 className='text-[25px] font-bold font-sans text-white leading-tight lg:leading-[60px]'>{cardFour.cardtitle}</h4>
                                    <p className='text-[16px] text-white font-sans leading-[21px] mb-7'>{cardFour.cardpara}</p>
                                    <Image src={cardFour.cardImage} alt='remark' className={isHomePage ? 'w-full h-full object-contain mt-[-60px] lg:mt-[-34px] mx-auto' : `mx-auto object-contain mt-0 ${cardFour.css}`} />
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 mt-5'>
                            <div className="col-span-12">
                                <div className="card bg-gradient-to-t from-[#FF2D4B] to-[#F5090B] rounded-[15px] px-5 lg:px-7 py-10 relative h-full">
                                    <div className="grid grid-cols-2 items-center">
                                        <div>
                                            <h4 className='text-[25px] font-bold font-sans text-white leading-tight lg:leading-[60px]'>{cardTen.cardtitle}</h4>
                                            <p className='text-[16px] text-white font-sans leading-[21px] mb-4 lg:w-10/12 lg:pr-[20px]'>{cardTen.cardpara}</p>
                                        </div>
                                        <div>
                                            <Image src={cardTen.cardImage} alt='remark' className={`mx-auto ${cardTen.css}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block sm:hidden">
                        <Slider {...remarkSlider} className="remarkSlider">
                            <div>
                                <div className="card bg-[#F4F4F4] rounded-[15px] px-5 lg:px-7 py-10 h-full">
                                    <h4 className='text-[25px] font-bold font-sans text-black leading-tight md:leading-[60px]'>{cardOne.cardtitle}</h4>
                                    <p className='text-[13px] lg:text-[16px] text-black font-sans leading-[21px] mb-7'>{cardOne.cardpara}</p>
                                    <Image src={cardOne.cardImage} alt='remark' className='min-h-[300px] max-h-[300px] w-12/12 mx-auto object-contain' />
                                </div>
                            </div>
                            <div>
                                <div className="card bg-[#0E80FC] rounded-[15px] px-5 lg:px-7 py-10 relative h-full">
                                    <h4 className='text-[25px] font-bold font-sans text-white leading-tight md:leading-[60px]'>{cardTwo.cardtitle}</h4>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-[21px] mb-4'>{cardTwo.cardpara}</p>
                                    <Image src={cardTwo.cardImage} alt='remark' className='min-h-[300px] max-h-[300px] w-12/12 mx-auto object-contain' />
                                </div>
                            </div>
                            <div>
                                <div className="card bg-gradient-to-t from-[#09B7E4] to-[#19EDDA] rounded-[15px] px-5 lg:px-7 py-10 relative h-full">
                                    <h4 className='text-[25px] font-bold font-sans text-white leading-tight md:leading-[60px]'>{cardThree.cardtitle}</h4>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-[21px] mb-6'>{cardThree.cardpara}</p>
                                    <Image src={cardThree.cardImage} alt='remark' className='min-h-[300px] max-h-[300px] w-12/12 mx-auto object-contain' />
                                </div>
                            </div>
                            <div>
                                <div className="card bg-gradient-to-t from-[#AA00FE] to-[#6B00FE] rounded-[15px] px-5 lg:px-7 py-10 h-full relative">
                                    <h4 className='text-[25px] font-bold font-sans text-white leading-tight md:leading-[60px]'>{cardFour.cardtitle}</h4>
                                    <p className='text-[13px] lg:text-[16px] text-white font-sans leading-[21px] mb-7'>{cardFour.cardpara}</p>
                                    <Image src={cardFour.cardImage} alt='remark' className='min-h-[300px] max-h-[300px] w-12/12 mx-auto object-contain' />
                                </div>
                            </div> 
                            <div>
                                <div className="card bg-gradient-to-t from-[#FF2D4B] to-[#F5090B] rounded-[15px] px-5 py-5 relative h-full">
                                    <div className="">
                                        <div>
                                            <h4 className='text-[25px] font-bold font-sans text-white leading-tight lg:leading-[60px]'>{cardTen.cardtitle}</h4>
                                            <p className='text-[16px] text-white font-sans leading-[21px] mb-4 lg:w-10/12 lg:pr-[20px]'>{cardTen.cardpara}</p>
                                        </div>
                                        <div>
                                            <Image src={cardTen.cardImage} alt='remark' className='animationUpDown2 w-8/12 mx-auto mt-8' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Remarkable
