import React from 'react'
import Image from 'next/image';
import usePopup from '@/app/configs/store/Popup';
// icons 
import { FaPaperPlane } from "react-icons/fa";
// Images 
import logo from "media/images/black-logo.gif";

const Header = () => {
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
            <header className='pb-3 pt-3 fixed top-0 z-[9992] w-full bg-white'>
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="logo w-5/12 md:w-7/12 xl:w-auto">
                            <Image src={logo} alt='Infinity Animations' width={150} className='w-[70%] md:w-[50%] lg:w-[20%]' />
                        </div>
                        <div className='flex items-center gap-x-4 2xl:gap-x-8'>
                            <div className="livechat lg:block hidden">
                                <a href="javascript:$zopim.livechat.window.show();" className='relative text-[#282828] text-[18px] 2xl:text-[20px] font-[700] pl-[17px] font-sans'>
                                    <span className='bg-[#f36e16] w-[8px] h-[8px] absolute left-0 top-0 bottom-0 m-auto rounded-[30px] scale-100 transform_scale'></span>
                                    Live Chat
                                </a>
                            </div>
                            <div className="btn1">
                                <a href="tel:012-345-6789;" className='text-[14px] 2xl:text-[16px] border border-[#f36e16] rounded-[30px] text-[#282828] font-[700] font-sans py-[12px] px-[20px] 2xl:px-[35px] hover:bg-[#f36e16] hover:duration-700 duration-700 ease-in-out hover:text-white'>
                                    +012-345-6789
                                </a>
                            </div>
                            <div className="btn2 lg:block hidden">
                                <button onClick={popupHandle} className='text-[14px] 2xl:text-[16px] rounded-[30px] text-white font-[700] font-sans py-[12px] px-[20px] 2xl:px-[35px] bg-[#f36e16] w-[155px] xl:w-[180px] 2xl:w-[220px] flex items-center gap-x-2'>
                                    <FaPaperPlane className='xl:block hidden' />
                                    Get A Free Quote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header