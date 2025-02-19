"use client"
import usePopup from '@/app/configs/store/Popup';
import Image from 'next/image'
import React from 'react'
// Images
import Chat from "media/infinity-studio-lp-new/chat-icon.svg"
import flag from "media/video-explainer/flag-icon.png"

const Brand = ({ content }) => {
    const { popup, togglePopup } = usePopup();
    const popupHandle = () => {
        togglePopup(popup);
    }
    const { title, subtitle, desc, branImage, isBranImage, btnTxt, css, positionCss, callTxt, isColor } = content;
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <>
            <section className='py-[30px] md:py-[70px] lg:pt-[60px] bg-white relative'>
                <div className={`mx-4 sm:mx-8 lg:max-w-7xl xl:mx-auto py-10 md:py-16 lg:py-10 px-4 sm:px-9 relative ${isColor ? "bg-[#EE8526] rounded-[30px]" : "bg-[#FA1F33] rounded-[17px]"}`}>
                    <div className="grid grid-cols-12">
                        {isBranImage ?
                            <div className="col-span-12 lg:col-span-7">
                                <h2 className='text-white poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[50px] mb-2'>{title}</h2>
                                <h5 className='text-white font-bold poppins leading-[31px] text-[18px] md:text-[25px] lg:w-11/12 pb-[7px]'>{subtitle}</h5>
                                <p className='text-white text-[13px] lg:text-[16px] poppins'>{desc}</p>
                                <div className='flex flex-col md:flex-row items-start md:items-center justify-start gap-4 mt-6'>
                                    <div className="btn w-max">
                                        <button onClick={popupHandle} className="text-[14px] lg:text-[12px] xl:text-[14px] font-bold text-black bg-white rounded-[5px] px-4 xl:px-10 max-width h-[40px] xl:h-[45px] poppins flex items-center justify-center">{btnTxt}</button>
                                    </div>
                                    <div className="btn w-max">
                                        <a className="text-[14px] lg:text-[12px] xl:text-[14px] font-bold text-white bg-black rounded-[5px] px-4 xl:px-10 max-width h-[40px] xl:h-[45px] poppins flex items-center justify-center gap-2" href="javascript:$zopim.livechat.window.show();">
                                            <Image src={Chat} alt='UK' className='object-contain grayscale-[1] brightness-[100]' />
                                            {callTxt}
                                        </a>
                                    </div>
                                    <div className='btn w-max'>
                                        <a href="tel:012-345-6789" className='flex items-center gap-2 max-width h-[40px] xl:h-[45px] text-[14px] lg:text-[12px] xl:text-[14px] poppins font-bold text-white'>
                                            <Image src={flag} alt='UK' className='object-contain' />
                                            <span>
                                                Toll Free: 012-345-6789
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div> :
                            <div className="col-span-12 lg:col-span-6">
                                <h2 className='text-white font-bold font-sans text-[25px] md:text-[35px] xl:text-[70px] leading-tight xl:leading-[70px] xl:mb-[20px]'>{title}</h2>
                                <h5 className='text-white font-bold font-sans leading-[31px] text-[25px] lg:w-11/12 pb-[5px]'>{subtitle}</h5>
                                <p className='text-[17px] text-white font-sans leading-[22px]'>{desc}</p>
                                <div className='flex flex-col md:flex-row items-start md:items-center justify-start gap-4 mt-6'>
                                    <div className="btn w-max">
                                        <a href="javascript:$zopim.livechat.window.show();" className="text-[14px] lg:text-[12px] xl:text-[14px] font-bold text-white bg-black rounded-[5px] px-4 xl:px-10 max-width h-[40px] xl:h-[45px] poppins flex items-center justify-center">Let’s Animate Your Idea</a>
                                    </div>
                                    <div className='btn w-max'>
                                        <a href="tel:012-345-6789" className='flex items-center gap-2 max-width h-[40px] xl:h-[45px] text-[14px] lg:text-[12px] xl:text-[14px] poppins font-bold text-white'>
                                            <Image src={flag} alt='UK' className='object-contain' />
                                            <span>
                                                Toll Free: 012-345-6789
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>}
                        {isBranImage ?
                            <div className="col-span-5">
                                <div className={`img ${positionCss} lg:block hidden`}>
                                    <Image src={branImage} alt='brandShine' className={`${css}`} quality={85} />
                                </div>
                            </div> :
                            <div className="col-span-6">
                                <div className="img absolute bottom-0 right-0 lg:right-[-5px] xl:right-[-27px] lg:block hidden">
                                    <Image src={branImage} alt='brandShine' height={622} width={389} className='xl:min-h-[400px] xl:w-full h-full ' quality={85} />
                                </div>
                            </div>}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Brand
