import Image from 'next/image'
import React from 'react'
// ==== Images 
import icon1 from "media/infinity-studio/icons-01.png"
import icon2 from "media/infinity-studio/icons-02.png"
import icon3 from "media/infinity-studio/icons-03.png"
import icon4 from "media/infinity-studio/icons-04.png"
import icon5 from "media/infinity-studio/icons-05.png"
import icon6 from "media/infinity-studio/icons-06.png"
import icon7 from "media/infinity-studio/icons-07.png"


const Work = () => {
    return (
        <>
            <section className='relative bg-[#F2F2F2] overflow-hidden'>
                <div className="grid grid-cols-12 border h-full">
                    <div className="col-span-12 lg:col-span-6 px-[15px] lg:pe-[5px] lg:ps-[25px] xl:ps-[85px]  xl:pe-[5px] py-[45px]">
                        <h3 className='text-[#003262] font-[600] poppins text-[20px] md:text-[30px] lg:text-[36px]'>How We Work</h3>
                        <p className='text-[#231F20] text-[16px] poppins font-[400] py-[17px] lg:w-[90%] leading-[20px] md:leading-[22px] mb-0'>There is an immense amount of product animation & graphic content out there but here at Video Explain Art , we make sure our animation service & work stands out.</p>
                        <div className="grid grid-cols-12 gap-y-8 lg:gap-y-4 xl:gap-y-8 gap-x-16 lg:gap-x-12 items-end pb-0 md:pb-[25px] pt-[25px]">
                            <div className="col-span-12 sm:col-span-6 lg:col-span-10 xl:col-span-6">
                                <div className='flex items-center gap-x-2  h-[35px]'>
                                    <div className='w-[38px] h-[37px]'>
                                        <Image src={icon1} alt='banner-logos' className='img-fuild' />
                                    </div>
                                    <span className='text-[#231f20] text-justify ps-5 text-[16px] lg:text-[18px] poppins font-[400] py-[17px] leading-[30px]'> Full HD Animations</span>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-10 xl:col-span-6">
                                <div className='flex items-center gap-x-2  h-[35px] '>
                                    <div className='w-[38px] h-[37px]'>
                                        <Image src={icon2} alt='banner-logos' className='img-fuild' />
                                    </div>
                                    <span className='text-[#231f20] text-justify ps-5 text-[16px] lg:text-[18px] poppins font-[400] py-[17px] leading-[30px]'> Appealing Designs</span>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-10 xl:col-span-6">
                                <div className='flex items-center gap-x-2  h-[35px] '>
                                    <div className='w-[38px] h-[37px]'>
                                        <Image src={icon3} alt='banner-logos' className='img-fuild' />
                                    </div>
                                    <span className='text-[#231f20] text-justify ps-5 text-[16px] lg:text-[18px] poppins font-[400] py-[17px] leading-[30px]'> Latest Technology</span>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-10 xl:col-span-6">
                                <div className='flex items-center gap-x-2  h-[35px] '>
                                    <div className='w-[38px] h-[37px]'>
                                        <Image src={icon4} alt='banner-logos' className='img-fuild' />
                                    </div>
                                    <span className='text-[#231f20] text-justify ps-5 text-[16px] lg:text-[18px] poppins font-[400] py-[17px] leading-[30px]'> Award-Winning Agency</span>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-10 xl:col-span-6">
                                <div className='flex items-center gap-x-2  h-[35px] '>
                                    <div className='w-[38px] h-[37px]'>
                                        <Image src={icon5} alt='banner-logos' className='img-fuild' />
                                    </div>
                                    <span className='text-[#231f20] text-justify ps-5 text-[16px] lg:text-[18px] poppins font-[400] py-[17px] leading-[30px]'> Appealing Designs</span>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-10 xl:col-span-6">
                                <div className='flex items-center gap-x-2  h-[35px] '>
                                    <div className='w-[38px] h-[37px]'>
                                        <Image src={icon6} alt='banner-logos' className='img-fuild' />
                                    </div>
                                    <span className='text-[#231f20] text-justify ps-5 text-[16px] lg:text-[18px] poppins font-[400] py-[17px] leading-[30px]'> Latest Technology</span>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-10 xl:col-span-6">
                                <div className='flex items-center gap-x-2  h-[35px] '>
                                    <div className='w-[38px] h-[37px]'>
                                        <Image src={icon7} alt='banner-logos' className='img-fuild' />
                                    </div>
                                    <span className='text-[#231f20] text-justify ps-5 text-[16px] lg:text-[18px] poppins font-[400] py-[17px] leading-[30px]'> Award-Winning Agency</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="hidden lg:block col-span-6 bg-cover bg-center bg-[url('../../public/infinity-studio/howBg.svg')]">
                    </div>
                </div>
            </section>
        </>
    )
}

export default Work
