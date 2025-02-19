import Image from 'next/image'
import React from 'react'
//===== Component
import usePopup from '@/app/configs/store/Popup';
// ==== Images 
import CTAPart from "media/location-page/brand-img.png"
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
            <section className={`lg:h-[450px] bg-cover bg-center bg-no-repeat ${backgroundImage} lg:grid lg:grid-cols-8 mt-[50px] lg:mt-[50px] mb-[50px] lg:mb-[15px]`}>
                <div className="partical left-[0px] lg:block hidden lg:col-span-4 xl:col-span-5 content-end pb-[15px]">
                    <Image src={CTAPart} alt='particale-Image' width="100%" className='mt-auto bottom-0' />
                </div>
                <div className='bg-black rounded-full text-center w-[500px] h-[500px] flex justify-center items-start mx-auto mt-[-35px]'>

                    <div className="content text-center rounded-full w-[470px] h-[470px]  border-[22px] border-white-600 flex flex-col justify-center items-center">
                        <h2 className='text-[#ffffff] font-[700] montserrat text-[30px] lg:text-[36px] leading-[1.2]'>
                            {title} <br />
                            <span>{subTitle}</span>
                        </h2>
                        <p className='text-[#ffffff] text-[12px] montserrat font-light'>
                            {desc}
                        </p>
                        <div className="btns flex-wrap flex items-center justify-center mt-6">
                            <div className="flex gap-6">
                                <CTA
                                    text="Get Started"
                                    icon="/icons/arrow-red.png"
                                    iconCss="flex items-center justify-center w-[15px] h-[15px] xl:w-[20px] xl:h-[20px] bg-white rounded-full p-2 ms-2"
                                    bg="bg-prime"
                                    color={`text-white`}
                                    border={`border-2 border-[#f5090b]`}
                                    hover="hover:bg-transparent"
                                />
                                <CTA
                                    text="Live Chat"
                                    icon="/icons/chat.png"
                                    iconCss="w-[30px]"
                                    bg="bg-transparent"
                                    color={`text-white`}
                                    border={`border-2 border-[#fff]`}
                                    hover="hover:bg-prime"
                                    href="javascript:$zopim.livechat.window.show();"
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Brands
