import React from 'react'
import Image from 'next/image'
// ==== Images 
import ctaImg from "media/animating-studio/ctaImg1.svg"
import BtnMsg from "media/animating-studio/btn-message.svg"
import usePopup from '@/app/configs/store/Popup'

const BrandOne = ({ content }) => {
    const { popup, togglePopup } = usePopup();
    const popupHandle = () => {
        togglePopup(popup);
    }
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
            <section className='pb-[30px] pt-[50px] lg:pt-[100px] lg:relative px-4 xl:px-0 bg-white'>
                <div className='lg:py-[50px] '>
                    <div className="sm:px-8 lg:max-w-7xl mx-auto">
                        <div className='px-6 lg:px-8 xl:px-10 bg-cover bg-center bg-no-repeat bg-[url("../../public/infinity-studio/brand.svg")] rounded-xl pt-[35px] lg:pt-0'>
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
                                    <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-start gap-5 my-2 sm:mt-0">
                                        <div className="btn">
                                            <button onClick={popupHandle} className='flex items-center text-[14px] lg:text-[13px] xl:text-[14px] text-white font-medium poppins xl:ml-[10px] h-[40px] xl:h-[45px] px-[8px] xl:px-[12px] tracking-[.3px] rounded-[5px] bg-[#A70A0E]'>
                                                Get A Quote
                                            </button>
                                        </div>
                                        <div className="btn">
                                            <a href="javascript:$zopim.livechat.window.show();" className='flex items-center justify-center gap-2 text-[15px] text-white font-[600] poppins bg-transparent h-[40px] xl:h-[45px] w-max px-5 tracking-[.3px] rounded-[5px] border'>
                                                <Image src={BtnMsg} alt='Infinity Animations' />
                                                Live Chat
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-12 lg:col-span-5 flex justify-center '>
                                    <div className='flex items-end lg:relative w-full'>
                                        <Image src={ctaImg} alt='Infinity Animations ' className='mb-0 lg:absolute bottom-[0%] h-[300px] lg:h-[360px] xl:h-[400px] w-full' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BrandOne