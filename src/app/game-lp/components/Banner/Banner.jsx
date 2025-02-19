import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Images
import BannerBg from "media/game-lp/banner-bg.png"
import BtnBg1 from "media/game-lp/btn-bg1.png"
import BtnBg2 from "media/game-lp/btn-bg2.png"

const Banner = () => {
    return (
        <section className='py-[120px] sm:h-screen relative' id='Home'>
            <div className="backgroundImage">
                <Image src={BannerBg} alt='Banner Background' fill={true} className='z-[-1] object-cover object-center' />
            </div>
            <div className="lg:max-w-7xl mx-auto px-4 md:px-8 xl:px-0 flex items-end justify-end h-full">
                <div className="grid grid-cols-12 gap-5 5xl:gap-0 items-center">
                    <div className="col-span-12 lg:col-span-6">
                        <div className="keyFrameleft">
                            <h1 className='text-[30px] sm:text-[40px] lg:text-[45px] xl:text-[50px] leading-[40px] sm:leading-[50px] lg:leading-[55px] xl:leading-[60px] font-semibold text-center text-white poppins'>Designing Engaging <span className='text-[65px] sm:text-[85px] lg:text-[95px] xl:text-[105px] leading-[85px] sm:leading-[100px] lg:leading-[110px] xl:leading-[115px] block'>Game Art</span></h1>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <div className="keyFrameRight">
                            <p className='text-[13px] sm:text-[15px] xl:text-[17px] leading-[25px] sm:leading-[30px] xl:leading-[32px] text-center lg:text-left poppins mb-5'>At the heart of every great game lies captivating art that immerses players in unique, vibrant worlds. We craft visuals that not only enhance gameplay but also evoke emotion,</p>
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                <div className="btn">
                                    <a href="tel:012-345-6789" className=' text-white text-[16px] font-medium poppins w-[190px] h-[50px] flex items-center justify-center relative z-10'>
                                        <Image src={BtnBg1} alt='Btn Background' fill={true} className='z-[-1] object-cover object-center' />
                                        Contact Us Now
                                    </a>
                                </div>
                                <div className="btn">
                                    <a href="javascript:$zopim.livechat.window.show();" className=' text-black text-[16px] font-medium poppins w-[190px] h-[50px] flex items-center justify-center relative z-10'>
                                        <Image src={BtnBg2} alt='Btn Background' fill={true} className='z-[-1] object-cover object-center' />
                                        Get A Quote
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
