import usePopup from '@/app/configs/store/Popup'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

// Images
import CreativeMain from "media/explainer-videos-new/creativemain.png"
import Creative1 from "media/explainer-videos-new/creative1.png"
import Creative2 from "media/explainer-videos-new/creative3.png"
import CreativeBrands from "media/explainer-videos-new/creativebrands.png"

const Creativity = () => {
    // Form Code Start
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
            <section className="bg-[url('../../public/explainer-videos-new/creative-bg.png')] bg-no-repeat py-[50px] md:py-[100px] ">
                <div className="px-5 lg:px-8 xl:px-0 max-w-7xl mx-auto relative z-[999]">
                    <div className="grid grid-cols-12 gap-y-7">
                        <div className="col-span-12 lg:col-span-5">
                            <h2 className='text-[#333] font-[700] text-[30px] md:text-[40px] lg:text-[50px] capitalize mb-[13px] leading-[1.1] font-sans'>Let The <span className='text-[#f36e16]'> Creativity Flow</span> And Do Wonders</h2>
                            <p className='text-[#333] text-[16px] mb-0 poppins leading-[1.43]'>With utmost dedication to producing custom videos, Explainer Videos provides the most innovative and wholly-immersive animated content for your business. Our exceptional digital artists ensure your desired message is conveyed to your target audience on a visceral level.</p>
                            <div className="btns flex items-center justify-between md:w-9/12 mt-[55px]">
                                <div className="btn1">
                                    <button onClick={popupHandle} className='btn_shadow text-[16px] md:text-[18px] text-[#9a9a9a] bg-white py-[10px] px-[25px] md:px-[40px] relative poppins cursor-pointer font-[700] rounded-[30px] uppercase'>
                                        LET'S
                                        <span className='text-[#f36e16]'> ANIMATE</span>
                                    </button>
                                </div>
                                <div className="chat">
                                    <a href="javascript:$zopim.livechat.window.show();" className='text-[#f36e16] font-[700] text-[20px] leading-[1.2] inline-block cursor-pointer poppins text-center'>
                                        <span className='text-black block text-[13px]'>24/7 Available </span>
                                        Live Chat
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-7">
                            <div className="text-right relative">
                                <Image src={CreativeMain} alt='Infinity Animations' className='md:ml-[220px]' />
                                <Image src={Creative1} alt='Infinity Animations' className='absolute left-[30px] bottom-[-5px] md:block hidden' />
                                <Image src={Creative2} alt='Infinity Animations' className='absolute right-[-115px] bottom-[-5px] h-full 2xl:block hidden' />
                            </div>
                            <Image src={CreativeBrands} alt='Infinity Animations' className='ml-[30%] mt-5 md:block hidden' />

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Creativity
