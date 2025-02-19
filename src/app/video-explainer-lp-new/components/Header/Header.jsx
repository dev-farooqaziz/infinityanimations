import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import usePopup from '@/app/configs/store/Popup'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
//===== Images 
import logo from "media/images/logo.gif";
import UK from "media/video-explainer/flag-icon.png"
import Chat from "media/video-explainer/cht-icon.png"
import telephone from "media/icons/call.png";

const HeaderLP = () => {
    const { popup, togglePopup } = usePopup();
    const popupHandle = () => {
        togglePopup(popup);
    }
    // ===============================================
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
            <header className={`fixed left-0 top-0 py-3 z-50 w-full ${isScrolled ? 'bg-[#542f30fa] shadow-lg' : 'bg-transparent'} ${isScrollDown ? 'pt-3 md:pt-3' : ''}`}>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-6 lg:col-span-4 xl:col-span-5">
                            <div className="logo">
                                <Image src={logo} alt='logo' width={150} className='w-[70%] md:w-[50%] lg:w-[28%]' />
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-8 xl:col-span-7 lg:block hidden">
                            <div className="nav_lists">
                                <ul className='flex items-center gap-x-4 xl:gap-x-7'>
                                    <li>
                                        <a href="mailto:info@xyz.com" className='flex items-center'>
                                            <EnvelopeIcon className='w-[20px] h-[20px] text-white' />
                                            <span className='text-[13px] text-white py-[10px] px-[8px] font-[700] font-sans'>info@xyz.com</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:012-345-6789;" className='flex items-center'>
                                            <Image src={UK} alt='UK' className='w-[23px] h-[16px] object-contain' />
                                            <span className='text-[13px] text-white py-[10px] px-[8px] font-[700] font-sans'>
                                                012-345-6789
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <div className='flex items-center'>
                                            <Image src={Chat} alt='UK' className='w-auto object-contain grayscale-[1] brightness-[100]' />
                                            <a href="javascript:$zopim.livechat.window.show();" className='text-[13px] text-white py-[10px] px-[8px] font-[700] font-sans'>
                                                Live Chat
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <button onClick={popupHandle} className='flex items-center text-[13px] text-white font-[700] font-sans bg-black ml-[10px] py-[10px] px-[12px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-xl duration-700 transition-all hover:bg-[#fb0d1c] hover:duration-700 hover:transition-all'>
                                            Get Started
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-6 lg:hidden block">
                            <ul>
                                <li>
                                    <alert href="tel:012-345-6789;" className='flex items-center justify-end gap-x-3 text-white font-sans'>
                                        <Image src={telephone} loading="lazy" width="56" height="52" className="w-[15px]" alt='Infinity Animations' />
                                        012-345-6789
                                    </alert>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderLP
