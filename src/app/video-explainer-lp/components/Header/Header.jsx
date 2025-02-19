import React, { useEffect, useState } from 'react'
import usePopup from '@/app/configs/store/Popup'
import Image from 'next/image'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
//===== Images 
import logo from "media/images/logo.gif";
import Chat from "media/video-explainer/cht-icon.png"
import flag from "media/video-explainer/flag-icon.png"


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
            <header className={`fixed left-0 top-0 py-6 z-50 w-full ${isScrolled ? 'bg-[#003465] shadow-lg' : 'bg-transparent'} ${isScrollDown ? 'pt-4 md:pt-6' : ''}`}>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-4 lg:col-span-4">
                            <div className="logo">
                                <Image src={logo} alt='logo' width={150} className='w-[90%] md:w-[50%] lg:w-[28%]' />
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-8 lg:block hidden">
                            <div className="nav_lists">
                                <ul className='flex items-center justify-end gap-x-2 xl:gap-x-4'>
                                    <li>
                                        <a href="mailto:info@xyz.com" className='flex items-center'>
                                            <EnvelopeIcon className='w-[25px] h-[25px] text-white' />
                                            <span className='text-[13px] text-white py-[10px] px-[8px] font-[600] font-sans tracking-wider'>info@xyz.com</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:$zopim.livechat.window.show();" className='flex items-center text-[15px] text-white font-[600] font-sans bg-black ml-[10px] py-[10px] px-[15px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-xl duration-700 transition-all hover:bg-[#fb0d1c] hover:duration-700 hover:transition-all w-max'>
                                            <Image src={Chat} alt='UK' className='object-contain grayscale-[1] brightness-[100] mr-2' />
                                            Live Chat
                                        </a>
                                    </li>
                                    <li>
                                        <button onClick={popupHandle} className='flex items-center text-[15px] text-white font-[600] font-sans bg-black ml-[10px] py-[10px] px-[15px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-xl duration-700 transition-all hover:bg-[#fb0d1c] hover:duration-700 hover:transition-all w-max'>
                                            Get A Quote
                                        </button>
                                    </li>
                                    <li>
                                        <a href='tel:012-345-6789' className='flex items-center justify-center gap-3 text-[14px] text-white font-[600] font-sans bg-black ml-[10px] py-[10px] px-[15px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-xl duration-700 transition-all hover:bg-[#fb0d1c] hover:duration-700 hover:transition-all'>
                                            <Image src={flag} alt='CA' className='object-contain' />
                                            <span className='text-[14px] text-white font-sans w-max'>
                                                Toll Free: 012-345-6789
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-8 lg:hidden block">
                            <ul>
                                <li>
                                    <a href='tel:012-345-6789' className='flex items-center justify-center gap-2 text-[14px] text-white font-[600] font-sans bg-black ml-[10px] py-[10px] px-[15px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-xl duration-700 transition-all hover:bg-[#fb0d1c] hover:duration-700 hover:transition-all w-max ms-auto'>
                                        <Image src={flag} alt='CA' className='object-contain' />
                                        <span className='text-[13px] md:text-[16px] text-white font-sans w-max'>
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

export default HeaderLP
