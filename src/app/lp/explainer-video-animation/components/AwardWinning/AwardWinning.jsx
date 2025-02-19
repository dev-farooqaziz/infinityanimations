"use client"
import React from "react";
import Image from "next/image";
// Import Images
import icon1 from "media/icons/banner-logo-1.png";
import icon2 from "media/icons/banner-logo-2.png";
import icon4 from "media/icons/banner-logo-4.png";
import icon6 from "media/icons/banner-logo-6.png";
import icon7 from "media/icons/banner-logo-7.png";
import icon8 from "media/icons/banner-logo-8.png";
import icon9 from "media/icons/banner-logo-9.png";
import icon10 from "media/icons/banner-logo-10.png";
import icon12 from "media/icons/banner-logo-12.png";
import icon13 from "media/icons/banner-logo-13.png";
import icon14 from "media/icons/banner-logo-14.png";
import icon15 from "media/icons/banner-logo-15.png";
import icon16 from "media/icons/banner-logo-16.png";
import icon17 from "media/icons/banner-logo-17.png";
import icon18 from "media/icons/banner-logo-18.png";
import icon19 from "media/icons/banner-logo-19.png";
// Import Slider
import { AutoScroll } from '@/components/sliders';


const AwardWinning = () => {
    return (
        <section className='bg-[#cccccc] pt-[30px] pb-[40px] '>
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="mb-8">
                            <h2 className='text-black poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[60px] text-center mb-2'>An <span className='text-[#F5090B]'>Award-Winning</span> Video Animation Company</h2>
                            <p className='text-[14px] md:text-[16px] poppins text-normal text-black text-center xl:w-7/12 mx-auto'>At Infinity Animations, we create powerful video animations that elevate your brand. Our dedication to excellence has earned us numerous awards and accolades, including:</p>
                        </div>
                        <AutoScroll wrapperClass="" options={{ loop: true, align: "start" }}>
                            {
                                [icon1, icon2, icon4, icon6, icon7, icon8, icon9, icon10, icon12, icon13, icon14, icon15, icon16, icon17, icon18, icon19].map((e, i) => (
                                    <div key={i} className="shrink-0 grow-0 basis-1/3 md:basis-1/4 lg:basis-1/5 mr-5">
                                        <Image src={e} alt="logo" className='aspect-[15/10] object-contain w-[200px]' />
                                    </div>
                                ))
                            }
                        </AutoScroll>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AwardWinning
