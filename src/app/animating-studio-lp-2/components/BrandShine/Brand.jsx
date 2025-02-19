"use client"
import Image from 'next/image'
import React from 'react'
// Images
import BrandBg from "media/infinity-studio-lp-2/brand-bg.png"

const Brand = ({ content }) => {
    const { title, subtitle, desc, branImage, btnTxt, } = content;
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <>
            <section className='py-[30px] md:py-[70px] lg:pt-[90px] bg-white'>
                <div className={`mx-4 lg:max-w-7xl xl:mx-auto py-10 md:py-16 lg:py-7 5xl:py-14 px-4 sm:px-9 relative`}>
                    <Image src={BrandBg} alt='Infinity Animation' fill={true} className='z-[1] object-cover object-center rounded-[20px]' />
                    <div className="grid grid-cols-12 relative z-10">
                        <div className="col-span-12 lg:col-span-6">
                            <h2 className='text-white poppins text-[25px] md:text-[30px] 5xl:text-[40px] font-semibold leading-[35px] md:leading-[45px] 5xl:leading-[60px] mb-2 5xl:pr-6'>{title}</h2>
                            <h5 className='text-white font-bold poppins leading-[31px] text-[18px] md:text-[25px] 5xl:w-11/12 pb-[7px]'>{subtitle}</h5>
                            <p className='text-white text-[13px] 5xl:text-[16px] poppins 5xl:pr-6'>{desc}</p>
                            <div className='flex items-center gap-4'>
                                <div className="btn mt-6 w-full sm:w-[250px]">
                                    <a href="javascript:$zopim.livechat.window.show();" className="text-[11px] sm:text-[13px] md:text-[16px] font-bold leading-[25px] text-white bg-black rounded-[5px] w-full sm:w-[360px] md:w-[440px] h-[44px] px-[10px] sm:px-[20px] poppins flex items-center justify-center">{btnTxt}</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div className="img absolute bottom-[-25px] 5xl:bottom-[-65px] lg:right-[-42px] 5xl:right-[-52px] lg:block hidden">
                                <Image src={branImage} alt='brandShine' height={622} width={389} className='5xl:min-h-[400px] 5xl:w-full h-full ' quality={85} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Brand
