import usePopup from '@/app/configs/store/Popup'
import CTA from '@/components/cta/CTA'
import Link from 'next/link'
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const SmallBanner = () => {
    const { popup, togglePopup } = usePopup();
    const popupHandle = () => {
        togglePopup(popup);
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
            <section className="md:mt-[70px] bg-[url('../../public/logo-animation-lp/small-banner.jpg')] bg-no-repeat bg-center bg-cover py-[60px]">
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="txt">
                            <h2 className='text-center text-[25px] sm:text-[35px] md:text-[45px] leading-[30px] sm:leading-[45px] font-[700] my-[2%] font-sans lg:w-10/12 mx-auto'>Get An Animated Logo For Your Business That Outshines!</h2>
                            <p className='text-center text-[17px] md:text-[20px] tracking-[1px] leading-[22px] uppercase font-[300] font-sans mt-[1%] '>ORDER DIRECTLY OR CONTACT US FOR A QUOTE.</p>
                            <div className="flex items-center justify-center gap-x-4 pt-[3%]">
                                <div className="btn group">
                                    <button onClick={popupHandle} className='text-[17px] font-bold poppins group-hover:text-white text-[#f5090b] border-[#f5090b] border-2 rounded-[5px] leading-[19px] px-[35px] h-[40px] xl:h-[50px] text-center duration-700 group-hover:duration-700 ease-in-out group-hover:bg-[#f5090b] flex items-center justify-center overflow-hidden relative'>
                                        <FaExternalLinkAlt className='absolute top-[50%] translate-y-[-50%] ml-[-110%] group-hover:ml-[-77%] duration-700 group-hover:duration-700 ease-in-out text-[17px] font-bold poppins group-hover:text-white' />
                                        <span>Get A Quote</span>
                                    </button>
                                </div>
                                <CTA
                                    text="Live Chat"
                                    icon="/icons/chat.png"
                                    iconCss="w-[40px]"
                                    bg=""
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

export default SmallBanner
