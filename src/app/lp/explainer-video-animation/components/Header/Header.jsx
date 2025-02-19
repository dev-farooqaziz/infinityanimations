"use client"
import React, { useEffect, useState } from 'react'
import usePopup from '@/app/configs/store/Popup'
import Image from 'next/image'
//===== Images 
import logo from "media/images/logo.gif";
import Chat from "media/infinity-studio-lp-new/chat-icon.svg"
import mail from "media/infinity-studio-lp-new/mail-icon.svg"
import flag from "media/video-explainer/flag-icon.png"

const Header = () => {
    const { popup, togglePopup } = usePopup();
    const popupHandle = () => {
        togglePopup(popup);
    }

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 1);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // ===============================================
    const [isScrollDown, setIsScrollDown] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrollDown(scrollTop > 1 && scrollTop > lastScrollTop);
            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <>
            <header className={`fixed left-0 top-0 py-6 z-50 w-full ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'} ${isScrollDown ? 'pt-4 md:pt-6' : ''}`}>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-4 lg:col-span-3">
                            <div className="logo">
                                <Image src={logo} alt='logo' width={150} className='w-[90%] md:w-[50%]' />
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-9 lg:block hidden">
                            <div className="nav_lists">
                                <ul className='flex items-center justify-end gap-x-2 xl:gap-x-4'>
                                    <li>
                                        <a href="mailto:info@xyz.com" className='flex items-center'>
                                            <Image src={mail} alt='Infinity Animation' />
                                            <span className='text-[14px] lg:text-[13px] xl:text-[14px] text-white px-[8px] font-normal poppins'>info@xyz.com</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:$zopim.livechat.window.show();" className='flex items-center text-white font-normal poppins bg-[#ff2d4c2f] border-2 xl:ml-[10px] h-[40px] xl:h-[45px] px-[8px] xl:px-[12px] tracking-[.3px] rounded-[5px] shadow-xl duration-700 transition-all hover:bg-[#FF2D4B] hover:duration-700 hover:transition-all text-[14px] lg:text-[13px] xl:text-[14px]'>
                                            <Image src={Chat} alt='UK' className='object-contain grayscale-[1] brightness-[100] xl:block hidden mr-1' />
                                            Live Chat
                                        </a>
                                    </li>
                                    <li>
                                        <button onClick={popupHandle} className='flex items-center text-[14px] lg:text-[13px] xl:text-[14px] text-white font-medium poppins xl:ml-[10px] h-[40px] xl:h-[45px] px-[8px] xl:px-[12px] tracking-[.3px] rounded-[5px] shadow-3xl duration-700 transition-all bg-[#FF2D4B] hover:duration-700 hover:transition-all'>
                                            Get A Quote
                                        </button>
                                    </li>
                                    <li>
                                        <a href='tel:012-345-6789' className='flex items-center gap-2 text-[14px] lg:text-[13px] xl:text-[14px] text-white font-medium poppins xl:ml-[10px] h-[40px] xl:h-[45px] px-[8px] xl:px-[12px] tracking-[.3px] rounded-[5px] shadow-3xl duration-700 transition-all bg-[#FF2D4B] hover:duration-700 hover:transition-all'>
                                            <Image src={flag} alt='CA' className='object-contain' />
                                            <span className='w-max'>
                                                Toll Free: 012-345-6789
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-8 lg:hidden block">
                            <ul>
                                <li className='flex items-center justify-end'>
                                    <a href='tel:012-345-6789' className='flex items-center gap-2 text-[13px] md:text-[16px] text-white font-medium poppins xl:ml-[10px] h-[40px] xl:h-[45px] px-[8px] xl:px-[12px] tracking-[.3px] rounded-[5px] shadow-3xl duration-700 transition-all bg-[#FF2D4B] hover:duration-700 hover:transition-all'>
                                        <Image src={flag} alt='CA' className='object-contain' />
                                        <span className='w-max'>
                                            Toll Free: 012-345-6789
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
