"use client"

import Image from 'next/image'
import React from 'react'
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Remarkable = ({ content }) => {
    const { title, para, cardOne, cardTwo, cardThree, cardFour, cardFive, cardSix, cardSeven, cardEight, cardNine, cardTen, CardBg, isHomePage, css, cardCss } = content;
    return (
        <>
            <section className={'pb-[90px] pt-[20px] bg-white'} id='services'>
                <div className="px-5 xl:px-0 xl:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 mb-5">
                            <h2 className='text-black poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[50px] text-center mb-2'>{title}</h2>
                            <p className='text-black text-[13px] lg:text-[16px] font-sans text-center mx-auto md:10/12 lg:w-9/12 mb-5 lg:mb-10'>{para}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 md:col-span-7">
                            <div className="card bg-[#F4F4F4] rounded-[15px] px-5 lg:px-7 py-10 h-full">
                                <h4 className='text-[25px] font-bold font-sans text-black leading-[60px]'>{cardOne.cardtitle}</h4>
                                <p className='text-[16px] text-black font-sans leading-[21px] mb-7'>{cardOne.cardpara}</p>
                                <Image src={cardOne.cardImage} alt='remark' className={`md:block hidden mx-auto ${cardOne.css}`} />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-5">
                            <div className={isHomePage ? 'card bg-[#0E80FC] rounded-[15px] px-5 lg:px-7 py-10 relative h-full' : `card bg-[#0E80FC] rounded-[15px] px-5 lg:px-7 py-10 relative h-full ${cardTwo.css} overflow-hidden`}>
                                <h4 className='text-[25px] font-bold font-sans text-white leading-tight lg:leading-[60px]'>{cardTwo.cardtitle}</h4>
                                <p className='text-[16px] text-white font-sans leading-[21px] mb-4'>{cardTwo.cardpara}</p>
                                <Image src={cardTwo.cardImage} alt='remark' className={'md:block hidden w-full absolute right-[-15px]'} />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-5">
                            <div className="card bg-gradient-to-t from-[#09B7E4] to-[#19EDDA] rounded-[15px] px-5 lg:px-7 py-10 relative h-full">
                                <h4 className='text-[25px] font-bold font-sans text-white leading-tight lg:leading-[60px]'>{cardThree.cardtitle}</h4>
                                <p className='text-[16px] text-white font-sans leading-[21px] mb-6'>{cardThree.cardpara}</p>
                                <Image src={cardThree.cardImage} alt='remark' className={'md:block hidden w-full h-[54%] lg:h-[65%] object-contain absolute left-0 xl:left-[-65px]'} />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-7">
                            <div className={`card bg-gradient-to-t from-[#AA00FE] to-[#6B00FE] rounded-[15px] px-5 lg:px-7 py-10 h-full relative ${cardFour.cardCss}`}>
                                <h4 className='text-[25px] font-bold font-sans text-white leading-tight lg:leading-[60px]'>{cardFour.cardtitle}</h4>
                                <p className='text-[16px] text-white font-sans leading-[21px] mb-7'>{cardFour.cardpara}</p>
                                <Image src={cardFour.cardImage} alt='remark' className={'md:block hidden w-full h-full object-contain mt-[-60px] lg:mt-[-34px] mx-auto'} />
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-5 mt-5'>
                        <div className="col-span-12 md:col-span-7">
                            <div className="card bg-[#F4F4F4] rounded-[15px] px-5 lg:px-7 py-10 h-full">
                                <h4 className='text-[25px] font-bold font-sans text-black leading-[60px]'>{cardFive.cardtitle}</h4>
                                <p className='text-[16px] text-black font-sans leading-[21px] mb-7'>{cardFive.cardpara}</p>
                                <Image src={cardFive.cardImage} alt='remark' className='md:block hidden mb-[-45px] mx-auto' />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-5">
                            <div className="card bg-gradient-to-t from-[#FFAB4A] to-[#FF8E0A] rounded-[15px] px-5 lg:px-7 py-10 relative h-full">
                                <h4 className='text-[25px] font-bold font-sans text-white leading-tight lg:leading-[60px]'>{cardSix.cardtitle}</h4>
                                <p className='text-[16px] text-white font-sans leading-[21px] mb-4'>{cardSix.cardpara}</p>
                                <Image src={cardSix.cardImage} alt='remark' className='md:block hidden animationUpDown2 w-full absolute right-0 lg:right-[-17px] xl:right-[-25px] bottom-[18px]  max-h-[350px] min-w-[100%] lg:min-w-[570px] xl:min-w-[550px]' />
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-5 mt-5'>
                        <div className="col-span-12 md:col-span-5 lg:col-span-4">
                            <div className="card bg-gradient-to-t from-[#AA00FE] to-[#6B00FE] rounded-[15px] px-5 lg:px-7 py-10 relative h-full md:min-h-[535px] lg:min-h-[580px]">
                                <h4 className='text-[25px] font-bold font-sans text-white leading-tight lg:leading-[60px]'>{cardSeven.cardtitle}</h4>
                                <p className='text-[16px] text-white font-sans leading-[21px] mb-4'>{cardSeven.cardpara}</p>
                                <Image src={cardSeven.cardImage} alt='remark' className='md:block hidden animationUpDown2 w-8/12 mx-auto absolute left-0 right-0 bottom-[-16px]' />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-7 lg:col-span-4">
                            <div className="card bg-gradient-to-t from-[#0E80FC] to-[#058EF8] rounded-[15px] px-5 lg:px-7 py-10 relative h-full md:min-h-[535px] lg:min-h-[580px]">
                                <h4 className='text-[25px] font-bold font-sans text-white leading-tight lg:leading-[60px]'>{cardEight.cardtitle}</h4>
                                <p className='text-[16px] text-white font-sans leading-[21px] mb-4'>{cardEight.cardpara}</p>
                                <Image src={cardEight.cardImage} alt='remark' className='md:block hidden w-10/12 absolute right-[15px] bottom-[5px]' />
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <div className="card bg-gradient-to-t from-[#FF2D4B] to-[#F71017] rounded-[15px] px-5 lg:px-7 py-10 relative h-full md:min-h-[535px] lg:min-h-[580px]">
                                <h4 className='text-[25px] font-bold font-sans text-white leading-tight lg:leading-[60px]'>{cardNine.cardtitle}</h4>
                                <p className='text-[16px] text-white font-sans leading-[21px] mb-4'>{cardNine.cardpara}</p>
                                <Image src={cardNine.cardImage} alt='remark' className='md:block hidden animationUpDown2 \w-7/12 lg:w-10/12 absolute left-[50%] lg:left-[35px] bottom-[-20px] mx-auto' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Remarkable
