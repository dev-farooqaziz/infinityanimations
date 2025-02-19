import React from 'react'
import Image from 'next/image'
// ==== Images 
import ctaImg from "media/animating-studio/brand-4.svg"
import BtnMsg from "media/animating-studio/btn-message.svg"
import flag from "media/video-explainer/flag-icon.png"

const BrandsFour = ({ content }) => {
    const { title, desc } = content;
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <>
            <section className='pt-[50px] lg:pb-[100px] lg:pt-[150px] lg:relative px-4 xl:px-0 bg-white'>
                <div className="sm:px-8 lg:max-w-7xl mx-auto">
                    <div className='px-6 sm:px-10 bg-cover bg-center bg-no-repeat bg-[url("../../public/infinity-studio/brand.svg")] rounded-xl pt-[35px] lg:pt-0 relative'>
                        <div className="grid grid-cols-12">
                            <div className='col-span-12 lg:col-span-7 pb-4 lg:py-[30px] '>
                                <div className="content">
                                    <h2 className='text-[#fff] font-[700] poppins text-[22px] md:text-[25px] lg:text-[34px] xl:text-[36px] leading-[35px] lg:leading-[45px] xl:leading-[50px]'>
                                        {title} <br />
                                    </h2>
                                    <p className='text-[#fff] text-[16px] xl:text-[18px] poppins font-[400] pt-[5px] pb-[12px] xl:pt-[12px] xl:pb-[26px] leading-[25px]'>
                                        {desc}
                                    </p>
                                </div>
                                <div className="btns flex-wrap flex items-center justify-start sm:gap-5 my-2 sm:mt-0">
                                    <div className="btn">
                                        <a href="tel:012-345-6789" className='flex items-center justify-center gap-2 text-[15px] text-[#003262] font-[600] poppins bg-[#FFCC00] h-[40px] xl:h-[45px] w-max px-5 tracking-[.3px] rounded-[5px]'>
                                            <Image src={flag} alt='Infinity Animations' className='object-contain' />
                                            <span className='w-max'>
                                                Toll Free: 012-345-6789
                                            </span>
                                        </a>
                                    </div>
                                    <div className="btn">
                                        <a href="javascript:$zopim.livechat.window.show();" className='flex items-center justify-center gap-2 text-[15px] text-white font-[600] poppins bg-transparent h-[40px] xl:h-[45px] w-max px-5 tracking-[.3px] rounded-[5px] border'>
                                            <Image src={BtnMsg} alt='Infinity Animations' />
                                            <span>Live Chat</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-5 flex justify-center'>
                                <div className='lg:absolute lg:bottom-[-9%] w-[400px] lg:w-[450px] xl:w-[530px] h-full lg:h-auto mb-0 flex items-end bottom-0 right-0'>
                                    <Image src={ctaImg} alt='Infinity Animations' className='mb-0' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BrandsFour