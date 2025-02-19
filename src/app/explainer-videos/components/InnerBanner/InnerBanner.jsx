import React from 'react'
import Image from 'next/image';

// icons 
import { Star } from 'heroicons-react';

// ====== Images  
import PartiOne from "media/explainer-videos/banner-4.png"
import PartiTwo from "media/explainer-videos/banner-3.png"

// ====== Videos  
// import Bannervideo from "public/2d-animation/banner-vid.mp4"

const InnerBanner = ({ content }) => {
    const { title, para, list, bannerImage, isList } = content
    return (
        <>
            <section className='md:pt-[80px] pb-[30px] md:pb-[70px]'>
                <Image src={PartiOne} alt='Particle' className=' absolute right-0 bottom-[-45%] xxl:bottom-0 w-[9%] xl:w-[10%] xxl:w-[19%] lg:block hidden' />
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 items-center gap-y-5">
                        <div className="col-span-12 md:col-span-6">
                            <div className="txt">
                                <h1 className='text-[30px] sm:text-[35px] lg:text-[45px] font-bold text-black font-sans leading-[35px] sm:leading-[45px] lg:leading-[50px] pt-2 md:pt-4 pb-5 lg:w-11/12'>
                                    {title}
                                </h1>
                                {isList ? <ul className='mb-4'>
                                    {list.map((item, index) => (
                                        <li key={index} className='text-[13px] sm:text-[16px] font-sans text-black leading-[19px] pb-2 md:pb-4 lg:w-10/12'>{item}</li>
                                    ))}
                                </ul> : <p className='text-[13px] sm:text-[16px] font-sans text-black leading-[19px] pb-6 lg:w-10/12'>
                                    {para}
                                </p>}

                                <div className="flex items-center">
                                    <div className="reviews flex items-center justify-center gap-x-1">
                                        <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                                        <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                                        <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                                        <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                                        <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                                    </div>
                                    <div className="content">
                                        <p className='text-[13px] sm:text-[16px] text-black font-sans ms-2'><strong>4.8 out of 5</strong> (review rating) Over 1,200+ reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <video src={bannerImage} autoPlay={true} loop={true} muted={true} className='mx-auto'>
                            </video>
                        </div>
                    </div>
                </div>
                <Image src={PartiTwo} alt='Particle' className='absolute left-0 bottom-[-28%] xxl:bottom-[-10%] w-[10%] xxl:w-[13%] z-[0] lg:block hidden' />
            </section>
        </>
    )
}

export default InnerBanner
