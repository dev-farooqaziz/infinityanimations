import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
//===== Component
import usePopup from '@/app/configs/store/Popup';
// ==== Images 
import UK from "media/video-explainer/flag-icon.png"
import CTAPart from "media/video-explainer/cta-rht-img.png"


const Brands = ({ content }) => {
    const { title, subTitle, desc, isBtn } = content;
    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <>
            <section className='py-[50px] lg:py-[80px] bg-cover bg-center bg-no-repeat bg-[url("../../public/video-explainer/cta-bg.jpg")] relative'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="content">
                            <h2 className='text-[#231f20] font-[700] montserrat text-[20px] md:text-[25px] lg:text-[30px] leading-[28px] lg:leading-[35px]'>
                                {title} <br />
                                <span>{subTitle}</span>
                            </h2>
                            <p className='text-[#231f20] text-[16px] lg:text-[18px] montserrat font-[400] py-[20px] leading-[20px]'>
                                {desc}
                            </p>
                        </div>
                        <div className="btns flex-wrap flex items-center justify-center md:justify-start gap-5 mt-6">
                            <div className="btn w-full md:w-auto flex items-center justify-center">
                                <button onClick={popupHandle} className='text-[16px] text-white font-[600] montserrat bg-[#003466] py-[12px] px-[35px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl w-full md:w-auto flex items-center justify-center'>
                                    Get A Call For Free Consultation
                                </button>
                            </div>
                            <div className="btn w-full md:w-auto flex items-center justify-center">
                                <a href="javascript:$zopim.livechat.window.show();" className='text-[16px] text-white font-[600] montserrat bg-black py-[12px] px-[35px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl w-full md:w-auto flex items-center justify-center'>
                                    Live Chat
                                </a>
                            </div>
                            {isBtn ? <div className="btn">
                                <a href="tel:012-345-6789" className='flex items-center'>
                                    <Image src={UK} alt='UK' className='object-contain' />
                                    <span className='text-[18px] text-black py-[10px] px-[8px] font-bold montserrat'>
                                        Toll Free: 012-345-6789
                                    </span>
                                </a>
                            </div> : null}
                        </div>
                    </div>
                </div>
                <div className="partical absolute right-[20px] top-[-54px] animation lg:block hidden">
                    <Image src={CTAPart} alt='particale-Image' />
                </div>
            </section>
        </>
    )
}

export default Brands
