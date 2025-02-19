import React from 'react'
import Image from 'next/image'
// ==== Images 
import ctaImg from "media/infinity-studio/ctaImg.png"
import BtnMsg from "media/animating-studio/btn-message.svg"
import flag from "media/video-explainer/flag-icon.png"
import usePopup from '@/app/configs/store/Popup'

const Brands = ({ content }) => {
    const { title, desc } = content;
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    const { popup, togglePopup } = usePopup();
    const popupHandle = () => {
        togglePopup(popup);
    }
    return (
        <>
            <section className='py-[50px] lg:py-[80px] lg:relative px-4 xl:px-0 bg-white'>
                <div className="sm:px-8 lg:max-w-7xl mx-auto">
                    <div className='px-6 lg:px-8 xl:px-10 bg-cover bg-center bg-no-repeat bg-[url("../../public/infinity-studio/brand.svg")] rounded-xl pt-[35px] lg:pt-0 relative'>
                        <div className="grid grid-cols-12">
                            <div className='col-span-12 lg:col-span-7 py-[20px] lg:py-[30px]'>
                                <div className="content">
                                    <h2 className='text-[#fff] font-[600] poppins text-[22px] md:text-[25px] lg:text-[30px] xl:text-[34px] leading-[35px] lg:leading-[40px] xl:leading-[44px]'>
                                        {title}
                                    </h2>
                                    <p className='text-[#fff] text-[16px] xl:text-[18px] poppins font-[400] my-5'>
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
                            <div className='col-span-12 lg:col-span-5 flex justify-center'>
                                <div className='lg:absolute lg:top-[1%] w-[400px] lg:w-[480px] xl:w-[650px] h-full lg:h-auto mb-0 flex items-end bottom-0 right-[-2%]'>
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

export default Brands