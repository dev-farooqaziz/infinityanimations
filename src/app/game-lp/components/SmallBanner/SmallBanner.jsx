import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Images
import BannerBg from "media/game-lp/small-bannerbg.png"
import BtnBg1 from "media/game-lp/btn-bg1.png"
import BtnBg2 from "media/game-lp/btn-bg2.png"
import BannerImage from "media/game-lp/smallBannerImage.png"

const SmallBanner = () => {
    return (
        <section className='relative py-[50px] lg:py-[90px] md:my-[50px] lg:my-[90px] group duration-700 ease-in-out'>
            <Image src={BannerBg} alt='Infinity Animation' fill={true} className='object-cover object-center z-[-1]' />
            <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-0">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-6">
                        <div className="txt text-center lg:text-left">
                            <h2 className='text-[23px] sm:text-[30px] xl:text-[40px] leading-[35px] sm:leading-[45px] xl:leading-[55px] font-semibold poppins mb-4'>Speak with Experienced Game
                                Design Professionals to
                                Enhance Your Skills
                            </h2>
                            <p className='text-[13px] sm:text-[15px] xl:text-[16px] leading-[25px] sm:leading-[30px] xl:leading-[33px] text-white poppins mb-7 lg:mb-9'>At the heart of every great game lies captivating art that immerses players in unique, vibrant worlds. We craft visuals that not only enhance gameplay </p>
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
                    <div className="col-span-12 lg:col-span-6">
                        <div className="image relative lg:block hidden">
                            <Image src={BannerImage} alt='Small Banner Image' className='absolute top-[-100px] lg:top-[-110px] 5xl:top-[-220px] right-0 group-hover:top-[-70px] lg:group-hover:top-[-140px] 5xl:group-hover:top-[-200px] xl:group-hover:top-[-140px] duration-700 ease-in-out group-hover:duration-700' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SmallBanner
