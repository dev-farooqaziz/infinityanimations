"use client"
import Image from 'next/image'
import React from 'react'
// Images
import RightArrow from "media/infinity-studio-lp-2/right-arrow.png"

const WhyChoose = () => {
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <section className='bg-white py-[50px] lg:pt-[90px] lg:pb-[150px]'>
            <div className="px-4 xl:px-0 lg:max-w-7xl mx-auto">
                <div className="grid grid-cols-12 sm:px-8">
                    <div className="col-span-12">
                        <h2 className='text-black poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[60px] text-center mb-2'>Why Choose Infinity Animation?</h2>
                        <p className='text-[14px] md:text-[16px] poppins text-normal text-black text-center xl:w-8/12 mx-auto mb-7 md:mb-12 lg:mb-20'>At Infinity Animations our animators have magic in their hands with their perfect blend of creativity we create incredible visuals for your business. At every stage of the making, we ensure</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-y-4 md:border-b-2 md:border-t-2 border-[#F5090B] lg:px-8">
                    <div className="md:col-span-4 col-span-12 relative md:before:content-[''] md:before:absolute md:before:top-[-30px] md:before:left-0 md:before:h-[120%] md:before:w-[2px] md:before:bg-[#F5090B] md:after:content-[''] md:after:absolute md:after:top-[-30px] md:after:right-0 md:after:h-[120%] md:after:w-[2px] md:after:bg-[#F5090B]">
                        <div className='bg-[#F5090B] rounded-[20px] lg:rounded-[44px] px-5 lg:px-7 xl:px-14 py-6 lg:py-12 h-full'>
                            <h3 className='text-center text-[17px] xl:text-[20px] leading-[22px] xl:leading-[30px] font-semibold poppins mb-4'>State-Of-The-Art <br /> Technology</h3>
                            <p className='text-[12px] xl:text-[14px] poppins text-normal text-white text-center mb-3 lg:mb-6'>At Infinity Animation Company, our team consists of highly skilled animators and creative professionals who bring your vision to life.</p>
                            <div className="btn">
                                <a href="javascript:$zopim.livechat.window.show();" className='flex items-center justify-center gap-x-2 text-[14px] lg:text-[14px] text-white font-semibold poppins h-[45px] w-max px-2 lg:px-5 tracking-[.3px] rounded-[5px] leading-[20px] duration-700 transition-all bg-black hover:duration-700 hover:transition-all mx-auto'>
                                    Make an Animation
                                    <Image src={RightArrow} alt='Infinity Animation' className='w-[7%]' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-4 col-span-12 relative md:before:content-[''] md:before:absolute md:before:top-[-30px] md:before:right-0 md:before:h-[120%] md:before:w-[2px] md:before:bg-[#F5090B]">
                        <div className='bg-black rounded-[20px] lg:rounded-[44px] px-5 lg:px-7 xl:px-14 py-6 lg:py-12 h-full'>
                            <h3 className='text-center text-[17px] xl:text-[20px] leading-[22px] xl:leading-[30px] font-semibold poppins mb-4'>
                                Unmatched Creativity <br /> And Expertise
                            </h3>
                            <p className='text-[12px] xl:text-[14px] poppins text-normal text-white text-center mb-3 lg:mb-6'>
                                At Infinity Animation Company, our team consists of highly skilled animators and creative professionals who bring your vision to life.
                            </p>
                            <div className="btn">
                                <a href="javascript:$zopim.livechat.window.show();" className='flex items-center justify-center gap-x-2 text-[14px] lg:text-[14px] text-white font-semibold poppins h-[45px] w-max px-2 lg:px-5 tracking-[.3px] rounded-[5px] leading-[20px] duration-700 transition-all bg-[#FF2D4B] hover:duration-700 hover:transition-all mx-auto'>
                                    Make an Animation
                                    <Image src={RightArrow} alt='Infinity Animation' className='w-[8%]' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-4 col-span-12 relative md:before:content-[''] md:before:absolute md:before:top-[-30px] md:before:right-0 md:before:h-[120%] md:before:w-[2px] md:before:bg-[#F5090B]">
                        <div className='bg-[#F5090B] rounded-[20px] lg:rounded-[44px] px-5 lg:px-7 xl:px-14 py-6 lg:py-12 h-full'>
                            <h3 className='text-center text-[17px] xl:text-[20px] leading-[22px] xl:leading-[30px] font-semibold poppins mb-4'>Client-Centered <br />Approach</h3>
                            <p className='text-[12px] xl:text-[14px] poppins text-normal text-white text-center mb-3 lg:mb-6'>
                                At Infinity Animation Company, our team consists of highly skilled animators and creative professionals who bring your vision to life.
                            </p>
                            <div className="btn">
                                <a href="javascript:$zopim.livechat.window.show();" className='flex items-center justify-center gap-x-2 text-[14px] lg:text-[14px] text-white font-semibold poppins h-[45px] w-max px-2 lg:px-5 tracking-[.3px] rounded-[5px] leading-[20px] duration-700 transition-all bg-black hover:duration-700 hover:transition-all mx-auto'>
                                    Make an Animation
                                    <Image src={RightArrow} alt='Infinity Animation' className='w-[8%]' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose
