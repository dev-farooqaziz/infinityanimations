import Image from 'next/image'
import React from 'react'
//===== Component
import usePopup from '@/app/configs/store/Popup';
// ==== Images 
import CTAPart from "media/illustration-experts/cta-img.png"
import CTA from '@/components/cta/CTA';


const Brands = ({ content }) => {
    const { title, subTitle, desc, isBtn, backgroundImage } = content;
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
            <section className={`py-[25px] lg:py-[50px] bg-cover bg-center bg-no-repeat ${backgroundImage} relative `}>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="content text-center md:text-start">
                            <p className='text-[#ffffff] text-[20px] md:text-[15px] lg:text-[25px] montserrat font-light py-[20px] leading-[1.2] '>
                                {desc}
                            </p>
                            <h2 className='text-[#ffffff] font-[700] montserrat text-[30px] lg:text-[36px] leading-[1.2]'>
                                {title} <br />
                                <span>{subTitle}</span>
                            </h2>

                        </div>
                        <div className="btns flex-wrap flex items-center justify-center md:justify-start gap-y-3 gap-1 md:gap-5 mt-6">
                            <div className="flex gap-6">
                                <CTA
                                    text="Get Started"
                                    icon="/icons/arrow-red.png"
                                    iconCss="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full p-2 ms-2"
                                    bg="bg-prime"
                                    color={`text-white`}
                                    border={`border-2 border-[#f5090b]`}
                                    hover="hover:bg-transparent"
                                />
                                <CTA
                                    text="Live Chat"
                                    icon="/icons/chat.png"
                                    iconCss="w-[40px]"
                                    bg="bg-transparent"
                                    color={`text-white`}
                                    border={`border-2 border-[#fff]`}
                                    hover="hover:bg-prime"
                                    href="javascript:$zopim.livechat.window.show();"
                                />
                            </div>
                            {isBtn ? <div className="btn">
                                <a href="tel:012-345-6789" className='flex items-center'>
                                    <span className='text-[18px] text-white-500 py-[10px] px-[8px] font-[400] montserrat '>
                                        Call us at: <span className='font-bold'>012-345-6789</span>
                                    </span>
                                </a>
                            </div> : null}
                        </div>
                    </div>
                </div>
                <div className="partical absolute right-[30px] top-[-75px] animation lg:block hidden">
                    <Image src={CTAPart} alt='particale-Image' width={400} />
                </div>
            </section>
        </>
    )
}

export default Brands
