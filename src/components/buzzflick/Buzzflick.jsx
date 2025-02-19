"use client"
import React from 'react'
import Image from 'next/image'
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CTA from '../cta/CTA';

const BuzzFlick = ({ content }) => {
    const { title, para, conceptContent, isBtn, isEducateBuzz, educateBuzz } = content;
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <>
            <section className='xl:pt-36 lg:pb-16 md:pb-12 pb-8 relative'>
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-10">
                            <h2 className='text-white text-[30px] md:text-[50px] font-sans font-bold leading-tight mb-3 lg:w-8/12'>{title}</h2>
                            <p className='text-white font-sans font-light text-[16px] lg:w-9/12'>{para}</p>
                        </div>
                    </div>
                    {isEducateBuzz ?
                        <div className="grid grid-cols-4 mt-5 lg:mt-11">
                            {conceptContent.map((concept, index) => (
                                <div key={index}>
                                    <div className="p-4">
                                        <div className="flex flex-wrap items-start justify-between mb-3">
                                            <Image src={concept.ImageOne} className="mb-3" width={68} height={68} alt='Infinity Animation' />
                                            <div className="border-[1.5px] xl:border-2 rounded-full p-0.5 xl:p-1 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex items-center justify-center">
                                                <span className="w-full h-full flex items-center justify-center bg-primary-100 rounded-full text-md xl:text-[14px] font-sans font-normal">{concept.sliderNumber}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-[24px] xl:text-[28px] xl:leading-[35px] font-sans font-bold tracking-wide mb-3 lg:w-11/12">{concept.slideTitle}</h3>
                                            <div className="max-h-[174px] overflow-y-scroll buzzflick pr-[20px]">
                                                <p className="text-[12px] xl:text-[15px] font-sans font-[100] tracking-wider mb-3">{concept.paraOne}</p>
                                                <p className="text-[12px] xl:text-[15px] font-sans font-[100] tracking-wider mb-3">{concept.paraTwo}</p>
                                                <p className="text-[12px] xl:text-[15px] font-sans font-[100] tracking-wider mb-3">{concept.paraThree}</p>
                                                <p className="text-[12px] xl:text-[15px] font-sans font-[100] tracking-wider mb-3">{concept.paraFour}</p>
                                                <p className="text-[12px] xl:text-[15px] font-sans font-[100] tracking-wider mb-3">{concept.paraFive}</p>
                                                <p className="text-[12px] xl:text-[15px] font-sans font-[100] tracking-wider mb-3">{concept.paraSix}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        :
                        <div className="grid grid-cols-5 mt-5 lg:mt-11">
                            {educateBuzz.map((concept, index) => (
                                <div key={index} className={`h-[230px]${index !== educateBuzz.length - 1 ? ' border-r border-r-white' : ''}`}>
                                    <div className="p-4">
                                        <div className="flex flex-wrap items-start justify-between mb-3">
                                            <Image src={concept.ImageOne} className="mb-3" width={68} height={68} alt='Infinity Animation' />
                                        </div>
                                        <div>
                                            <h3 className="text-[24px] xl:text-[28px] xl:leading-[35px] font-sans font-bold tracking-wide mb-3 lg:w-11/12">{concept.slideTitle}</h3>
                                            <div className=" pr-[20px]">
                                                <p className="text-[12px] xl:text-[15px] font-sans font-[100] tracking-wider mb-3">{concept.paraOne}</p>
                                                <p className="text-[12px] xl:text-[15px] font-sans font-[100] tracking-wider mb-3">{concept.paraTwo}</p>
                                                <p className="text-[12px] xl:text-[15px] font-sans font-[100] tracking-wider mb-3">{concept.paraThree}</p>
                                                <p className="text-[12px] xl:text-[15px] font-sans font-[100] tracking-wider mb-3">{concept.paraFour}</p>
                                                <p className="text-[12px] xl:text-[15px] font-sans font-[100] tracking-wider mb-3">{concept.paraFive}</p>
                                                <p className="text-[12px] xl:text-[15px] font-sans font-[100] tracking-wider mb-3">{concept.paraSix}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>}

                    {isBtn ?
                        <div className="btn mt-8 w-max">
                            <CTA
                                text="Get a Quote"
                                icon="/icons/arrow-red.png"
                                iconCss="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full p-2 ms-2"
                                bg="bg-prime"
                                color={`text-white`}
                                border={`border-2 border-[#f5090b]`}
                                hover="hover:bg-transparent"
                                href="javascript:$zopim.livechat.window.show();"
                            />
                        </div> :
                        null
                    }
                </div>
            </section>
        </>
    )
}

export default BuzzFlick
