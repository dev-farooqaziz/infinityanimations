import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
//===== Component
import usePopup from '@/app/configs/store/Popup';
// ==== Images 
import Price1 from "media/video-explainer2/package1.png"
import Price2 from "media/video-explainer2/package2.png"
import Price3 from "media/video-explainer2/package3.png"
import chat from "media/video-explainer2/chatIconBlack.png"

const Packages = () => {
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
            <section className='py-[50px] bg-cover bg-center bg-[#091416] packages'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12">
                            <h2 className='text-white text-center font-[700] montserrat text-[20px] md:text-[25px] lg:text-[30px]'>Our Packages</h2>
                            <p className='text-white text-[16px] lg:text-[18px] montserrat font-[400] py-[17px] text-center pb-[30px]'>You've visited the right website if you're looking for top-of-the-line video animation experts in the US.</p>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <div className="card bg-white rounded-[10px] py-[10px] overflow-hidden duration-700 relative z-1 cursor-pointer shadow-2xl before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:m-auto before:content-[''] before:rounded-[10px] before:translate-y-[-690px] before:duration-700 before:bg-white hover:before:bg-[#D9D9D9] before:z-0 hover:before:translate-y-[0px] group">
                                <div className="card_top text-center pt-[15px] pb-[10px] relative z-1">
                                    <h3 className='text-[#231f20] montserrat text-[25px] font-[700] uppercase'>STARTUP PACKAGE</h3>
                                    <Image src={Price1} alt='Price_image' className='hidden md:block mx-auto mt-[20px] mb-[5px]' />
                                    <h4 className='text-[#231f20] text-[40px] md:text-[50px] font-[700] poppins py-0 md:py-[10px]'>$499</h4>
                                </div>
                                <div className="card_list bg-[#D9D9D9] py-[30px] px-[20px] relative z-1">
                                    <ul className='h-[245px] pl-[5px]'>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            30 Seconds Duration
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Script Writing
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Custom Artwork
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Background Music
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            HD Format Video
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Dedicated Support
                                        </li>
                                    </ul>
                                </div>
                                <div className="card_bottom relative z-1 pt-[12px] px-[25px]">
                                    <div className="hidden md:flex flex-wrap gap-y-3 items-center justify-between">
                                        <a href="tel:012-345-6789" className='text-left m-0 text-[14px] leading-[20px] text-black montserrat flex flex-col justify-center font-[700]'>
                                            speak with us
                                            <span className='text-[#231f20] text-[16px] pt-2'>012-345-6789</span>
                                        </a>
                                        <div className='text-left m-0 text-[14px] leading-[20px] text-black montserrat flex flex-col justify-center font-[700]'>
                                            Want to Discuss
                                            <a href="javascript:$zopim.livechat.window.show();" className='text-[#231f20] text-[16px] pt-2'>Live Chat Now</a>
                                        </div>
                                    </div>
                                    <div className="flex-wrap flex items-center justify-between mt-[0px] md:mt-[35px] mb-[20px]">
                                        <button onClick={popupHandle} className='flex items-center text-[16px] text-white font-[700] poppins bg-[#A70A0E] group-hover:bg-[#1c2a49] py-[12px] px-3 xl:px-5 w-[45%] h-[50px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                            Get Started
                                        </button>
                                        <a href="javascript:$zopim.livechat.window.show();" className='flex items-center justify-between text-[16px] text-black group-hover:text-white font-[700] poppins bg-transparent group-hover:bg-[#231f20] border border-[#231f20] py-[12px] px-3 xl:px-5 w-[45%] xl:w-[45%] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                            Live Chat
                                            <Image src={chat} alt='Infinity Animation' className='w-[18%] md:w-[12%] lg:w-[20%] group-hover:brightness-[50] group-hover:invert-1' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <div className="card bg-white rounded-[10px] py-[10px] overflow-hidden duration-700 relative z-1 cursor-pointer shadow-2xl before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:m-auto before:content-[''] before:rounded-[10px] before:translate-y-[-690px] before:duration-700 before:bg-white hover:before:bg-[#D9D9D9] before:z-0 hover:before:translate-y-[0px] group">
                                <div className="card_top text-center pt-[15px] pb-[10px] relative z-1">
                                    <h3 className='text-[#231f20] montserrat text-[25px] font-[700] uppercase'>CLASSIC PACKAGE</h3>
                                    <Image src={Price2} alt='Price_image' className='hidden md:block mx-auto mt-[20px] mb-[5px]' />
                                    <h4 className='text-[#231f20] text-[40px] md:text-[50px] font-[700] poppins py-0 md:py-[10px]'>$799</h4>
                                </div>
                                <div className="card_list bg-[#D9D9D9] py-[30px] px-[20px] relative z-1">
                                    <ul className='h-[245px] pl-[5px]'>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            30 Seconds Duration
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Script Writing
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Professional Voice-over & SFX
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Hand-drawn Illustrations
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Unlimited Revisions
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            HD Format Video
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Dedicated Support
                                        </li>
                                    </ul>
                                </div>
                                <div className="card_bottom relative z-1 pt-[12px] px-[25px]">
                                    <div className="hidden md:flex flex-wrap gap-y-3 items-center justify-between">
                                        <a href="tel:012-345-6789" className='text-left m-0 text-[14px] leading-[20px] text-black montserrat flex flex-col justify-center font-[700]'>
                                            speak with us
                                            <span className='text-[#231f20] text-[16px] pt-2'>012-345-6789</span>
                                        </a>
                                        <div className='text-left m-0 text-[14px] leading-[20px] text-black montserrat flex flex-col justify-center font-[700]'>
                                            Want to Discuss
                                            <a href="javascript:$zopim.livechat.window.show();" className='text-[#231f20] text-[16px] pt-2'>Live Chat Now</a>
                                        </div>
                                    </div>
                                    <div className="flex-wrap flex items-center justify-between mt-[0px] md:mt-[35px] mb-[20px]">
                                        <button onClick={popupHandle} className='flex items-center text-[16px] text-white font-[700] poppins bg-[#A70A0E] group-hover:bg-[#1c2a49] py-[12px] px-3 xl:px-5 w-[45%] h-[50px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                            Get Started
                                        </button>
                                        <a href="javascript:$zopim.livechat.window.show();" className='flex items-center justify-between text-[16px] text-black group-hover:text-white font-[700] poppins bg-transparent group-hover:bg-[#231f20] border border-[#231f20] py-[12px] px-3 xl:px-5 w-[45%] xl:w-[45%] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                            Live Chat
                                            <Image src={chat} alt='Infinity Animation' className='w-[18%] md:w-[12%] lg:w-[20%] group-hover:brightness-[50] group-hover:invert-1' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <div className="card bg-white rounded-[10px] py-[10px] overflow-hidden duration-700 relative z-1 cursor-pointer shadow-2xl before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:m-auto before:content-[''] before:rounded-[10px] before:translate-y-[-690px] before:duration-700 before:bg-white hover:before:bg-[#D9D9D9] before:z-0 hover:before:translate-y-[0px] group">
                                <div className="card_top text-center pt-[15px] pb-[10px] relative z-1">
                                    <h3 className='text-[#231f20] montserrat text-[25px] font-[700] uppercase'>PREMIUM PACKAGE</h3>
                                    <Image src={Price3} alt='Price_image' className='hidden md:block mx-auto mt-[20px] mb-[5px]' />
                                    <h4 className='text-[#231f20] text-[40px] md:text-[50px] font-[700] poppins py-0 md:py-[10px]'>$999</h4>
                                </div>
                                <div className="card_list bg-[#D9D9D9] py-[30px] px-[20px] relative z-1">
                                    <ul className='h-[245px] pl-[5px]'>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            30 Seconds Duration
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Script Writing
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Professional Voice-over & SFX
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Custom 2D Character Illustration
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Unlimited Revisions
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            HD Format Video
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Dedicated Support
                                        </li>
                                    </ul>
                                </div>
                                <div className="card_bottom relative z-1 pt-[12px] px-[25px]">
                                    <div className="hidden md:flex flex-wrap gap-y-3 items-center justify-between">
                                        <a href="tel:012-345-6789" className='text-left m-0 text-[14px] leading-[20px] text-black montserrat flex flex-col justify-center font-[700]'>
                                            speak with us
                                            <span className='text-[#231f20] text-[16px] pt-2'>012-345-6789</span>
                                        </a>
                                        <div className='text-left m-0 text-[14px] leading-[20px] text-black montserrat flex flex-col justify-center font-[700]'>
                                            Want to Discuss
                                            <a href="javascript:$zopim.livechat.window.show();" className='text-[#231f20] text-[16px] pt-2'>Live Chat Now</a>
                                        </div>
                                    </div>
                                    <div className="flex-wrap flex items-center justify-between mt-[0px] md:mt-[35px] mb-[20px]">
                                        <button onClick={popupHandle} className='flex items-center text-[16px] text-white font-[700] poppins bg-[#A70A0E] group-hover:bg-[#1c2a49] py-[12px] px-3 xl:px-5 w-[45%] h-[50px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                            Get Started
                                        </button>
                                        <a href="javascript:$zopim.livechat.window.show();" className='flex items-center justify-between text-[16px] text-black group-hover:text-white font-[700] poppins bg-transparent group-hover:bg-[#231f20] border border-[#231f20] py-[12px] px-3 xl:px-5 w-[45%] xl:w-[45%] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                            Live Chat
                                            <Image src={chat} alt='Infinity Animation' className='w-[18%] md:w-[12%] lg:w-[20%] group-hover:brightness-[50] group-hover:invert-1' />
                                        </a>
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

export default Packages
