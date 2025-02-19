import React, { useEffect, useState } from 'react'
import usePopup from '@/app/configs/store/Popup'
import Image from 'next/image'
//===== Images 
// import logo from "media/images/logo.gif";
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import logo from "media/images/logo.gif";
import Chat from "media/video-explainer/cht-icon.png"
import telephone from "media/icons/call.png";


const HeaderLP = () => {
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
            <header className={`fixed left-0 top-0 py-5 z-50 w-full ${isScrolled ? 'bg-[#003465] shadow-lg' : 'bg-transparent'} ${isScrollDown ? 'pt-4 md:pt-3' : ''}`}>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-6 lg:col-span-4">
                            <div className="logo">
                                <Image priority src={logo} alt='logo' width={150} className='w-[70%] md:w-[50%] lg:w-[28%]' />
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-8 lg:block hidden">
                            <div className="nav_lists">
                                <ul className='flex justify-end items-center gap-x-4 xl:gap-x-7'>
                                    <li>
                                        <a href="mailto:info@xyz.com" className='flex items-center'>
                                            <EnvelopeIcon className='w-[25px] h-[25px] text-white' />
                                            <span className='text-[13px] text-white py-[10px] px-[8px] font-[700] font-sans'>info@xyz.com</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:$zopim.livechat.window.show();" className='flex items-center text-[15px] text-black font-[700] font-sans bg-[#f6c501] ml-[10px] py-[10px] px-[15px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-xl duration-700 transition-all hover:duration-700 hover:transition-all'>
                                            <Image src={Chat} alt='UK' className='object-contain grayscale-[1] brightness-[100] mr-2' />
                                            Live Chat
                                        </a>
                                    </li>
                                    <li>
                                        <button onClick={popupHandle} className='flex items-center text-[15px] text-black font-[700] font-sans bg-[#f6c501] ml-[10px] py-[10px] px-[15px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-xl duration-700 transition-all hover:duration-700 hover:transition-all'>
                                            Get A Call
                                        </button>
                                    </li>
                                    <li>
                                        <a href='tel:012-345-6789' className='flex items-center text-[15px] text-black font-[700] font-sans bg-[#f6c501] ml-[10px] py-[10px] px-[15px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-xl duration-700 transition-all hover:duration-700 hover:transition-all'>
                                            Toll Free: 012-345-6789
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-6 lg:hidden block">
                            <ul>
                                <li>
                                    <a href="tel:012-345-6789" className='flex items-center justify-end gap-x-3 text-white font-sans'>
                                        <Image src={telephone} loading="lazy" width="56" height="52" className="w-[15px]" alt='Infinity Animations' />
                                        012-345-6789
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

export default HeaderLP
